import { useEffect, useState } from 'react';
import './styled.css';
import Form from '../../containers/form/Form';
import Table from '../../containers/table/Table';

function Database() {
  
  const book = {
    id: 0,
    title: '',
    autor: '',
    publisher: '',
    publication: '',
    price: 0,
  }

  const [btnCreate, setBtnCreate] = useState(true);
  const [books, setBooks] = useState([]);
  const [objBook, setObjBook] = useState(books);

   useEffect(() =>{
    fetch("http://localhost:8080/")
    .then(back => back.json())
    .then(back_converted => setBooks(back_converted));
  }, []);

  const whenTyping = (event) => {
    setObjBook({...objBook, [event.target.name]:event.target.value});
  }

  const create = () =>{
    fetch('http://localhost:8080/', {
      method: 'post',
      body: JSON.stringify(objBook),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(back => back.json())
    .then(back_converted =>{
      if (back_converted.msg !== undefined) {
        alert(back_converted.msg);
      } else{
        setBooks([...books, back_converted]);
        alert('Successfully registered!')
        cleanForm();
      }
    })
  }

  const alter = () =>{
    fetch('http://localhost:8080/', {
      method: 'put',
      body: JSON.stringify(objBook),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(back => back.json())
    .then(back_converted =>{
      if (back_converted.msg !== undefined) {
        alert(back_converted.msg);
      } else{
        
        alert('Change made successfully!')


    let vectorTemp = [...books];


    let index = vectorTemp.findIndex((p) => {
      return p.id === objBook.id;
    });


    vectorTemp[index] = objBook;

    setBooks(vectorTemp);


        cleanForm();
      }
    })
  }


 const remove = () =>{
  fetch('http://localhost:8080/' + objBook.id, {
    method: 'delete',
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(back => back.json())
  .then(back_converted =>{

    alert(back_converted.msg);


    let vectorTemp = [...books];


    let index = vectorTemp.findIndex((p) => {
      return p.id === objBook.id;
    });


    vectorTemp.splice(index, 1);


    setBooks(vectorTemp);


    cleanForm();
  })
}


  const cleanForm = () =>{
    setObjBook(book);

    setBtnCreate(true);
  }


  const selectBook = (index) =>{
    setObjBook(books[index]);
    setBtnCreate(false);
  }

  return (
    <div>
      <Form button={btnCreate} eventKeyboard={whenTyping} create={create} obj={objBook} cancel={cleanForm} remove={remove} alter={alter}/>
      <Table vector={books} select={selectBook}/>
    </div>
  );
}

export default Database;
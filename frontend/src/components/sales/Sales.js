import { useEffect, useState } from 'react';
import './styled.css';
import FormSales from '../../containers/form/FormSales';
import TableSales from '../../containers/table/TableSales';

function Sales() {
  
  const book = {
    id: 0,
    title: '',
    autor: '',
    publisher: '',
    publication: '',
    price: 0.0
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

  const remove = () =>{
  fetch('http://localhost:8080/' + objBook.id, {
    method: 'delete',
    headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }
  })
  .then(back => back.json())
  .then(() =>{

    alert("Successfully Purchased Book!");


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
      <FormSales button={btnCreate} eventKeyboard={whenTyping} obj={objBook} cancel={cleanForm} remove={remove} />
      <TableSales vector={books} select={selectBook}/>
    </div>
  );
}

export default Sales;
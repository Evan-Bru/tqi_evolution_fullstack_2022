function Form({button, eventKeyboard, create, obj, cancel, remove, alter}) {
    return(
        <form>
            <input type='text' value={obj.title} onChange={eventKeyboard} name='title' placeholder='Title' className='form-control' />
            <input type='text' value={obj.autor} onChange={eventKeyboard} name='autor' placeholder='Autor' className='form-control' />
            <input type='text' value={obj.publisher} onChange={eventKeyboard} name='publisher' placeholder='Publisher' className='form-control' />
            <input type='text' value={obj.publication} onChange={eventKeyboard} name='publication' placeholder='Publication' className='form-control' />
            <input type='text' value={obj.price} onChange={eventKeyboard} name='price' placeholder='Price' className='form-control' />

            {
                button
                ?
                <input type='button' value='Create' onClick={create} className='btn btn-primary' />
                :
                <div>
                    <input type='button' value='Modify' onClick={alter} className='btn btn-warning' />
                    <input type='button' value='Delete' onClick={remove} className='btn btn-danger' />
                    <input type='button' value='Cancel' onClick={cancel} className='btn btn-secondary' />
                </div>
            }

        </form>
    )
}

export default Form;
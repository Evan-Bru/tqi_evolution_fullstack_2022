function Form({button, eventKeyboard, obj, cancel, remove}) {
    return(
        <form>
            <input type='button' value='All' name='All'/>

            {
                button
                ?
                <input type='button' value='Books' className='btn btn-primary' />
                :
                <div>
                    <input type='button' value='Buy' onClick={remove} className='btn btn-danger' />
                    <input type='button' value='Cancel' onClick={cancel} className='btn btn-secondary' />
                    <input type='text' value={obj.name} onChange={eventKeyboard} name='name' placeholder='Name' className='form-control' /> 
                    <input type='text' value={obj.cpf} onChange={eventKeyboard} name='cpf' placeholder='CPF' className='form-control' />
                </div>
            }

        </form>
    )
}

export default Form;
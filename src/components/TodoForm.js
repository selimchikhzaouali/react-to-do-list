import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type='text' placeholder='Add a To do' value={input} name='text' className='todo-input' onChange={handleChange}/>
                <button className='todo-button'>Add</button>
            </form>
        </div>
    )
}

export default TodoForm

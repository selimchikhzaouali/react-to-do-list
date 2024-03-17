import React from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // This code is to remove multiple spaces in the text
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    return (
        <div>
            <h1>What will you be doing today ?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <form onSubmit={addTodoHandler} className="">
            <input
                type="text"
                className="h-[3rem] w-[20rem] px-4 rounded-sm text-black text-lg outline-0"
                placeholder='Add a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' className="h-[3rem] w-[6rem] ml-4 bg-violet-800 font-semibold rounded-sm hover:bg-violet-700">ADD</button>
        </form>
    )
}

export default AddTodo

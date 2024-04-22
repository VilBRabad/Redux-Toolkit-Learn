import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import { IoIosRemoveCircle } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {

  const Todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const [input, setInput] = useState();
  const [id, setId] = useState("");

  const updateTodoFromTodos = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id, input}));
    setIsDisable(true);
    setId("");
  }

  return (
    <div className="w-full text-black flex flex-col gap-2">
      {Todos.map((item) => {
        return (
          <div key={item.id}
            className={`w-full h-[3.5rem] px-4 flex items-center justify-between bg-white rounded-sm hover:drop-shadow-xl`}>
            <form onSubmit={updateTodoFromTodos}>
              <input
                type='text'
                className="h-[2rem] w-[20rem] font-semibold outline-0"
                disabled={isDisable && id===item.id}
                value={isDisable && id!==item.id ? item.text : input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
            <div className={`flex gap-2`}>
              {
                isDisable ?
                  <MdModeEditOutline
                    size={23}
                    className="cursor-pointer"
                    onClick={() => {
                      setIsDisable(false);
                      setInput(item.text);
                      setId(item.id);
                    }}
                  />
                  :
                  <></>
              }
              <IoIosRemoveCircle
                size={23}
                className="cursor-pointer"
                onClick={() => dispatch(removeTodo(item.id))}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Todos

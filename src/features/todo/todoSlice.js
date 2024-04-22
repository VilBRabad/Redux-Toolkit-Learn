import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hellow World"}]
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload //{text likhane ki karaj nahi h}
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action)=>{
            console.log(action.payload);
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            console.log(action.payload)
            for(let i=0; i<state.todos.length; i++){
                if(state.todos[i].id === action.payload.id){
                    state.todos[i].text = action.payload.input
                }
            }
        }
    }
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
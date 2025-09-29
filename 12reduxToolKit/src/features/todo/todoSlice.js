import { createSlice ,nanoid } from "@reduxjs/toolkit";

// nanoid for generating random key ( for arrays and all)

// Step 2

const initialState ={
    todos: [{id:1,text:"Hello World"}]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                ...action.payload // any other property
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            const id=action.payload
            state.todos=state.todos.filter((todo)=> todo.id!==id)
        }
    }
})

// Export Individual Reducers
export const {addTodo,removeTodo} = todoSlice.actions

// Ye action automatically banata hai in RTK

// For store ki awareness ( ye reducer bhi RTK khud deta hai)
export default todoSlice.reducer
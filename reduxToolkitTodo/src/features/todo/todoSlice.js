import  {createSlice , nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos : [{id : 1 , text :"helloworld"}]
   
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) =>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action)=>{
            state.todos=state.todos.filter((todo)=>
            todo.id!==action.payload)
        },
<<<<<<< HEAD
        updateTodo: (state, action) => {
=======
         updateTodo: (state, action) => {
>>>>>>> f16ccd0987b82ce8338a70aee1b8b1c8baca07c5
            const { id, newText } = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
                state.todos[todoIndex].text = newText;
            }
<<<<<<< HEAD
        }
=======
        },
        
>>>>>>> f16ccd0987b82ce8338a70aee1b8b1c8baca07c5
    }

})

<<<<<<< HEAD
export const {addTodo , removeTodo , updateTodo} =todoSlice.actions

export default todoSlice.reducer


=======
export const {addTodo, removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer
>>>>>>> f16ccd0987b82ce8338a70aee1b8b1c8baca07c5

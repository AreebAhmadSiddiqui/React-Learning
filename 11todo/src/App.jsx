import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { useEffect } from 'react'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (
      prevTodo.id === id ? todo : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (
      prevTodo.id !== id ? prevTodo : { ...prevTodo, completed: !prevTodo.completed }
    )))
  }


  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("todos"))

    if (localData && localData.length > 0) {
      setTodos(localData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const todoList = 
    todos.map((todo) => {
      console.log(todo);
    
    return (  <div key={todo.todo} className='w-full'>
        <TodoItem todo={todo} />
      </div>
    )
  })

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todoList}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

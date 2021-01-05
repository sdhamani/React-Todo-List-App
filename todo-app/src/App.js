import React, {useState} from 'react'

import "./App.css"

const App = () => {
  const [todo, settodo] = useState("")

  const [allTodos, setallTodos] = useState([])

  const[editId ,seteditId] = useState(0)
  
  function handleSubmit(e){
    e.preventDefault();

    if(editId)
    {  
      allTodos.map((e) => {
        if(e.id===editId){
          console.log("hello")
          e.todo=todo
        }
      })
      seteditId(0)
      settodo("")
      return;
    }

    if (todo != ""){
      setallTodos([{id: `${todo}-${Date.now()}`,todo},...allTodos])
      settodo("")
    }
    
  }


  function handleDelete(id){
    const newTodo = allTodos.filter((e) => e.id !== id)
    // setallTodos([...newTodo])
    setallTodos(newTodo)
  }

  function handleEdit(id){
    const todoarray = allTodos.filter((t) => t.id ==id )
    settodo(todoarray[0].todo)
    seteditId(id);
  }

  return (
    <div className="App">
      <div className="Container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text"  value={todo} onChange={(e) => settodo(e.target.value)} />
          <button type="submit">{editId? "Edit" : "GO"}</button>
        </form>
        <ul className="allToDo">
          {
            allTodos.map((t) =>(
              <li className="singleTodo">
                <span className="Todotext" key={t.id}>{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App

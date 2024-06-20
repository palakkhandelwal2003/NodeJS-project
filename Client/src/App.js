import React, {useEffect, useState} from "react";
import TodoList from "./components/TodoList";


function App() {
  const [backendData, setbackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
  ).then(
    data => {
      setbackendData(data)
    }
  )
}, [])
 return (

  <div>
    {(typeof backendData.users === 'undefined') ? ( 
      // <p>Server Not connected. Please Check Server...</p>
      <TodoList/>
      
    )
    : (
      backendData.users.map((user,i) => (
        // <TodoList/>
        <p key={i}>{user}</p>
      ))
    )}
  </div>
  )}
 

export default App;

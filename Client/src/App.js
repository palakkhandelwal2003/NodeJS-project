"use client";
import React, {useEffect} from "react";
import TodoList from "./components/TodoList";

//hold the data fetched from the backend Api
function App() {
  // const [backendData, setbackendData] = useState([{}])
  const[backendData, setbackendData]=React.useState([]);
  //useEffect is used to fetch the data from the backend
  useEffect(() => {
    fetch("/api").then(
      response => response.json()//coverting response to JSON format
  ).then(
    data => {
      setbackendData(data)
    }
  )
}, [])
 return (
// rendering
  <div>
   
       {(typeof backendData.users === 'undefined') ? ( 
      // <p>Server Not connected. Please Check Server...</p>
      <TodoList/>
    )//if it is defined it will render a list of usernames inside p elements.
    : (
      backendData.users.map((user,i) => (
        // <TodoList/>
        <p key={i}>{user}</p>
      ))
    )}
  </div>
  )}
 

export default App;

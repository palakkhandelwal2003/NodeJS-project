import React, { useState } from 'react'
import"./TodoList.css";//css import
function TodoList(){
     

    const[inputValue,setInputValue]=useState("");
    //initial value empty h
    const[todos,setTodos]=useState([]);
    //variable jisme add krne se variable store hoga
        function handleInputChange(e){
            setInputValue(e.target.value);
        }
        const handleAddTodos=()=>{
            if(inputValue!==""){
                const newTodo={
                id:Date.now(),//always unique
                text:inputValue,
                completed:false
                };
                



                //array of object having unique property
                setTodos([...todos,newTodo]); 
                //purana array+add new one task+sprea operator
                setInputValue("");
            
            }
        }
        const handleToggleChange=(id)=>{
            console.log(id);
            const updatedTodos=todos.map((todo)=>{
            if(todo.id===id){
                return{...todo,completed:!todo.completed}
            }
            //completed vali property toggle rest will as it is
            return todo;
            })
            setTodos(updatedTodos);
        };
    //use id so unique element p check ho
        const handleRemoveTodo=(id)=>{
            const filteredTodos=todos.filter((todo)=>todo.id!==id);
            console.log(filteredTodos);
            setTodos(filteredTodos);//to remove the element fron UI
        };
    //for delete
    return (
      <div>
      <div className="todo-container">
      <h1>Todo List</h1>
     <div className="todo-input">
     <input type="text" value={inputValue} placeholder='Enter your task'onChange={handleInputChange}
      />
      {/* //when we write smthng function call hoga */}
      <button onClick={handleAddTodos}>Add</button>
     </div>
      <ul className="todo-list">
        {todos.map((todo)=>(
         <li 
         className={`todo-item ${todo.completed == true?"completed":""}`}>
          {/* //using ternary operator */}
          <input type="checkbox" onChange={()=>handleToggleChange(todo.id)}/>
          <span className="todo-text">{todo.text}</span>
          <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
         </li>
        ))}
        {/* //todos k element todo m h */}
      </ul>
      </div>
      </div>
    );
  
}

export default TodoList;
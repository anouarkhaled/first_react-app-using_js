import React, { useState } from 'react';
import './App.css';
import InputField from "./inputFeild"
import { Todo } from './model';
import TodoList from './TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
const App:React.FC=()=> {
  //todo state
  const [todo,setodo]=useState<string>("")
  //todos state
   const [todos,setodos]=useState<Todo[]>([])
   //completed todos state
   const[completedTodos,setcompletedTodos]=useState<Todo[]>([])

   //create the function which is executed in response to the event of submitting
   //in the inputFields 
   
   const handeleAdd=(e:React.FormEvent)=>{e.preventDefault()
    if (todo){//if todo has a value then add it to the todos
      setodos([...todos,{id: Date.now(),todo,isDone:false}])
      setodo("");
    }




   };
   
  return (
    <div className="App">
     <span className='headline'> Taskify</span>
     <InputField  handeleAdd={handeleAdd} todo={todo} setodo={setodo}/>
     <TodoList completedTodos={completedTodos}setcompletedTodos={setcompletedTodos}todos={todos} setodos={setodos} ></TodoList>
 
    </div>
   
  );
}

export default App;

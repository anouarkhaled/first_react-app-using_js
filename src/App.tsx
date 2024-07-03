import React, { useState } from 'react';
import './App.css';
import InputField from "./inputFeild"
import { todo } from './model';

const App:React.FC=()=> {
  const [todo,setodo]=useState<string>("")
   const [todos,setodos]=useState<todo[]>([])
   const handeleAdd=(e:React.FormEvent)=>{e.preventDefault()
    if (todo){
      setodos([...todos,{id: Date.now(),todo,isDone:false}])
      setodo("");
    }


   };
   
  return (
    <div className="App">
     <span className='headline'> Taskify</span>
     <InputField handeleAdd={handeleAdd} todo={todo} setodo={setodo}/>
    </div>
  );
}

export default App;

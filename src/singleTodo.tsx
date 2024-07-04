import React, { useEffect, useState } from "react";
import { Todo } from "./model";
import {AiFillEdit} from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai";
import {MdDone} from "react-icons/md"
import "./todo-style.css"
import { useRef } from "react";
//define a type for the props that comes from the parent element (todolist)
type Props ={
    todo:Todo;
    todos:Todo[];
    setodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props>=({todo,todos,setodos})=>
    { 
        //define the state of edit 
        const [edit,setedit]=useState<boolean>(false);
       //state of todo containe the name of the new  name of the current todo
        //it is changed by seteditodo in the input 
        const [edittodo,seteditodo]=useState<string>(todo.todo);
        //define the inputRef  to reference the input of todo that we want to change 
        const inputRef = useRef<HTMLInputElement>(null)
        //useEffect is called when the state edit is changed 
        // to focus on the input of the todo
        useEffect(()=>{
            inputRef.current?.focus();},[edit])
        //fonction for the react-icon "done"
        const handleDone=(id:number )=>{
            setodos(todos.map((todo)=>todo.id === id? {...todo,isDone: !todo.isDone}:todo))
        }
        //fonction for the react-icon "delete"
        const handleDelete=(id:number )=>{
            setodos(todos.filter((todo)=>todo.id!==id))
        }
        //fonction for the react-icon "done"
         const handelEdite=(e:React.FormEvent,id:number)=>{
                e.preventDefault()
                setodos(todos.map((t)=>(t.id===id?{...t,todo:edittodo}:t) ));
                setedit(false);
        }
        
  
    return(
        <div className="todos__single" onSubmit={(e)=>handelEdite(e,todo.id)}>
         {
         edit?( 
                    <input ref={inputRef}className="" value={edittodo} onChange={(e)=>seteditodo(e.target.value)}/>
         ):(
             todo.isDone?(
                <s className="todos__single__text">{todo.todo}</s>
            ):(
        <span className="todos__single__text"> {todo.todo}</span>
    )
    )}
          <div>
            <span className="icon" onClick={()=>{if (!edit &&!todo.isDone){
                               setedit(!edit)}
            }}> 
                <AiFillEdit/>
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>  <AiFillDelete/></span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>   <MdDone /></span>
          </div>
        </div>
    )

}
export default SingleTodo;


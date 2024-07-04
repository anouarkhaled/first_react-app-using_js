import React from "react"
import { Todo } from "./model"
import SingleTodo from "./singleTodo";
import "./style.css"
//create an interface for the props that comes from the parent component
interface Props{
     todos:Todo[]
     setodos:React.Dispatch<React.SetStateAction<Todo[]>>
     completedTodos:Todo[];
     setcompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props>=({todos,setodos})=>{
 return(
    <div className="container">
      
      <div className="todos">
         <span className="totoHeading">Active tasks</span>
     { (todos.filter((todo)=>todo.isDone!==true)).map((todo)=>(//filtrer 
      <SingleTodo
     setodos={setodos}
      todos={todos} 
      todo={todo}
      key={todo.id}></SingleTodo>))}
      </div>
     <div className="completed__tasks"><span className="completed_tasks">completed__tasks</span>
     { (todos.filter((todo)=>todo.isDone!==false)).map((todo)=>(
      <SingleTodo
     setodos={setodos}
      todos={todos} 
      todo={todo}
      key={todo.id}></SingleTodo>))}
     
     
     </div>
    </div>
 )}
export default TodoList;
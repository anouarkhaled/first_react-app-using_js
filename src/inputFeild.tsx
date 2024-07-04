import React from "react";
import './style.css';
import { useRef } from "react";
//define an interface for the props that comes from the parent component
// which facilates the code
interface Props{
    todo:string;
    setodo:React.Dispatch<React.SetStateAction<string>>;
    handeleAdd:(e:React.FormEvent)=>void;
}

const InputFeild:React.FC<Props> = ({todo,setodo,handeleAdd})=>{
  //define inputref using "useRef" to refrence the input 
  //it is changed by the event of submitting
    const inputRef= useRef<HTMLInputElement>(null);
    return( 
       <form action="input" onSubmit={(e)=>{handeleAdd(e); inputRef.current?.blur()}} className="input">
       
        <input ref={inputRef} type="input" className="input_box" value={todo} onChange={(e)=>setodo(e.target.value) }  placeholder="enter a task"/>
        <button className="input_submit" type="submit">
         Go
       </button>
    

       </form>
    )
}
export default InputFeild;
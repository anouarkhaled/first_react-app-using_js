import React from "react";
import './style.css';
interface Props{
    todo:string;
    setodo:React.Dispatch<React.SetStateAction<string>>;
    handeleAdd:(e:React.FormEvent)=>void;

}

const InputFeild:React.FC<Props> = ({todo,setodo,handeleAdd})=>{
    return( 
       <form action="input" onSubmit={handeleAdd}>
        <input type="text" value={todo} onChange={(e)=>setodo(e.target.value) }className="input_box" placeholder="enter a task"/>
<button className="input_submit" type="submit">
    Go
</button>


       </form>
    )
}
export default InputFeild;
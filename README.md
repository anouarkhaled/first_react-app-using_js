# first_react-app-using_js
to define a new type in typescript we can use either type or interface 
exemple (
   type Person ={
  name:string;
  age?:number|string;
}

interface Person {
  name:string;
  age?:number|string;
}
)
the only difference between them is the extend 

 type x=y&{

}
or interface x extends y


//what is react?

--to build a single page app with react you should first devise the page into components for exemple in our case we  devise the app to an inputField and a Todolist 
--to communicate between components :
              -a parent component  can pass data to  child component throw props 
              -a child component can pass data to parent via callback methods This allows you to execute code in the parent component in response to an event in the child component like event handlers 


when we use "useRef" and "useEffect"?







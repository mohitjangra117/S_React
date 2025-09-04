
    /////////////////////////////   We can use 3 methods for the forms rendering  ///////////

    //// 1 useRef
    //// 2 controlled components
    //// 3 react hook form 


    ///////////////////////////// useRef   //////////////////////////
    //// 1. useRef is a hook that allows you to create a mutable object which holds a `.current` property. This property can be used to store a reference to a DOM element or any other value that you want to persist across renders without causing a re-render when it changes.
    //// 2. It is commonly used to access and interact with DOM elements directly, such as focusing an input field or measuring the size of an element.

    ////  we will create the useRef for the input fields and then we will get the values of the input fields on form submit.
    ////  we will make useREf for every field . 


    // import { useRef } from "react"

    // export default function Form(){
    //     const name=useRef(null);
    //     const age=useRef(null);

    //     const handleSubmit=(event)=>{
    //           event.preventDefault();
    //           console.log(name.current.value , age.current.value);
    //     }

    //     return (
    //         <>
    //         <form onSubmit={handleSubmit} >
    //             <input ref={name} placeholder="name" className="mt-5 ml-5"   />
    //             <input ref={age} placeholder="age" className="mt-5 ml-5"   />
    //             <input type="submit"  />
    //              </form>
    //         </>
    //     )
    // }



    ///////////////////////////// controlled components   //////////////////////////
    //// 1. Controlled components are React components that render form elements and control them by keeping the form data in the component's state.
    ////  The form data is updated via event handlers, and the component re-renders whenever the state changes.



    // import { useRef , useState } from "react"

    // export default function Form(){
    
    //     const [nam , setName]=useState({name:"" , email:""});
    
    //     const handleSubmit=(event)=>{
    //         event.preventDefault();
    //         console.log(nam);
    //     }
        
        
    //     return (
    //         <>
    //     <form onSubmit={handleSubmit} >
    //         <input className="mt-5 ml-5 bg-zinc-200" placeholder="name" type="text" onChange={(event)=>setName({...nam , name:event.target.value})}  />
    //         <input className="mt-5 ml-5 bg-zinc-200" type="text" placeholder="email" onChange={(event)=>setName({...nam , email:event.target.value})}  />
    //         <input type="submit"  />
    //     </form>
    //         </>
    //     )
    // }



    ///////////////////////////// react hook form   //////////////////////////
    //// 1. React Hook Form is a library that simplifies form handling in React applications by providing
    //  a set of hooks and utilities to manage form state, validation, and submission.


    
import { useForm } from "react-hook-form";
    export default function Form(){

        const { register , handleSubmit }=useForm();
        
        return (
            <>
    <form onSubmit={handleSubmit(data=>console.log(data))}  > 
       <input  {...register("name")}    type="text" placeholder="name"  />   
      <input  {...register("email")}  type="text" placeholder="name"  />   
 <input type="submit" />

    </form>
            </>
        )
    }

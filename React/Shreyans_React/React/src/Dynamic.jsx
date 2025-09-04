import React, { use } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Dynamic() {

    const d=useParams();  ////  useParams is a hook that returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> in the route configuration.
   console.log(d.name);  ////  {name: "john"}

   const navigate=useNavigate();  ////  useNavigate is a hook that returns a function that lets you navigate programmatically, i.e. you can use it to navigate to a different route without using the <Link> component. 
//// navigate is used to move to other route . 
   const GoBackHandler=()=>{
     navigate("/user");         ////  below code is also same as this
    //  navigate(-1);  ////  navigate(-1) is used to go back to the previous page in the history stack.
   }

  return (
    <div className="w-1/2 m-auto mt-10 ">
      <h1 className="text-red-200 text-5xl mb-2 "> User Detail  </h1>

     <h1 className="text-3xl mt-2 mb-2 " > {d.name} </h1>

     <button onClick={GoBackHandler}  className="p-1 bg-zinc-400 text-xl mb-1 hover:bg-red-200" > Go Back </button>

    </div>
  );
}

import { useEffect ,  useState } from "react";

export default function Services() {

const [first , setfirst] = useState("This is first");
const [second , setsecond] = useState("This is second");


// useEffect(()=>{
//     console.log("Service is Created");    //// This will run when the component is mounted ( Displayed for the first time )


//     return () => {                      ///// This will run when the component is unmounted ( Removed from the DOM (Display) )
//         console.log("Service is Destroyed");
//     }
// })



/////////////////////////////  Note  ///////////////////////////////////
////  If we pass [] as a second argument to useEffect , then the component will render only once and will not re-render on changng data . 
////  The data and state will change but the component will not re-render. I will only update the data of the component . 



// useEffect(()=>{
//     console.log("Service is Created");    //// This will run when the component is mounted ( Displayed for the first time )


//     return () => {                      ///// This will run when the component is unmounted ( Removed from the DOM (Display) )
//         console.log("Service is Destroyed");
//     }
// } , [] )



///////////////////////////   Note   /////////////////////////////////////
////  If we pass name of the state as a second argument to useEffect , then the component will re-render on changing data of that state . 
////  If we change data of other state , then the component will not re-render .
////  Example : If we pass [second] as second argument to useEffect , then the component will re-render on changing data of second state .
/////  If we change data of first state , then the component will not re-render .


useEffect(()=>{
    console.log("Service is Created");    //// This will run when the component is mounted ( Displayed for the first time )


    return () => {                      ///// This will run when the component is unmounted ( Removed from the DOM (Display) )
        console.log("Service is Destroyed");
    }
} , [second] )



const firstHandler = () => {
    setfirst("First updated , normal data");
}

const secondHandler = () => {
    setsecond("Second updated , large data ");    
}

    return (
        <div>
            <h1 className="ml-10  mt-10 " > {first} </h1>
            <button onClick={firstHandler} className="bg-red-200 p-2 mb-10 mt-5 ml-10 " > Update First  </button>
            <br/> <br/>

            <h1 className="ml-10 mt-5 " >{second}</h1>
            <button onClick={secondHandler} className="bg-red-200 p-2 mb-5 ml-10 " > Update Second  </button>

        </div>
    )

}
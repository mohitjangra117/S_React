/////////////////////////////  Part    15    ////////////////////////

// ////  We need to import ther useState from React before using it.

// import {useState} from "react";

// export default function Count(){

//     // const [state , setState]=useState(initialState);    ////  React Hook setState
    
    
//     let [count , setCount]=useState(0);

//     let update=()=>{
      
//         setCount(count+1);            ////  Give the updating value in setCount // updater function 
//         console.log(count);
//     };

//     return (
// <>
// <h3>{count}</h3>
// <button onClick={update} > Click </button>
// </>
//     );
// }



///////////////////////////////  Part 18   //////////////////////////////////


// ////  We need to import the useState from React before using it.

// import {useState} from "react";

// export default function Count(){

//     // const [state , setState]=useState(initialState);    ////  React Hook setState
    
    
//     let [count , setCount]=useState(0);

//     console.log("Component is re-rendered");

//     let update=()=>{
      
//         // setCount(count+1);            ////  Give the updating value in setCount // updater function 
//         // setCount(count+1);            ////  If we use the setCount multiple times , it will not work as expected because of the asynchronous
//         // setCount(count+1);            ////  we need to use it as callback 
//         // console.log(count);


//         ////  Using the callback in setCount



//         setCount((currCount)=>{
//            return  currCount+1;          ////  we need return statement because the setCount need the value to re render the component      
//         });

//         setCount((currCount)=>{
//             return  currCount+1;          
//          });



//          /////////////    Note    ///////////

//     ////  If the value of the setCount // or updater function does not change then , the react will detect it and 
//     ////  it will not re-render it to save its resources 

// //  example 

// //// comment  the above setCount to see // understand // run this 


// // setCount(25);         ////  uncomment this line only 


// ////  we can see the re-render statement in console window will stop after two times .



//     };

//     return (
// <>
// <h3>{count}</h3>
// <button onClick={update} > Click </button>
// </>
//     );
// }
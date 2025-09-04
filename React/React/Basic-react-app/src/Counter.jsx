/////////////////////////////  Part 28 /////////////////////////////

// import { useState , useEffect } from "react";

// export default function Counter(){
//     let   [count , setCount]=useState(0);

//     let incCount=()=>{
//         setCount(currCount=>currCount+1);
//     }

//     useEffect(function printHello(){
//         console.log("Hello World");
//     });

//     return (
//         <div>
//             <h1>Counter</h1>
//             <h3>{count}</h3>
//             <button onClick={incCount} > +1 </button>
//         </div>
//     )
// }


////////////////////////////  Part 29 /////////////////////////////



import { useState , useEffect } from "react";

export default function Counter(){
    let   [count1 , setCount1]=useState(0);
    let   [count2 , setCount2]=useState(0);

    let incCount1=()=>{
        setCount1(currCount=>currCount+1);
    }


    let incCount2=()=>{
        setCount2(currCount=>currCount+1);
    }
    

    useEffect(function printHello(){
        console.log("Hello World");
    },[count1]);                        // This will run only when count1 changes

    return (
        <>
        <div>
            <h1>Counter1 : </h1>
            <h3>{count1}</h3>
            <button onClick={incCount1} > Count1 +1 </button>
        </div>


        <div>
            <h1>Counter2 : </h1>
            <h3>{count2}</h3>
            <button onClick={incCount2} >Count 2 +1 </button>
        </div>

        </>
    )
}




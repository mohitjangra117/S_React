////////////////////////////////////////////////////

//////////////////   In this code the Joke is not showing on first render.
/////////////////   It is showing only when we click the button.

// import React from 'react';      
// import { useState , useEffect } from "react";    

// export default function Joker(){
// const getNewJoke=async()=>{
//     let res=await fetch("https://api.chucknorris.io/jokes/random");
//     let jsonRes=await res.json();
//     console.log(jsonRes.value);
//     setJoke(jsonRes.value);
// };


// let [joke , setJoke]=useState("");


//     return (
//         <div>
//             <h1>Joke</h1>
//             <h3>{joke}</h3>
           
//             <button onClick={getNewJoke}>Get Joke</button>
//         </div>
//     )
// }




////////////////////////////////////////////////////////////

//////////////////   In this code the Joke is showing on first render.





import React from 'react';      
import { useState , useEffect } from "react";    



export default function Joker(){

    let [joke , setJoke]=useState("");

const getNewJoke=async()=>{
    let res=await fetch("https://api.chucknorris.io/jokes/random");
    let jsonRes=await res.json();
    // console.log(jsonRes.value);
    setJoke(jsonRes.value);
};

useEffect(()=>{ async function getJoke(){
    let res=await fetch("https://api.chucknorris.io/jokes/random");
    let jsonRes=await res.json();
    setJoke(jsonRes.value);
}
getJoke(); // This will run only once when the component is mounted.

 }  ,[] ); // [] means it will run only once when the component is mounted.





    return (
        <div>
            <h1>Joke</h1>
            <h3>{joke}</h3>
           
            <button onClick={getNewJoke}>Get Joke</button>
        </div>
    )
}
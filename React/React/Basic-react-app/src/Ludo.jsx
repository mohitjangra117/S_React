
// ////////////////////////////////  Part  19  ////////////////////////////////////

// import {useState} from "react";

// export default function Ludo(){

//     let [moves,setMoves]=useState({blue:0 , red:0 , yellow:0 , green:0});
// ////  there is moves object which contains the 4 colors and setmoves is used to update it.

// let updateblue=()=>{
 
//     //// we need to send the object by spreading else , react useState doesnot detect the change in the element of the object 
//     // moves.blue+=1;
//     console.log(moves.blue);
//   ////  setMoves({...moves});
// ////  The new value is dependent on the previous value so , we will use callback here .

// setMoves((prev)=>{       ////   Here prev is the latest state of moves object and it automatically knows we have passed it . ( React feature )
//     return {...prev , blue:prev.blue+1 };  ////  we need to give updated blue.
// })

// };

// ///////////////  create same for other colors also.

// let updatered=()=>{
//     setMoves((prev)=>{
//        return {...prev , red:prev.red+1};
//     })};

// let updateyellow=()=>{
//         setMoves((prev)=>{
//            return {...prev , yellow:prev.yellow+1};
//         })};

//         let updategreen=()=>{
//             setMoves((prev)=>{
//                return {...prev , green:prev.green+1};
//             })};



//     return (
// <div>
// <h2>Game Begins</h2>

// <div className="board"  >
// <p>Blue moves={moves.blue}</p>
// <button onClick={updateblue} style={{backgroundColor:"blue"}} >+1</button>

// <p>Red moves={moves.red}</p>
// <button onClick={updatered} style={{backgroundColor:"red"}} >+1</button>

// <p>Yellow moves={moves.yellow}</p>
// <button onClick={updateyellow}  style={{backgroundColor:"yellow"}} >+1</button>

// <p>Green moves={moves.green}</p>
// <button onClick={updategreen} style={{backgroundColor:"green "}} >+1</button>
// </div>
// </div>
//     );
// }




//////////////////////////   Part  20   ///////////////////////////////////



import {useState} from "react";

export default function Ludo(){

    let [moves,setMoves]=useState({blue:0 , red:0 , yellow:0 , green:0});
    let [arr, SetArr]=useState(["no moves"]);    //  we will create a array of strings 





let updateblue=()=>{


    ///////////////////////   Array    //////////////////


// arr.push("blue moves");   
// SetArr(arr);
// console.log(arr);

 ////  Container will not render using this because if we change the element of the array the react/usestate 
 //// will not detect any change , so we need to spread the array to detect the change in state .  


 ////  use this spread method 

 /////   SetArr([...arr , "blue moves"]);  
 
 ////  callback method 

 SetArr((prev)=>{
    return [...arr , "blue moves"];
 });
 
console.log(arr);


};


    return (
<div>
<h2>Game Begins</h2>

<h2>Moves= {arr}</h2>

<div className="board"  >
<p>Blue moves={moves.blue}</p>
<button onClick={updateblue} style={{backgroundColor:"blue"}} >+1</button>

<p>Red moves={moves.red}</p>
<button style={{backgroundColor:"red"}} >+1</button>

<p>Yellow moves={moves.yellow}</p>
<button   style={{backgroundColor:"yellow"}} >+1</button>

<p>Green moves={moves.green}</p>
<button  style={{backgroundColor:"green "}} >+1</button>
</div>
</div>
    );
}
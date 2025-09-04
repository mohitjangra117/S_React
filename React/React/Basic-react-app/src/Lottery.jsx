
/////////////////////  Part  22  //////////////////////////////
////  Lottery game 

//// 1. We are given Lottery tickets with a 3 digit number 
//// 2. The number is generated randomly .
//// 3. If the sum of all digits is 15 , we win the Lottery and get the prize .

////////  helper.js   //////////////////
//// we will create a helper function to get random number for the lottery ticket 

////  We will use props , state and events here 

////  We will create a Array of size 3 and store random numbers in it .  


/////////////   This is  basic game , later we add custom variables  to it ./////////////////////

// import { useState } from "react";
// import "./Lottery.css";
// import { genTicket , sum } from "./helper";



// export default function Lottery(){

//     let [ticket , setTicket]=useState(genTicket(3));
//     let isWinnning = sum(ticket)===15;

//     let buyTicket =()=>{
//         setTicket(genTicket(3));
//     }

//     return (
//         <div>
//         <h1>Lottery Game </h1>
//         <div className="ticket">
//             <span>{ticket[0]}</span>
//             <span>{ticket[1]}</span>
//             <span>{ticket[2]}</span>
//         </div>
//         <button onClick={buyTicket} >Buy New Ticket </button>
//         <h3> {isWinnning && "Congratulations , you win " } </h3>
//         </div>
//     )
// }





////////////////////////////      Part 23  //////////////////////////

////////////////// Making lottery game Advance with custom values  /////////////////////

//// 1. Make the Lottery tickets of n digit number  
//// 2. The winning sum could be any feasible number 

//// TicketNum.jsx
//// Ticket.jsx

// import { useState } from "react";
// import "./Lottery.css";
// import { genTicket , sum } from "./helper";
// import Ticket from "./Ticket";

// export default function Lottery({n=4 , winningSum}){

//     let [ticket , setTicket]=useState(genTicket(n));
//     let isWinnning = sum(ticket)==winningSum ;

//     let buyTicket =()=>{
//         setTicket(genTicket(n));
//     }

//     return (
//         <div>
//         <h1>Lottery Game </h1>
//         <Ticket ticket={ticket} />
//         <button onClick={buyTicket} >Buy New Ticket </button>
//         <h3> {isWinnning && "Congratulations , you win " } </h3>
//         </div>
//     )
// }



/////////////////////// Part 24   ///////////////////////
// Functions as props
// 1. We will pass function as props to child component
// 2. We will use it to update the state of parent component from child component     

// We can now change the condition of winning ticket by changing the  winCondition function .
 
// TicketNum.jsx
// Ticket.jsx

import { useState } from "react";
import "./Lottery.css";
import { genTicket , sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=4 , winCondition}){

    let [ticket , setTicket]=useState(genTicket(n));
    let isWinnning = winCondition(ticket) ;

    let buyTicket =()=>{
        setTicket(genTicket(n));
    }

    return (
        <div>
        <h1>Lottery Game </h1>
        <Ticket ticket={ticket} />
        <button onClick={buyTicket} >Buy New Ticket </button>
        <h3> {isWinnning && "Congratulations , you win " } </h3>
        </div>
    )
}





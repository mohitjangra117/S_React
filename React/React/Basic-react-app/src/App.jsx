//    Execution of File start from the main.jsx 
// Import different components from other files
//We can export single component using export default App;
//  To use multiplpe components , close them in a single div  or <>  and return 



//////////////////////   Part   1  ///////////////////////////


// import "./App.css"                //  importing css 


// function Title(){
//   return (
// <h1>Hello World</h1>
//   );
// }

//  function App(){
//   return (
//     <div>
//   <h1>Hello </h1>
//   <Title />
//   </div>
//   )
// }


// export default App;




////////////////////////////  Part  2   ////////////////////////////////////////
//////////////////   Import    and  export   /////////////////////

//   export default Tilte  /// for single component 
//  named export from multiple components import  and export 
//  Also to import components with specific names 

//   export { Title }
//  import { Title } from "./Title.jsx"     ./  is very  important without it will show error


// import "./App.css";                //  importing css 
// import Title from "./Title.jsx";

//  function App(){
//   return (
//     <div>
//   <h1>Hello </h1>
//   <Title />
//   </div>
//   );
// }


// export default App;





/////////////////////////////////   Part   3   ////////////////////////////////

////  Writing Markup in jsx 
// 1  Return a single root element
// 2  Close all tags 
// 3  camelCase most of the things


///////   React Fragment  /////////
//// Fragments let youo group a list of children without adding extra nodes to the DOM
////    <>  Components  </>   instead of <div> components  </div>


////////////////   JSX  with  Curly Braces   //////////////
////  We can write javascript inside the jsx file inside the curley braces   { Javascript   }



// import "./App.css";                //  importing css 
// import Title from "./Title.jsx";

//  function App(){
//   let name="ABCD";       ////  we will print this using curly braces {}
//   return (
//     <div>
//   <h1> The result of 2 + 2 is : {2+2} </h1>
//   <h2> {name} </h2>   
//   <h2> {name.toLowerCase()} </h2>   
//   <Title />
//   </div>
//   );
// }


// export default App;





/////////////////////////////  Part  4     ////////////////////////////////////


/////  Structuring  Components --->  How to write structured code 
////  code changed in Title.jsx  
////  create new Product.jsx and create three Title inside it instead of using then in this file three times .


// import "./App.css";                //  importing css 
// import Product from "./Product.jsx";

//  function App(){
//   return (
//     <div>
//   <Product/>
//   </div>
//   );
// }


// export default App;




////////////////////////////////////  Part  5   /////////////////////////////////////////
////   Style Components   Same as the normal HTML AND CSS 
////   use className instead of class 
////   create a new css file product.css



// import "./App.css";                //  importing css
// import "./product.css"        //  Filename can be lower or upper case . It is not case sensitive 
// import Product from "./Product.jsx";

//  function App(){
//   return (
//     <div className="pro"  >
//   <Product/>
//   </div>
//   );
// }

// export default App;






///////////////////////////////////    Part  6  ///////////////////////////////////////
////   React Props  used as  objects with .  and   used in Title.jsx file
//// Props are the information that you pass to a JSX tag.
////   <Product title="phone" price="30k" />  
////  Take this value in parentheseis in the component function just like function argument and use this 
////  in component using  { props // any name  }
////  To pass string use double quotes " 20 "  and to pass numbers pass in curley braces { 20 }

// import "./App.css";              
// import Title  from "./Title.jsx";

//  function App(){
//   return (
//     <div  >
//   <Title   title="Phone" price={20000}  />
//   <Title   title="Laptop" price="50k"  />
//   </div>
//   );
// }

// export default App;




/////////////////////////////////  Part  7   /////////////////////////////
//// Passing Arrays and objects to Props   used Title.jsx
////  create an array and pass it as  features = { array name  }
//////////  imp  /////////////////////
//// Use ? if object key value is not defined then it will show error , but if we use {features2?.b} it will not show error  




// import "./App.css";              
// import Title  from "./Title.jsx";

//  function App(){
//   let features1 =["Durable" , "High speed " , "IP68"];       //   Array
//   let features2={a: "Durable1" , b: "IP64" , c: "Metal Body"};   //  Object
//   return (
//     <div  >
//   <Title   title="Phone" price={20000} features1={features1} features2={features2} />   
//   <Title   title="Phone" price={20000} features1={features1} features2={{a:"Metal Body"}} />   
//   <Title   title="Laptop" price="50k"  />
//   </div>
//   );
// }

// export default App;








/////////////////////////////  Part 8   //////////////////////////////////
//// Rendering   Arrays


// import "./App.css";              
// import Title  from "./Title.jsx";

//  function App(){
//   // let features1 =[<li>"Durable"</li> , "High speed " , "IP68"];       //   Array
//   let features1 =["Durable" , "High speed " , "IP68"];       //   Array

//   return (
//     <div  >
//   <Title   title="Phone" price={20000} features1={features1} />   
//   <Title   title="Phone" price={20000} features1={features1}  />   
//   <Title   title="Laptop" price="50k"   />
//   </div>
//   );
// }

// export default App;




///////////////////////////////////   Part  9  ////////////////////////////////////
////   conditionals 
////    Adding Elements on the basis of some conditions .



// import "./App.css";              
// import Title  from "./Title.jsx";

//  function App(){
//   // let features1 =[<li>"Durable"</li> , "High speed " , "IP68"];       //   Array
//   let features1 =["Durable" , "High speed " , "IP68"];       //   Array

//   return (
//     <div  >
//   <Title   title="Phone" price={20000} features1={features1} />   
//   <Title   title="Phone" price={25000} features1={features1}  />   
//   <Title   title="Laptop" price="50k"   />
//   </div>
//   );
// }

// export default App;





/////////////////////////////////////  Part  10  ////////////////////////////////////
////  Dynamic Component Styling 


// import "./App.css";              
// import Title  from "./Title.jsx";

//  function App(){
//   // let features1 =[<li>"Durable"</li> , "High speed " , "IP68"];       //   Array
//   let features1 =["Durable" , "High speed " , "IP68"];       //   Array

//   return (
//     <div  >
//   <Title   title="Phone" price={20000} features1={features1} />   
//   <Title   title="Phone" price={25000} features1={features1}  />   
//   <Title   title="Laptop" price="50k"   />
//   </div>
//   );
// }

// export default App;





///////////////////////////////////    Part  11   /////////////////////////////////////////
////  Events in React 


////  Handling Click Events 
////   Button.jsx


// import "./App.css"; 
// import Button from "./Button.jsx";

// function App(){
//     return(
// <>
// <h1>Hello</h1>
// <Button></Button>
// </>
//     );

// }

// export default App;




////////////////////////////////  Part 12    /////////////////////////////
//// Handling Non-Click Events 

//// Hover.jsx

// import "./App.css"; 
// import Hover from "./Hover.jsx";

// function App(){
//     return(
// <>
// <h1>Hello</h1>
// <Hover></Hover>
// </>
//     );

// }

// export default App;



//////////////////////////////  Part  13  ////////////////////////////////
//// Event Object 
//// We can access the Event Object in Handler 

////  Button.jsx

// import "./App.css"; 
// import Button from "./Button.jsx";

// function App(){
//     return(
// <>
// <h1>Hello</h1>
// <Button></Button>
// </>
//     );

// }

// export default App;




///////////////////////   Part   14   ////////////////////////////////
////   Basic  Forms 

//// Form.jsx


// import "./App.css"; 
// import Form from "./Form.jsx";

// function App(){
//     return(
// <>
// <h1>Hello</h1>
// <Form></Form>
// </>
//     );

// }

// export default App;




////////////////////////////////  Part   15   //////////////////////
////   State in  React 

////  The state is a built in React object that is used to contain data or information about the component.
//// A component's state can change over time , whenever it changes, the component re-renders. 

////  we need Hooks to re render the comonent 

////  Normal Function will not re render the component 

////  There are 15 Hooks in react , and we will use the 
//// useState()   hooks for change in state 

//// Syntax   
////     const [state , setState]=useState(initialState);

////  It will return an array with two elements . one is the state variable and other is the setState function or updater function .


////  We will create a count component using the concept of states in react .

//// Count.jsx
////  We need to import ther useState from React before using it.
////  import {useState} from "react";


// import "./App.css";
// import Count from "./Count.jsx";

// function App(){

//     return(
//         <>
//         <Count></Count>
//         </>
//     );

// }

// export default App;





///////////////////////////////////////  Part 16   //////////////////////////////
////    Activity  ---->  Create a Like button 




///////////////////////////////////////  Part 17   //////////////////////////////

////   closure
////   A closure is a feature in javascript where an inner function has access to the outer (enclosing) function's variables.

//// ex 



// function outer(){


//     let b =10;
//     function inner(){
//         let  a =20;
//         console.log(a+b);
//     }

// return inner;

// }




////  if we call the inner function then the outer variable b will be accessible to the inner function without calling the outer function 
////  and will not show error. 





///////////////////////////////////////  Part 18   //////////////////////////////

////   Using callback in the useSate() / updater function   
////   count.jsx



// import "./App.css";
// import Count from "./Count.jsx";

// function App(){

//     return(
//         <>
//         <Count></Count>
//         </>
//     );

// }

// export default App;




////////////////////////////////   Part  19   //////////////////////////
////  object and state 
////   We create a object for state when we need to update multiple variables
////  Ex  in ludo game we need to update 4 players moves  
////  Ludo.jsx

// import "./App.css";
// import Ludo from "./Ludo.jsx";

// function App(){
//     return(
//   <>
//   <Ludo/>
//   </>
//     );
// }

// export default App;



///////////////////////////////  Part  20  ////////////////////////////////
////   Arrays and state
////   similar as objec and state
////  Ludo.jsx

// import "./App.css";
// import Ludo from "./Ludo.jsx";

// function App(){
//     return(
//   <>
//   <Ludo/>
//   </>
//     );
// }

// export default App;



////////////////////////////  Part   21   //////////////////////////////////////
////  create a TODO
//// Todo.jsx 


// import "./App.css";
// import Todo from "./Todo.jsx";

// function App(){
//     return (
// <>
// <Todo/>
// </>
//     );
// }


// export default App;



////////////////////////////  Part   22   //////////////////////////////////////
////   Lottery Game 
////   Lottery.jsx


// import "./App.css";
// import Lottery from "./Lottery.jsx";

// function App(){
//     return (
// <>
// <Lottery n={3} winningSum={15}  />
// </>
//     );
// }


// export default App;




////////////////////////////  Part   23   //////////////////////////////////////
////   Functions as Props
////   We can pass functions as props to other components and use them in the child component.
////   Lottery.jsx


// import "./App.css";
// import Lottery from "./Lottery.jsx";
// import {sum} from "./helper.js";
// function App(){
//     let winCondition = (ticket)=>{
//         return sum(ticket)==15;
//     }     
//     return (
// <>
// <Lottery n={3} winCondition={winCondition}  />
// </>
//     );
// }


// export default App;



///////////////////////// Part 23   ///////////////////////
//// Functions as props

////  Change Winning condition ( win if all tickets are same )

////   Lottery.jsx


// import "./App.css";
// import Lottery from "./Lottery.jsx";
// import {sum} from "./helper.js";
// function App(){
//     let winCondition = (ticket)=>{
//         return ticket.every((num)=>num===ticket[0]);
//     }     
//     return (
// <>
// <Lottery n={2} winCondition={winCondition}  />
// </>
//     );
// }


// export default App;

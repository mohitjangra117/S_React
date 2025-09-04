//////////////////////////  Part 1 //////////////////////////
////  Card.jsx

// import { useState } from 'react'
// import './App.css'
// import Card from './Card'
// function App() {

//   return (
//     <>
//      <div  >
// <h1 className='bg-red-400' >Hello</h1>
// <Card/>
//      </div>
//     </>
//   )
// }

// export default App

//////////////////////////  Part 2 //////////////////////////
////  useState 
////   Use.jsx

// import { useState } from 'react';
// import './App.css'
// import User from './User.jsx';
// function App() {

//   return (
//     <>

// <User/>
//     </>
//   )
// }

// export default App



//////////////////////////  Part 3 //////////////////////////
////  useState 
////  Array in State
////  Array.jsx


// import './App.css'
// import Array from './Array'
// function App() {



//   return (
//     <>

// <Array/>

//     </>
//   )
// }

// export default App;



//////////////////////////  Part 4 //////////////////////////
////  creating sliding card using useState
////  Cards.jsx


// import './App.css'
// import Cards from './Cards'
// function App() {

//   return (
//     <>
// <Cards/>

//     </>
//   )
// }

// export default App;


//////////////////////////  Part 5 //////////////////////////
//// React props 
//// Props.jsx

import { useState } from 'react'
import './App.css'
import Props from './Props.jsx'
function App() {

  const data=[
    {name:"John Doe", image:"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" , friends:false},
    {name:"Kartik", image:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" , friends:false },
    {name:"Nipun" , image:"https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg" , friends:false },
    {name:"Anikesh" , image:"https://bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg" , friends:false }
  ];


  const [realdata , setRealdata] = useState(data);

  const handleFriendsButton = (ind)=>{
    setRealdata((previous)=>{
      return  previous.map((item , index)=>{
        if(index===ind){   
          return  {...item , friends:!item.friends}
        }
        return item;
      })
    })
  }


  return (
    <div className='w-full h-screen bg-zinc-200 flex gap-10 justify-center items-center'>

{realdata.map((item , index)=>(
  
  <Props key={index} index={index} handleClick={handleFriendsButton} values={item}   />
))}

    </div>
  )
}

export default App;


//////////////////////////  Part 6 //////////////////////////
//// React props practice 
////  CardP.jsx

// import { useState } from 'react'
// import './App.css'
// import CardP from './CardP.jsx';
// function App() {

//   const data=[
//     {name:"John Doe", image:"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" , friends:false},
//     {name:"Kartik", image:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" , friends:false },
//     {name:"Nipun" , image:"https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg" , friends:false },
//     {name:"Anikesh" , image:"https://bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg" , friends:false }
//   ];

//   const [user , setUser]=useState(data);

  
//   const handleFriendClick=(CurrIndex)=>{
//     setUser((previous)=>{
//       return previous.map((item , index)=>{
//              if(CurrIndex===index){
//               return {...item , friends:!item.friends}
//              }
//              else return item;
       
//       })
//     })
//   }

// return(
//   <div className='w-full h-screen flex gap-10 relative justify-center items-center'>
//             {user.map((el , index)=><CardP  key={index} index={index} handlefriend={handleFriendClick}  val={el}  />)}   
//   </div>

// )}

// export default App;


//////////////////////////////////  Part  7  ///////////////////////////
//// React forms 
//// Form.jsx

// import Form from "./Form";

// function App(){
//   return(
//     <>
// <Form/>
//     </>
//   )
// }

// export default App;



///////////////////////////  Part 9 //////////////////////////
////  React Dynamic  Routing 
////  Router.jsx

// import Router from "./Router.jsx";

// function App(){
//   return(
//     <>
// <Router/>
//     </>
//   )
// }

// export default App;




///////////////////////////  Part 10  //////////////////////////
////  React  Routing 
////  Router.jsx

// import Router from "./Router.jsx";

// function App(){
//   return(
//     <>
// <Router/>
//     </>
//   )
// }

// export default App;



///////////////////////////  Part 11  //////////////////////////
////  API  Integration
////  API.jsx

// import Api from "./Api";

// function App(){
//   return(
//     <>
// <Api/>
//     </>
//   )
// }

// export default App;


///////////////////////////  Part 12  //////////////////////////
////   useEffect()
////    Services.jsx

// import Services from "./Services";

// function App(){
//   return(
//     <>
// <Services/>
//     </>
//   )
// }

// export default App;


///////////////////////////  Part 13  //////////////////////////
////  API  Integration and initial data when page load using useEffect() and without clicking button . 
////  API.jsx

// import Api from "./Api";

// function App(){
//   return(
//     <>
// <Api/>
//     </>
//   )
// }

// export default App;


//////////////////////////////  Part 14  //////////////////////////
////   React Context API
////   Context.jsx
////   Wrap the main with <Context>
////  We will create a context and use it in the component to pass data to child components without prop drilling.
////  In simple words we  can create a file with the data and use it in all components without passing it as props.


// import {Link , Routes , Route } from 'react-router-dom';
// import Home from "./context/Home";
// import About from "./context/About";
// import User from './context/User';
// import Userdetails from './context/Userdetails';

// function App(){
//   return(
//     <div className='p-1 container bg-red-200 m-auto' >
//       <nav className='mt-10 flex justify-center gap-10' >

// <Link to ="/about" className='text-2xl text-red-600' > About </Link>
// <Link to ="/" className='text-2xl text-red-600' > Home </Link>
// <Link to ="/user" className='text-2xl text-red-600' > User </Link>

//       </nav>

//       <Routes>

// <Route path="/"  element={<Home/>} />

// <Route path="/user" element={<User/>}  > 

// <Route path="/user/:id" element={<Userdetails/>}  /> 

//   </Route>

// <Route path="/about" element={<About/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App;


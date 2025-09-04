
///////////////  Part   6 and below   ////////////////////////

// function Title(props){
//     console.log(props.title);
//     return (
//         <>
// <h1>Title : {props.title}</h1>
// <h3>Price : {props.price*2}</h3>
//     </>
//     );
// }


// export default Title;




//////////////////////////       Part 7  //////////////////////
//// Use ? if object key value is not defined then it will show error , but if we use {features2?.b} it will not show error  
//// same for   <h4>Features: {features1?.[1]} </h4>

// function Title({ title , price , features1 , features2 }){
// console.log(features2);
//     return (
//         <>
// <h1>Title : {title}</h1>
// <h3>Price : {price*2}</h3>
// <h4>Features: {features1?.[1]} </h4> 
// <h4>Features: {features2?.b} </h4>
//     </>
//     );
// }


// export default Title;




//////////////////   Part   8 ///////////////////


// function Title({ title , price , features1  }){
// //   const list=features1.map((feature)=><li>{feature}</li>);
//   const list=(features1 || []).map((feature)=><li>{feature}</li>);     //  if array is not passed then handle condition with || []

//         return (
//             <>
//     <h1>Title : {title}</h1>
//     <h3>Price : {price*2}</h3>
//     <ul>{list} </ul> 

//         </>
//         );
//     }
    
    
//     export default Title;



/////////////////////////////////////   Part  9   /////////////////////////////////
////  conditionals


// ////////////  Method 1 /////////////

// function Title({ title , price , features1  }){

// if(price>20000){
//         return (
//             <>
//     <h1>Title : {title}</h1>
//     <h3>Price : {price}</h3>
//     <p>Discount of 5%</p>

//         </>
//         );
//     }

//     else{
//         return (
//             <>
//     <h1>Title : {title}</h1>
//     <h3>Price : {price}</h3>

//         </>
//         );  
//     }

// }
    
    
//     export default Title;





// ////////////  Method 2 /////////////

// function Title({ title , price , features1  }){

//   let isDiscount = price>20000 ? "Discount of 5%" : "";
//             return (
//                 <>
//         <h1>Title : {title}</h1>
//         <h3>Price : {price}</h3>
//         <p>{isDiscount}</p>
    
//             </>
//             );
//         }
    
        
//         export default Title;





// ////////////  Method 3 /////////////

// function Title({ title , price , features1  }){

//               return (
//                   <>
//           <h1>Title : {title}</h1>
//           <h3>Price : {price}</h3>
//           <p>{price>20000 ? "Discount of 5%" : ""}</p>
      
//               </>
//               );
//           }
      
          
//           export default Title;





// ////////////  Method 4 /////////////

// function Title({ title , price , features1  }){

//     return (
//         <>
// <h1>Title : {title}</h1>
// <h3>Price : {price}</h3>
// {price>20000 && <p> "Discount of 5%" </p>}       
// {/* if first condition true then only print */}
//     </>
//     );
// }


// export default Title;




///////////////////////////////  Part 10  //////////////////////
////   Dynamic component styling 


// function Title({ title , price , features1  }){
// // let styles={backgroundColor:"lime"};
// let styles={backgroundColor:price>20000 ? "lime" : ""};          //  Based on condition 
//     return (
//         <div style={styles}>
// <h1>Title : {title}</h1>
// <h3>Price : {price}</h3>
// {price>20000 && <p> "Discount of 5%" </p>}       
// {/* if first condition true then only print */}
//     </div>
//     );
// }


// export default Title;






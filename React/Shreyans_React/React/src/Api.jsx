// import axios from 'axios';
import axios from "./utils/Axios"; // Importing the custom axios instance
import { useEffect, useState } from 'react';


export default function Api() {

    // let url ="https://fakestoreapi.com/products";


    


////////////////////////////////  Note ////////////////////////////
////   We will create a axios component to import axios for different components from a single source .
////   This will help in session management and we can use the same axios instance for all components.
////   We will create a Axios.js in utils folder and import it in all components.
////  we wii define the base url in the axios instance and we can use it in all components.
////   "https://fakestoreapi.com/"
////  We will use only the route path in the component and axios will take care of the base url.

    let url ="/products";



    const [products , setproducts] = useState([]);
     

////  Get Products


const getProducts=async()=>{
   let abc =  await axios.get(url);
  console.log(abc.data);
  setproducts(abc.data);

//   for (let i in abc.data){
//     console.log(abc.data[i].title);
//   }
};


///////// using then and catch 

// const getProducts=()=>{
//     axios.get(url).then((res)=>{
//            console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

////  Add Products   
////  We will use axios.post and pass data in second parameter {}  

const addProducts=async(req,res)=>{
   let abc =  await axios.post(url , {
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"
}
);

console.log(abc);

};



useEffect(()=>{
    getProducts();
},[])


  // console.log(first);
  // console.log(second);
  // console.log("Service is Created");
  // console.log("Service is Destroyed");
  // console.log(firstHandler);
  // console.log(secondHandler);
  // console.log("Service is Created");
  // console.log("Service is Destroyed");
  // console.log(firstHandler);
  // console.log(secondHandler);

 
console.log(products);

  return (
   <div>
<button onClick={getProducts} className='bg-zinc-400 text-2xl mt-10 ml-20 '   > Get Data </button>
<button onClick={addProducts} className='bg-zinc-400 text-2xl mt-10 mb-10 ml-20 '   > Add Data </button>
<hr/>
<ul>
  {products.length>0?products.map(p=><li key={p.id} className='rounded  mb-2 p-5 bg-red-200' > {p.title} </li>):<h1>Loading.....</h1>}

</ul>
</div>
  )
}



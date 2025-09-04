function genTicket(n){
    let arr=new Array(n);
    for (let i =0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}


function sum(arr){
    
    return arr.reduce((sum,curr)=>sum+curr,0);
}

export {genTicket , sum };






//////// reduce =>reduce() is a method that reduces an array to a single value by applying a function to 
//// each element (from left to right).

//// example 

// const total = numbers.reduce((acc, num) => {
//     return acc + num;
//   }, 0);
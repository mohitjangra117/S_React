////////////////////////////////  Part 21  //////////////////////////
////  (a)  Todo
////  (b) Unique key for list items  ////  Every list item must have unique key in React ( To access them while deleting or updating )
////  (c)  Deleting from Arrays
////  For unique keys we will use UUID  
import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";

export default function Todo(){

    /////////// Flow  //////////////
    ////  1 . We will get the value of input using newTodo
    ////  2. Then we add this value to the todos array and print it.
    ////  3. We will convert the todos from array to object because we will give each list item a unique id .
    ////  4. We will create a object with task and id.
    ////  5. Deleting Task from Arrays 
    ////  6. Note --->>  Always use filter to delete from array or object in React . ////  Read the documentation to know when to use Map , filter . 
    ////  7. Updating in Arrays ////  Updating the Task. 
    ////  8. Changing Todo --->>>  Implement Done Task 
    ////  9. We will add a new key value pair in our state object ( isDone : true/false ) toggle to change

    ////   let [todos , settodos]=useState(["Sample Task"]);   ////  To add the value of input that we get using newTodo

   let [todos , settodos]=useState([{task:"Sample task" , id:uuidv4() , isDone:false}]);   ////  To add the value of input that we get using newTodo

let [newTodo ,  setnewTodo]=useState("");  ////  To get the value of input

let addNewTask = ()=>{
    settodos([...todos , {task:newTodo , id:uuidv4() , isDone:false}]);
    setnewTodo("");    ////  reset the value of input field after adding the task

}


let updateTodoValue = (event)=>{        ////  Used to get the value of every character we typed in input field 
    setnewTodo(event.target.value);
}



//////////////////////////////////////////  Deleting Tasks /////////////////////////////////////////////////
////  We need to pass the id of the task to be deleted , but if we pass it in onClick function as argument it will be 
////  wexecuted but we need to execute it when clicked . // deleteTodo(todo.id) 





let deleteTodo=(id)=>{
    
    // let copy=todos.filter((todo)=>todo.id !=id);  ////  All the elements of arry will be added to copy array not equal to id .
    // console.log(copy);

    settodos((prev)=>todos.filter((prev)=>prev.id !=id));

}

//////////////////////////////  updating All Tasks    ///////////////////////////////////

let upperCaseAll =()=>{
    
//     settodos(todos.map((todo)=>{
//     return{
//         ...todo,                    //// copies both task and id . if not used ony task will be added as used in next
//         task:todo.task.toUpperCase(),
//     };

// }));


//// callback

settodos((prev) =>
    prev.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
    }))
);
}


//////////////////////////////  updating One Task    ///////////////////////////////////


let upperCaseOne=(id)=>{

    settodos((todos)=>
    todos.map((todo)=>{
        if(todo.id==id){
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
        }else{
            return todo;
        }
    }));
};

///////////////////////  Mark as Done  /////////////////////////////
////////////// one //////////////
let markAsDone=(id)=>{

    settodos((prev)=>
    prev.map((todo)=>{
        if(todo.id==id){
            return{
                ...todo,
                isDone:true,
            };
        }else{
            return todo;
        }
    }));
};


///////////////////  Marks as Done All   //////////////////////////
let markAsDoneAll =()=>{
settodos((prev) =>
    prev.map((todo) => ({
        ...todo,
        isDone:true,
    }))
);
}





    return(
<div>
<h2>Todo List</h2>

<input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}  ></input> 
<br></br>
<br></br>
<button onClick={addNewTask} >Add Task</button>
<br></br>
<br></br>
<br></br>
<hr></hr>
<h3>Tasks Todo</h3>

<ul>

{todos.map((todo)=>(
    <li key={todo.id}>
    <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}} >    
        {todo.task}
        </span>
     {/* <button onClick={deleteTodo(todo.id)} >Delete</button>  //// It will be executed so we use below code  */}
     <button onClick={()=>deleteTodo(todo.id)} >Delete</button>
     {/* <button onClick={()=>upperCaseOne(todo.id)} >Update</button> */}
     <button onClick={()=>markAsDone(todo.id)} >Done</button>
    </li>
))}
</ul>
<br></br>
<button onClick={markAsDoneAll} >Done All</button>

</div>
    );
}


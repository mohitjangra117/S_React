import React , {useContext} from 'react';
import { UserContext } from '../Context';
import { useNavigate, useParams } from 'react-router-dom';

export default function Userdetails(){

const {id}=useParams();
const navigate=useNavigate();

    const {users}=useContext(UserContext);
    
    console.log(users[id]);
    return (

        <div >

<h1 className='text-4xl font-bold text-red-600' >

     {users[id].name} </h1>

     <h3 className='text-red-500  '  >    {users[id].age}    </h3>


<button onClick={()=>navigate(-1)} className='rounded mt-5 bg-red-100 p-2'  > Go Back   </button>

        </div>
    )
}
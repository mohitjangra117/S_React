import React, { useState } from 'react'

export const ControlledComponents = () => {

    const [val , setVal]=useState({name:""  , age:0});

const handleSubmit=(event)=>{
  event.preventDefault();
  console.log(val);
}

const viewres=(event)=>{
console.log(event.target.value);
setVal({...val,name:event.target.value});
}
  return (
    <div>

<h2>Controlled Components</h2>

<form  onSubmit={handleSubmit} >

<input onChange={viewres} placeholder='name' type='text'  />
<input onChange={(event)=>setVal({...val, age:event.target.value})} placeholder='age' type="number" />
<input   type='submit'  />

</form>

    </div>
  )
}

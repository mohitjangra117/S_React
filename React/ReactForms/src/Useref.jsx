import React, { useRef } from 'react'

const Useref = () => {

    const name=useRef(null);
    const age=useRef(null);

const handleSubmit=(event)=>{
              event.preventDefault();
              console.log(name.current.value);
              console.log(age.current.value);
}

  return (
    <div>
<h1>Useref</h1>
<form onSubmit={handleSubmit} >

<input ref={name}  placeholder='name' type='text'  />
<input ref={age}  placeholder='age' type='number' />
<input  type='submit'  />
</form>
    </div>
  )
}

export default Useref
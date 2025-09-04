import React from 'react'
import { useForm } from 'react-hook-form'
export const Useform = () => {

    const {register , handleSubmit}=useForm();

  return (
    <div>

<form onSubmit={handleSubmit((data)=>console.log(data))} >

<input {...register('name')}   type='text'   placeholder='name'  />
<input  {...register('age')}  type='number'  placeholder='age'  />
<input type="submit"  />

</form>

    </div>
  )
}

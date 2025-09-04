import React from 'react'
import { useForm } from 'react-hook-form'
export const UseFormPractice = () => {

    const {register , handleSubmit}=useForm();

    const extractData=(data)=>{

console.log(data);
    }

  return (
    <div>

<form onSubmit={handleSubmit(extractData)} >

<input {...register('name')}   type='text'   placeholder='name'  />
<input  {...register('age')}  type='number'  placeholder='age'  />
<input type="submit"  />

</form>

    </div>
  )
}

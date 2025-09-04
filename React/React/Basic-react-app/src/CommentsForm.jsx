import React, { useState } from 'react';
export default function CommentsForm(){

    let [formData , setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    });

let handleInputChange=(event)=>{
                setFormData((currData)=>{
                    return {...currData,[event.target.name]:event.target.value};
                });
};


let handleSubmit=(event)=>{ 
    console.log(formData);
                  event.preventDefault();
   
                  setFormData({
                        username:"",
                        remarks:"",
                        rating:5,
                  })

 };           
    return(
        <div>
        <h4>Write a Comment</h4>
        <form  onSubmit={handleSubmit}>
        <label htmlFor="username" >Username:  </label>
          <input placeholder="username" name="username" id="username" type="text" value={formData.username} onChange={handleInputChange} />
          <br></br> <br></br>
          <label htmlFor="remarks" >Remarks:  </label>
          <textarea placeholder="Remarks" name="remarks" id='remarks' onChange={handleInputChange} value={formData.remarks} ></textarea>
            <br></br> <br></br>
            <label htmlFor="rating"  >Rating:  </label>
            <input type="number"  id='rating'  name="rating" value={formData.rating} min="1" max="5"  onChange={handleInputChange} />
            <br></br> <br></br>
          <button>Add Comment</button>
</form>

        </div>
    )
}
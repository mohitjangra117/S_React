function formsubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function  Form(){
    return(
<>
<form   onSubmit={formsubmit} >
    <input placeholder="Write Something " /> 
    <button >Submit</button>
</form>
</>
    );
}

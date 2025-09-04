function printHello(){
    console.log("Mouse Hover");
}

function Hover(){
    return(
        <>
        <button onMouseOver={printHello} >Hover Me</button>
        </>
    );
}

export default Hover;
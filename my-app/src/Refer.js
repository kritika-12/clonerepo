import React ,{useState,useRef} from 'react';

export default function Refer(){
    const [name,setName]=useState("kriti"); //in bracket initialized value is there

    const nameRef=useRef();
    const submitButton=()=>{
        setName(nameRef.current.value);  //here current denotes the currently entered value of textbox input
    }


return(
<div>
<input type="text" value={name}/><br/><br/>
<input ref={nameRef} type="text"/><br/>
<button type="submit" onClick={submitButton}>Submit</button>

</div>


)
}
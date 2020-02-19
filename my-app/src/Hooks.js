import React, {  useState,useEffect } from 'react';
export default function Greeting() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");;

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

useEffect(()=>{
    document.title=`${firstName}`;
    document.title=`${lastName}`;
}

)
  
 const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name is:  ${firstName} ${lastName}`)
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
     FirstName: <input value={firstName} onChange={handleFirstNameChange} /><br /><br/>
    LastName:  <input value={lastName} onChange={handleLastNameChange} />
    <input type="submit" value="Submit" />
      <p>
        Hello, <span>{firstName} {lastName}</span>
      </p>
      </form>
    </div>
  );
}
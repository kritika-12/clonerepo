import React, { useState } from "react";

export default function NameForm() {
  const [fname, setFName] = useState("");
  const [lname,setLName]= useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitted Name is:  ${fname} ${lname}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={fname}
          onChange={e => setFName(e.target.value)}
        /><br/><br/>
        Last Name:
        <input
          type="text"
          value={lname}
          onChange={e => setLName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
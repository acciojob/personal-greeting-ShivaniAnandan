
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [name,setName]=useState("");

  function handlechange(event){
    setName(event.target.value);
  }

  return (
    <div>
            
        <input type="text" onChange={handlechange}/>
        <p>Hello {name}!</p>
    </div>
  )
}

export default App

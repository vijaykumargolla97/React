import React, { useState } from "react";
import "./App.css"

function App () {
const[counter, setCounter] = useState(0);

  return (
    <div className="App" >
      <header>
        <h1> Counter App Using State</h1>
      </header>
      <h2>Current value of count is {counter} </h2>
      <button onClick={()  => setCounter(0)} >Reset Counter </button>
      <button onClick={()  => (counter >= 10 ? "" : setCounter(counter + 1))}>Increase Counter  </button>
      <button onClick={()  => (counter <= 0 ? "" : setCounter(counter - 1))}>Decrease Counter </button>
    </div>
  )
}




export default App ;

import './App.css';
import {useState}from "react";

const App = () => {
  const[state,setState]=useState("Type your input")
  const click=()=>{
   alert(state)
  }
  const change= event =>{
    const val=event.target.value
    setState(val);
}

  return (
    <div className="App">
      <input
      onChange={change}
      value={state}/>
      <button onClick={click}>Click here</button>
    </div>
  )
}

export default App
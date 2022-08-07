import "./styles.css";
import React, { useState } from 'react'


const useCounter = (initialValue)=>{
const [count,setCount]=useState(initialValue)

const reset=()=>setCount(initialValue);
const increment=()=>setCount(count+1)
const decrement=()=>setCount(count-1)

return {count,reset,increment,decrement}
}
export default function App() {
  const {count,reset,increment,decrement}=useCounter(0)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>Count {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

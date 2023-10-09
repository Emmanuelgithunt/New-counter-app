import { useState } from 'react'
import React from 'react'
import "./Counter.css"

const Counter = () => {

    let count = 0;

    const [ Counter, setCounter] = useState(count);

    const decrease = ()=>{
        setCounter(Counter - 1);
    };

    const increase = ()=>{
        setCounter(Counter + 1);
    };

    const double = ()=>{
        setCounter(Counter * 2);
    };

    const reset = ()=>{
        setCounter(0)
    };



  return (
    <div className='container'>
      <h1>A simple counter application in React js</h1>
      <div className='counter'>
        <button className='btn' onClick={decrease}>-</button>
        <span id='count'>{Counter}</span>
        <button className='btn' onClick={increase}>+</button>
      </div>
      <button className='btn' onClick={double}>Double</button>
      <button className='reset' onClick={reset}>Reset</button>
      <button className='btn'>Square</button>
      <button className='reset'>Square Root</button>
    </div>
  )
}

export default Counter;

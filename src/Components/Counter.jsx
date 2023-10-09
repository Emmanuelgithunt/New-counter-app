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

    const sin =()=> {
        setCounter (Math.sin(Counter))
    };
    
    const tan =()=> {
        setCounter (Math.tan(Counter))
    };
    
    const cos =()=> {
        setCounter (Math.cos(Counter))
    };

    const square =()=> {
        setCounter (Counter **2)
    };
    
    const squareRoot =()=> {
        setCounter (Counter /2)
    };

    const X5 =()=> {
        setCounter (Counter *5)
    };
    
    const X10 =()=> {
        setCounter (Counter *10)
    };
    
    const X15 =()=> {
        setCounter (Counter *15)
    };
    
    const X25 =()=> {
        setCounter (Counter *25)
    };
    
    const X3 =()=> {
        setCounter (Counter *3)
    };
    
    const X7 =()=> {
        setCounter (Counter *7)
    };
    
    const X9 =()=> {
        setCounter (Counter *9)
    };
    
    const X12 =()=> {
        setCounter (Counter *12)
    };
    
    const X50 =()=> {
        setCounter (Counter *50)
    };
    
    const feel =()=> {
        setCounter(Counter +4)
    };
    
    const set =()=> {
        setCounter (Counter /5)
    };
    
    const fit =()=> {
        setCounter (Counter /15)
    };
    
    const field =()=> {
        setCounter (Counter /35)
    };
    
    const cube =()=> {
        setCounter (Counter **3)
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
      <button className='btn' onClick={square}>Square</button>
      <button className='reset' onClick={squareRoot}>Square Root</button>
      <button className='btn' onClick={sin}>Sin</button>
      <button className='reset' onClick={tan}>Tan</button>
      <button className='btn' onClick={cos}>Cos</button>
      <button className='reset' onClick={X5}>X5</button>
      <button className='btn' onClick={X10}>X10</button>
      <button className='reset' onClick={X15}>X15</button>
      <button className='btn' onClick={X25}>X25</button>
      <button className='reset' onClick={X3}>X3</button>
      <button className='btn' onClick={X50}>X50</button>
      <button className='reset' onClick={X7}>X7</button>
      <button className='btn' onClick={X9}>X9</button>
      <button className='reset' onClick={X12}>X12</button>
      <button className='btn' onClick={set}>/5</button>
      <button className='reset' onClick={feel}>+4</button>
      <button className='btn' onClick={field}>/35</button>
      <button className='reset' onClick={fit}>/15</button>
      <button className='btn' onClick={cube}>Cube</button>
    </div>
  )
}

export default Counter;

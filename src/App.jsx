import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[counter1,setCounter1]=useState(0)
 const[counter2,setCounter2]=useState(0)
 const handle1=()=>{ setCounter1(a=>a+1)}
  const handle2=()=>{setCounter2(b=>b+1)}
  const isEven=useMemo(()=>{
   for(let i=0;i<200000000;i++){}
   return counter1%2===0
  },[counter1])  /* in this rerender only when the dependenceies changed */

  return (
    <>    <h1>{counter1}</h1>
      <button onClick={handle1}>Counter-one:  {counter1}</button>
    <p>{isEven?'Even':'odd'}</p>  
      <h1>{counter2}</h1>
      <button onClick={handle2}>Counter-two: {counter2}</button>
    </>
  )
}

export default App

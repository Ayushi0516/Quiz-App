import React,{useEffect, useState} from 'react'
import { Questions } from './Questions';
import {useSelector} from "react-redux"

export const Quiz = () => {

  
  const [check, setChecked] = useState(undefined)
  const state=useSelector(state=> state)

  useEffect(()=>{
    
  })
  
  function onNext(){
    console.log("next");
  }

  function onPrev(){
    console.log("prev");
  }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        {/* <Questions onChecked={onChecked} /> */}
         <Questions/>
        <div className='grid'>
            {/* { trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>} */}
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, reduceAction } from '../Redux/counter/action'

const Counter = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=> {return state})

  const handleAdd = ()=>{
    dispatch(addAction(1)) 
  }

  const handleReduce = ()=>{
    dispatch(reduceAction(1))
  } 
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleAdd}>Add Value</button> 
      <button onClick={handleReduce}>Reduce Value</button>
      {/* <button onClick={()=>dispatch(addAction(5))}>Add Value</button> 
      <button onClick={()=>dispatch(reduceAction(5))}>Reduce Value</button> */}
    </div>
  )
}

export default Counter
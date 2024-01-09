import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from './redux/Action'


function Addtask() {
  let [text,setText]=useState("")
  const dispatch=useDispatch()
  const add=()=>{dispatch(addtodo({id:Math.random,text}))
  setText("")}
  return (
    <div>
      <input onChange={(e)=>setText(e.target.value)} value={text}/>
      <button onClick={add}>Add</button>

    </div>
  )
}



export default Addtask


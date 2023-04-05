import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber } from './actions/index' 
import Todo from './Todo';
const App = () => {
  const myState= useSelector((state)=>state.changeNumber);
 
  const dispatc =useDispatch();
  return (
    // <div><button>-</button>
    // <input value={myState}/>
    // <button onClick={()=>dispatc(incNumber())}>+</button></div>
    <>
    <Todo/>
    </>
  )
}

export default App
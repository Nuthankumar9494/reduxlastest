import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import store1 from './Store1'
import { addData, editData } from './actions1'
import { deleteData } from './actions1'

const Todo = () => {
    const [edit ,onEdit] = useState()
    const [addpPerson, setAddPerson] = useState('')
    const data = useSelector((state) => state.todoFunctionalities.list)
    const dispatch1 = useDispatch();
    // store1.subscribe(() => ((store1.getState())));
   
    return (
        <>

            <div>
                {data.map((ele,index)=>(<ul key={index}>
                    
                    <li>{ele.name} </li><button key={ele.index} onClick={()=>dispatch1(deleteData(ele.name))}> delete</button>
                    <button key={ele.index} onClick={()=>(onEdit(ele.name),
                    dispatch1(editData(ele.name)))}> edit</button>
                   
                </ul>))}
            </div>
            <div><input type='text' onChange={(event) => { setAddPerson(event.target.value) }}  />
            <input type='text' value={edit} onChange={(event)=>onEdit(event.target.value)}/>
                
                <button onClick={() => dispatch1(addData(addpPerson))}>add</button>
                <button onClick={()=>dispatch1(editData(edit))}> save button for edit</button>
                
            </div>
        </>
    )
}

export default Todo
import {React,useState} from 'react'
import "./style.css"

const Todoitem = ({value,Delete,DeleteTodo,indx}) => {


  return (
    <div className='list'>
        <input type="checkbox" onChange={(e)=>{if(e.target.checked==true){
            DeleteTodo(indx);
        }}} />
        <p>{value}</p>
        <button onClick={()=>Delete(indx)}>delete</button>
    </div>
  )
}

export default Todoitem
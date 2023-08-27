import React from 'react'

const ListItems = ({id,todo,status,deleteItem,completedItem}) => {
  return (
    <li className={`${status==='completed' ? 'completedItem' : ''} listItem`} >
        <span>{id}</span>
        <span>{todo}</span>
        <span>
          <button onClick={()=>deleteItem(id)}>Delete</button>    
        </span>    
        <span>
            <button onClick={() => completedItem(id,todo)} >
              {status==='completed' ? 'UnComplete':'Complete'}
            </button>
        </span>
    </li>
  )
}

export default ListItems
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItme = ({item,handleCheck,handleDelete}) => {
  return (
<li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? {textDecorationColor:'chartreuse' ,textTransform: 'uppercase' ,color:'blueviolet'} : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
           
                             role="button"
                            tabIndex="0"
                              airal-label={'Delete{item.item}'}
                            />
                        </li>
  )
}

export default LineItme
import React from 'react'
import LineItme from './LineItme';
const itemList = ({items,handleCheck,handleDelete}) => {
    return (

        <ul>
            { items.map((item) => (
                <LineItme
                    key={item.id}
                    item={ item }
                    handleCheck={ handleCheck }
                    handleDelete={handleDelete}
                />
                    ))}
                </ul>
      
      
  )
}

export default itemList
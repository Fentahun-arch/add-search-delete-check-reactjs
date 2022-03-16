import React from 'react';

function Footer ({length}) {
  return (
    <div className='footer'>
      <p>{ length } {length === 1 ? 'item is ' :'items are'} listed here above</p>
       </div>
  )
}

export default Footer
 
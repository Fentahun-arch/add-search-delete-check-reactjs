import React from 'react'

function Header({title}){
  
  return (
    <header>
      <h1>{title}</h1>{ /*we use props.title if we use props in header fuction*/}
    </header>
  )
}
Header.defaultProps = {
  title: 'Default title' //this will be displayed if their is no normal title in the header part 
                          // to see the result delete the the title student in the header .
}

export default Header

import React from 'react'

const SearchItem = ({search,setSearch }) => {
  return (
      <form className='searchForm' onSubmit={ (e) => e.preventDefault(e) }>
          <label htmlFor="search">Search</label>
          <input
              id='searc'
              type="text"
              role='searchbox'
              placeholder='search Items'
        value={ search }
        onChange={(e)=>setSearch(e.target.value)}
              
              />      
      
      </form>
  )
}

export default SearchItem
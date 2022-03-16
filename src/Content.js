import ItemList from './itemList';
function Content({items,handleCheck,handleDelete}) {
  
  return  ( 
      <main>
      { items.length ? (
        <ItemList
        items = { items }
        handleCheck={ handleCheck }
      handleDelete={handleDelete}
              /> 
            ) : (
                <p style={{ marginTop: '2rem' }}>You cleared all lists .</p>
            )}
        </main>
  )
}

export default Content
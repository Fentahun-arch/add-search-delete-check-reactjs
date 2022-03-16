import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import React, { useState } from 'react';
import SearchItem from './SearchItem';
function App() {
  const [items, setItems] = useState([
        {
                    id: 1,
                    checked: false,
                    item: "Student's Computer in digital library"
                },
                {
                    id: 2,
                    checked: false,
                    item: "first Computer"
                },
                {
                    id: 3,
                    checked: false,
                    item: "Second Computer"
                }

  ]);
  //but instead of those defaults we use JSON.parse(localStorage.setItem('shoppinglist', JSON.stringify(newItems)));inside useState by removing them.

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const SetAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));

  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    SetAndSaveItems(listItems);
  }
   const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
            SetAndSaveItems(listItems);

    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
    SetAndSaveItems(listItems);
     
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Computers  " />
      
      <AddItem 
        newItem={ newItem }
        setNewItem={ setNewItem }
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={ search }
        setSearch={setSearch}

      />
      <Content
        items={ items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase())) }
        handleCheck={ handleCheck }
        handleDelete={handleDelete}

      />
      <Footer length={ items.length}/>                                    
    </div>
  );
}

export default App;

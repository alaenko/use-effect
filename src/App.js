import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
      fetch(process.env.REACT_APP_ITEMS_URL)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }, []);

  const handleClick = (obj) => {
    setSelected(obj);
  }

  return (
    <div className="App">
      <List items={items} handleClick={handleClick}/>
      {selected && <Details info={selected}/>}
    </div>
  );
}

export default App;

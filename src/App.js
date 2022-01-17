import React, { useEffect, useState } from "react";
import CardList  from "./components/card-list/card-list";
import SearchBox  from './components/search-box/search-box';

function App() {
 
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const filteredMonsetrs = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    useEffect(() => {
 
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json())
      .then(myJSOn => setMonsters(myJSOn));
    }, []);

   //setSearchField(e.target.value)
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
          <SearchBox placeholder='search monster' handleChange={e=> setSearchField(e.target.value)} />
          <CardList monsters={filteredMonsetrs}  >
          </CardList>
    </div>
  );
}

export default App;

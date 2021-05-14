import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import BrowseItemsPage from "./BrowseItemPage"
import ItemPage from "./ItemPage"

import './App.css';

import {
  fetchItems
} from './services/items';

function App() {

  const  [ hasError, setErrors ] =  useState(false)
  const  [ items, setItems ]= useState({})

  async function fetchItemsData() {
    const items = await fetchItems()
      .then(res => {
        console.log(res)
        setItems(res)
      })
      .catch(err => setErrors(err));
  } 

  useEffect(() => {
    fetchItemsData();
  }, []); 
  
  return(
    <div className="container">
      <Switch>
        <Route path='/browse' render={() => <BrowseItemsPage items={items} /> }/>
        <Route path='/item' render={() => <ItemPage items={items} /> }/>
      </Switch>
    </div>  
  )
}

export default App;

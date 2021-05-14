import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import BrowseItemsPage from "./BrowseItemPage"
import ItemPage from "./ItemPage"

import './App.css';

import {
  fetchItems
} from './services/items';

function App() {

  const  [ items, setItems ]= useState({});
  const  [ hasError, setErrors ] =  useState(false);

  async function fetchItemsData() {
    const items = await fetchItems()
      .then(res => {
        console.log(res)
        setItems(res)
      })
      .catch(err => setErrors(err));
  } 

  async function loadMoreItems(){
    console.log('fetching more items')
  }

  useEffect(() => {
    fetchItemsData();
  }, []); 
  
  return(
    <div className="container">
      <Switch>
        <Route path='/' render={() => <BrowseItemsPage items={items} loadMoreItems={loadMoreItems} /> }/>
        <Route path='/item' render={() => <ItemPage items={items} /> }/>
      </Switch>
    </div>  
  )
}

export default App;

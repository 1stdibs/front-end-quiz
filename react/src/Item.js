import React from 'react';

const Item = ({ item }) => {

  let price_usd;

  if(item.price){
    Object.keys(item.price).map(function(keyName, keyIndex) {
      // use keyName to get current key's name
      // and a[keyName] to get its value
      if( keyName === 'amounts'){
        price_usd = item.price[keyName]['USD']
      }
    })
  }

  return (
    <>
      <div className="card">
        <img src={item.image} />
        <p>{price_usd}</p>
      </div>
    </>
  );
}

export default Item;

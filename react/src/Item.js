import React from 'react';

const Item = ({ item }) => {
  return (
    <>
      <div className="card">
        <img src={item.image} />
        <p>12000</p>
      </div>
    </>
  );
}

export default Item;

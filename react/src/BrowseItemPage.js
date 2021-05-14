import React from 'react';

import Item from "./Item"

const BrowseItemPage = ({ items }) => {

  console.log(items)

  return (
    <>
      <h1>Browse Items</h1>
      <div className="main">
        {Object.entries(items).map(([key, item]) => {
          return <Item
                    key={key}
                    item={item}
                />
        })}
      </div>
      <button>Load More</button>
    </>
  );
}

export default BrowseItemPage;

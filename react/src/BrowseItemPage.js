import React from 'react';

import Item from "./Item"

const BrowseItemPage = ({ items, loadMoreItems }) => {

  console.log(items)
  // https://scotch.io/courses/10-react-challenges-beginner/loop-over-and-display-data-with-jsx
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
      <button onClick={loadMoreItems}>Load More</button>
    </>
  );
}

export default BrowseItemPage;

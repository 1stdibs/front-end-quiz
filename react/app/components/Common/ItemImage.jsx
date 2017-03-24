import React from 'react';

const ItemImage = ({url, cName}) => {
    return (
        <img src={url} className={cName} />
    )
}

export default ItemImage;

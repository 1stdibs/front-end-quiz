import React from 'react';

const ProductDescription = ({item}) => {
    return (
        <div id="productDescription" className="detail">
            <div className="center">
                <p>
                    {item.description}
                </p>
                <span className="heading">Creator: </span>
                <span>{item.creators}</span>
            </div>
        </div>
    )
}
export default ProductDescription;

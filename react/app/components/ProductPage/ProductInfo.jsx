import React from 'react';

import Measurements from 'app/components/Common/Measurements.jsx';
import Price from 'app/components/Common/Price.jsx';

import config from 'app/config';

const ProductInfo = ({item, selectedCurrency}) => {
    return (
        <div id="productInfo" className="detail">
            <div className="center">
                <div className="pdp-title">
                    <h2>{item.title}</h2>
                </div>
                <Price price={item.price != null ? item.price.amounts[selectedCurrency] : config.noPriceMessage} />
                <Measurements item={item} />
            </div>
            <span id="purchase" className="pdp-action">PURCHASE</span>
            <span id="makeOffer" className="pdp-action">MAKE OFFER</span>
        </div>
    )
}
export default ProductInfo;

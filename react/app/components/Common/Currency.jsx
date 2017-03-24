import React from 'react';

import CurrencyItem from 'app/components/Common/CurrencyItem.jsx';
import config from 'app/config';

const Currency = ({selectedCurrency, changeCurrencyCallback}) => {
    return (
        <div className="currencies">
            Currency:&nbsp;
            {config.currencies.map(value =>
                <CurrencyItem key={value} currency={value} selectedCurrency={selectedCurrency}
                    changeCurrencyCallback={changeCurrencyCallback} />
            )}
        </div>
    )
}

export default Currency;

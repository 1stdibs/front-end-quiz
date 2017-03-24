import React from 'react';

import {setLocalStorageItem} from 'app/functions';
import config from 'app/config';

const CurrencyItem = ({currency, selectedCurrency, changeCurrencyCallback}) => {
    const handleChangeCurrency = () => {
        setLocalStorageItem(config.currencyKey, currency);
        changeCurrencyCallback(currency);
    }
    return (
        <span className={selectedCurrency===currency ? 'selected' : null}
            onClick={handleChangeCurrency}>
            {currency}
        </span>
    )
}

export default CurrencyItem;

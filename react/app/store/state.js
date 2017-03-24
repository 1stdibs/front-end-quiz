import {getObjectFromStorage, getLocalStorageItem} from 'app/functions';
import config from 'app/config';

const initialState = {
    listPageLoading: false,
    productPageLoading: false,
    loadMoreLoading: false,
    listPageIndex: 1,
    totalItems: 0,
    productList: [],
    product: null,
    favorites: getObjectFromStorage(config.favoriteKey) || {},
    selectedCurrency: getLocalStorageItem(config.currencyKey) || 'USD'
}

export default initialState;

import * as types from './actionTypes';
import * as api from '../utils/api';

const addProducts = data => {
    return {
        type: types.ADD_PRODUCTS,
        payload: data
    }
}

const addProduct = (id, data) => {
    return {
        type: types.ADD_PRODUCT,
        id: id,
        payload: data
    }
}

const fetchProducts = () => dispatch => api.fetchProducts().then(response => dispatch(addProducts(response.data)));
const fetchProduct = id => dispatch => api.fetchProduct(id).then(response => dispatch(addProduct(id, response.data)));

export const getProducts = () => (dispatch, getState) => dispatch(fetchProducts());
export const getProduct = (id) => (dispatch, getState) => dispatch(fetchProduct(id));


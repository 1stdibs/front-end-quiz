import * as types from './actionTypes';
import * as api from '../utils/api';

const addProducts = data => {
    return {
        type: types.ADD_PRODUCTS,
        payload: data
    }
}

const addProduct = data => {
    return {
        type: types.ADD_PRODUCTS,
        payload: data
    }
}

const fetchProducts = () => {
    return (dispatch) => api.fetchProducts().then(response => dispatch(addProducts(response.data)))
}

const fetchProduct = (id) => {
    return (dispatch) => api.fetchProduct(id).then(response => dispatch(addProduct(response.data)))
}

export const getProducts = () => {
    return (dispatch, getState) => dispatch(fetchProducts());
}

export const getProduct = (id) => {
    return (dispatch, getState) => dispatch(fetchProduct(id));
}


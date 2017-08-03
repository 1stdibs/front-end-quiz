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

const addProductToFavourites = (id) => {    
    return {
        type: types.TOGGLE_LIKE_PRODUCT,
        id: id
    }
}

const fetchProducts = (offset, limit) => (dispatch) => api.fetchProducts(offset, limit).then(response => dispatch(addProducts(response.data)));
const fetchProduct = (id) => (dispatch) => api.fetchProduct(id).then(response => dispatch(addProduct(id, response.data)));
const dispatchToggleLikeProduct = (id) => (dispatch) => api.toggleLikeProduct(id).then(
    response => dispatch(addProductToFavourites(id)
));

export const getProducts = (offset, limit) => (dispatch) => dispatch(fetchProducts(offset, limit));
export const getProduct = (id) => (dispatch) => dispatch(fetchProduct(id));
export const toggleLikeProduct = (id) => (dispatch) => dispatch(dispatchToggleLikeProduct(id));


import * as types from '../actions/actionTypes';

const initialState = {
    products: {},
    product: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_PRODUCTS:
            return { ...state, products: action.payload }
        case types.ADD_PRODUCT:
            return { ...state, state }
        default:
            return state
    }
}
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
            state.product[action.id] = action.payload;
            return { ...state, product: state.product }
        default:
            return state
    }
}
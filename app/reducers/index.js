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
        case types.TOGGLE_LIKE_PRODUCT:
            let newProduct = {};
            if (state.product[action.id]) {
                newProduct = {...state.product[action.id], isLiked: !state.product[action.id].isLiked}
            }
            let newProducts = {...state.products};
            if (state.products.items) {
                const itemIndex = state.products.items.findIndex(item => item.id === action.id);
                newProducts.items[itemIndex].isLiked = !state.products.items[itemIndex].isLiked;
            }
            
            return {
                ...state,
                products: {
                    ...state.products,
                    newProducts
                },
                product: {
                    ...state.product,
                    [action.id]: newProduct
                }
            }
        default:
            return state
    }
}
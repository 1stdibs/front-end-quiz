import * as ACTIONS from 'app/actions/appActions';
import initialState from 'app/store/state'
import config from 'app/config';

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.REQUEST_ITEMS:
            return {...state, listPageLoading : true};
        case ACTIONS.REQUEST_LOAD_MORE:
            return {...state, loadMoreLoading : true};
        case ACTIONS.RECEIVE_ITEMS: {
            if(action.response != null) {
                let productList = [...state.productList, ...action.response.items];
                return {...state, productList : productList, listPageLoading : false,
                    totalItems : action.response.totalItems, listPageIndex : action.pageIndex, loadMoreLoading : false};
            } else
                return {...state, listPageLoading: false, loadMoreLoading : false};
        }
        case ACTIONS.CHANGE_CURRENCY: {
            return {...state, selectedCurrency : action.currency};
        }
        case ACTIONS.UPDATE_FAVORITE: {
            let newFavorites = {...state.favorites};
            if(action.isFavorite) {
                delete newFavorites[action.id];
            } else {
                newFavorites = {...state.favorites, [action.id] : true};
            }
            return {...state, favorites : newFavorites};
        }
        case ACTIONS.REQUEST_ITEM:
            return {...state, productPageLoading : true};
        case ACTIONS.RECEIVE_ITEM:
            return {...state, productPageLoading: false, product : action.response};
        default:
            return state;
    }
};

export default appReducer;

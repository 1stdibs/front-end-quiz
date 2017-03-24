import axios from 'axios';

import config from 'app/config';
import {actionCreator} from 'app/functions';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const UPDATE_FAVORITE = 'UPDATE_FAVORITE';
export const REQUEST_LOAD_MORE = 'REQUEST_LOAD_MORE';

export const REQUEST_ITEM = 'REQUEST_ITEM';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

const requestItems = actionCreator(REQUEST_ITEMS);
const receiveItems = actionCreator(RECEIVE_ITEMS, 'response', 'start', 'pageIndex');
const changeCurrency = actionCreator(CHANGE_CURRENCY, 'currency');
const updateFavorite = actionCreator(UPDATE_FAVORITE, 'isFavorite', 'id');
const requestLoadMore = actionCreator(REQUEST_LOAD_MORE);

const requestItem = actionCreator(REQUEST_ITEM);
const receiveItem = actionCreator(RECEIVE_ITEM, 'response');

const getItemsRequest = (start, limit, startPageIndex, state) => {
    return dispatch => {
        if(start < 1)
            dispatch(requestItems());
        else {
            dispatch(requestLoadMore());
        }
        axios.get(config.getItemsUrl + '?start=' + start + '&limit=' + limit)
            .then(response => {
                dispatch(receiveItems(response.data, start, startPageIndex));
            })
            .catch(response => {
                dispatch(receiveItems(null, startPageIndex));
            });
    }
};

const getItems = (start, startPageIndex) => {
    let limit = config.itemLimit;
    let startParam = start;
    if(startParam < 1)
        limit = startPageIndex * config.itemLimit;
    else {
        startParam = start * config.itemLimit;
    }
    return (dispatch, getState) => {
        return dispatch(getItemsRequest(startParam, limit, startPageIndex, getState()));
    }
};

const getItemRequest = (itemId, state) => {
    return dispatch => {
        dispatch(requestItem());
        axios.get(config.getItemUrlBase + itemId + config.getItemurl)
            .then(response => {
                dispatch(receiveItem(response.data));
            })
            .catch(response => {
                dispatch(receiveItem(null));
            });
    }
};

const getItem = (itemId) => {
    return (dispatch, getState) => {
        return dispatch(getItemRequest(itemId, getState()));
    }
};



export {getItems, changeCurrency, updateFavorite, getItem};

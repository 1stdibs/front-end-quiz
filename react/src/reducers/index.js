/* Imports */
import { combineReducers } from 'redux';

/* Reducers */
import { items, itemsRequestInFlight, itemsRequestFailed } from './items';
import { selectedItem, itemRequestInFlight, itemRequestFailed } from './item';
import { favorites, userId } from './favorites';

/* Export combined reducer */
// So, the generic idea, is that all reducers are called for every item
// And since they are separate functions, we should combine them into one
export default combineReducers({
    items,
    itemsRequestInFlight,
    itemsRequestFailed,
    selectedItem,
    itemRequestInFlight,
    itemRequestFailed,
    favorites,
    userId
});
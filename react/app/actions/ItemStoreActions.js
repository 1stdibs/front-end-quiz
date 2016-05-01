import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';

const ItemStoreActions = {
	loadItems(params) {
		Dispatcher.dispatch({
			type: Actions.LOAD_ITEMS,
			params: params
		});
	}
};

module.exports = ItemStoreActions;
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';

const ItemStoreActions = {
	loadItems() {
		Dispatcher.dispatch({
			type: Actions.LOAD_ITEMS
		});
	}
};

module.exports = ItemStoreActions;
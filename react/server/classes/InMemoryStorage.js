// An in-memory storage for favorites
class InMemoryStorage {
	// constructor
	constructor() {
		this.storage = {};
	};

	// Methods
	// Retrieve entry
	retrieveEntry(pUserId) {
		// Retrieve an entry or remove it
		if (this.storage[pUserId]) {
			return this.storage[pUserId];
		}
		else {
			return [];
		}
	};

	// Insert entry
	insertEntry(pUserId, pItemId) {
		if (this.storage[pUserId]) {
			// Push an item to the array
			this.storage[pUserId].push(pItemId);
		}
		else {
			// Create a new entry
			this.storage[pUserId] = [pItemId];
		}
	};

	// Remove entry
	removeEntry(pUserId, pItemId) {
		if (this.storage[pUserId] & (this.storage[pUserId].indexOf(pItemId) != -1)) {
			// Remove an entry from the array
			this.storage[pUserId].splice(sthis.storage[pUserId].indexOf(pItemId), 1);
		}
	};
};

module.exports = InMemoryStorage;
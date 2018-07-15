// This class provides access to user services
class UserService {
	// Get items
	// Returns a promise for the list of items
	static GetUserId() {
		// Try to retrieve the id from the local storage
		let userId = window.localStorage.getItem('userId');

		// Does it exist?
		if (!userId) {
			// It does not
			userId = _generateId();

			// Save it
			window.localStorage.setItem('userId', userId);
		}

		// Return a value
		return userId;
	};
};

/* Private methods */
// Generate ID
// Returns an ID with a high probability of being unique
function _generateId() {
	return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
};

export default UserService;
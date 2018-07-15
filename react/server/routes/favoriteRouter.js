const express = require('express');
const InMemoryStorage = require('./../classes/InMemoryStorage');

const favoriteRouter = express.Router();
const cache = new InMemoryStorage();

const getFavorites = function (userId) {
	return cache.retrieveEntry(userId);
};

const insertFavorite = function (userId, itemId) {
	cache.insertEntry(userId, itemId);
};

const removeFavorite = function (userId, itemId) {
	cache.removeEntry(userId, itemId);
};

/* Routes */
favoriteRouter.get('/', (req, res) => {
    const favorites = getFavorites(req.query.userId);
    res.status(200).json(favorites);
});

favoriteRouter.post('/add', (req, res) => {
	insertFavorite(req.body.userId, req.body.itemId);
	res.status(200).send();
});

favoriteRouter.delete('/remove', (req, res) => {
	removeFavorite(req.body.userId, req.body.itemId);
	res.status(200).send();
});

module.exports = favoriteRouter;
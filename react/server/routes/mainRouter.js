const express = require('express');
const cachedItems = require('../data/items.json');

const mainRouter = express.Router();

const getItems = function(payload) {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 9;
    const items = cachedItems.slice(start, start + limit);

    return {
        items: items,
        totalItems: cachedItems.length
    };
};

const getItem = function(itemId) {
    return cachedItems.find(function(item) {
        return item.id === itemId || item.integerId === itemId;
    }) || {};
};

mainRouter.get('', (req, res) => {
	const response = getItems(req.query);
	res.render('main', response);
});

mainRouter.get('/item/:id', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

mainRouter.get('/items', (req, res) => {
	const response = getItems(req.query);
	res.status(200).json(response);
});

module.exports = mainRouter;
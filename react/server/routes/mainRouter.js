const express = require('express');
const cachedItems = require('../data/items.json');
const favouriteItems = require('../data/favourites.json');

const mainRouter = express.Router();

const getItems = function(payload) {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 6;
    const items = cachedItems.slice(start, start + limit).map(item => ({
        id: item.id,
        image: item.image,
        price: item.price,
        title: item.title
    }));

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
	res.render('main');
});

mainRouter.get('/items', (req, res) => {
    const response = getItems(req.query);
    response.favourites = favouriteItems;
    res.status(200).json(response);
});

mainRouter.get('/items/favourites', (req, res) => {
    res.status(200).json(favouriteItems);
});

mainRouter.get('/item/:id', (req, res) => {
    const id = req.params.id;
    const item = getItem(id);
    res.status(200).json(item);
});

mainRouter.get('/item/:id/favourite', (req, res) => {
    const id = req.params.id;

    if (favouriteItems.hasOwnProperty(id)) {
        delete favouriteItems[id];
    } else {
        favouriteItems[id] = true;
    }

    const fs = require('fs');
    fs.writeFileSync('server/data/favourites.json', JSON.stringify(favouriteItems));

    res.status(200).json({
        id: id,
        isFavourite: favouriteItems.hasOwnProperty(id)
    });
});

module.exports = mainRouter;
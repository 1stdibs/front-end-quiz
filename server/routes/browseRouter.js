const express = require('express');
const file = `${process.cwd()}/server/data/items.json`; 
const encoding = 'utf8';
const fs = require('fs');

const browseRouter = express.Router();

const readFile = (callback) => fs.readFile(file, encoding, callback);

const getItems = function (data, payload) {
    const start = Number.parseInt(payload.start) || 0;
    const limit = Number.parseInt(payload.limit) || 9;
    const items = data.slice(start, start + limit);

    return {
        items: items,
        totalItems: data.length
    };
};

browseRouter.get('', (req, res) => {
    readFile((err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            const response = getItems(JSON.parse(data), req.query);
            res.render('index', response);
        }
    });
});

browseRouter.get('/data', (req, res) => {
    readFile((err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            const response = getItems(JSON.parse(data), req.query);
            res.status(200).json(response);
        }
    });
});

module.exports = browseRouter;

const express = require('express');
const file = `${process.cwd()}/server/data/items.json`; 
const encoding = 'utf8';
const fs = require('fs');

const itemRouter = express.Router();

const readFile = (callback) => fs.readFile(file, encoding, callback);

const findItem = (items, itemId) => items.find(function (item) {
    return item.id === itemId || item.integerId === itemId;
}) || {};

itemRouter.get('/:id', (req, res) => {
    readFile((err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            const item = findItem(JSON.parse(data), req.params.id);
            res.render('index', {item});
        }
    });
});

itemRouter.get('/:id/data', (req, res) => {
    readFile((err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            const item = findItem(JSON.parse(data), req.params.id);
            res.status(200).json(item);
        }
    });
});

itemRouter.post('/:id/data', (req, res) => {
    readFile((err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            let parsed = JSON.parse(data);
            const itemIndex = parsed.findIndex(item => item.id === req.params.id);
            parsed[itemIndex].isLiked = !parsed[itemIndex].isLiked;
            written = JSON.stringify(parsed);
            fs.writeFile(file, written, encoding, (data) => {
                res.status(200).json({});
            });
        }
    });
});

module.exports = itemRouter;

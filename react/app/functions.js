import config from 'app/config';

export const actionCreator = (type, ...argNames) => {
    return function(...args) {
        let action = {
            type
        }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    }
};

export const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch(e) {
        console.error(e);
    }
}

export const getLocalStorageItem = key => {
    try {
        return localStorage.getItem(key);
    } catch(e) {
        console.error(e);
    }
}

export const getObjectFromStorage = key => {
    let sItem = getLocalStorageItem(key);
    if(sItem != undefined) {
        sItem = JSON.parse(sItem);
    }
    return sItem;
}

export const deleteLocalStorageItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch(e) {
        console.error(e);
    }
}

export const setFavoritesLocalStorage = (isFavorite, itemId) => {
    let favorites = getObjectFromStorage(config.favoriteKey);
    if(isFavorite)
        delete favorites[itemId];
    else 
        favorites[itemId] = true;

    setLocalStorageItem(config.favoriteKey, JSON.stringify(favorites));
}

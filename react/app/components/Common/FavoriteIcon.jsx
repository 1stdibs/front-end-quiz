import React from 'react';

import {setFavoritesLocalStorage} from 'app/functions';

const FavoriteIcon = ({url, favoriteAction, itemId, isFavorite}) => {
    const handleFavoriteAction = () => {
        setFavoritesLocalStorage(isFavorite, itemId);
        favoriteAction(isFavorite, itemId);
    }
    return (
        <div className={isFavorite ? 'heart saved' : 'heart'} title={isFavorite ? 'Remove From Favorites' : 'Add To Favorites'}
            onClick={handleFavoriteAction}></div>
    )
}

export default FavoriteIcon;

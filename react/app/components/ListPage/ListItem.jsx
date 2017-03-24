import React from 'react';

import config from 'app/config';

import Price from 'app/components/Common/Price.jsx';
import ItemImage from 'app/components/Common/ItemImage.jsx';
import FavoriteIcon from 'app/components/Common/FavoriteIcon.jsx';

const ListItem = ({item, selectedCurrency, favoriteAction, isFavorite, history}) => {
    const handleRoute = event => {
        if(!event.target.classList.contains('heart'))
            history.push('/item/' + item.id);
    }

    return (
        <article className="item" onClick={handleRoute}>
            <ItemImage url={item.image} />
            <Price price={item.price != null ? item.price.amounts[selectedCurrency] : config.noPriceMessage} />
            <FavoriteIcon favoriteAction={favoriteAction} itemId={item.id} isFavorite={isFavorite} />
        </article>
    )
}

export default ListItem;

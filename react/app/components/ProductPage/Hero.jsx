import React from 'react';

import FavoriteIcon from 'app/components/Common/FavoriteIcon.jsx';
import ItemImage from 'app/components/Common/ItemImage.jsx';

const Hero = ({item, favorites, favoriteAction}) => {
    return (
        <section id="heroImage">
            <ItemImage url={item.image} cName="vcenter"/>
            <FavoriteIcon favoriteAction={favoriteAction} itemId={item.id} isFavorite={favorites[item.id] != undefined} />
        </section>
    )
}

export default Hero;

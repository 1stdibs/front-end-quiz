import React from 'react';

import FavoriteIcon from 'app/components/Common/FavoriteIcon.jsx';
import ItemImage from 'app/components/Common/ItemImage.jsx';

const Measurements = ({item}) => {
    return (
        <div className="measurements">
            <span className="heading">Measurements:</span>
            <div>
                {item.measurements.display}
            </div>
        </div>
    )
}

export default Measurements;

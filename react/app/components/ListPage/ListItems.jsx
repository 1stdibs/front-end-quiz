import React from 'react';

import ListItem from 'app/components/ListPage/ListItem.jsx';
import config from 'app/config';

class ListItems extends React.Component {

    render() {
        let {selectedCurrency, favoriteAction, favorites, page, history} = this.props;
        if(page == null)
            page = 1
        return (
            <section id="itemsList" className="container">
                {this.props.items.slice(0, page * config.itemLimit).map(item =>
                    <ListItem key={item.id} item={item} selectedCurrency={selectedCurrency} history={history}
                        favoriteAction={favoriteAction} isFavorite={favorites[item.id] != undefined} />
                )}
            </section>
        )
    }
}

export default ListItems;

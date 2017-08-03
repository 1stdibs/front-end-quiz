import React from 'react';
import { Route } from 'react-router-dom';
import BrowseContainer from './BrowseContainer';
import ItemContainer from './ItemContainer';

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={BrowseContainer} />
            <Route path="/item/:id" component={ItemContainer} />
        </div>
    );
}

export default Routes;
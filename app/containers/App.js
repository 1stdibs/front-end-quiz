import React from 'react';
import { Route } from 'react-router';
import BrowseContainer from './BrowseContainer';
import ItemContainer from './ItemContainer';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={BrowseContainer} />
            <Route path="/:id" component={ItemContainer} />
        </div>
    );
}

export default App;
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ListPageContainer from 'app/components/ListPage/ListPageContainer.jsx';
import ProductPageContainer from 'app/components/ProductPage/ProductPageContainer.jsx'

import configureStore from 'app/store/configureStore';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ListPageContainer} />
                        <Route path="/browse/:page" component={ListPageContainer} />
                        <Route path="/item/:itemId" component={ProductPageContainer} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;

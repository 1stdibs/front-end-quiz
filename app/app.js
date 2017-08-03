import React from 'react';
import { render } from 'react-dom';
import { HotContainer } from 'react-hot-loader';
import WebFont from 'webfontloader';
import Root from './containers/Root';
import './assets/css/styles.css';

WebFont.load({
    google: {
        families: [
            'Maven Pro:400,700,900'
        ]
    }
});

const rootEl = document.getElementById('app');

render(
    <Root />,
    rootEl
);

if (module.hot) {        
    module.hot.accept('./containers/Root', () => {
        const RootHot = require('./containers/Root').default;
        render(
            <HotContainer>
                <RootHot />
            </HotContainer>,
            rootEl
        );
    });
}
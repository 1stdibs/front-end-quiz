import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import Root from './containers/Root';
import './assets/css/styles.css';

WebFont.load({
    google: {
        families: [
            'Roboto:300,400,500,700',
            'Maven Pro:400,500,700,900'
        ]
    }
});

render(
    <Root />,
    document.getElementById('app')
);
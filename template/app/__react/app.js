/**
 * Main Application File
 *
 * Use for bootstrapping large application
 * or just fill it with JS on small projects
 *
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; //eslint-disable-line import/no-extraneous-dependencies

import Root from './containers/Root';


// @see https://github.com/gaearon/react-hot-boilerplate/pull/61#issuecomment-254467020
const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app-root')
    );
};

render(Root);

if (__PRODUCTION__ === false) {

    if (module.hot) {

        module.hot.accept('./containers/Root', () => render(Root));
    }
}
import React, { Component } from 'react';
import { hot } from 'react-hot-loader'; //eslint-disable-line import/no-extraneous-dependencies

import styles from './root.scss';

class Root extends Component {

    render() {

        return (
            <div className={styles.root}>
                Hello World
            </div>
        );
    }

}

export default hot(module)(Root);

export { Root };
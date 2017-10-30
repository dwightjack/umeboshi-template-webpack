import React, { Component } from 'react';

import styles from './root.scss';

export default class Root extends Component {

    render() {

        return (
            <div className={styles.root}>
                Hello World
            </div>
        );
    }

}
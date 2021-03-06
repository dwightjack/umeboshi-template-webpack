import React from 'react';
import { shallow } from 'enzyme';
import { Root } from './index';

/* eslint-env jest */
describe('<Root>', () => {

    let root;

    beforeEach(() => {
        root = shallow(<Root />);
    });

    test('should render a <div> tag', () => {
        expect(root.is('div')).toBe(true);
    });

    test('should contain "Hello World"', () => {
        expect(root.text()).toBe('Hello World');
    });

});
import { shallow } from 'avoriaz';
import Root from './index';

/* eslint-env jest */
describe('<Root>', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(Root);
    });

    test('should render a <div> tag', () => {
        expect(wrapper.is('div')).toBe(true);
    });

    test('should contain "Hello World"', () => {
        expect(wrapper.text().trim()).toBe('Hello World');
    });

});
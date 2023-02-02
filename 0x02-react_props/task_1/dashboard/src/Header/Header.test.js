import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Testing <Header /> Component', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render a h1 tag', () => {
        expect(wrapper.find('h1')).toBeDefined();
    });

    it('should render an img tag', () => {
        expect(wrapper.find('img')).toBeDefined();
    });
});
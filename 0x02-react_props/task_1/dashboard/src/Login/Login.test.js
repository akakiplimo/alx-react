import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Testing <Login /> Component', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render 2 input tags', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render 2 label tags', () => {
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
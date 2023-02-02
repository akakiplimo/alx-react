import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Testing <Footer /> Component', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists());
    });

    it('should at the very least render the text “Copyright”', () => {
        expect(wrapper.find("Copyright").at(0)).toBeDefined();
    });
});
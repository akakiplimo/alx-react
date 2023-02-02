import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

describe('<App /> Component Tests', () => {

    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('Renders without crashing', () => {
        expect(app.exists());
    });

    it('App component contains the Notifications component', () => {
        expect(app.containsMatchingElement(<Notifications />)).toEqual(true);
    });

    it('App component contains the Header component', () => {
        expect(app.containsMatchingElement(<Header />)).toEqual(true);
    });

    it('App component contains the Login component', () => {
        expect(app.containsMatchingElement(<Login />)).toEqual(true);
    });

    it('App component contains the Footer component', () => {
        expect(app.containsMatchingElement(<Footer />)).toEqual(true);
    });

});
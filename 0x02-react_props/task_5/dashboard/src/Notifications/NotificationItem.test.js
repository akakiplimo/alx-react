import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("Test <NotificationItem />"), () => { 

    let wrapper;

    it("Notification Item renders without crashing", () => {
        wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());    
    });

    it("Notification Item renders the correct html by passing dummy type and value props", () => {
        wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find("li").text()).toBe("test");
        expect(wrapper.find("li").prop("data")).toBe("default");
    });

    it("Notification Item renders the correct html by passing a default html prop", () => {
        wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.find("li").html()).toBe("<li><u>test</u></li>");
    })
};
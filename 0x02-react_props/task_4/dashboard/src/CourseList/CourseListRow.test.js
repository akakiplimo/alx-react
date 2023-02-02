import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe(" Test <CourseListRow />", () => {
    let wrapper;

    it("When isHeader is true check to test the component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
        wrapper = shallow(<CourseListRow isHeader={true}  textFirstCell="first cell test"/>);
        expect(wrapper.find("th").length).toEqual(1);
        expect(wrapper.find("th").prop(colSpan)).toEqual(2);
        expect(wrapper.find("th").text()).toEqual("first cell test");
    });

    it("When isHeader is true check  to test the component renders two cells when textSecondCell is present", () => {
        wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test" textSecondCell="second cell test" />);
        expect(wrapper.find("th").length).toEqual(2);
        expect(wrapper.find("th").at(0).text()).toEqual("first cell test");
        expect(wrapper.find("th").at(1).text()).toEqual("second cell test");
    });

    it("When isHeader is false check to test the component renders correctly two td elements within a tr element", () => {
        wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first cell test" textSecondCell="second cell test"/>);
        expect(wrapper.find("td").length).toEqual(2);
        expect(wrapper.find("td").at(0).text()).toEqual("first cell test");
        expect(wrapper.find("td").at(1).text()).toEqual("second cell test");
    });
});
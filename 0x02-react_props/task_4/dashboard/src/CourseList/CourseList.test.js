import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe(" Test <CourseList/>", () => {
    let wrapper;

    it("CourseList Component renders without crashing", () => {
       wrapper = shallow(<CourseList />);
       expect(wrapper.exists());
    });

    it("Renders the 5 different <CourseListRow /> items", () => {
        wrapper = shallow(<CourseListRow />);
        expect(wrapper.find("CourseListRow")).toHaveLength(5);
    });
});
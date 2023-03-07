import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("Test Action types and creators", function() {
    it("selects course", () => {
        const courseSelected = selectCourse(1);
        expect(courseSelected).toEqual({
            type: SELECT_COURSE,
            index: 1
        });
    });

    it("unselects course", () => {
        const courseUnselected = unSelectCourse(1);
        expect(courseUnselected).toEqual({
            type: UNSELECT_COURSE,
            index: 1
        });
    });

});


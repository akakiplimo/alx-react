import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

export const selectCourse = (index) => {
  return { type: SELECT_COURSE, index };
};

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const unSelectCourse = (index) => {
  return { type: UNSELECT_COURSE, index };
};

export const boundUnselectCourse = (index) => dispatch(unSelectCourse(index));

// export const fetchCourseSucess = (index) => {
//   return {type: FETCH_COURSE_SUCCESS, index };
// }
// export const boundFetchCourseSucess = index => dispatch(fetchCourseSucess(index));

import { Map, setIn } from "immutable";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";
import coursesNormalizer from "../schema/courses";

export const INITIAL_STATE = Map([]);

export default function courseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      Object.keys(normalizedData).map((key) => {
        normalizedData[key].isSelected = false;
      });
      return state.merge(normalizedData);

    case SELECT_COURSE:
      return setIn(state, [String(action.index), "isSelected"], true);

    case UNSELECT_COURSE:
      return setIn(state, [String(action.index), "isSelected"], false);

    default:
      return state;
  }
}

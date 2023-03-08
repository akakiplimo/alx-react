import courseReducer from "./courseReducer";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";
import { Map } from "immutable";
import coursesNormalizer from "../schema/courses";

describe("courseReducer", () => {
  it("Tests that the default state returns an empty arr", () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(Map());
  });

  it("FETCH_COURSE_SUCCESS", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          credit: 40,
        },
      ],
    };

    const expectedData = {
      1: { credit: 60, id: 1, isSelected: false, name: "ES6" },
      2: { credit: 20, id: 2, isSelected: false, name: "Webpack" },
      3: { credit: 40, id: 3, isSelected: false, name: "React" },
    };

    const state = courseReducer(undefined, action);
    expect(state).toEqual(Map(expectedData));
  });

  it("SELECT_COURSE", () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const normalizedInit = Map(coursesNormalizer(initialState));

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const normalizedExpected = Map(coursesNormalizer(expectedData));

    const state = courseReducer(normalizedInit, action);
    expect(state).toEqual(normalizedExpected);
  });

  it("UNSELECT_COURSE", () => {
    const initialState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const normalizedInit = Map(coursesNormalizer(initialState));

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const expectedData = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];

    const normalizedExpected = Map(coursesNormalizer(expectedData));

    const state = courseReducer(normalizedInit, action);
    expect(state).toEqual(normalizedExpected);
  });
});

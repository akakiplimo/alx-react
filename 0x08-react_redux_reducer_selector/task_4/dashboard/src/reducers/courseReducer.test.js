import courseReducer from "./courseReducer";
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "../actions/courseActionTypes";

describe('courseReducer', () => {
    it('Tests that the default state returns an empty arr', () => {
      const state = courseReducer(undefined, {});
      expect(state).toEqual([]);
    });
  
    it('FETCH_COURSE_SUCCESS', () => {
      const action = {
        type: FETCH_COURSE_SUCCESS,
        data: [
          {
            id: 1,
            name: 'ES6',
            credit: 60,
          },
          {
            id: 2,
            name: 'Webpack',
            credit: 20,
          },
          {
            id: 3,
            name: 'React',
            credit: 40,
          },
        ],
      };
  
      const expectedData = [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ];
  
      const state = courseReducer(undefined, action);
      expect(state).toEqual(expectedData);
    });
  
    it('SELECT_COURSE', () => {
      const initialState = [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ];
  
      const action = {
        type: SELECT_COURSE,
        index: 2,
      };
  
      const expectedData = [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: true,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ];
  
      const state = courseReducer(initialState, action);
      expect(state).toEqual(expectedData);
    });
  
    it('UNSELECT_COURSE', () => {
      const initialState = [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: true,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ];
  
      const action = {
        type: UNSELECT_COURSE,
        index: 2,
      };
  
      const expectedData = [
        {
          id: 1,
          name: 'ES6',
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          isSelected: false,
          credit: 40,
        },
      ];
  
      const state = courseReducer(initialState, action);
      expect(state).toEqual(expectedData);
    });
  });
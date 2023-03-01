import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";

export const INITIAL_STATE = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// use INITIAL_STATE as the default state
export default function uiReducer(state = INITIAL_STATE, action) {
  // reducer fuction will look at the action type field to decide what to do
  switch (action.type) {
    // Do something here based on the different types of actions
    case DISPLAY_NOTIFICATION_DRAWER: {
      // we then return a new state object
      return {
        // get all the existing state data
        ...state,
        // with the new state attributes
        isNotificationDrawerVisible: true,
      };
    }
    case HIDE_NOTIFICATION_DRAWER: {
      // we then return a new state object
      return {
        // get all the existing state data
        ...state,
        // with the new state attributes
        isNotificationDrawerVisible: false,
      };
    }
    case LOGIN_SUCCESS: {
      // we then return a new state object
      return {
        // get all the existing state data
        ...state,
        // with the new state attributes
        isUserLoggedIn: true,
      };
    }
    case LOGIN_FAILURE: {
      // we then return a new state object
      return {
        // get all the existing state data
        ...state,
        // with the new st  ate attributes
        isUserLoggedIn: false,
      };
    }
    case LOGOUT: {
      // we then return a new state object
      return {
        // get all the existing state data
        ...state,
        // with the new state attributes
        isUserLoggedIn: false,
      };
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}

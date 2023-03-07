import { Map } from "immutable";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "../actions/uiActionTypes";

// Application state is always a plain JS object/array
export const INITIAL_STATE = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// use INITIAL_STATE as the default state
export default function uiReducer(state = Map(INITIAL_STATE), action) {
  // reducer fuction will look at the action type field to decide what to do
  switch (action.type) {
    // Do something here based on the different types of actions
    case DISPLAY_NOTIFICATION_DRAWER:
      // set the new state using immutableJs Map.set then return it
      // returns a completely new object
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      // we then return a new state object
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      // we then return a new state object
      return state.set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
      // we then return a new state object
      return state.set('isUserLoggedIn', false);

    case LOGIN:
      return state.set('user', action.user);

    case LOGOUT:
      // we then return a new state object
      return state.set('isUserLoggedOut', false).set("user", null);

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}

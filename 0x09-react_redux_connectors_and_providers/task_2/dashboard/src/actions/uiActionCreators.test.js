import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from "./uiActionCreators";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";


const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe("Test UI Action Types & Creators", () => {
  it("should create an action to login", () => {
    const user = { email: "email@example.com", password: "password" };
    const expectedRes = { type: LOGIN, user: user };
    const res = login(user.email, user.password);
    expect(res).toEqual(expectedRes);
  });

  it("should create an action to logout", () => {
    const expectedRes = { type: LOGOUT };
    const res = logout();
    expect(res).toEqual(expectedRes);
  });

  it("should create an action to display notification drawer", () => {
    const expectedRes = { type: DISPLAY_NOTIFICATION_DRAWER };
    const res = displayNotificationDrawer();
    expect(res).toEqual(expectedRes);
  });

  it("should create an action to hide notification drawer", () => {
    const expectedRes = { type: HIDE_NOTIFICATION_DRAWER };
    const res = hideNotificationDrawer();
    expect(res).toEqual(expectedRes);
  });

  it("Verify response is correct if the API returns the right response", () => {
    const store = mockStore({});
    return store.dispatch(loginRequest())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login())
      expect(actions[1]).toEqual(LOGIN_SUCCESS)
    })
  });

  it("Verify response is correct if the API returns the right response", () => {
    const store = mockStore({});
    return store.dispatch(loginRequest())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login())
      expect(actions[1]).toEqual(LOGIN_SUCCESS)
    })
  });

  it("Verify response is correct if the API query fails", () => {
    const store = mockStore({});
    return store.dispatch(loginRequest())
    .catch(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(login())
      expect(actions[1]).toEqual(LOGIN_FAILURE)
    })
  });
});

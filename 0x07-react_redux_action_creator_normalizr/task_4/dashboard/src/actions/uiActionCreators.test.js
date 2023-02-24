import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("Test UI Action Types & Creators", () => {
  it("should create an action to login", () => {
    const user = { email: "email@example.com", password: "password" };
    const expectedRes = { type: LOGIN, user: user };
    const res = login(user.email, user.password);
    expect(res).toEqual(expectedRes);
  });

  it("should create an action to logout", () => {
    const expectedRes = { type: LOGOUT};
    const res = logout();
    expect(res).toEqual(expectedRes);
  });

  it("should create an action to display notification drawer", () => {
    const expectedRes = { type: DISPLAY_NOTIFICATION_DRAWER};
    const res = displayNotificationDrawer();
    expect(res).toEqual(expectedRes);
  });

  it("should create an action to hide notification drawer", () => {
    const expectedRes = { type: HIDE_NOTIFICATION_DRAWER};
    const res = hideNotificationDrawer();
    expect(res).toEqual(expectedRes);
  });
});

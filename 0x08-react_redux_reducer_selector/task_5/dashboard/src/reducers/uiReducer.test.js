import { toJS } from "immutable";
import uiReducer, { INITIAL_STATE } from "./uiReducer";
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("uiReducer", function () {
  it("state returned equals the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(INITIAL_STATE);
  });

  it("equals the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(INITIAL_STATE);
  });

  it("when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...INITIAL_STATE,
      isNotificationDrawerVisible: true,
    });
  });
});

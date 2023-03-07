import App, { mapStateToProps } from "./App";
import uiReducer, { INITIAL_STATE } from "../reducers/uiReducer";
import { createStore } from "redux";
import { fromJS } from "immutable";

const store = createStore( uiReducer, INITIAL_STATE);

describe("Test <App /> State", () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });

  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});

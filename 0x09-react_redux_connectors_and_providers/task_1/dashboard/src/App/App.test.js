import React from "react";
import { shallow, mount } from "enzyme";
import { jest } from "@jest/globals";
import App, { mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";

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
  })
});

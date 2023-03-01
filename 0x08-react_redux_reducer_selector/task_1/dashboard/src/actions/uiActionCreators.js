import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";


export const login = (email, password) => {
  return { type: LOGIN, user: { email, password } };
};

export const boundLogin = (email, password) => dispatch(login(email, password));

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const loginRequest = (email, password) => {
  return (dispatch, getState) => {
    console.log(getState());

    dispatch(login(email, password));

    fetch("/login-success.json", {
      mode: "json",
    })
      .then((response) => response.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

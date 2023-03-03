import { Map, set, setIn } from "immutable";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const INITIAL_STATE = Map({
  notifications: [],
  filter: "DEFAULT",
});

const notificationReducter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.merge(normalizedData);

    case MARK_AS_READ:
      return setIn(
        state,
        ["notifications", String(action.index), "isRead"],
        true
      );

    case SET_TYPE_FILTER:
      return set(state, "filter", action.filter);

    default:
      return state;
  }
};

export default notificationReducter;

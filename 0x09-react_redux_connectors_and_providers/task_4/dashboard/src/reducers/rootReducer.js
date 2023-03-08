import courseReducer, {
  INITIAL_STATE as initialCourseState,
} from "./courseReducer";
import notificationReducer, {
  INITIAL_STATE as initialNotificationState,
} from "./notificationReducer";
import uiReducer, { INITIAL_STATE as initialUiState } from "./uiReducer";
import { Map } from "immutable";

export const initialState = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(initialUiState),
};

const rootReducer = {
  course: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;

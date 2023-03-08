import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotifationFilter } from "./notificationActionCreators";

describe("notification action types and creators", () => {
    it("should create an action to mark as read", () => {
        const expectedResult = {
            type: MARK_AS_READ,
            index: 1
          };
        const result = markAsRead(1);
        expect(result).toEqual(expectedResult);
    });

    it("should create an action to sert a notification filter", () => {
        const expectedResult = {
            type: SET_TYPE_FILTER,
            filter: "DEFAULT"
        };

        const result = setNotifationFilter(NotificationTypeFilters.DEFAULT);
        expect(result).toEqual(expectedResult);
    });
});
import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("<Notifications /> Component Tests", () => {
  let notifications;

  beforeEach(() => {
    notifications = shallow(<Notifications />);
  });

  it("Renders without crashing", () => {
    expect(notifications).toBeDefined();
  });

  it("renders three list items", () => {
    expect(notifications.find("NotificationItem")).toHaveLength(3);
  });

  it("renders the correct text", () => {
    expect(notifications.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("displays menu item when displayDrawer is false", () => {
    expect(notifications.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(notifications.find(".Notifications")).toHaveLength(0);
  });
});

describe("<Notifications displayDrawer={true} /> Component Tests", () => {
  let notifications;

  beforeEach(() => {
    notifications = shallow(<Notifications displayDrawer={true} />);
  });

  it("displays menu item when displayDrawer is true", () => {
    expect(notifications.find(".menuItem")).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(notifications.find(".Notifications")).toHaveLength(1);
  });
});

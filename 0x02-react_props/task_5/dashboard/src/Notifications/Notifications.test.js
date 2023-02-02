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

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual('New course available');
  });
});

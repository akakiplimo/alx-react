// Import the JSON data from notifications.json
// Create a function named getAllNotificationsByUser that accepts userId as an argument
// Return a list containing all the context objects from the notifications.json data
// when the author id is the same as the userId

import * as notificationItem from "../../dist/notifications.json";
import { normalize, schema } from "normalizr";

// User schema defined
const user = new schema.Entity("users");

// Message schema defined
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

// Notification schema defined
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedData = normalize(notificationItem, [notification]);

export default function  getAllNotificationsByUser (userId){
  const entityNotification = normalizedData.entities.notifications;
  const entityMessage = normalizedData.entities.messages;
  const data = [];

  for (let item in entityNotification) {
    if (entityNotification[item].author === userId) {
      const contextMessage = entityNotification[item].context;
      data.push(entityMessage[contextMessage]);
    }
  }

  return data;
};

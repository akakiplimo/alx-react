// Import the JSON data from notifications.json
// Create a function named getAllNotificationsByUser that accepts userId as an argument
// Return a list containing all the context objects from the notifications.json data
// when the author id is the same as the userId

import * as notificationItem from "../../notifications.json";
import { normalize, schema } from "normalizr";

export default getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

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

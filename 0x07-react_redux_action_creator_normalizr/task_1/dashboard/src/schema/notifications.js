// Import the JSON data from notifications.json
// Create a function named getAllNotificationsByUser that accepts userId as an argument
// Return a list containing all the context objects from the notifications.json data
// when the author id is the same as the userId

import * as notificationItem from "../../notifications.json";

export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

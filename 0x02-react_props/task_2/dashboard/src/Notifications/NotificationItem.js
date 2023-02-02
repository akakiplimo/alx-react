import React from "react";

export default function NotificationItem({ type, html, value }) {
  return value ? (
    <li data={type}>{value}</li>
  ) : (
    <li data={type} dangerouslySetInnerHTML={{ __html: html }}></li>
  );
}

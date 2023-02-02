import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

export default function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your Notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button
            style={{
              position: "absolute",
              top: "7px",
              right: "7px",
              border: "none",
              background: "none",
              padding: "0",
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            <img
              style={{
                display: "inline",
                marginTop: "5px",
                marginRight: "5px",
                padding: "0",
              }}
              src={closeIcon}
              alt="Close"
              width="15px"
            />
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

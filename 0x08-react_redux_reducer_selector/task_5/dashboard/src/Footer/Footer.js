import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { user } from "../App/AppContext";

function Footer() {
  console.log(user.isLoggedIn);
  return (
    <div className="App-footer">
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
}

export default Footer;

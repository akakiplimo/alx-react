import React from "react";
import { connect } from "react-redux";
import { getFooterCopy, getFullYear } from "../utils/utils";
import PropTypes from 'prop-types'

function Footer({ user }) {
  console.log(user);
  return (
    <div className="App-footer">
      {user && <a href="#">Contact us</a>}
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

export default connect(mapStateToProps, null)(Footer);

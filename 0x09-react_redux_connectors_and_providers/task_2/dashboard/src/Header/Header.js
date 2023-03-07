import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";
import { logout } from "../actions/uiActionCreators";

const headerStyles = StyleSheet.create({
  h1: {
    marginLeft: "10rem",
    float: "right",
    flex: 2,
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },

  appHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#E11D3F",
    borderBottom: "1px solid #E11D3F",
    width: "100%",
    boxSizing: "border-box",
  },

  appLogo: {
    maxHeight: "200px",
    maxWidth: "200px",
    height: "auto",
    width: "auto",
    flex: 1,
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logout } = this.props;
    return (
      <div className={css(headerStyles.appHeader)}>
        <img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
        <h1 className={css(headerStyles.h1)}>School dashboard</h1>
        {user && (
          <section id="logoutSection">
            Welcome {user.email}{" "}
            <a href="" onClick={logout}>
              (logout)
            </a>
          </section>
        )}
      </div>
    );
  }
}

Header.contextType = AppContext;

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);

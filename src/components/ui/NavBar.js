import React from "react";
import { browserHistory, Link } from "react-router";

export class NavBar extends React.Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    browserHistory.push("/login");
  }

  renderNonLoggedNav() {
    return (
      <div className="navbar navbar-inverse navbar-fixed-top pohina-pad" id="navbar">
        <div className="container">
          <div className="navbar-header">
            <Link to="/">
              <img className="pohina-navbar-logo" src="img/elo_logo.png" />
            </Link>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse" id="navbar-main">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Frontpage</Link>
              </li>

              <li>
                <Link to="/user/me">Me</Link>
              </li>
            </ul>

            <form id="signin" className="navbar-form navbar-right" role="form">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="ion-pound"></i>
                </span>
                <input id="email" type="email" className="form-control" name="email" value="" placeholder="Email Address" />
              </div>

              <div className="input-group">
                <span className="input-group-addon">
                  <i className="ion-locked"></i>
                </span>
                <input id="password" type="password" className="form-control" name="password" value="" placeholder="Password" />
              </div>

              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderUserNav() {
    const { user } = this.props;
    return (
      <div className="ui horizontal pointing menu">
        <Link className="item" to="/">FrontPage</Link>
        <Link className="item" to="/user/me">{ user.firstname }</Link>
        <a className="item" onClick={ this.handleLogout }>Logout</a>
      </div>
    );
  }

  renderAdminNav() {
    const { user } = this.props;
    return (
      <div className="ui horizontal pointing menu">
        <Link className="item" to="/">FrontPage</Link>
        <Link className="item" to="/user/me">{ user.firstname }</Link>
        <Link className="item" to="/user">All users</Link>
        <a className="item" onClick={ this.handleLogout }>Logout</a>
      </div>
    );
  }

  renderNav() {
    const isAdmin = this.props.user.role === "admin";
    return (
      <div>
        { isAdmin ? this.renderAdminNav() : this.renderUserNav() }
      </div>
    );
  }

  render() {
    const loggedIn = this.props.user.role !== undefined;
    return (
      <div id="nav">
        { loggedIn ? this.renderNav() : this.renderNonLoggedNav() }
      </div>
    );
  }
}

import { connect } from "react-redux";

import { logout } from "actions/auth";

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

import React from "react";
import { Link } from "react-router";

export default class UserShow extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {
        id: 1,
        name: "asdf",
        reputation: 12
      }
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <h2>I AM: { user.name }</h2>
        <p>MY GLORY: { user.reputation }</p>
      </div>
    );
  }
}

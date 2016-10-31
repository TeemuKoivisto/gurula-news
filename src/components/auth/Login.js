import React from "react";

export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <h2>LOGIN TO CLAIM YOUR GLORY</h2>
        <input
          placeholder="Your ad-account"
        />
        <input
          placeholder="Your real-name"
        />
        <button>
          ENTER
        </button>
      </div>
    );
  }
}

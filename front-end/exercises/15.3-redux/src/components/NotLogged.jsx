import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotLogged extends Component {
  render() {
    return(
      <div>
        <h4>
          Login não realizado!
        </h4>
        <Link to="/login">
          <button type="button" >
            Login
          </button>
        </Link>
      </div>
    );
  }
}

import $ from "jquery";
import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const RedSpan = styled.span`
  font-size: 12px;
  color: red;
`;

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  };

  handleTextChange = e => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  login = e => {
    e.preventDefault();
    if (this.Validate("login")) {
      this.props
        .login({ ...this.state })
        .then(result => {
          this.props.setBadges(result["badges"]);
          this.props.setLoggedIn(true);
          this.props.setUserName(result["username"]);
          this.props.setPassword(result["password"]);
          this.props.setId(result["_id"]);
          this.props.setPlayer1Team(result["team"]);
          this.props.setPlayerOneName(this.state.username);
        })
        .catch(err =>
          this.setState({
            username: "",
            password: "",
            message: err.response.data
          })
        );
    }
  };

  signUp = e => {
    e.preventDefault();
    if (this.Validate("signup")) {
      this.props
        .signUp({ ...this.state })
        .then(res => {
          this.setState({
            message: res.data
          });
        })
        .catch(err =>
          this.setState({
            username: "",
            password: "",
            message: err.response.data
          })
        );
    }
  };

  Validate = type => {
    let usernameValue = $(document.getElementById("username")).val();
    let passwordValue = $(document.getElementById("password")).val();
    if (usernameValue === "") {
      this.setState({ message: "Please enter a Username!" });
      return false;
    } else if (passwordValue === "") {
      this.setState({ message: "Please enter a Password!" });
      return false;
    } else {
      if (type === "signup") {
        //check for duplicates
        let foundExisting = false;
        this.props.getAllUsers().then(res => {
          for (let i = 0; i < res.length; i++) {
            if (res[i]["username"] === this.state.username) {
              //found existing user
              foundExisting = true;
              this.setState({
                message: "Account exists with given Username."
              });
            }
            return foundExisting;
          }
        });
      } else {
        return true;
      }
    }
  };

  render() {
    return (
      <div>
        <hr />
        <div>
          Username:
          <TextField
            onChange={this.handleTextChange}
            id="username"
            label="Username"
            value={this.state.username}
            variant="outlined"
          />
          <br />
          Password:
          <TextField
            type="password"
            onChange={this.handleTextChange}
            id="password"
            label="Password"
            value={this.state.password}
            variant="outlined"
          />
        </div>
        <hr />
        <div>
          <button
            type="submit"
            variant="contained"
            className="btn btn-dark"
            onClick={this.login}
          >
            Login
          </button>
          &nbsp; &nbsp;
          <button
            type="submit"
            variant="contained"
            className="btn btn-dark"
            onClick={this.signUp}
          >
            Sign Up
          </button>
        </div>
        <div>
          {this.state.message && <RedSpan>{this.state.message}</RedSpan>}
        </div>
      </div>
    );
  }
}

export default Login;

import $ from "jquery";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "semantic-ui-react";

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
      console.log("got through validation");

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
    } else {
      // console.log("did not get through validation");
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
      // if (type === "signup") {
      //   //check for duplicates
      //   let foundExisting = true;
      //   this.props.getAllUsers().then(res => {
      //     for (let i = 0; i < res.length; i++) {
      //       if (res[i]["username"] === this.state.username) {
      //         //found existing user
      //         foundExisting = false;
      //         this.setState({
      //           message: "Account exists with given Username."
      //         });
      //       }
      //       console.log(foundExisting);
      //       return foundExisting;
      //     }
      //   });
      // } else {
      //   return true;
      // }
      return true;
    }
  };

  render() {
    return (
      <div>
        <hr />
        <div>
          Username:
          <Input
            size="large"
            type="text"
            placeholder="Username"
            onChange={this.handleTextChange}
            id="username"
            value={this.state.username}
          />
          <br />
          Password:
          <Input
            size="large"
            type="password"
            placeholder="Password"
            onChange={this.handleTextChange}
            id="password"
            value={this.state.password}
          />
        </div>
        <hr />
        <div>
          <button className="btn btn-primary" onClick={this.login}>
            Login
          </button>
          &nbsp; &nbsp;
          <button className="btn btn-dark" onClick={this.signUp}>
            Sign Up
          </button>
        </div>
        &nbsp;
        <div>
          {this.state.message && (
            <span style={{ color: "red" }}>{this.state.message}</span>
          )}
        </div>
      </div>
    );
  }
}

export default Login;

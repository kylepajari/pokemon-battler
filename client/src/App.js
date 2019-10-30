import React, { Component } from "react";
import "./App.css";
import pokeball from "./pokeball.png";
import "isomorphic-fetch";
import cookie from "cookie";
import jwt from "jsonwebtoken";
import LoginContainer from "./Containers/LoginContainer";
import TeamBuilderContainer from "./Containers/TeamBuilderContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const cookies = cookie.parse(document.cookie);
    if (cookies.id_token) {
      const payload = jwt.verify(cookies.id_token, "secret");
      this.props.setUser(payload._doc);
    }
  }

  logout = () => {
    this.props.setLoggedIn(false);
    this.props.setMode("");
    this.props.setBattleReady(false);
    this.props.setBattleStarted(false);
    this.props.setPlayer1Team([]);
    this.props.setPlayer2Team([]);
    this.props.setPlayer1CurrentPokemon(0);
    this.props.setPlayer2CurrentPokemon(0);
    this.props.setPlayerOneName("Player One");
    this.props.setPlayerTwoName("Player Two");
    this.props.setPlayersTurn("Player One");
    this.props.setTeamSize(6);
    this.props.setBadges(0);
    this.props.setId("");
    localStorage.setItem("LoggedIn", null);
    localStorage.setItem("ID", null);
    localStorage.setItem("Badges", null);
    localStorage.setItem("UserName", null);
    localStorage.setItem("Password", null);
    localStorage.setItem("Team", null);
    localStorage.setItem("Name", null);
  };

  fillData = () => {
    this.props.setBadges(parseInt(localStorage.getItem("Badges")));
    this.props.setUserName(localStorage.getItem("UserName"));
    this.props.setPassword(localStorage.getItem("Password"));
    this.props.setId(localStorage.getItem("ID"));
    this.props.setPlayer1Team(JSON.parse(localStorage.getItem("Team")));
    this.props.setPlayerOneName(localStorage.getItem("Name"));
  };

  render() {
    let localLogged = localStorage.getItem("LoggedIn");
    if (this.props.loggedIn || localLogged === "true") {
      // if logged in, and data loaded, show team builder(main menu)
      //if logged in previously and data is in storage, fill variables with storage data
      if (this.props.id === "" && localLogged === "true") {
        this.fillData();
      }

      return (
        <div className="App">
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <span className="warningText">
            Warning: This game contains sound effects. Please keep volume at a
            reasonable level!
          </span>
          <div className="logoutBox">
            <span>Hi, {this.props.username}</span>
            <button className="btn btn-dark logoutbtn" onClick={this.logout}>
              Logout
            </button>
          </div>
          <TeamBuilderContainer />
        </div>
      );
    } else {
      // if not logged in, show login form
      return (
        <div className="App">
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <span className="warningText">
            Warning: This game contains sound effects. Please keep volume at a
            reasonable level!
          </span>
          <LoginContainer />
        </div>
      );
    }
  }
}

export default App;

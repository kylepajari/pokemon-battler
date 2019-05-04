import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    this.props.loadAllData();
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
    window.soundManager.muteAll();
  };

  render() {
    if (!this.props.loggedIn) {
      // if not logged in, show login form
      return (
        <div className="App">
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <span style={{ fontSize: "8px", color: "red", marginTop: "5px" }}>
            Warning: This game contains sound effects. Please keep volume at a
            reasonable level!
          </span>
          <LoginContainer />
        </div>
      );
    } else if (this.props.loggedIn && this.props.allData === null) {
      //if logged in, but no data loaded, show loading screen
      return (
        <div className="App">
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <h3>Loading Data...</h3>
        </div>
      );
    } else if (this.props.allData !== null && this.props.loggedIn) {
      // if logged in, and data loaded, show team builder(main menu)
      return (
        <div className="App">
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
            <div className="logoutBox">
              <span>Hi, {this.props.username}</span>
              <button className="btn btn-dark" onClick={this.logout}>
                Logout
              </button>
            </div>
          </div>
          <span style={{ fontSize: "8px", color: "red", marginTop: "5px" }}>
            Warning: This game contains sound effects. Please keep volume at a
            reasonable level!
          </span>
          <TeamBuilderContainer />
        </div>
      );
    }
  }
}

export default App;

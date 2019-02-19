import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pokeball from "./pokeball.png";
import TeamBuilder from "./Components/TeamBuilder/TeamBuilder";
import "isomorphic-fetch";
import Promise from "es6-promise-promise";
import Sound from "react-sound";
import battleTheme from "./Sounds/battleTheme.mp3";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: null,
      battleVol: 50,
      battlePlaying: Sound.status.STOPPED
    };

    this.handleBattleVol = this.handleBattleVol.bind(this);
    this.handleBattlePlaying = this.handleBattlePlaying.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=151"
    )
      .then(response => response.json())
      .then(allData => this.setState({ allData }));
  }

  handleBattleVol = () => {
    if (this.state.battleVol === 50) {
      this.setState({ battleVol: 0 });
    } else {
      this.setState({ battleVol: 50 });
    }
  };

  handleBattlePlaying = () => {
    this.setState({ battlePlaying: Sound.status.PLAYING });
  };

  render() {
    if (this.state.allData === null) {
      return (
        <div className="App">
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <h3>Loading Data...</h3>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Sound
            url={battleTheme}
            playStatus={this.state.battlePlaying}
            playFromPosition={0 /* in milliseconds */}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            volume={this.state.battleVol}
            loop={true}
          />
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <span style={{ fontSize: "8px", color: "red", marginTop: "5px" }}>
            Warning: This game contains sound effects. Please keep volume at a
            reasonable level!
          </span>
          <TeamBuilder
            data={this.state.data}
            allData={this.state.allData}
            fetchPokemon={this.fetchPokemon}
            startBattle={this.startBattle}
            handleBattleVol={this.handleBattleVol}
            handleBattlePlaying={this.handleBattlePlaying}
          />
        </div>
      );
    }
  }
}

export default App;

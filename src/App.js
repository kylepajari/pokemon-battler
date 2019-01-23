import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pokeball from "./pokeball.png";
import TeamBuilder from "./Components/TeamBuilder";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: null
    };
  }

  componentDidMount() {
    // fetch("https://pokeapi.co/api/v2/pokemon/1")
    //   .then(response => response.json())
    //   .then(data => this.setState({ data }));

    fetch(
      "https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=151"
    )
      .then(response => response.json())
      .then(allData => this.setState({ allData }));
  }

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
          <div className="title">
            <p>Pokémon Battler</p>
            <img className="pokeball" src={pokeball} alt="Pokeball" />
          </div>
          <TeamBuilder
            data={this.state.data}
            allData={this.state.allData}
            fetchPokemon={this.fetchPokemon}
            startBattle={this.startBattle}
          />
        </div>
      );
    }
  }
}

export default App;

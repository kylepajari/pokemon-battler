import React, { Component } from "react";
import "./TeamBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BattleStage from "./BattleStage";
import { CreateMoves } from "./MoveCreator";
import $ from "jquery";

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isOpen: false, //to keep track of whether dropdown is open
      currentPlayer: "Player One", //player who starts the game
      teamSize: 1, //max number of pokemon per team, adjust to allow more/less
      player1Team: [], //used to hold player one team
      player2Team: [], //used to hold player two team
      battleReady: false, //set when teams are picked
      globalLevel: 100 //level to set all pokemon too, also used to scale stats,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.addPokemon = this.addPokemon.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
  }

  componentDidMount() {
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".dropdown")).fadeIn(10);
  }

  //Returns passed string with upper-case first letter
  Capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  calcStats = (stat, baseStat, lv) => {
    const IV = 8; //average IV
    const EV = 20000; //average EV
    if (stat === "hp") {
      //use hp formula
      return Math.round(
        (((baseStat + IV) * 2 + Math.sqrt(EV) / 4) * lv) / 100 + lv + 10
      );
    } else {
      //use regular formula
      return Math.round(
        (((baseStat + IV) * 2 + Math.sqrt(EV) / 4) * lv) / 100 + 5
      );
    }
  };

  toCamelCase = str => {
    return str
      .split(" ")
      .map(function(word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  formatName = name => {
    return this.Capitalize(this.toCamelCase(name.replace("-", " ")));
  };

  movesBuilder = movesToMap => {
    let movesList = movesToMap.map((item, i) => {
      let name = this.formatName(item.move.name);
      return CreateMoves(name);
    });
    let newMoves = [];
    for (let i = 0; i < 4; i++) {
      let randomMove = movesList[Math.floor(Math.random() * movesList.length)];
      newMoves.push(randomMove);
    }
    //use return newMoves to get 4 random ones instead of all moves
    return movesList;
  };

  fetchPokemon = num => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }, () => this.addPokemon()));
  };

  addPokemon = () => {
    let pokemonObj = null;
    pokemonObj = {
      name: this.Capitalize(this.state.data.name),
      frontSprite: this.state.data.sprites.front_default,
      frontSpriteShiny: this.state.data.sprites.front_shiny,
      backSprite: this.state.data.sprites.back_default,
      backSpriteShiny: this.state.data.sprites.back_shiny,
      lv: this.state.globalLevel,
      OrigHp: this.calcStats(
        "hp",
        this.state.data.stats[5].base_stat,
        this.state.globalLevel
      ),
      hp: this.calcStats(
        "hp",
        this.state.data.stats[5].base_stat,
        this.state.globalLevel
      ),
      OrigAttack: this.calcStats(
        "attack",
        this.state.data.stats[4].base_stat,
        this.state.globalLevel
      ),
      attack: this.calcStats(
        "attack",
        this.state.data.stats[4].base_stat,
        this.state.globalLevel
      ),
      OrigDefense: this.calcStats(
        "defense",
        this.state.data.stats[3].base_stat,
        this.state.globalLevel
      ),
      defense: this.calcStats(
        "defense",
        this.state.data.stats[3].base_stat,
        this.state.globalLevel
      ),
      OrigSpeed: this.calcStats(
        "speed",
        this.state.data.stats[0].base_stat,
        this.state.globalLevel
      ),
      speed: this.calcStats(
        "speed",
        this.state.data.stats[0].base_stat,
        this.state.globalLevel
      ),
      OrigSpecialattack: this.calcStats(
        "specialattack",
        this.state.data.stats[2].base_stat,
        this.state.globalLevel
      ),
      specialattack: this.calcStats(
        "specialattack",
        this.state.data.stats[2].base_stat,
        this.state.globalLevel
      ),
      OrigSpecialdefense: this.calcStats(
        "specialdefense",
        this.state.data.stats[1].base_stat,
        this.state.globalLevel
      ),
      specialdefense: this.calcStats(
        "specialdefense",
        this.state.data.stats[1].base_stat,
        this.state.globalLevel
      ),
      types: [
        this.state.data.types.map(item => {
          return item.type.name;
        })
      ],
      moves: this.movesBuilder(this.state.data.moves),
      accuracy: 1,
      evasion: 1,
      inBattle: false,
      fainted: false,
      isConfused: false,
      isAsleep: false,
      isBound: false,
      statusCondition: "",
      turnsAsleep: 0,
      turnsConfused: 0
    };

    let player = null; //default to player one
    if (this.state.currentPlayer === "Player One") {
      player = this.state.player1Team;
    } else {
      player = this.state.player2Team;
    }

    if (player.length !== this.state.teamSize) {
      console.log("adding pokemon to " + this.state.currentPlayer + "'s Team");
      if (this.state.currentPlayer === "Player One") {
        this.state.player1Team.push(pokemonObj);
        this.setState({ player1Team: player });
      } else {
        this.state.player2Team.push(pokemonObj);
        this.setState({ player2Team: player });
      }
    }

    if (
      this.state.player1Team.length === this.state.teamSize &&
      this.state.player2Team.length === this.state.teamSize
    ) {
      console.log("both teams full! Revealing Battle button!");
      $(document.querySelector(".dropdown")).fadeOut(100);
      $(document.getElementById("BattleButton")).fadeIn(300);
    }

    if (this.state.currentPlayer === "Player One") {
      this.setState({ currentPlayer: "Player Two" });
    } else {
      this.setState({ currentPlayer: "Player One" });
    }
  };

  toggleOpen = () => {
    const currentIsOpen = this.state.isOpen;
    this.setState({ isOpen: !currentIsOpen });
  };

  startBattle = () => {
    this.setState({ battleReady: true });
    console.log("starting battle...");
    $(document.getElementById("BattleButton")).fadeOut(300);
  };

  render() {
    console.log(this.state.player1Team);

    return (
      <div className="teamBuilder">
        <div className="teamsContainer container">
          <div className="team1 col">
            <p>Player One:({this.state.player1Team.length})</p>
            <div>
              <ul>
                {this.state.player1Team.map((pokemon, i) => {
                  return (
                    <li className="sprite" key={i}>
                      <img src={pokemon.frontSprite} alt={pokemon.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="team2 col">
            <p>Player Two:({this.state.player2Team.length})</p>
            <div>
              <ul>
                {this.state.player2Team.map((pokemon, i) => {
                  return (
                    <li className="sprite" key={i}>
                      <img src={pokemon.frontSprite} alt={pokemon.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="btn-group dropdown" onClick={this.toggleOpen}>
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="dropdownMenu1"
          >
            {this.state.currentPlayer}: Select a Pokemon
          </button>
          <div
            className={`"dropdown-menu" ${
              this.state.isOpen ? "dropdown-menu show" : "dropdown-menu"
            }`}
            aria-labelledby="dropdownMenu1"
          >
            {this.props.allData.results.map((item, i) => {
              return (
                <a
                  className="dropdown-item"
                  key={i}
                  href="#!"
                  onClick={() => this.fetchPokemon(i + 1)}
                >
                  {this.Capitalize(item.name)}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            id="BattleButton"
            onClick={this.startBattle}
          >
            Battle!
          </button>
        </div>
        <BattleStage
          battleReady={this.state.battleReady}
          player1Team={this.state.player1Team}
          player2Team={this.state.player2Team}
          Capitalize={this.Capitalize}
        />
      </div>
    );
  }
}

export default TeamBuilder;

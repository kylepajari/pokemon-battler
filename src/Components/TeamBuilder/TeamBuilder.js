import React, { Component } from "react";
import "./TeamBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BattleStage from "../BattleStage/BattleStage";
import { CreateMoves } from "../MoveCreator";
import $ from "jquery";
import update from "immutability-helper";

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isOpen: false, //to keep track of whether pokemon dropdown is open
      isTeamOpen: false, //to keep track of whether team size dropdown is open
      currentPlayer: "Player One", //player who starts the game
      teamSize: 3, //max number of pokemon per team, adjust to allow more/less
      player1Team: [], //used to hold player one team
      player2Team: [], //used to hold player two team
      battleReady: false, //set when teams are picked
      globalLevel: 15 //level to set all pokemon too, also used to scale stats,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
    this.handleFainted = this.handleFainted.bind(this);
  }

  componentDidMount() {
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".pokemonList")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeIn(10);
  }

  changeTeamSize = num => {
    console.log("Changing team size to " + num);
    $(document.querySelector(".pokemonList")).fadeIn(300);
    $(document.querySelector(".teamList")).fadeOut(10);
    this.setState({ teamSize: num });
  };

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

  //MOVES LIST BUILDER FUNCTION //////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  movesBuilder = movesToMap => {
    let discardedMoves = [];
    let usableMoves = [];
    //go through moves, and create new list with objects for each one
    let movesList = movesToMap.map((item, i) => {
      let name = this.formatName(item.move.name);
      return CreateMoves(name);
    });

    //go through new object list, and place unwanted moves in serperate array
    movesList.forEach(move => {
      if (move.pp === 35) {
        discardedMoves.push(move);
      } else {
        usableMoves.push(move);
      }
    });

    let status = [];
    let damaging = [];
    //go through useable moves, and split into status/damaging arrays
    usableMoves.forEach(move => {
      if (move.power === 0) {
        status.push(move);
      } else {
        damaging.push(move);
      }
    });

    let physical = [];
    let special = [];
    //go through damaging moves, split into physical special arrays
    damaging.forEach(move => {
      if (move.category === "special") {
        special.push(move);
      } else {
        physical.push(move);
      }
    });
    console.log("Number of Physical Moves: " + physical.length);
    console.log("Number of Special Moves: " + special.length);

    //finally, go through physical, special, and status moves, and create final move list
    let finalMoves = [];

    //if pokemon has more than 4 moves available
    if (physical.length + special.length + status.length > 4) {
      console.log("pokemon has more than 4 moves, distributing...");

      for (let i = 0; i < 2; i++) {
        if (physical.length > 2) {
          let randomMove =
            physical[Math.floor(Math.random() * physical.length)];
          if (i === 0) {
            console.log(randomMove.name + " was chosen as FIRST MOVE");
          } else {
            console.log(randomMove.name + " was chosen as SECOND MOVE");
          }

          finalMoves.push(randomMove);
        } else {
          //has 2 or less special moves, add them
          finalMoves.concat(special);
        }
      }
      for (let i = 0; i < 1; i++) {
        let randomMove = special[Math.floor(Math.random() * special.length)];
        console.log(randomMove.name + " was chosen as THIRD MOVE");
        finalMoves.push(randomMove);
      }
      for (let i = 0; i < 1; i++) {
        let randomMove = status[Math.floor(Math.random() * status.length)];
        console.log(randomMove.name + " was chosen FORTH MOVE");
        finalMoves.push(randomMove);
      }
    } else {
      //pokemon has 4 or less moves, add all of them
      finalMoves = physical.concat(special, status);
    }

    return finalMoves;
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
      $(document.querySelectorAll(".dropdown")).fadeOut(100);
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

  toggleTeamOpen = () => {
    const currentIsOpen = this.state.isTeamOpen;
    this.setState({ isTeamOpen: !currentIsOpen });
  };

  startBattle = () => {
    this.state.player1Team[0].inBattle = true;
    this.state.player2Team[0].inBattle = true;
    this.setState({ battleReady: true });
    console.log("starting battle...");
    $(document.getElementById("BattleButton")).fadeOut(300);
  };

  handleFainted = (index, playersTurn) => {
    console.log("marking pokemon as fainted");
    console.log(index, playersTurn);
    if (playersTurn === "Player One") {
      this.state.player2Team[index].fainted = true;
    } else {
      this.state.player1Team[index].fainted = true;
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div className="teamBuilder">
        <div
          className="btn-group dropdown teamList"
          onClick={this.toggleTeamOpen}
        >
          <button
            type="button"
            className="btn btn-dark dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="dropdownMenu1"
          >
            Select a Team Size
          </button>
          <div
            className={`"dropdown-menu" ${
              this.state.isTeamOpen ? "dropdown-menu show" : "dropdown-menu"
            }`}
            aria-labelledby="dropdownMenu1"
          >
            <a
              className="dropdown-item"
              key="1"
              href="#!"
              onClick={() => this.changeTeamSize(1)}
            >
              1
            </a>
            <a
              className="dropdown-item"
              key="2"
              href="#!"
              onClick={() => this.changeTeamSize(2)}
            >
              2
            </a>
            <a
              className="dropdown-item"
              key="3"
              href="#!"
              onClick={() => this.changeTeamSize(3)}
            >
              3
            </a>
            <a
              className="dropdown-item"
              key="4"
              href="#!"
              onClick={() => this.changeTeamSize(4)}
            >
              4
            </a>
            <a
              className="dropdown-item"
              key="5"
              href="#!"
              onClick={() => this.changeTeamSize(5)}
            >
              5
            </a>
            <a
              className="dropdown-item"
              key="6"
              href="#!"
              onClick={() => this.changeTeamSize(6)}
            >
              6
            </a>
          </div>
        </div>
        <div
          className="btn-group dropdown pokemonList"
          onClick={this.toggleOpen}
        >
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
        <div className="teamsContainer container-fluid row">
          <div className="team1 col">
            <p>Player One:</p>
            <div>
              <ul>
                {this.state.player1Team.map((pokemon, i) => {
                  return (
                    <li
                      className={`"sprite" ${
                        pokemon.fainted ? "sprite faded" : "sprite"
                      }`}
                      key={i}
                    >
                      <img src={pokemon.frontSprite} alt={pokemon.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <BattleStage
            className="battleStage col"
            battleReady={this.state.battleReady}
            player1Team={this.state.player1Team}
            player2Team={this.state.player2Team}
            Capitalize={this.Capitalize}
            handleFainted={this.handleFainted}
          />
          <div className="team2 col">
            <p>Player Two:</p>
            <div>
              <ul>
                {this.state.player2Team.map((pokemon, i) => {
                  return (
                    <li
                      className={`"sprite" ${
                        pokemon.fainted ? "sprite faded" : "sprite"
                      }`}
                      key={i}
                    >
                      <img src={pokemon.frontSprite} alt={pokemon.name} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamBuilder;

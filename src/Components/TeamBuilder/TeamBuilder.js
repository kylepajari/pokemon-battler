import React, { Component } from "react";
import "./TeamBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BattleStage from "../BattleStage/BattleStage";
import { CreateMoves } from "../MoveCreator";
import $ from "jquery";
import BadgesContainer from "../BadgesContainer/BadgesContainer";

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isOpen: false, //to keep track of whether pokemon dropdown is open
      isTeamOpen: false, //to keep track of whether team size dropdown is open
      currentPlayer: "Player One", //player who starts the game
      playerOneName: "Player One",
      playerTwoName: "Player Two",
      mode: "",
      teamSize: 6, //max number of pokemon per team, adjust to allow more/less
      player1Team: [], //used to hold player one team
      player2Team: [], //used to hold player two team
      battleReady: false, //set when teams are picked
      globalLevel: 50 //level to set all pokemon too, also used to scale stats,
    };

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
    this.handleFainted = this.handleFainted.bind(this);
    this.singlePlayer = this.singlePlayer.bind(this);
    this.multiPlayer = this.multiPlayer.bind(this);
    this.inputNames = this.inputNames.bind(this);
    this.handleLeaderNames = this.handleLeaderNames.bind(this);
  }

  componentDidMount() {
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".pokemonList")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".teamsContainer")).fadeOut(10);
    $(document.querySelector(".badgesContainer")).fadeOut(10);
  }

  singlePlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeIn(300);
    this.setState({ mode: "Single" });
  }

  multiPlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeIn(300);
    this.setState({ mode: "Multi" });
  }

  handleLeaderNames = num => {
    switch (num) {
      case 1:
        this.setState({ playerTwoName: "Brock" });
        break;
      case 2:
        this.setState({ playerTwoName: "Misty" });
        break;
      case 3:
        this.setState({ playerTwoName: "Lt. Surge" });
        break;
      case 4:
        this.setState({ playerTwoName: "Erika" });
        break;
      case 5:
        this.setState({ playerTwoName: "Koga" });
        break;
      case 6:
        this.setState({ playerTwoName: "Sabrina" });
        break;
      case 7:
        this.setState({ playerTwoName: "Blaine" });
        break;
      case 8:
        this.setState({ playerTwoName: "Giovanni" });
        break;
      case 9:
        this.setState({ playerTwoName: "Rival" });
        break;
      default:
        this.setState({ playerTwoName: "Gym Leader" });
        break;
    }
  };

  inputNames = (player, input) => {
    if (player === "P1") {
      if (input !== "") {
        this.setState({ playerOneName: this.Capitalize(input) });
      }
      if (this.state.mode === "Single") {
        this.displayBadges();
      } else {
        $(document.querySelector(".playerOneNameDiv")).fadeOut(10);
        $(document.querySelector(".playerTwoNameDiv")).fadeIn(300);
      }
    } else if (player === "P2") {
      if (input !== "") {
        this.setState({ playerTwoName: this.Capitalize(input) });
      }
      $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
      $(document.querySelector(".teamList")).fadeIn(300);
    }
  };

  changeTeamSize = num => {
    console.log("Changing team size to " + num);
    $(document.querySelector(".teamsContainer")).fadeIn(300);
    $(document.querySelector(".pokemonList")).fadeIn(300);
    $(document.querySelector(".teamList")).fadeOut(10);
    this.setState({ teamSize: num });
  };

  displayBadges = () => {
    $(document.querySelector(".playerOneNameDiv")).fadeOut(10);
    $(document.querySelector(".badgesContainer")).fadeIn(300);
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

  fetchPokemon = (num, level, team) => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ data }, () => this.addPokemon(level, team))
      );
  };

  addPokemon = (level, team) => {
    let pokemonObj = null;
    pokemonObj = {
      name: this.Capitalize(this.state.data.name),
      frontSprite: this.state.data.sprites.front_default,
      frontSpriteShiny: this.state.data.sprites.front_shiny,
      backSprite: this.state.data.sprites.back_default,
      backSpriteShiny: this.state.data.sprites.back_shiny,
      lv: level,
      OrigHp: this.calcStats("hp", this.state.data.stats[5].base_stat, level),
      hp: this.calcStats("hp", this.state.data.stats[5].base_stat, level),
      OrigAttack: this.calcStats(
        "attack",
        this.state.data.stats[4].base_stat,
        level
      ),
      attack: this.calcStats(
        "attack",
        this.state.data.stats[4].base_stat,
        level
      ),
      OrigDefense: this.calcStats(
        "defense",
        this.state.data.stats[3].base_stat,
        level
      ),
      defense: this.calcStats(
        "defense",
        this.state.data.stats[3].base_stat,
        level
      ),
      OrigSpeed: this.calcStats(
        "speed",
        this.state.data.stats[0].base_stat,
        level
      ),
      speed: this.calcStats("speed", this.state.data.stats[0].base_stat, level),
      OrigSpecialattack: this.calcStats(
        "specialattack",
        this.state.data.stats[2].base_stat,
        level
      ),
      specialattack: this.calcStats(
        "specialattack",
        this.state.data.stats[2].base_stat,
        level
      ),
      OrigSpecialdefense: this.calcStats(
        "specialdefense",
        this.state.data.stats[1].base_stat,
        level
      ),
      specialdefense: this.calcStats(
        "specialdefense",
        this.state.data.stats[1].base_stat,
        level
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
    if (
      this.state.currentPlayer === "Player One" &&
      this.state.mode === "Multi"
    ) {
      player = this.state.player1Team;
    } else {
      player = this.state.player2Team;
    }
    if (this.state.mode === "Single") {
      if (team === undefined) {
        player = this.state.player1Team;
      }
      if (team === "team2") {
        player = this.state.player2Team;
      }
    }
    if (player.length !== this.state.teamSize) {
      if (
        this.state.currentPlayer === "Player One" &&
        this.state.mode === "Multi"
      ) {
        this.state.player1Team.push(pokemonObj);
        this.setState({ player1Team: player });
      } else if (
        this.state.currentPlayer === "Player Two" &&
        this.state.mode === "Multi"
      ) {
        this.state.player2Team.push(pokemonObj);
        this.setState({ player2Team: player });
      } else if (team === undefined) {
        this.state.player1Team.push(pokemonObj);
        this.setState({ player1Team: player });
      } else if (team === "team2") {
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

    if (
      this.state.currentPlayer === "Player One" &&
      this.state.mode === "Multi"
    ) {
      this.setState({ currentPlayer: "Player Two" });
    } else if (
      this.state.currentPlayer === "Player Two" &&
      this.state.mode === "Multi"
    ) {
      this.setState({ currentPlayer: "Player One" });
    } else {
      this.forceUpdate();
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
    const poke1 = this.state.player1Team[0];
    const poke2 = this.state.player2Team[0];
    poke1.inBattle = true;
    poke2.inBattle = true;
    this.setState({ battleReady: true });
    console.log("starting battle...");
    $(document.getElementById("BattleButton")).fadeOut(300);
  };

  handleFainted = (index, playersTurn, faintedFromRecoil) => {
    let poke = null;
    if (playersTurn === "Player One") {
      if (faintedFromRecoil) {
        poke = this.state.player1Team[index];
        poke.fainted = true;
      } else {
        poke = this.state.player2Team[index];
        poke.fainted = true;
      }
    } else {
      //player twos turn
      if (faintedFromRecoil) {
        poke = this.state.player2Team[index];
        poke.fainted = true;
      } else {
        poke = this.state.player1Team[index];
        poke.fainted = true;
      }
    }
    this.forceUpdate();
  };

  render() {
    let playerName = null;
    if (this.state.currentPlayer === "Player One") {
      playerName = this.state.playerOneName;
    } else {
      playerName = this.state.playerTwoName;
    }
    return (
      <div className="teamBuilder">
        <button
          type="button"
          className="btn btn-dark"
          id="btnSinglePlayer"
          onClick={this.singlePlayer}
        >
          Single Player (Gym Leader Challenge)
        </button>
        <button
          type="button"
          className="btn btn-dark"
          id="btnMultiPlayer"
          onClick={this.multiPlayer}
        >
          Multi-Player (Local Battle)
        </button>
        <div className="playerOneNameDiv">
          <p>Enter a name for Player One:</p>
          <input
            type="text"
            id="playerOneNameBox"
            placeholder="Player One..."
          />
          <button
            type="button"
            onClick={() =>
              this.inputNames(
                "P1",
                document.getElementById("playerOneNameBox").value
              )
            }
          >
            Enter
          </button>
        </div>
        <div className="playerTwoNameDiv">
          <p>Enter a name for Player Two:</p>
          <input
            type="text"
            id="playerTwoNameBox"
            placeholder="Player Two..."
          />
          <button
            type="button"
            onClick={() =>
              this.inputNames(
                "P2",
                document.getElementById("playerTwoNameBox").value
              )
            }
          >
            Enter
          </button>
        </div>
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
            {playerName}: Select a Pokemon
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
                  onClick={() =>
                    this.fetchPokemon(i + 1, this.state.globalLevel)
                  }
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
        <div>
          <BadgesContainer
            fetchPokemon={this.fetchPokemon}
            handleLeaderNames={this.handleLeaderNames}
          />
        </div>
        <div className="teamsContainer container-fluid row">
          <div className="team1 col">
            <p>{this.state.playerOneName}:</p>
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
            playerOneName={this.state.playerOneName}
            playerTwoName={this.state.playerTwoName}
            mode={this.state.mode}
          />
          <div className="team2 col">
            <p>{this.state.playerTwoName}:</p>
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

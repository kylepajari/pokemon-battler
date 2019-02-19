import React, { Component } from "react";
import "./TeamBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import BattleStage from "../BattleStage/BattleStage";
import { CreateMoves } from "../MoveCreator";
import { CryAssign } from "../CryAssign";
import $ from "jquery";
import BadgesContainer from "../BadgesContainer/BadgesContainer";
import { RandomNumberGenerator } from "../RandomNumberGenerator";
import { MatchIconWithType } from "../MatchTypeIcon";

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentPokemon: null,
      currentPokemonName: "",
      currentPokemonTypes: [],
      currentPokemonSprite: "",
      currentPokemonHeight: 0,
      currentPokemonWeight: 0,
      currentPokemonId: 0,
      currentPokemonAtk: 0,
      currentPokemonDef: 0,
      currentPokemonHP: 0,
      currentPokemonSpd: 0,
      currentPokemonSpcAtk: 0,
      currentPokemonSpcDef: 0,
      sprite: null,
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
    this.cpuVScpu = this.cpuVScpu.bind(this);
    this.inputNames = this.inputNames.bind(this);
    this.handleLeaderNames = this.handleLeaderNames.bind(this);
  }

  componentDidMount() {
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".teamsContainer")).fadeOut(10);
    $(document.querySelector(".badgesContainer")).fadeOut(10);
    // this.getSprites();
  }

  singlePlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeIn(300);
    this.setState({ mode: "Single" });
  }

  multiPlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeIn(300);
    this.setState({ mode: "Multi" });
  }

  cpuVScpu() {
    this.setState({ mode: "CPUVSCPU" });
    this.setState({ playerOneName: "CPU1" });
    this.setState({ playerTwoName: "CPU2" });
    // this.forceUpdate();
    console.log(this.state.mode);

    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeIn(300);
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
    $(document.querySelector(".pokemonSheetContainer")).removeClass("deRender");
    $(document.querySelector(".teamList")).fadeOut(10);
    this.setState({ teamSize: num });
    if (this.state.mode === "CPUVSCPU") {
      //build cpu teams
      let rand = 0;
      //build CPU one team
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team1");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team1");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team1");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team1");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team1");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team1");

      //build CPU two team
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team2");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team2");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team2");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team2");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team2");
      rand = Math.round(RandomNumberGenerator(1, 151));
      this.fetchPokemon(rand, 50, "team2");

      $(document.querySelector(".teamList")).fadeOut(10);
      $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
      $(document.querySelector(".teamsContainer")).fadeIn(300);
    }
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

      for (let i = 0; i < 1; i++) {
        // if (physical.length > 2) {
        //   let randomMove =
        //     physical[Math.floor(Math.random() * physical.length)];

        //   if (i === 0) {
        //     console.log(randomMove.name + " was chosen as FIRST MOVE");
        //   } else {
        //     console.log(randomMove.name + " was chosen as SECOND MOVE");
        //   }

        //   finalMoves.push(randomMove);
        // } else {
        //   //has 2 or less physical moves, add them
        //   finalMoves.concat(physical);
        // }
        let randomMove = physical[Math.floor(Math.random() * physical.length)];
        console.log(randomMove.name + " was chosen as FIRST MOVE");
        finalMoves.push(randomMove);
      }
      for (let i = 0; i < 2; i++) {
        if (special.length > 2) {
          //on second move
          let randomMove = special[Math.floor(Math.random() * special.length)];
          if (i === 1) {
            do {
              randomMove = special[Math.floor(Math.random() * special.length)];
            } while (finalMoves[1].name === randomMove.name);
          }

          if (i === 0) {
            console.log(randomMove.name + " was chosen as SECOND MOVE");
          } else {
            console.log(randomMove.name + " was chosen as THIRD MOVE");
          }

          finalMoves.push(randomMove);
        } else {
          //has 2 or less special moves, add them
          finalMoves.concat(special);
        }
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

  modalPokemon = num => {
    console.log(num);

    let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch(url)
      .then(response => response.json())
      .then(currentPokemon =>
        this.setState({ currentPokemon }, () => this.fillmodalPokeInfo())
      );
  };

  fillmodalPokeInfo = () => {
    let level = this.state.globalLevel;
    this.setState({
      currentPokemonName: this.state.currentPokemon.name,
      currentPokemonSprite: this.state.currentPokemon.sprites.front_default,
      currentPokemonTypes: this.state.currentPokemon.types,
      currentPokemonHeight: this.state.currentPokemon.height,
      currentPokemonWeight: this.state.currentPokemon.weight,
      currentPokemonId: this.state.currentPokemon.id,
      currentPokemonHP: this.calcStats(
        "hp",
        this.state.currentPokemon.stats[5].base_stat,
        level
      ),
      currentPokemonAtk: this.calcStats(
        "attack",
        this.state.currentPokemon.stats[4].base_stat,
        level
      ),
      currentPokemonDef: this.calcStats(
        "defense",
        this.state.currentPokemon.stats[3].base_stat,
        level
      ),
      currentPokemonSpd: this.calcStats(
        "speed",
        this.state.currentPokemon.stats[0].base_stat,
        level
      ),
      currentPokemonSpcAtk: this.calcStats(
        "specialattack",
        this.state.currentPokemon.stats[2].base_stat,
        level
      ),
      currentPokemonSpcDef: this.calcStats(
        "specialdefense",
        this.state.currentPokemon.stats[1].base_stat,
        level
      )
    });
  };

  // getSprites = () => {
  //   let allPokesArr = [];
  //   for (let i = 1; i < 151; i++) {
  //     let url = "https://pokeapi.co/api/v2/pokemon/" + i;
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(result => {
  //         allPokesArr.push(result);
  //       });
  //   }
  //   console.log(allPokesArr);

  //   this.setState({ allPokes: allPokesArr });
  // };

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
      cry: CryAssign(this.Capitalize(this.state.data.name)),
      accuracy: 1,
      evasion: 1,
      inBattle: false,
      fainted: false,
      isConfused: false,
      isAsleep: false,
      isBound: false,
      turnsBound: 0,
      statusCondition: "",
      turnsAsleep: 0,
      turnsConfused: 0,
      isTransformed: false
    };

    let player = null; //default to player one
    if (this.state.mode === "Multi") {
      if (this.state.currentPlayer === "Player One") {
        player = this.state.player1Team;
      } else if (this.state.currentPlayer === "Player Two") {
        player = this.state.player2Team;
      }
    } else if (this.state.mode === "Single") {
      if (team === undefined) {
        player = this.state.player1Team;
      } else if (team === "team2") {
        player = this.state.player2Team;
      }
    } else if (this.state.mode === "CPUVSCPU") {
      if (team === "team1") {
        player = this.state.player1Team;
      } else if (team === "team2") {
        player = this.state.player2Team;
      }
    }

    if (player.length !== this.state.teamSize) {
      if (this.state.mode === "Multi") {
        if (this.state.currentPlayer === "Player One") {
          this.state.player1Team.push(pokemonObj);
          this.setState({ player1Team: player });
        } else if (this.state.currentPlayer === "Player Two") {
          this.state.player2Team.push(pokemonObj);
          this.setState({ player2Team: player });
        }
      } else if (this.state.mode === "Single") {
        if (team === undefined) {
          this.state.player1Team.push(pokemonObj);
          this.setState({ player1Team: player });
        } else if (team === "team2") {
          this.state.player2Team.push(pokemonObj);
          this.setState({ player2Team: player });
        }
      } else if (this.state.mode === "CPUVSCPU") {
        if (team === "team1") {
          this.state.player1Team.push(pokemonObj);
          this.setState({ player1Team: player });
        } else if (team === "team2") {
          this.state.player2Team.push(pokemonObj);
          this.setState({ player2Team: player });
        }
      }
    }

    if (
      this.state.player1Team.length === this.state.teamSize &&
      this.state.player2Team.length === this.state.teamSize
    ) {
      $(document.querySelectorAll(".dropdown")).fadeOut(100);
      $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
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

  //TYPES FUNCTION ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  Types = array => {
    var typesList = array.map((item, i) => {
      return MatchIconWithType(item.type.name);
    });
    return <span>{typesList}</span>;
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
        <button
          type="button"
          className="btn btn-dark"
          id="btnCPUVSCPU"
          onClick={this.cpuVScpu}
        >
          CPU vs. CPU
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
        <div className="pokemonSheetContainer deRender">
          <div>{playerName} - Select a Pokemon:</div>
          <div className="pokemonSheet">
            {this.props.allData.results.map((item, i) => {
              return (
                <button
                  className="sheetBlock btn btn-primary"
                  key={i}
                  data-toggle="modal"
                  data-target=".pokemonPopup"
                  onClick={() => this.modalPokemon(i + 1)}
                >
                  {/* <img src={item.sprites.front_default} alt="" /> */}
                  {this.Capitalize(item.name)}
                </button>
              );
            })}
          </div>
        </div>
        <div className="modal fade pokemonPopup">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  #{this.state.currentPokemonId}:{" "}
                  {this.Capitalize(this.state.currentPokemonName)}
                </h4>
              </div>
              <div className="modal-body">
                <img
                  src={this.state.currentPokemonSprite}
                  alt=""
                  className="modalSprite"
                />
                <div>{this.Types(this.state.currentPokemonTypes)}</div>
                <br />
                <div className="modalStats">
                  <div>
                    <ul>
                      <li>
                        Height:{" "}
                        {Math.round(
                          (this.state.currentPokemonHeight / 10) * 3.281
                        )}{" "}
                        ft
                      </li>
                      <li>
                        Weight:{" "}
                        {Math.round(
                          (this.state.currentPokemonWeight / 10) * 2.205
                        )}{" "}
                        lbs
                      </li>
                      <li>HP: {this.state.currentPokemonHP}</li>
                      <li>ATK: {this.state.currentPokemonAtk}</li>
                      <li>DEF: {this.state.currentPokemonDef}</li>
                      <li>SPD: {this.state.currentPokemonSpd}</li>
                      <li>SPC ATK: {this.state.currentPokemonSpcAtk}</li>
                      <li>SPC DEF: {this.state.currentPokemonSpcDef}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={() =>
                    this.fetchPokemon(
                      this.state.currentPokemonId,
                      this.state.globalLevel
                    )
                  }
                >
                  Add to Team
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            id="BattleButton"
            onClick={() => this.startBattle()}
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
          <div className="team team1 col">
            <p className="header">{this.state.playerOneName}:</p>
            {this.state.player1Team.map((pokemon, i) => {
              return (
                <div
                  className={`${
                    pokemon.fainted
                      ? `sprite faded box-${i + 1}`
                      : `sprite box-${i + 1}`
                  }`}
                  key={i}
                >
                  <img src={pokemon.frontSprite} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </div>
              );
            })}
          </div>
          <BattleStage
            className="battleStage col"
            battleReady={this.state.battleReady}
            player1Team={this.state.player1Team}
            player2Team={this.state.player2Team}
            teamSize={this.state.teamSize}
            Capitalize={this.Capitalize}
            handleFainted={this.handleFainted}
            playerOneName={this.state.playerOneName}
            playerTwoName={this.state.playerTwoName}
            mode={this.state.mode}
            volume={this.props.volume}
            handleBattleVol={this.props.handleBattleVol}
            handleBattlePlaying={this.props.handleBattlePlaying}
          />
          <div className="team team2 col">
            <p className="header">{this.state.playerTwoName}:</p>
            {this.state.player2Team.map((pokemon, i) => {
              return (
                <div
                  className={`${
                    pokemon.fainted
                      ? `sprite faded box-${i + 1}`
                      : `sprite box-${i + 1}`
                  }`}
                  key={i}
                >
                  <img src={pokemon.frontSprite} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamBuilder;

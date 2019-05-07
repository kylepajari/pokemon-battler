import React, { Component } from "react";
import "./TeamBuilder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import BattleStageContainer from "../../Containers/BattleStageContainer";
import { CreateMoves } from "../MoveCreator";
import { CryAssign } from "../CryAssign";
import $ from "jquery";
import BadgesContainer from "../BadgesContainer/BadgesContainer";
import { RandomNumberGenerator } from "../RandomNumberGenerator";
import { MatchIconWithType } from "../MatchTypeIcon";
import Boulder_Badge from "../BadgesContainer/Badges/Boulder_Badge.png";
import Cascade_Badge from "../BadgesContainer/Badges/Cascade_Badge.png";
import Thunder_Badge from "../BadgesContainer/Badges/Thunder_Badge.png";
import Rainbow_Badge from "../BadgesContainer/Badges/Rainbow_Badge.png";
import Marsh_Badge from "../BadgesContainer/Badges/Marsh_Badge.png";
import Soul_Badge from "../BadgesContainer/Badges/Soul_Badge.png";
import Volcano_Badge from "../BadgesContainer/Badges/Volcano_Badge.png";
import Earth_Badge from "../BadgesContainer/Badges/Earth_Badge.png";
import Champion_Badge from "../BadgesContainer/Badges/Champion_Badge.png";
import battleTheme from "../../Sounds/battleTheme.wav";

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      currentPokemon: null,
      currentPokemonName: "",
      currentPokemonTypes: [],
      currentPokemonTeamTypes: [],
      currentPokemonSprite: "",
      currentPokemonSpriteBack: "",
      currentPokemonHeight: 0,
      currentPokemonWeight: 0,
      currentPokemonId: 0,
      currentPokemonAtk: 0,
      currentPokemonDef: 0,
      currentPokemonHP: 0,
      currentPokemonSpd: 0,
      currentPokemonSpcAtk: 0,
      currentPokemonSpcDef: 0,
      currentPokemonLevel: 0,
      currentPokemonMoves: [],
      isOpen: false, //to keep track of whether pokemon dropdown is open
      isTeamOpen: false, //to keep track of whether team size dropdown is open
      globalLevel: 50, //level to set all pokemon too, also used in formula that scales stats
      battleMusic: new Audio(battleTheme)
    };

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.Capitalize = this.Capitalize.bind(this);
    this.handleFainted = this.handleFainted.bind(this);
    this.singlePlayer = this.singlePlayer.bind(this);
    this.multiPlayer = this.multiPlayer.bind(this);
    this.cpuVScpu = this.cpuVScpu.bind(this);
    this.inputNames = this.inputNames.bind(this);
    this.returnToMainMenu = this.returnToMainMenu.bind(this);
  }

  componentDidMount() {
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeOut(10);
    $(document.querySelector(".playerOneNameDiv")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".teamsContainer")).fadeOut(10);
    $(document.querySelectorAll(".badgesContainer")).fadeOut(10);
    $(document.querySelector(".mainmenuButton")).fadeOut(10);
  }

  singlePlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    this.props.setMode("Single");
    $(document.querySelectorAll(".badgesContainer")).fadeIn(300);
    $(document.querySelector(".badgesShowcase")).fadeOut(10);
    $(document.querySelector(".teamShowcase")).fadeOut(10);
    $(document.querySelector(".mainmenuButton")).fadeIn(300);
    $(document.querySelector(".logoutBox")).fadeOut(10);
  }

  multiPlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeIn(300);
    $(document.querySelector(".mainmenuButton")).fadeIn(300);
    $(document.querySelector(".logoutBox")).fadeOut(10);
    this.props.setMode("Multi");
  }

  cpuVScpu() {
    this.props.setMode("CPUVSCPU");
    this.props.setPlayerOneName("CPU1");
    this.props.setPlayerTwoName("CPU2");
    this.props.setPlayer1Team([]);
    this.props.setPlayer2Team([]);

    //hide main menu buttons, show team list
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeIn(300);
    $(document.querySelector(".mainmenuButton")).fadeIn(300);
    $(document.querySelector(".logoutBox")).fadeOut(10);
  }

  returnToMainMenu() {
    // clear variables, reset back to main menu
    this.props.setMode("");
    this.props.setBattleReady(false);
    this.props.setBattleStarted(false);
    if (this.props.mode === "Multi" || this.props.mode === "CPUVSCPU") {
      this.props.setPlayer1Team([]);
    }
    this.props.setPlayer2Team([]);
    this.props.setPlayer1CurrentPokemon(0);
    this.props.setPlayer2CurrentPokemon(0);
    if (this.props.mode === "CPUVSCPU") {
      this.props.setPlayerOneName(this.props.user.username);
    }
    this.props.setPlayerTwoName("Player Two");
    this.props.setPlayersTurn("Player One");
    this.props.setTeamSize(6);
    if (this.props.player1Team !== this.props.user.team) {
      this.props.getTeam(this.props.id);
    }
    $(document.querySelector("#btnSinglePlayer")).fadeIn(300);
    $(document.querySelector("#btnMultiPlayer")).fadeIn(300);
    $(document.querySelector("#btnCPUVSCPU")).fadeIn(300);
    $(document.querySelector(".teamList")).fadeOut(10);
    $(document.querySelectorAll(".badgesContainer")).fadeOut(10);
    $(document.querySelector(".teamsContainer")).fadeOut(10);
    $(document.querySelector(".mainmenuButton")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".badgesShowcase")).fadeIn(300);
    $(document.querySelector(".teamShowcase")).fadeIn(300);
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
    $(document.querySelector(".logoutBox")).fadeIn(300);
    this.state.battleMusic.pause();
  }

  inputNames = input => {
    if (input !== "") {
      this.props.setPlayerTwoName(this.Capitalize(input));
    }
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeIn(300);
  };

  changeTeamSize = num => {
    $(document.querySelector(".teamsContainer")).fadeIn(300);
    $(document.querySelector(".pokemonSheetContainer")).removeClass("deRender");
    $(document.querySelector(".teamList")).fadeOut(10);
    $(document.querySelector(".badgesShowcase")).fadeOut(10);
    $(document.querySelector(".teamShowcase")).fadeOut(10);
    this.props.setTeamSize(num);
    this.props.setPlayer1Team([]);
    this.props.setPlayer2Team([]);
    if (this.props.mode === "CPUVSCPU") {
      //build cpu teams
      let rand = 0;
      //build CPU one team
      switch (num) {
        case 1:
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 2:
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 3:
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 4:
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 151));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 5:
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
          ///
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
          break;
        case 6:
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
          ///
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
          break;
        default:
          break;
      }

      $(document.querySelector(".teamList")).fadeOut(10);
      $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
      $(document.querySelector(".teamsContainer")).fadeIn(300);
    }
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
      .map(function(word) {
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
    let usableMoves = [];
    //go through moves, and create new list with objects for each one
    let movesList = movesToMap.map((item, i) => {
      let name = this.formatName(item.move.name);
      return CreateMoves(name);
    });

    //go through new object list, and place unwanted moves in serperate array
    movesList.forEach(move => {
      if (move.pp !== 35) {
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

    //finally, go through physical, special, and status moves, and create final move list
    let finalMoves = [];

    //if pokemon has more than 4 moves available
    if (physical.length + special.length + status.length > 4) {
      if (physical.length > special.length) {
        //more physical moves than special
        for (let i = 0; i < 2; i++) {
          //add two physical moves
          if (physical.length > 2) {
            let randomMove =
              physical[Math.floor(Math.random() * physical.length)];

            //prevent duplicate moves
            if (i === 1) {
              do {
                randomMove =
                  physical[Math.floor(Math.random() * physical.length)];
              } while (finalMoves[0].name === randomMove.name);
            }
            if (i === 0) {
              console.log(randomMove.name + " was chosen as FIRST MOVE");
            } else {
              console.log(randomMove.name + " was chosen as SECOND MOVE");
            }

            finalMoves.push(randomMove);
          } else {
            //has 2 or less physical moves, add them
            finalMoves.concat(physical);
          }
        }

        //add single special move
        let randomMove = special[Math.floor(Math.random() * special.length)];
        console.log(randomMove.name + " was chosen as THIRD MOVE");
        finalMoves.push(randomMove);
      } else {
        //more special moves than physical
        //add single physical move
        let randomMove = physical[Math.floor(Math.random() * physical.length)];
        console.log(randomMove.name + " was chosen as FIRST MOVE");
        finalMoves.push(randomMove);

        for (let i = 0; i < 2; i++) {
          //add two special moves
          if (special.length > 2) {
            let randomMove =
              special[Math.floor(Math.random() * special.length)];
            if (i === 1) {
              do {
                randomMove =
                  special[Math.floor(Math.random() * special.length)];
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
      }

      //add single status move
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

  fetchPokemon = (num, level, team, name) => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ data }, () => this.addPokemon(level, team, name))
      );
  };

  modalPokemon = num => {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    fetch(url)
      .then(response => response.json())
      .then(currentPokemon =>
        this.setState({ currentPokemon }, () => this.fillmodalPokeInfo())
      );
  };

  modalTeamPokemon = num => {
    this.setState({ currentPokemon: this.props.player1Team[num] }, () =>
      this.fillmodalTeamPokeInfo()
    );
    $(".pokemonTeamPopup").modal("show");
  };

  fillmodalTeamPokeInfo = () => {
    this.setState({
      currentPokemonName: this.state.currentPokemon.name,
      currentPokemonSprite: this.state.currentPokemon.frontSprite,
      currentPokemonSpriteBack: this.state.currentPokemon.backSprite,
      currentPokemonTeamTypes: this.state.currentPokemon.types,
      currentPokemonHP: this.state.currentPokemon.OrigHp,
      currentPokemonAtk: this.state.currentPokemon.OrigAttack,
      currentPokemonDef: this.state.currentPokemon.OrigDefense,
      currentPokemonSpd: this.state.currentPokemon.OrigSpeed,
      currentPokemonSpcAtk: this.state.currentPokemon.OrigSpecialattack,
      currentPokemonSpcDef: this.state.currentPokemon.OrigSpecialdefense,
      currentPokemonLevel: this.state.currentPokemon.lv,
      currentPokemonMoves: this.state.currentPokemon.moves
    });
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

  addPokemon = (level, team, name) => {
    let pokemonObj = null;
    console.log("adding pokemon", this.state.data.name);
    pokemonObj = {
      name: this.Capitalize(this.state.data.name),
      frontSprite: this.state.data.sprites.front_default,
      frontSpriteShiny: this.state.data.sprites.front_shiny,
      backSprite: this.state.data.sprites.back_default,
      backSpriteShiny: this.state.data.sprites.back_shiny,
      lv: level,
      OrigHp: this.calcStats("hp", this.state.data.stats[5].base_stat, level),
      // OrigHp: 3,
      hp: this.calcStats("hp", this.state.data.stats[5].base_stat, level),
      // hp: 3,
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
      isTransformed: false,
      isRecharging: false
    };

    let player = null; //default to player one
    if (this.props.mode === "Multi") {
      if (this.props.currentPlayer === "Player One") {
        player = this.props.player1Team;
      } else if (this.props.currentPlayer === "Player Two") {
        player = this.props.player2Team;
      }
    } else if (this.props.mode === "Single") {
      if (team === undefined) {
        player = this.props.player1Team;
      } else if (team === "team2") {
        player = this.props.player2Team;
      }
    } else if (this.props.mode === "CPUVSCPU") {
      if (team === "team1") {
        player = this.props.player1Team;
      } else if (team === "team2") {
        player = this.props.player2Team;
      }
    }

    if (player.length !== this.props.teamSize) {
      if (this.props.mode === "Multi") {
        if (this.props.currentPlayer === "Player One") {
          this.props.player1Team.push(pokemonObj);
          this.props.setPlayer1Team(player);
        } else if (this.props.currentPlayer === "Player Two") {
          this.props.player2Team.push(pokemonObj);
          this.props.setPlayer2Team(player);
        }
      } else if (this.props.mode === "Single") {
        if (team === undefined) {
          this.props.player1Team.push(pokemonObj);
          this.props.setPlayer1Team(player);
        } else if (team === "team2") {
          this.props.player2Team.push(pokemonObj);
          this.props.setPlayer2Team(player);
        }
      } else if (this.props.mode === "CPUVSCPU") {
        if (team === "team1") {
          this.props.player1Team.push(pokemonObj);
          this.props.setPlayer1Team(player);
        } else if (team === "team2") {
          this.props.player2Team.push(pokemonObj);
          this.props.setPlayer2Team(player);
        }
      }
    }

    if (
      this.props.player1Team.length === this.props.teamSize &&
      this.props.player2Team.length === this.props.teamSize
    ) {
      //update team to DB if not exist

      if (this.props.user.team.length === 0 && this.props.mode === "Single") {
        this.props.updateTeam(this.props.id, this.props.player1Team);
      }
      if (this.props.mode === "Single") {
        this.props.updateLeaderTeam(name, this.props.player2Team);
      }

      $(document.querySelectorAll(".dropdown")).fadeOut(100);
      $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
      $(document.getElementById("BattleButton")).fadeIn(300);
    }

    if (
      this.props.currentPlayer === "Player One" &&
      this.props.mode === "Multi"
    ) {
      this.props.setCurrentPlayer("Player Two");
    } else if (
      this.props.currentPlayer === "Player Two" &&
      this.props.mode === "Multi"
    ) {
      this.props.setCurrentPlayer("Player One");
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
    const poke1 = this.props.player1Team[0];
    const poke2 = this.props.player2Team[0];
    poke1.inBattle = true;
    poke2.inBattle = true;
    this.props.setBattleReady(true);
    $(document.getElementById("BattleButton")).fadeOut(300);
  };

  handleFainted = (index, playersTurn, faintedFromRecoil) => {
    let poke = null;
    if (playersTurn === "Player One") {
      if (faintedFromRecoil) {
        poke = this.props.player1Team[index];
        poke.fainted = true;
      } else {
        poke = this.props.player2Team[index];
        poke.fainted = true;
      }
    } else {
      //player twos turn
      if (faintedFromRecoil) {
        poke = this.props.player2Team[index];
        poke.fainted = true;
      } else {
        poke = this.props.player1Team[index];
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
  TeamTypes = array => {
    var typesList = array.map((item, i) => {
      return MatchIconWithType(item);
    });
    return <span>{typesList}</span>;
  };

  //CLEAR CURRENT TEAM////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  clearTeam = () => {
    this.props.setPlayer1Team([]);
    this.props.updateTeam(this.props.id, []);
  };

  render() {
    let playerName = null;
    if (this.props.currentPlayer === "Player One") {
      playerName = this.props.playerOneName;
    } else {
      playerName = this.props.playerTwoName;
    }
    return (
      <div className="teamBuilder">
        <button
          type="button"
          className="btn btn-dark mainmenuButton"
          onClick={() => this.returnToMainMenu()}
        >
          Main Menu
        </button>
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
        <div className="teamShowcase">
          <p className="teamHeader">Team:</p>
          {this.props.player1Team.map((pokemon, i) => {
            return (
              <div
                className={`${`sprite team-${i + 1}`}`}
                key={i}
                data-toggle="modal"
                onClick={() => this.modalTeamPokemon(i)}
              >
                <img src={pokemon.frontSprite} alt={pokemon.name} />
                <span>{pokemon.name}</span>
              </div>
            );
          })}
          <button
            className={`"teambtn btn btn-danger" ${
              this.props.player1Team.length > 0
                ? "teambtn btn btn-danger"
                : "teambtn btn btn-danger deRender"
            }`}
            onClick={this.clearTeam}
          >
            Delete Team
          </button>
          <div
            className="modal pokemonTeamPopup"
            data-backdrop=""
            style={{ overflowY: "hidden" }}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ overflowY: "hidden" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {this.state.currentPokemonName}
                  </h5>
                  <p>Lv: {this.state.currentPokemonLevel}</p>
                </div>
                <div className="modal-body">
                  <img
                    src={this.state.currentPokemonSprite}
                    alt=""
                    className="modalTeamSprite"
                  />
                  <div className="modalStats">
                    <div>
                      <ul>
                        <li>HP: {this.state.currentPokemonHP}</li>
                        <li>ATK: {this.state.currentPokemonAtk}</li>
                        <li>DEF: {this.state.currentPokemonDef}</li>
                        <li>SPD: {this.state.currentPokemonSpd}</li>
                        <li>SPC ATK: {this.state.currentPokemonSpcAtk}</li>
                        <li>SPC DEF: {this.state.currentPokemonSpcDef}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="modalMoves">
                    <div>
                      <p>Moves:</p>
                      <ul>
                        {this.state.currentPokemonMoves.map(move => {
                          return (
                            <li key={move.name}>
                              {move.name.toUpperCase()}/ PP:{move.pp}/
                              {MatchIconWithType(move.type)}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
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
        </div>
        <div className="badgesShowcase">
          <p className="badgesHeader">Badges Earned:</p>
          <div
            className={`${this.props.badges < 1 ? `faded badge-1` : `badge-1`}`}
            key={"badge1"}
          >
            <img src={Boulder_Badge} alt="Boulder Badge" />
          </div>
          <div
            className={`${this.props.badges < 2 ? `faded badge-2` : `badge-2`}`}
            key={"badge2"}
          >
            <img src={Cascade_Badge} alt="Cascade Badge" />
          </div>
          <div
            className={`${this.props.badges < 3 ? `faded badge-3` : `badge-3`}`}
            key={"badge3"}
          >
            <img src={Thunder_Badge} alt="Thunder Badge" />
          </div>
          <div
            className={`${this.props.badges < 4 ? `faded badge-4` : `badge-4`}`}
            key={"badge4"}
          >
            <img src={Rainbow_Badge} alt="Rainbow Badge" />
          </div>
          <div
            className={`${this.props.badges < 5 ? `faded badge-5` : `badge-5`}`}
            key={"badge5"}
          >
            <img src={Soul_Badge} alt="Soul Badge" />
          </div>
          <div
            className={`${this.props.badges < 6 ? `faded badge-6` : `badge-6`}`}
            key={"badge6"}
          >
            <img src={Marsh_Badge} alt="Marsh Badge" />
          </div>
          <div
            className={`${this.props.badges < 7 ? `faded badge-7` : `badge-7`}`}
            key={"badge7"}
          >
            <img src={Volcano_Badge} alt="Volcano Badge" />
          </div>
          <div
            className={`${this.props.badges < 8 ? `faded badge-8` : `badge-8`}`}
            key={"badge8"}
          >
            <img src={Earth_Badge} alt="Earth Badge" />
          </div>
          <div
            className={`${
              this.props.badges < 8
                ? `deRender badge-9`
                : this.props.badges < 13
                ? ` faded badge-9`
                : `badge-9`
            }`}
            key={"badge9"}
          >
            <img src={Champion_Badge} alt="Champion Badge" />
          </div>
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
              this.inputNames(document.getElementById("playerTwoNameBox").value)
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
            {this.props.allData.map((item, i) => {
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
          <BadgesContainer fetchPokemon={this.fetchPokemon} />
        </div>
        <div className="teamsContainer container-fluid row">
          <div className="team team1 col">
            <p className="header">{this.props.playerOneName}:</p>
            {this.props.player1Team.map((pokemon, i) => {
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
          <BattleStageContainer
            className="battleStage col"
            Capitalize={this.Capitalize}
            handleFainted={this.handleFainted}
            returnToMainMenu={this.returnToMainMenu}
            battleMusic={this.state.battleMusic}
          />
          <div className="team team2 col">
            <p className="header">{this.props.playerTwoName}:</p>
            {this.props.player2Team.map((pokemon, i) => {
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

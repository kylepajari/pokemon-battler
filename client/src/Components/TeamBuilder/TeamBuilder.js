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
      currentModalPokemon: null,
      currentPokemonName: "",
      currentPokemonTypes: [],
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
      battleMusic: new Audio(battleTheme),
      firstLoad: true,
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
    this.props.loadAllData();
    $(document.getElementById("BattleButton")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".teamsContainer")).fadeOut(10);
    $(document.querySelector(".badgeSelectionPage")).fadeOut(10);
    $(document.querySelector(".mainmenuButton")).fadeOut(10);
  }

  componentDidUpdate() {
    if (this.state.firstLoad) {
      $(document.getElementById("BattleButton")).fadeOut(10);
      $(document.querySelector(".teamList")).fadeOut(10);
      $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
      $(document.querySelector(".teamsContainer")).fadeOut(10);
      $(document.querySelector(".badgeSelectionPage")).fadeOut(10);
      $(document.querySelector(".mainmenuButton")).fadeOut(10);
    }
  }

  singlePlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    this.props.setMode("Single");
    $(document.querySelector(".badgeSelectionPage")).fadeIn(300);
    $(document.querySelector(".badgesShowcase")).fadeOut(10);
    $(document.querySelector(".teamShowcase")).fadeOut(10);
    $(document.querySelector(".mainmenuButton")).fadeIn(300);
    $(document.querySelector(".logoutBox")).fadeOut(10);
    $(document.querySelector(".badgeSelectionPage")).fadeIn(300);
  }

  multiPlayer() {
    $(document.querySelector("#btnSinglePlayer")).fadeOut(10);
    $(document.querySelector("#btnMultiPlayer")).fadeOut(10);
    $(document.querySelector("#btnCPUVSCPU")).fadeOut(10);
    $(document.querySelector(".playerTwoNameDiv")).fadeIn(300);
    $(document.querySelector(".mainmenuButton")).fadeIn(300);
    $(document.querySelector(".logoutBox")).fadeOut(10);
    $(document.querySelector(".badgeSelectionPage")).fadeOut(10);
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
    $(document.querySelector(".badgeSelectionPage")).fadeOut(10);
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
      //this.props.setPlayerOneName(this.props.user.username);
      this.props.setPlayerOneName(localStorage.getItem("UserName"));
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
    $(document.querySelectorAll(".badgeSelectionPage")).fadeOut(10);
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

  inputNames = (input) => {
    if (input !== "") {
      this.props.setPlayerTwoName(this.Capitalize(input));
    }
    $(document.querySelector(".playerTwoNameDiv")).fadeOut(10);
    $(document.querySelector(".teamList")).fadeIn(300);
  };

  changeTeamSize = (num) => {
    $(document.querySelector(".teamsContainer")).fadeIn(300);
    $(document.querySelector(".teamsContainer")).removeClass("deRender");
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
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 2:
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 3:
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 4:
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 5:
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          break;
        case 6:
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team1");
          ///
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          rand = Math.round(RandomNumberGenerator(1, 251));
          this.fetchPokemon(rand, 50, "team2");
          break;
        default:
          break;
      }

      $(document.querySelector(".teamList")).fadeOut(10);
      $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
      $(document.querySelector(".teamsContainer")).removeClass("deRender");
      $(document.querySelector(".teamsContainer")).fadeIn(300);
      $(document.querySelector(".mainmenuButton")).fadeOut(10);
    }
  };

  //Returns passed string with upper-case first letter
  Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  calcStats = (stat, baseStat, lv) => {
    const IV = Math.round(RandomNumberGenerator(10, 20)); //IV calc: number between 0 and 31, randomly chosen per pokemon
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

  toCamelCase = (str) => {
    return str
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  formatName = (name) => {
    return this.Capitalize(this.toCamelCase(name.replace("-", " ")));
  };

  //MOVES LIST BUILDER FUNCTION //////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  movesBuilder = (movesToMap, types) => {
    let type1 = types[0].type.name;
    let type2 = null;
    if (types[1] !== undefined) {
      type2 = types[1].type.name;
    }
    //console.log("type 1: " + type1, "type 2: " + type2);

    let usableMoves = [];
    //go through moves, and create new list with objects for each one
    let movesList = movesToMap.map((item, i) => {
      let name = this.formatName(item.move.name);
      return CreateMoves(name);
    });

    //go through new object list, and place unwanted moves in serperate array
    movesList.forEach((move) => {
      if (move.pp !== 35) {
        usableMoves.push(move);
      }
    });

    let status = [];
    let damaging = [];
    //go through useable moves, and split into status/damaging arrays
    usableMoves.forEach((move) => {
      if (move.power === 0) {
        status.push(move);
      } else {
        damaging.push(move);
      }
    });

    let physical = [];
    let special = [];
    //go through damaging moves, split into physical special arrays
    damaging.forEach((move) => {
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
        //console.log("more physical", physical, type1, type2);

        //more physical moves than special
        for (let i = 0; i < 2; i++) {
          //add two physical moves
          if (physical.length > 2) {
            //force at least one move to equal main type of pokemon
            let randomMove =
              physical[Math.floor(Math.random() * physical.length)];

            if (i === 0) {
              let typeCounter = 0;
              if (randomMove.type !== type1) {
                for (let i = 0; i < physical.length; i++) {
                  if (physical[i].type === type1) {
                    typeCounter++;
                  }
                }
              }
              // console.log(
              //   "found " + typeCounter + " moves that match type " + type1
              // );

              if (typeCounter > 0) {
                do {
                  randomMove =
                    physical[Math.floor(Math.random() * physical.length)];
                  console.log(randomMove.name, randomMove.type);
                } while (randomMove.type !== type1);
              }
              //if type 2 exists and typeCounter is still 0, check for move of type 2
              if (type2 !== null && typeCounter === 0) {
                let typeCounter2 = 0;
                if (randomMove.type !== type2) {
                  for (let i = 0; i < physical.length; i++) {
                    if (physical[i].type === type2) {
                      typeCounter2++;
                    }
                  }
                }
                if (typeCounter2 > 0) {
                  do {
                    randomMove =
                      physical[Math.floor(Math.random() * physical.length)];
                  } while (randomMove.type !== type2);
                }
                // console.log(
                //   "found physical move that matches type 2 ",
                //   type2,
                //   randomMove.name
                // );
              }
            } else {
              //prevent duplicate moves
              if (i === 1) {
                do {
                  randomMove =
                    physical[Math.floor(Math.random() * physical.length)];
                } while (finalMoves[0].name === randomMove.name);
              }
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
        if (
          (finalMoves[0].type !== type1 && finalMoves[1] !== type1) ||
          (finalMoves[0].type !== type2 && finalMoves[1] !== type2)
        ) {
          let typeCounter4 = 0;
          if (randomMove.type !== type1 && randomMove.type !== type2) {
            for (let i = 0; i < special.length; i++) {
              if (special[i].type === type1 || special[i].type === type2) {
                typeCounter4++;
              }
            }
          }
          if (typeCounter4 > 0) {
            do {
              randomMove = special[Math.floor(Math.random() * special.length)];
            } while (randomMove.type !== type1 && randomMove.type !== type2);
          }
          // console.log(
          //   "found special move that matches type 1 or 2",
          //   type1,
          //   type2,
          //   randomMove.name
          // );
        }
        console.log(randomMove.name + " was chosen as THIRD MOVE");
        finalMoves.push(randomMove);
      } else {
        //more special moves than physical
        //console.log("more special");
        //add single physical move
        let randomMove = physical[Math.floor(Math.random() * physical.length)];
        console.log(randomMove.name + " was chosen as FIRST MOVE");
        finalMoves.push(randomMove);

        for (let i = 0; i < 2; i++) {
          //add two special moves
          if (special.length > 2) {
            //force at least one move to equal main type of pokemon
            let randomMove =
              special[Math.floor(Math.random() * special.length)];

            if (i === 0) {
              let typeCounter3 = 0;
              if (randomMove.type !== type1) {
                for (let i = 0; i < special.length; i++) {
                  if (special[i].type === type1) {
                    typeCounter3++;
                  }
                }
              }
              // console.log(
              //   "found " + typeCounter3 + " moves that match type " + type1
              // );
              if (typeCounter3 > 0) {
                do {
                  randomMove =
                    special[Math.floor(Math.random() * special.length)];
                } while (randomMove.type !== type1);
              }
              // console.log(
              //   "found special move that matches type 1 ",
              //   type1,
              //   randomMove.name
              // );
              if (type2 !== null && typeCounter3 === 0) {
                let typeCounter = 0;
                if (randomMove.type !== type2) {
                  for (let i = 0; i < special.length; i++) {
                    if (special[i].type === type2) {
                      typeCounter++;
                    }
                  }
                }
                if (typeCounter > 0) {
                  do {
                    randomMove =
                      special[Math.floor(Math.random() * special.length)];
                  } while (randomMove.type !== type2);
                }
                // console.log(
                //   "found special move that matches type 2 ",
                //   type2,
                //   randomMove.name
                // );
              }
            } else {
              //prevent duplicate moves
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
    //console.log("add to team", num, level, team, name);
    if (this.state.currentPokemon === null) {
      //let url = "https://pokeapi.co/api/v2/pokemon/" + num;
      //switched to local directory
      let url = "/search/" + num;
      fetch(url)
        .then((response) => response.json())
        .then((currentPoke) => {
          this.setState(
            { currentPokemon: currentPoke, currentModalPokemon: currentPoke },
            () => this.fillmodalPokeInfo()
          );
        })
        .then(() => {
          this.addPokemon(level, team, name);
        });
    } else {
      this.addPokemon(level, team, name);
    }
  };

  modalPokemon = (num) => {
    //clear current pokemon in state
    this.setState({
      currentPokemon: null,
      currentModalPokemon: null,
      currentPokemonName: "",
      currentPokemonTypes: [],
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
    });
    //let url = "https://pokeapi.co/api/v2/pokemon/" + num;
    let url = "/search/" + num;
    fetch(url)
      .then((response) => response.json())
      .then((currentPoke) =>
        this.setState(
          { currentPokemon: currentPoke, currentModalPokemon: currentPoke },
          () => this.fillmodalPokeInfo()
        )
      );
  };

  modalTeamPokemon = (team, num) => {
    if (team === "team1") {
      this.setState({ currentModalPokemon: this.props.player1Team[num] }, () =>
        this.fillmodalTeamPokeInfo()
      );
    } else {
      this.setState({ currentModalPokemon: this.props.player2Team[num] }, () =>
        this.fillmodalTeamPokeInfo()
      );
    }
    $(".pokemonTeamPopup").modal("show");
  };

  fillmodalTeamPokeInfo = () => {
    this.setState({
      currentPokemonName: this.state.currentModalPokemon.name,
      currentPokemonSprite: this.state.currentModalPokemon.frontSprite,
      currentPokemonSpriteBack: this.state.currentModalPokemon.backSprite,
      currentPokemonTypes: this.state.currentModalPokemon.types.map(
        (item, i) => {
          return item;
        }
      ),
      currentPokemonHP: this.state.currentModalPokemon.OrigHp,
      currentPokemonAtk: this.state.currentModalPokemon.OrigAttack,
      currentPokemonDef: this.state.currentModalPokemon.OrigDefense,
      currentPokemonSpd: this.state.currentModalPokemon.OrigSpeed,
      currentPokemonSpcAtk: this.state.currentModalPokemon.OrigSpecialattack,
      currentPokemonSpcDef: this.state.currentModalPokemon.OrigSpecialdefense,
      currentPokemonLevel: this.state.currentModalPokemon.lv,
      currentPokemonMoves: this.state.currentModalPokemon.moves,
    });
  };

  fillmodalPokeInfo = () => {
    let level = this.state.globalLevel;
    let rand = Math.random();
    let Sprite = this.state.currentModalPokemon.sprites.front_default;
    let SpriteBack = this.state.currentModalPokemon.sprites.back_default;
    let Name = this.state.currentModalPokemon.name;
    //chance of shiny
    if (rand <= 0.005) {
      Sprite = this.state.currentModalPokemon.sprites.front_shiny;
      SpriteBack = this.state.currentModalPokemon.sprites.back_shiny;
      Name = this.state.currentModalPokemon.name + "*";
    }

    //write sprites to folder if not exist
    console.log(this.state.currentModalPokemon.sprites.front_default);
    console.log(this.state.currentModalPokemon.sprites.back_default);
    console.log(this.state.currentModalPokemon.sprites.front_shiny);
    console.log(this.state.currentModalPokemon.sprites.back_shiny);

    this.setState({
      currentPokemonName: Name,
      currentPokemonSprite: Sprite,
      currentPokemonSpriteBack: SpriteBack,
      currentPokemonTypes: this.state.currentModalPokemon.types.map((item) => {
        return item.type.name;
      }),
      currentPokemonHeight: this.state.currentModalPokemon.height,
      currentPokemonWeight: this.state.currentModalPokemon.weight,
      currentPokemonId: this.state.currentModalPokemon.id,
      currentPokemonHP: this.calcStats(
        "hp",
        this.state.currentModalPokemon.stats[5].base_stat,
        level
      ),
      currentPokemonAtk: this.calcStats(
        "attack",
        this.state.currentModalPokemon.stats[4].base_stat,
        level
      ),
      currentPokemonDef: this.calcStats(
        "defense",
        this.state.currentModalPokemon.stats[3].base_stat,
        level
      ),
      currentPokemonSpd: this.calcStats(
        "speed",
        this.state.currentModalPokemon.stats[0].base_stat,
        level
      ),
      currentPokemonSpcAtk: this.calcStats(
        "specialattack",
        this.state.currentModalPokemon.stats[2].base_stat,
        level
      ),
      currentPokemonSpcDef: this.calcStats(
        "specialdefense",
        this.state.currentModalPokemon.stats[1].base_stat,
        level
      ),
      currentPokemonMoves: this.movesBuilder(
        this.state.currentModalPokemon.moves,
        this.state.currentModalPokemon.types
      ),
    });
  };

  addPokemon = (level, team, name) => {
    let pokemonObj = null;
    pokemonObj = {
      name: this.Capitalize(this.state.currentPokemonName),
      frontSprite: this.state.currentPokemonSprite,
      backSprite: this.state.currentPokemonSpriteBack,
      lv: level,
      OrigHp: this.state.currentPokemonHP,
      //OrigHp: 5,
      hp: this.state.currentPokemonHP,
      //hp: 5,
      OrigAttack: this.state.currentPokemonAtk,
      attack: this.state.currentPokemonAtk,
      OrigDefense: this.state.currentPokemonDef,
      defense: this.state.currentPokemonDef,
      OrigSpeed: this.state.currentPokemonSpd,
      speed: this.state.currentPokemonSpd,
      OrigSpecialattack: this.state.currentPokemonSpcAtk,
      specialattack: this.state.currentPokemonSpcAtk,
      OrigSpecialdefense: this.state.currentPokemonSpcDef,
      specialdefense: this.state.currentPokemonSpcDef,
      types: [
        this.state.currentPokemon.types.map((item) => {
          return item.type.name;
        }),
      ],
      moves: this.state.currentPokemonMoves,
      cry: CryAssign(this.Capitalize(this.state.currentPokemon.name)),
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
      isRecharging: false,
      preparingAttack: false,
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

      if (this.props.player1Team.length === 6 && this.props.mode === "Single") {
        this.props.updateTeam(this.props.id, this.props.player1Team);
        localStorage.setItem("Team", JSON.stringify(this.props.player1Team));
      }
      if (this.props.mode === "Single") {
        this.props.updateLeaderTeam(name, this.props.player2Team);
      }

      $(document.querySelectorAll(".dropdown")).fadeOut(100);
      $(document.querySelector(".pokemonSheetContainer")).addClass("deRender");
      $(document.getElementById("BattleButton")).fadeIn(300);
      $(document.querySelector(".mainmenuButton")).fadeIn(300);
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

    this.setState({ currentPokemon: null });
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
  Types = (array) => {
    if (array[0] !== undefined) {
      var typesList = [];
      if (array[0][0].length > 2) {
        typesList = array[0].map((item, i) => {
          return MatchIconWithType(item);
        });
      } else {
        typesList = array.map((item, i) => {
          return MatchIconWithType(item);
        });
      }

      return <span>{typesList}</span>;
    }
  };

  //CLEAR CURRENT TEAM////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  clearTeam = () => {
    this.props.setPlayer1Team([]);
    localStorage.setItem("Team", null);
    this.props.updateTeam(this.props.id, []);
  };

  render() {
    let playerName = null;
    if (this.props.currentPlayer === "Player One") {
      playerName = this.props.playerOneName;
    } else {
      playerName = this.props.playerTwoName;
    }
    if (this.props.allData === null) {
      //if logged in, but no data loaded, show loading screen
      return (
        <div>
          <h3>Loading Data...</h3>
        </div>
      );
    } else {
      if (this.state.firstLoad) {
        this.setState({ firstLoad: false });
      }
      if (this.props.player1Team === null || this.props.badges === null) {
        //if logged in, but no data loaded, show loading screen
        return (
          <div>
            <h3>Loading Data...</h3>
          </div>
        );
      } else {
        return (
          <div className="teamBuilder">
            <button
              type="button"
              className="btn btn-dark mainmenuButton"
              onClick={() => this.returnToMainMenu()}
            >
              Main Menu
            </button>
            <div className="mainButtons">
              <button
                type="button"
                className="btn btn-dark"
                id="btnSinglePlayer"
                onClick={this.singlePlayer}
              >
                Single Player -<br />
                Gym Leader Challenge
              </button>
              <button
                type="button"
                className="btn btn-dark"
                id="btnMultiPlayer"
                onClick={this.multiPlayer}
              >
                Multi Player -<br />
                Local Battle
              </button>
              <button
                type="button"
                className="btn btn-dark"
                id="btnCPUVSCPU"
                onClick={this.cpuVScpu}
              >
                CPU vs. CPU
              </button>
            </div>
            <div className="modal fade pokemonTeamPopup">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {this.state.currentPokemonName}
                    </h5>
                    <p>Lv: {this.state.currentPokemonLevel}</p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={this.state.currentPokemonSprite}
                      alt=""
                      className="modalTeamSprite"
                    />
                    <div>{this.Types(this.state.currentPokemonTypes)}</div>
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
                          {this.state.currentPokemonMoves.map((move) => {
                            return (
                              <li key={move.name}>
                                {move.name.toUpperCase()} / PP:{move.pp} /{" "}
                                {MatchIconWithType(move.type)}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="playerTwoNameDiv">
              <p>Enter a name for Player Two:</p>
              <input
                type="text"
                id="playerTwoNameBox"
                placeholder="Player Two"
              />
              <button
                className="btn btn-dark"
                type="button"
                onClick={() =>
                  this.inputNames(
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
            <div className="teamShowcase">
              <p className="teamHeader">My Team:</p>
              {this.props.player1Team.map((pokemon, i) => {
                return (
                  <div
                    className={`${`sprite team-${i + 1}`}`}
                    key={i}
                    data-toggle="modal"
                    onClick={() => this.modalTeamPokemon("team1", i)}
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
                Delete
              </button>
            </div>
            <div className="badgesShowcase">
              <p className="badgesHeader">Badges Earned:</p>
              <div
                className={`${
                  this.props.badges < 1 ? `faded badge-1` : `badge-1`
                }`}
                key={"badge1"}
              >
                <img src={Boulder_Badge} alt="Boulder Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 2 ? `faded badge-2` : `badge-2`
                }`}
                key={"badge2"}
              >
                <img src={Cascade_Badge} alt="Cascade Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 3 ? `faded badge-3` : `badge-3`
                }`}
                key={"badge3"}
              >
                <img src={Thunder_Badge} alt="Thunder Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 4 ? `faded badge-4` : `badge-4`
                }`}
                key={"badge4"}
              >
                <img src={Rainbow_Badge} alt="Rainbow Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 5 ? `faded badge-5` : `badge-5`
                }`}
                key={"badge5"}
              >
                <img src={Soul_Badge} alt="Soul Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 6 ? `faded badge-6` : `badge-6`
                }`}
                key={"badge6"}
              >
                <img src={Marsh_Badge} alt="Marsh Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 7 ? `faded badge-7` : `badge-7`
                }`}
                key={"badge7"}
              >
                <img src={Volcano_Badge} alt="Volcano Badge" />
              </div>
              <div
                className={`${
                  this.props.badges < 8 ? `faded badge-8` : `badge-8`
                }`}
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
            <BattleStageContainer
              className="battleStage col"
              Capitalize={this.Capitalize}
              handleFainted={this.handleFainted}
              returnToMainMenu={this.returnToMainMenu}
              battleMusic={this.state.battleMusic}
            />
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
                      data-toggle="modal"
                      onClick={() => this.modalTeamPokemon("team1", i)}
                    >
                      <img src={pokemon.frontSprite} alt={pokemon.name} />
                      <p>{pokemon.name}</p>
                    </div>
                  );
                })}
              </div>
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
                      data-toggle="modal"
                      onClick={() => this.modalTeamPokemon("team2", i)}
                    >
                      <img src={pokemon.frontSprite} alt={pokemon.name} />
                      <p>{pokemon.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pokemonSheetContainer deRender">
              <div>{playerName} - Select a Pokemon:</div>
              <div className="pokemonSheet">
                <div>Generation I:</div>
                {this.props.allData.map((item, i) => {
                  if (i <= 150) {
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
                  } else {
                    return null;
                  }
                })}
                <br />
                <div>Generation II:</div>
                {this.props.allData.map((item, i) => {
                  if (i >= 151 && i < 251) {
                    return (
                      <button
                        className="sheetBlock btn btn-success"
                        key={i}
                        data-toggle="modal"
                        data-target=".pokemonPopup"
                        onClick={() => this.modalPokemon(i + 1)}
                      >
                        {/* <img src={item.sprites.front_default} alt="" /> */}
                        {this.Capitalize(item.name)}
                      </button>
                    );
                  } else {
                    return null;
                  }
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
                        <ul>
                          {this.state.currentPokemonMoves.map((move) => {
                            return (
                              <li key={move.name}>
                                {move.name.toUpperCase()} / PP:{move.pp} /{" "}
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
                className="btn btn-primary battlebtn"
                id="BattleButton"
                onClick={() => this.startBattle()}
              >
                Battle!
              </button>
            </div>
            <div>
              <BadgesContainer fetchPokemon={this.fetchPokemon} />
            </div>
          </div>
        );
      }
    }
  }
}

export default TeamBuilder;

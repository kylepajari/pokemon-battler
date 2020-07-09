import React, { Component } from "react";
import "./BattleStage.css";
import pokeball from "../../pokeball.png";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import { MatchIconWithType } from "../MatchTypeIcon";
import { UpdateHP } from "../UpdateHP";
import { FaintPokemon } from "../FaintPokemon";
import { Conditions } from "../Conditions";
import { RandomNumberGenerator } from "../RandomNumberGenerator";
import { DisplayMessage } from "../DisplayMessage";
import { HandleAI } from "../AI";
import { PlayLeaderIntro } from "../LeaderIntro";
import { CalcTypeAdvantage } from "../TypeAdvantage";
import { DealDamage } from "../DealDamage";
import { Icon } from "semantic-ui-react";
import Victory from "../../Sounds/victory.mp3";
import swapSound from "../../Sounds/BattleSounds/General/SWITCHIN.wav";
import statRise from "../../Sounds/BattleSounds/General/STATRISE.wav";
import statLower from "../../Sounds/BattleSounds/General/STATLOWER.wav";
import recoverSound from "../../Sounds/BattleSounds/General/RECOVER.wav";
import volumeIcon from "../../volume.png";
import TeamContainer from "../../Containers/TeamContainer";
import ItemsContainer from "../../Containers/ItemsContainer";
import MovesContainer from "../../Containers/MovesContainer";
import Brock from "../../LeaderImages/Brock.png";
import Misty from "../../LeaderImages/Misty.png";
import LtSurge from "../../LeaderImages/LtSurge.png";
import Erika from "../../LeaderImages/Erika.png";
import Koga from "../../LeaderImages/Koga.png";
import Sabrina from "../../LeaderImages/Sabrina.png";
import Blaine from "../../LeaderImages/Blaine.png";
import Giovanni from "../../LeaderImages/Giovanni.png";
import Blue from "../../LeaderImages/Blue.png";
import Lorelei from "../../LeaderImages/Lorelei.png";
import Bruno from "../../LeaderImages/Bruno.png";
import Agatha from "../../LeaderImages/Agatha.png";
import Lance from "../../LeaderImages/Lance.png";
import Boulder_Badge from "../BadgesContainer/Badges/Boulder_Badge.png";
import Cascade_Badge from "../BadgesContainer/Badges/Cascade_Badge.png";
import Thunder_Badge from "../BadgesContainer/Badges/Thunder_Badge.png";
import Rainbow_Badge from "../BadgesContainer/Badges/Rainbow_Badge.png";
import Marsh_Badge from "../BadgesContainer/Badges/Marsh_Badge.png";
import Soul_Badge from "../BadgesContainer/Badges/Soul_Badge.png";
import Volcano_Badge from "../BadgesContainer/Badges/Volcano_Badge.png";
import Earth_Badge from "../BadgesContainer/Badges/Earth_Badge.png";
import Champion_Badge from "../BadgesContainer/Badges/Champion_Badge.png";
import Elite_Four from "../BadgesContainer/Badges/Elite_Four.png";
import { PlayLeaderOutro } from "../LeaderOutro";
import Bug from "../../TypeCharts/bug.jpg";
import Dragon from "../../TypeCharts/dragon.jpg";
import Electric from "../../TypeCharts/electric.jpg";
import Fighting from "../../TypeCharts/fighting.jpg";
import Fire from "../../TypeCharts/fire.jpg";
import Flying from "../../TypeCharts/flying.jpg";
import Ghost from "../../TypeCharts/ghost.jpg";
import Grass from "../../TypeCharts/grass.jpg";
import Ground from "../../TypeCharts/ground.jpg";
import Ice from "../../TypeCharts/ice.jpg";
import Normal from "../../TypeCharts/normal.jpg";
import Poison from "../../TypeCharts/poison.jpg";
import Psychic from "../../TypeCharts/psychic.jpg";
import Rock from "../../TypeCharts/rock.jpg";
import Steel from "../../TypeCharts/steel.jpg";
import Water from "../../TypeCharts/water.jpg";

class BattleStage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Team: [],
      player2Team: [],
      displayItems: false,
      displayMoves: false,
      displayTeam: false,
      isPoisonBurned: false,
      faintedByRecoilPoisonBurn: false,
      recoilDamage: 0,
      disabledCounterP1: 0,
      disabledCounterP2: 0,
      disabledMoveNameP1: "",
      disabledMoveNameP2: "",
      disabledPokeIndexP1: 0,
      disabledPokeIndexP2: 0,
      aiUsedMaxPotion: false,
      aiUsedAntidote: false,
      aiUsedBurnHeal: false,
      aiUsedParalyzeHeal: false,
      aiUsedAwakening: false,
      aiUsedIceHeal: false,
      lastMovePlayer1: "",
      lastMovePlayer2: "",
      //stat multipliers for player 1
      atkMultiplierUp1: 1,
      defMultiplierUp1: 1,
      spdMultiplierUp1: 1,
      spcAtkMultiplierUp1: 1,
      spcDefMultiplierUp1: 1,
      atkMultiplierDown1: 1,
      defMultiplierDown1: 1,
      spdMultiplierDown1: 1,
      spcAtkMultiplierDown1: 1,
      spcDefMultiplierDown1: 1,

      //stat multiplier for player 2
      atkMultiplierUp2: 1,
      defMultiplierUp2: 1,
      spdMultiplierUp2: 1,
      spcAtkMultiplierUp2: 1,
      spcDefMultiplierUp2: 1,
      atkMultiplierDown2: 1,
      defMultiplierDown2: 1,
      spdMultiplierDown2: 1,
      spcAtkMultiplierDown2: 1,
      spcDefMultiplierDown2: 1,

      gymLeaderLogo: null,
      gymBadgeLogo: null,
      gymBadgeName: null
    };
    this.switchTurns = this.switchTurns.bind(this);
    this.checkForStatusEffect = this.checkForStatusEffect.bind(this);
    this.handleMoves = this.handleMoves.bind(this);
    this.handleTeam = this.handleTeam.bind(this);
    this.handleItems = this.handleItems.bind(this);
    this.handleSwapPokemon = this.handleSwapPokemon.bind(this);
    this.handlePoisonBurn = this.handlePoisonBurn.bind(this);
    this.handleFaintedByRecoilPoisonBurn = this.handleFaintedByRecoilPoisonBurn.bind(
      this
    );
    this.handleForceUpdate = this.handleForceUpdate.bind(this);
    this.dealPoisonBurn = this.dealPoisonBurn.bind(this);
    this.resetMultipliers = this.resetMultipliers.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.checkWin = this.checkWin.bind(this);
    this.handleAIUseItems = this.handleAIUseItems.bind(this);
    this.handleUpdateLastMove = this.handleUpdateLastMove.bind(this);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      player1Team: props.player1Team,
      player2Team: props.player2Team
    });
    if (props.mode !== "Single" || this.props.playerTwoName === "CPU") {
      $(document.querySelector(".gymLeaderDiv")).fadeOut(10);
    }
    if (!this.props.battleStarted) {
      $(document.querySelectorAll(".side")).fadeOut(10);
      $(document.querySelector(".player1Sprite")).fadeOut(10);
      $(document.querySelector(".player2Sprite")).fadeOut(10);
      $(document.querySelector(".options")).fadeOut(10);
      $(document.querySelector(".gymBadgeDiv")).fadeOut(10);
    }
  }

  startBattle = () => {
    $(document.querySelector(".mainmenuButton")).fadeOut(10);
    $(document.querySelector(".teamsContainer")).addClass("deRender");

    if (this.props.mode === "Single" && this.props.playerTwoName !== "CPU") {
      //SINGLE PLAYER ////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////
      //set image src to correct gym leader
      switch (this.props.playerTwoName) {
        case "Brock":
          this.setState({
            gymLeaderLogo: Brock,
            gymBadgeLogo: Boulder_Badge,
            gymBadgeName: "Boulder Badge"
          });
          break;
        case "Misty":
          this.setState({
            gymLeaderLogo: Misty,
            gymBadgeLogo: Cascade_Badge,
            gymBadgeName: "Cascade Badge"
          });
          break;
        case "Lt. Surge":
          this.setState({
            gymLeaderLogo: LtSurge,
            gymBadgeLogo: Thunder_Badge,
            gymBadgeName: "Thunder Badge"
          });
          break;
        case "Erika":
          this.setState({
            gymLeaderLogo: Erika,
            gymBadgeLogo: Rainbow_Badge,
            gymBadgeName: "Rainbow Badge"
          });
          break;
        case "Koga":
          this.setState({
            gymLeaderLogo: Koga,
            gymBadgeLogo: Soul_Badge,
            gymBadgeName: "Soul Badge"
          });
          break;
        case "Sabrina":
          this.setState({
            gymLeaderLogo: Sabrina,
            gymBadgeLogo: Marsh_Badge,
            gymBadgeName: "Marsh Badge"
          });
          break;
        case "Blaine":
          this.setState({
            gymLeaderLogo: Blaine,
            gymBadgeLogo: Volcano_Badge,
            gymBadgeName: "Volcano Badge"
          });
          break;
        case "Giovanni":
          this.setState({
            gymLeaderLogo: Giovanni,
            gymBadgeLogo: Earth_Badge,
            gymBadgeName: "Earth Badge"
          });
          break;
        case "Blue":
          this.setState({
            gymLeaderLogo: Blue,
            gymBadgeLogo: Champion_Badge,
            gymBadgeName: "Champion Badge"
          });
          break;
        case "Lorelei":
          this.setState({
            gymLeaderLogo: Lorelei,
            gymBadgeLogo: Elite_Four,
            gymBadgeName: "Elite Four - Lorelei"
          });
          break;
        case "Bruno":
          this.setState({
            gymLeaderLogo: Bruno,
            gymBadgeLogo: Elite_Four,
            gymBadgeName: "Elite Four - Bruno"
          });
          break;
        case "Agatha":
          this.setState({
            gymLeaderLogo: Agatha,
            gymBadgeLogo: Elite_Four,
            gymBadgeName: "Elite Four - Agatha"
          });
          break;
        case "Lance":
          this.setState({
            gymLeaderLogo: Lance,
            gymBadgeLogo: Elite_Four,
            gymBadgeName: "Elite Four - Lance"
          });
          break;
        default:
      }

      //play leader intro scene
      $(document.querySelector(".leader")).fadeIn(500);
      PlayLeaderIntro(this.props.playerTwoName);
      setTimeout(
        () => $(document.querySelectorAll(".side")).fadeIn(100),
        14000
      );
      setTimeout(
        () => DisplayMessage(this.props.playerTwoName + " wants to battle!"),
        14500
      );
      setTimeout(
        () =>
          DisplayMessage(
            this.props.playerTwoName +
              " sent out " +
              this.state.player2Team[0].name +
              "!"
          ),
        17000
      );
      let cry1 = null;
      let cry2 = null;
      setTimeout(
        () => $(document.querySelector(".player2Sprite")).fadeIn(500),
        18000
      );
      cry1 = new Audio(this.state.player2Team[0].cry);
      cry1.volume = this.props.volume;
      setTimeout(() => cry1.play(), 18500);

      setTimeout(
        () => DisplayMessage("Go! " + this.state.player1Team[0].name + "!"),
        20500
      );
      setTimeout(
        () => $(document.querySelector(".player1Sprite")).fadeIn(500),
        21500
      );
      cry2 = new Audio(this.state.player1Team[0].cry);
      cry2.volume = this.props.volume;
      setTimeout(() => cry2.play(), 22000);

      setTimeout(
        () => $(document.querySelector(".options")).fadeIn(300),
        23000
      );
      setTimeout(
        () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
        23000
      );
      this.props.battleMusic.loop = true;
      this.props.battleMusic.volume = this.props.volume - 0.1;
      setTimeout(() => this.props.battleMusic.play(), 24600);

      ////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////
    } else {
      // MULTIPLAYER OR CPU VS CPU ////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////
      this.props.battleMusic.loop = true;
      this.props.battleMusic.volume = this.props.volume - 0.1;
      this.props.battleMusic.play();
      setTimeout(() => $(document.querySelectorAll(".side")).fadeIn(100), 1000);
      setTimeout(
        () =>
          DisplayMessage(
            this.props.playerOneName +
              " was challenged by " +
              this.props.playerTwoName +
              "!"
          ),
        1000
      );

      setTimeout(
        () =>
          DisplayMessage(
            this.props.playerTwoName +
              " sent out " +
              this.state.player2Team[0].name +
              "!"
          ),
        3000
      );
      let cry1 = null;
      let cry2 = null;
      setTimeout(
        () => $(document.querySelector(".player2Sprite")).fadeIn(500),
        4000
      );
      cry1 = new Audio(this.state.player2Team[0].cry);
      cry1.volume = this.props.volume;
      setTimeout(() => cry1.play(), 4500);

      setTimeout(
        () =>
          DisplayMessage(
            this.props.playerOneName +
              " sent out " +
              this.state.player1Team[0].name +
              "!"
          ),
        5500
      );

      setTimeout(
        () => $(document.querySelector(".player1Sprite")).fadeIn(500),
        6500
      );
      cry2 = new Audio(this.state.player1Team[0].cry);
      cry2.volume = this.props.volume;
      setTimeout(() => cry2.play(), 7000);
      setTimeout(
        () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
        6500
      );

      if (this.props.mode === "CPUVSCPU") {
        this.setState({
          displayMoves: false,
          displayItems: false,
          displayTeam: false
        });
        setTimeout(
          () =>
            HandleAI(
              this.props.player1CurrentPokemon,
              this.props.player2CurrentPokemon,
              this.props.playersTurn,
              this.handleMoves,
              this.handlePoisonBurn,
              this.dealPoisonBurn,
              this.switchTurns,
              this.handleForceUpdate,
              this.state.player1Team,
              this.state.player2Team,
              this.props.playerOneName,
              this.props.playerTwoName,
              this.resetMultipliers,
              this.handleTeam,
              this.props.handleFainted,
              this.props.mode,
              this.state.isPoisonBurned,
              this.checkForStatusEffect,
              this.props.volume,
              this.checkWin,
              this.state.aiUsedMaxPotion,
              this.state.aiUsedAntidote,
              this.state.aiUsedBurnHeal,
              this.state.aiUsedParalyzeHeal,
              this.state.aiUsedAwakening,
              this.state.aiUsedIceHeal,
              this.handleAIUseItems,
              this.handleUpdateLastMove,
              this.state.lastMovePlayer1,
              this.state.lastMovePlayer2
            ),
          8000
        );
      } else {
        setTimeout(
          () => $(document.querySelector(".options")).fadeIn(300),
          8000
        );
        setTimeout(
          () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
          8000
        );
        //make 1000 to shorten
      }
    }
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    this.props.setBattleStarted(true);
  };

  handleVolume = () => {
    if (this.props.volume === 0) {
      this.props.setVolume(0.3);
      this.props.battleMusic.volume = 0.2;
    } else {
      this.props.setVolume(0);
      this.props.battleMusic.volume = 0;
    }
  };

  handleForceUpdate() {
    this.forceUpdate();
  }

  handleUpdateLastMove(moveName, playersTurn) {
    // console.log(
    //   "handleupdatelastmove firing, " + moveName + " ," + playersTurn
    // );

    if (playersTurn === "Player One") {
      this.setState({ lastMovePlayer1: moveName });
    } else {
      this.setState({ lastMovePlayer2: moveName });
    }
  }

  //CHECKWIN /////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  checkWin = () => {
    let faintedCountTeam1 = 0;
    let faintedCountTeam2 = 0;
    this.state.player1Team.forEach(poke => {
      if (poke.fainted) {
        faintedCountTeam1++;
      }
    });
    this.state.player2Team.forEach(poke => {
      if (poke.fainted) {
        faintedCountTeam2++;
      }
    });

    if (faintedCountTeam1 === this.props.teamSize) {
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        2000
      );
      //everyone on player ones team has fainted
      $(document.querySelector(".options")).fadeOut(300);
      $(document.querySelector(".mainmenuButton")).fadeOut(300);
      //play victory music
      let win = new Audio(Victory);
      if (this.props.volume === 0) {
        win.volume = 0;
      } else {
        win.volume = 1;
      }
      setTimeout(() => win.play(), 2000);
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerOneName + " is out of Pokémon! "
          ),
        2000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerTwoName +
              " defeated " +
              this.props.playerOneName +
              "!"
          ),
        3500
      );
      //reset ai items used
      this.setState({
        aiUsedMaxPotion: false,
        aiUsedAntidote: false,
        aiUsedAwakening: false,
        aiUsedBurnHeal: false,
        aiUsedIceHeal: false,
        aiUsedParalyzeHeal: false
      });
      setTimeout(() => win.pause(), 6000);
      setTimeout(() => this.props.battleMusic.pause(), 6000);
      setTimeout(() => this.props.returnToMainMenu(), 6000);
    }

    if (faintedCountTeam2 === this.props.teamSize) {
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        2000
      );
      //everyone on player twos team has fainted
      $(document.querySelector(".options")).fadeOut(300);
      $(document.querySelector(".mainmenuButton")).fadeOut(300);
      //play victory music
      let win = new Audio(Victory);
      if (this.props.volume === 0) {
        win.volume = 0;
      } else {
        win.volume = 1;
      }
      setTimeout(() => win.play(), 2000);
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerTwoName + " is out of Pokémon! "
          ),
        2000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerOneName +
              " defeated " +
              this.props.playerTwoName +
              "!"
          ),
        3500
      );
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeOut(100),
        5000
      );
      if (this.props.mode === "Single" && this.props.playerTwoName !== "CPU") {
        //if in Single Player
        setTimeout(
          () => $(document.querySelectorAll(".side")).fadeOut(10),
          5000
        );
        setTimeout(
          () => $(document.querySelector(".gymLeaderDiv")).fadeIn(300),
          5000
        );
        setTimeout(() => PlayLeaderOutro(this.props.playerTwoName), 5000);

        //badge earning
        ////////////////////////////////////////////////////////////////

        //get users current badges
        let badgesCount = this.props.badges;
        //increase badge count by 1 if less than 8, give player badge
        if (badgesCount < 13) {
          let earnBadge = false;
          switch (this.props.playerTwoName) {
            case "Brock":
              if (badgesCount === 0) {
                earnBadge = true;
              }
              break;
            case "Misty":
              if (badgesCount === 1) {
                earnBadge = true;
              }
              break;
            case "Lt. Surge":
              if (badgesCount === 2) {
                earnBadge = true;
              }
              break;
            case "Erika":
              if (badgesCount === 3) {
                earnBadge = true;
              }
              break;
            case "Koga":
              if (badgesCount === 4) {
                earnBadge = true;
              }
              break;
            case "Sabrina":
              if (badgesCount === 5) {
                earnBadge = true;
              }
              break;
            case "Blaine":
              if (badgesCount === 6) {
                earnBadge = true;
              }
              break;
            case "Giovanni":
              if (badgesCount === 7) {
                earnBadge = true;
              }
              break;
            case "Lorelei":
              if (badgesCount === 8) {
                earnBadge = true;
              }
              break;
            case "Bruno":
              if (badgesCount === 9) {
                earnBadge = true;
              }
              break;
            case "Agatha":
              if (badgesCount === 10) {
                earnBadge = true;
              }
              break;
            case "Lance":
              if (badgesCount === 11) {
                earnBadge = true;
              }
              break;
            case "Blue":
              if (badgesCount === 12) {
                earnBadge = true;
              }
              break;
            default:
              break;
          }
          if (earnBadge) {
            badgesCount += 1;
            this.props.setBadges(badgesCount);
            this.props.updateBadges(this.props.id, badgesCount);
            localStorage.setItem("Badges", badgesCount);
            $(document.querySelector(".eliteFour")).fadeOut(1);
            let badgeName = this.state.gymBadgeName;
            if (badgeName.includes("Elite")) {
              setTimeout(
                () =>
                  $(
                    DisplayMessage(
                      this.props.playerOneName +
                        " has beaten a member of the Elite Four!"
                    )
                  ),
                16000
              );
            } else {
              setTimeout(
                () =>
                  $(
                    DisplayMessage(
                      this.props.playerOneName +
                        " earned the " +
                        badgeName +
                        "!"
                    )
                  ),
                16000
              );
            }
          }
        }
        setTimeout(() => win.pause(), 20000);
        setTimeout(() => this.props.battleMusic.pause(), 2000);
        this.setState({
          aiUsedAwakening: false,
          aiUsedBurnHeal: false,
          aiUsedMaxPotion: false,
          aiUsedParalyzeHeal: false,
          aiUsedIceHeal: false,
          aiUsedAntidote: false
        });
        setTimeout(() => this.props.returnToMainMenu(), 20000);
      } else {
        setTimeout(() => win.pause(), 8000);
        setTimeout(() => this.props.battleMusic.pause(), 2000);
        this.setState({
          aiUsedAwakening: false,
          aiUsedBurnHeal: false,
          aiUsedMaxPotion: false,
          aiUsedParalyzeHeal: false,
          aiUsedIceHeal: false,
          aiUsedAntidote: false
        });
        setTimeout(() => this.props.returnToMainMenu(), 8000);
      }
    }
  };

  //RESET MULTPLIERS ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  resetMultipliers(reason) {
    if (this.props.playersTurn === "Player One") {
      if (reason === "swap") {
        this.setState({
          atkMultiplierUp1: 1,
          atkMultiplierDown1: 1,
          defMultiplierUp1: 1,
          defMultiplierDown1: 1,
          spdMultiplierUp1: 1,
          spdMultiplierDown1: 1,
          spcAtkMultiplierUp1: 1,
          spcAtkMultiplierDown1: 1,
          spcDefMultiplierUp1: 1,
          spcDefMultiplierDown1: 1
        });
      } else {
        this.setState({
          atkMultiplierUp2: 1,
          atkMultiplierDown2: 1,
          defMultiplierUp2: 1,
          defMultiplierDown2: 1,
          spdMultiplierUp2: 1,
          spdMultiplierDown2: 1,
          spcAtkMultiplierUp2: 1,
          spcAtkMultiplierDown2: 1,
          spcDefMultiplierUp2: 1,
          spcDefMultiplierDown2: 1
        });
      }
    } else {
      //currently player twos turn
      if (reason === "swap") {
        this.setState({
          atkMultiplierUp2: 1,
          atkMultiplierDown2: 1,
          defMultiplierUp2: 1,
          defMultiplierDown2: 1,
          spdMultiplierUp2: 1,
          spdMultiplierDown2: 1,
          spcAtkMultiplierUp2: 1,
          spcAtkMultiplierDown2: 1,
          spcDefMultiplierUp2: 1,
          spcDefMultiplierDown2: 1
        });
      } else {
        this.setState({
          atkMultiplierUp1: 1,
          atkMultiplierDown1: 1,
          defMultiplierUp1: 1,
          defMultiplierDown1: 1,
          spdMultiplierUp1: 1,
          spdMultiplierDown1: 1,
          spcAtkMultiplierUp1: 1,
          spcAtkMultiplierDown1: 1,
          spcDefMultiplierUp1: 1,
          spcDefMultiplierDown1: 1
        });
      }
    }
  }

  handleAIUseItems = item => {
    switch (item) {
      case "Max Potion":
        this.setState({ aiUsedMaxPotion: true });
        break;
      case "Antidote":
        this.setState({ aiUsedAntidote: true });
        break;
      case "Burn Heal":
        this.setState({ aiUsedBurnHeal: true });
        break;
      case "Paralyze Heal":
        this.setState({ aiUsedParalyzeHeal: true });
        break;
      case "Awakening":
        this.setState({ aiUsedAwakening: true });
        break;
      case "Ice Heal":
        this.setState({ aiUsedIceHeal: true });
        break;
      default:
    }
  };

  //HANDLE ITEMS ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleItems() {
    this.setState({
      displayItems: !this.state.displayItems,
      displayMoves: false,
      displayTeam: false
    });
    if (!this.state.displayItems) {
      $(document.querySelector(".itemsButton")).addClass("selected");
      $(document.querySelector(".fightButton")).removeClass("selected");
      $(document.querySelector(".pkmnButton")).removeClass("selected");
    } else {
      $(document.querySelector(".itemsButton")).removeClass("selected");
    }
  }

  //HANDLE MOVES ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleMoves() {
    this.setState({
      displayMoves: !this.state.displayMoves,
      displayItems: false,
      displayTeam: false
    });
    if (!this.state.displayMoves) {
      $(document.querySelector(".fightButton")).addClass("selected");
      $(document.querySelector(".pkmnButton")).removeClass("selected");
      $(document.querySelector(".itemsButton")).removeClass("selected");
    } else {
      $(document.querySelector(".fightButton")).removeClass("selected");
    }
  }

  //HANDLE TEAM ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleTeam(reason, swapTo = null) {
    let Team = this.state.player2Team;
    let PKMN = this.props.player2CurrentPokemon;
    let HPbar = $(document.querySelector(".player2HP"));
    let Sprite = $(document.querySelector(".player2Sprite"));
    let swapPoke = null;
    if (reason === "fainted") {
      //switch turns to show list for player who lost pokemon
      if (
        this.props.playersTurn === "Player One" &&
        this.state.player1Team[this.props.player1CurrentPokemon].hp === 0
      ) {
        //dont switch turns
      } else if (
        this.props.playersTurn === "Player Two" &&
        this.state.player2Team[this.props.player2CurrentPokemon].hp === 0
      ) {
        //dont switch turns
      } else {
        this.switchTurns();
      }
      //clear lastused, disabled counters moves if poke fainted
      if (this.props.playersTurn === "Player One") {
        this.setState({ lastMovePlayer1: "" });
        this.setState({ disabledCounterP1: 0 });
      } else {
        this.setState({ lastMovePlayer2: "" });
        this.setState({ disabledCounterP2: 0 });
      }

      //show only pokemon list, hide buttons
      if (this.props.mode === "Multi") {
        this.setState({
          displayTeam: !this.state.displayTeam,
          displayItems: false,
          displayMoves: false
        });
        $(document.querySelector(".fightButton")).hide(500);
        $(document.querySelector(".pkmnButton")).hide(500);
        $(document.querySelector(".itemsButton")).hide(500);
      } else if (this.props.mode === "Single") {
        if (this.props.playersTurn === "Player One") {
          this.setState({
            displayTeam: !this.state.displayTeam,
            displayItems: false,
            displayMoves: false
          });
          $(document.querySelector(".fightButton")).hide(500);
          $(document.querySelector(".pkmnButton")).hide(500);
          $(document.querySelector(".itemsButton")).hide(500);
        } else {
          //AI's turn, only swap if current pokemon fainted
          if (Team[PKMN].hp <= 0) {
            //increment current pokemon to send out next one
            //scan team for type advantage
            let PKMNtarget = "";
            PKMNtarget = this.props.player1Team[
              this.props.player1CurrentPokemon
            ];
            Team = this.props.player2Team;
            let targetType1 = PKMNtarget.types[0][0];
            let targetType2 = null;
            if (PKMNtarget.types[0][1] !== null) {
              targetType2 = PKMNtarget.types[0][1];
            }
            Team.forEach((poke, i) => {
              let type1 = poke.types[0][0];
              let type2 = null;
              if (poke.types[0][1] !== null) {
                type2 = poke.types[0][1];
              }
              let advanNum1 = CalcTypeAdvantage(targetType1, type1, type2);
              let advanNum2 = 1;
              if (targetType2 !== null) {
                advanNum2 = CalcTypeAdvantage(targetType2, type1, type2);
              }
              // console.log(
              //   poke.name + "'s advan is " + advanNum1 + " and " + advanNum2
              // );
              //if either type has advantage and pokemon is not currently out, switch
              if (
                ((advanNum1 <= 0.5 && advanNum2 <= 1) ||
                  (advanNum2 <= 0.5 && advanNum1 <= 1)) &&
                !Team[i].inBattle &&
                !Team[i].fainted
              ) {
                swapPoke = i;
              }
            });

            //if no type advantage pokemon found, swap to first non-fainted pokemon
            if (swapPoke === null) {
              console.log("no type advan found, using next in line...");

              swapPoke = Team.findIndex(poke => {
                return poke.fainted === false && poke.inBattle === false;
              });
            }

            this.resetMultipliers("fainted");
            //take current pokemon out of battle
            Team[PKMN].inBattle = false;
            //place swapped pokemon into battle
            Team[swapPoke].inBattle = true;
            //hide sprite
            Sprite.fadeOut(1000);
            setTimeout(
              () =>
                DisplayMessage(
                  this.props.playerTwoName +
                    " withdrew " +
                    Team[PKMN].name +
                    "..."
                ),
              500
            );
            setTimeout(
              () =>
                DisplayMessage("...and sent out " + Team[swapPoke].name + "!"),
              2500
            );
            let switchSound = new Audio(swapSound);
            switchSound.volume = this.props.volume;
            setTimeout(() => switchSound.play(), 1000);
            //update current pokemon to swapped pokemon
            setTimeout(() => this.handleSwapPokemon(swapPoke), 2500);

            //play new pokemon's cry
            let cry = new Audio(Team[swapPoke].cry);
            cry.volume = this.props.volume;
            setTimeout(cry.play.bind(cry), 3200);

            //fade sprite back in
            setTimeout(() => Sprite.fadeIn(1000), 3000);
            // calculate percent difference between current poke and swap pole hp in percentage
            let asPercentage = Team[swapPoke].hp / Team[swapPoke].OrigHp;
            //if swapped pokemon has full hp, make bar full
            if (Team[swapPoke].hp >= Team[swapPoke].OrigHp) {
              setTimeout(() => HPbar.css("width", "100%"), 2500);
              setTimeout(() => HPbar.removeClass("halfhp"), 2500);
              setTimeout(() => HPbar.removeClass("onefifthhp"), 2500);
              setTimeout(() => HPbar.addClass("fullhp"), 2500);
            } else {
              let updatedBarHP = 560 * asPercentage;
              //update health bar to reflect damage
              setTimeout(
                () => UpdateHP(HPbar, updatedBarHP, this.props.volume),
                2500
              );
            }
            //if pokemon fainted from recoil,poison,burn or confusion switch turns
            if (
              this.state.faintedByRecoilPoisonBurn === true ||
              Team[PKMN].isConfused
            ) {
              setTimeout(() => this.switchTurns(), 4000);
            }
          }
        }
      }
      if (this.props.mode === "CPUVSCPU") {
        //AI's turn, only swap if current pokemon fainted
        let Team = null;
        let PKMN = null;
        let Team2 = null;
        let PKMN2 = null;
        let HPbar = null;
        let Sprite = null;
        let name = null;
        if (this.props.playersTurn === "Player One") {
          name = this.props.playerOneName;
          PKMN = this.props.player1CurrentPokemon;
          Team = this.props.player1Team;
          PKMN2 = this.props.player2CurrentPokemon;
          Team2 = this.props.player2Team;
          HPbar = $(document.querySelector(".player1HP"));
          Sprite = $(document.querySelector(".player1Sprite"));
        } else {
          name = this.props.playerTwoName;
          PKMN = this.props.player2CurrentPokemon;
          Team = this.props.player2Team;
          PKMN2 = this.props.player1CurrentPokemon;
          Team2 = this.props.player1Team;
          HPbar = $(document.querySelector(".player2HP"));
          Sprite = $(document.querySelector(".player2Sprite"));
        }
        if (Team[PKMN].hp <= 0) {
          //increment current pokemon to send out next one
          let PKMNtarget = Team2[PKMN2];
          let targetType1 = PKMNtarget.types[0][0];
          let targetType2 = null;
          if (PKMNtarget.types[0][1] !== null) {
            targetType2 = PKMNtarget.types[0][1];
          }
          Team.forEach((poke, i) => {
            let type1 = poke.types[0][0];
            let type2 = null;
            if (poke.types[0][1] !== null) {
              type2 = poke.types[0][1];
            }
            let advanNum1 = CalcTypeAdvantage(targetType1, type1, type2);
            let advanNum2 = 1;
            if (targetType2 !== null) {
              advanNum2 = CalcTypeAdvantage(targetType2, type1, type2);
            }
            // console.log(
            //   poke.name + "'s advan is " + advanNum1 + " and " + advanNum2
            // );
            //if either type has advantage and pokemon is not currently out, switch
            if (
              ((advanNum1 <= 0.5 && advanNum2 <= 1) ||
                (advanNum2 <= 0.5 && advanNum1 <= 1)) &&
              !Team[i].inBattle &&
              !Team[i].fainted
            ) {
              swapPoke = i;
            }
          });

          //if no type advantage pokemon found, swap to first non-fainted pokemon
          if (swapPoke === null) {
            console.log("no type advan found, using next in line...");

            swapPoke = Team.findIndex(poke => {
              return poke.fainted === false && poke.inBattle === false;
            });
          }

          this.resetMultipliers("fainted");
          //take current pokemon out of battle
          Team[PKMN].inBattle = false;
          //place swapped pokemon into battle
          Team[swapPoke].inBattle = true;
          //hide sprite
          Sprite.fadeOut(1000);
          setTimeout(
            () => DisplayMessage(name + " withdrew " + Team[PKMN].name + "..."),
            500
          );
          setTimeout(
            () =>
              DisplayMessage("...and sent out " + Team[swapPoke].name + "!"),
            2500
          );
          let switchSound = new Audio(swapSound);
          switchSound.volume = this.props.volume;
          setTimeout(() => switchSound.play(), 1000);
          //update current pokemon to swapped pokemon
          setTimeout(() => this.handleSwapPokemon(swapPoke), 2500);

          //play new pokemon's cry
          let cry = new Audio(Team[swapPoke].cry);
          cry.volume = this.props.volume;
          setTimeout(cry.play.bind(cry), 3200);

          //fade sprite back in
          setTimeout(() => Sprite.fadeIn(1000), 3000);
          // calculate percent difference between current poke and swap pole hp in percentage
          let asPercentage = Team[swapPoke].hp / Team[swapPoke].OrigHp;
          //if swapped pokemon has full hp, make bar full
          if (Team[swapPoke].hp >= Team[swapPoke].OrigHp) {
            setTimeout(() => HPbar.css("width", "100%"), 2500);
            setTimeout(() => HPbar.removeClass("halfhp"), 2500);
            setTimeout(() => HPbar.removeClass("onefifthhp"), 2500);
            setTimeout(() => HPbar.addClass("fullhp"), 2500);
          } else {
            let updatedBarHP = 560 * asPercentage;
            //update health bar to reflect damage
            setTimeout(
              () => UpdateHP(HPbar, updatedBarHP, this.props.volume),
              2500
            );
          }
          if (
            this.state.faintedByRecoilPoisonBurn === true ||
            Team[PKMN].isConfused
          ) {
            setTimeout(() => this.switchTurns(), 4000);
          }
        }
      }
    }
    if (reason === "swap") {
      //show pokemon available for switching
      this.setState({
        displayTeam: !this.state.displayTeam,
        displayItems: false,
        displayMoves: false
      });
      if (!this.state.displayTeam) {
        $(document.querySelector(".pkmnButton")).addClass("selected");
        $(document.querySelector(".fightButton")).removeClass("selected");
        $(document.querySelector(".itemsButton")).removeClass("selected");
      } else {
        $(document.querySelector(".pkmnButton")).removeClass("selected");
      }
    }
    if (reason === "swapAI") {
      //AI's turn, swapping because of type disadvantage
      let Team = null;
      let PKMN = null;
      let HPbar = null;
      let Sprite = null;
      let swapPoke = swapTo;
      let name = null;
      if (this.props.playersTurn === "Player One") {
        name = this.props.playerOneName;
        PKMN = this.props.player1CurrentPokemon;
        Team = this.props.player1Team;
        HPbar = $(document.querySelector(".player1HP"));
        Sprite = $(document.querySelector(".player1Sprite"));
      } else {
        name = this.props.playerTwoName;
        PKMN = this.props.player2CurrentPokemon;
        Team = this.props.player2Team;
        HPbar = $(document.querySelector(".player2HP"));
        Sprite = $(document.querySelector(".player2Sprite"));
      }
      console.log("Switching to " + Team[swapTo].name);
      //increment current pokemon to send out next one
      this.resetMultipliers("swap");
      //take current pokemon out of battle
      Team[PKMN].inBattle = false;
      //place swapped pokemon into battle
      Team[swapPoke].inBattle = true;
      //hide sprite
      Sprite.fadeOut(1000);
      setTimeout(
        () => DisplayMessage(name + " withdrew " + Team[PKMN].name + "..."),
        500
      );
      setTimeout(
        () => DisplayMessage("...and sent out " + Team[swapPoke].name + "!"),
        2500
      );
      let switchSound = new Audio(swapSound);
      switchSound.volume = this.props.volume;
      setTimeout(() => switchSound.play(), 1000);
      //update current pokemon to swapped pokemon
      setTimeout(() => this.handleSwapPokemon(swapPoke), 2500);

      //play new pokemon's cry
      let cry = new Audio(Team[swapPoke].cry);
      cry.volume = this.props.volume;
      setTimeout(cry.play.bind(cry), 3200);

      //fade sprite back in
      setTimeout(() => Sprite.fadeIn(1000), 3000);
      // calculate percent difference between current poke and swap pole hp in percentage
      let asPercentage = Team[swapPoke].hp / Team[swapPoke].OrigHp;
      //if swapped pokemon has full hp, make bar full
      if (Team[swapPoke].hp >= Team[swapPoke].OrigHp) {
        setTimeout(() => HPbar.css("width", "100%"), 2500);
        setTimeout(() => HPbar.removeClass("halfhp"), 2500);
        setTimeout(() => HPbar.removeClass("onefifthhp"), 2500);
        setTimeout(() => HPbar.addClass("fullhp"), 2500);
      } else {
        let updatedBarHP = 560 * asPercentage;
        //update health bar to reflect damage
        setTimeout(
          () => UpdateHP(HPbar, updatedBarHP, this.props.volume),
          2500
        );
      }
      setTimeout(() => this.switchTurns(), 4000);
      // setTimeout(
      //   () =>
      //     HandleAI(
      //       this.props.player1CurrentPokemon,
      //       this.props.player2CurrentPokemon,
      //       this.props.playersTurn,
      //       this.handleMoves,
      //       this.handlePoisonBurn,
      //       this.dealPoisonBurn,
      //       this.switchTurns,
      //       this.handleForceUpdate,
      //       this.state.player1Team,
      //       this.state.player2Team,
      //       this.props.playerOneName,
      //       this.props.playerTwoName,
      //       this.resetMultipliers,
      //       this.handleTeam,
      //       this.props.handleFainted,
      //       this.props.mode,
      //       this.state.isPoisonBurned,
      //       this.checkForStatusEffect,
      //       this.props.volume,
      //       this.checkWin,
      //       this.state.aiUsedMaxPotion,
      //       this.state.aiUsedAntidote,
      //       this.state.aiUsedBurnHeal,
      //       this.state.aiUsedParalyzeHeal,
      //       this.state.aiUsedAwakening,
      //       this.state.aiUsedIceHeal,
      //       this.handleAIUseItems,
      //       this.handleUpdateLastMove,
      //       this.state.lastMovePlayer1,
      //       this.state.lastMovePlayer2
      //     ),
      //   5000
      // );
    }
  }

  //HANDLE SWAP POKEMON ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleSwapPokemon(swapPoke) {
    if (this.props.playersTurn === "Player One") {
      this.props.setPlayer1CurrentPokemon(swapPoke);
    } else {
      this.props.setPlayer2CurrentPokemon(swapPoke);
    }
  }

  //HANDLE FAINTED BY POISON/BURN ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleFaintedByRecoilPoisonBurn(bool) {
    if (bool) {
      this.setState({ faintedByRecoilPoisonBurn: true });
    } else {
      this.setState({ faintedByRecoilPoisonBurn: false });
    }
  }

  //HANDLE POISON BURN ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handlePoisonBurn(bool) {
    if (bool) {
      this.setState({ isPoisonBurned: true });
    } else {
      this.setState({ isPoisonBurned: false });
    }
  }

  //DEAL POISON BURN //////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  dealPoisonBurn = (PKMNuser, HPbar) => {
    //reset poison/burn flag
    this.handlePoisonBurn(false);
    let faintedPoisonBurn = false;
    //deal 1/8 of Orig HP as damage to user
    let damage = Math.round(PKMNuser.OrigHp / 8);
    //incase of really small damage amounts
    if (damage < 1) {
      damage = 1;
    }

    //store original bar percent
    let origHealth = 0;
    origHealth = parseInt(HPbar.css("width"));

    // calculate percent difference of hp / dmg
    let asPercentage = 0;
    asPercentage = damage / PKMNuser.hp;

    //update target pokemon hp after damage dealt
    PKMNuser.hp -= damage;
    if (PKMNuser.hp - damage <= 0) {
      PKMNuser.hp = 0;
      faintedPoisonBurn = true;
      this.handleFaintedByRecoilPoisonBurn(true);
    }
    this.handleForceUpdate();
    if (PKMNuser.statusCondition === "Poison") {
      setTimeout(
        () => DisplayMessage(PKMNuser.name + " was hurt by Poison!"),
        500
      );
    } else if (PKMNuser.statusCondition === "Burn") {
      setTimeout(
        () => DisplayMessage(PKMNuser.name + " was hurt by Burn!"),
        500
      );
    } else if (PKMNuser.isBound) {
      setTimeout(
        () => DisplayMessage(PKMNuser.name + " was hurt by Wrap!"),
        500
      );
    }
    let dmgDone = 0;
    dmgDone = origHealth * asPercentage;
    let updatedBarHP = 0;
    updatedBarHP = origHealth - dmgDone;

    //update health bar to reflect damage
    setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 500);
    if (faintedPoisonBurn) {
      //pokemon fainted
      setTimeout(
        () =>
          FaintPokemon(
            this.state.player1Team,
            this.state.player2Team,
            this.props.player1CurrentPokemon,
            this.props.player2CurrentPokemon,
            this.props.playersTurn,
            this.props.playerOneName,
            this.props.playerTwoName,
            this.resetMultipliers,
            this.handleTeam,
            this.props.handleFainted,
            this.props.mode,
            this.props.volume
          ),
        4500
      );
      setTimeout(() => this.checkWin(), 7500);
    }

    if (!faintedPoisonBurn) {
      setTimeout(() => this.switchTurns(), 2500);
    }
  };

  //USE DOUBLE STAGE MOVE FUNCTION////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useDoubleMove = lastMove => {
    //reappear sprite
    let currentPoke = "";
    let oppPoke = "";
    if (this.props.playersTurn === "Player One") {
      currentPoke = this.props.player1Team[this.props.player1CurrentPokemon];
      oppPoke = this.props.player2Team[this.props.player2CurrentPokemon];
      setTimeout(
        () => $(document.querySelector(".player1Sprite")).fadeIn(500),
        500
      );
      DisplayMessage(currentPoke.name + " used " + lastMove + "!");
    } else {
      currentPoke = this.props.player2Team[this.props.player2CurrentPokemon];
      oppPoke = this.props.player1Team[this.props.player1CurrentPokemon];
      setTimeout(
        () => $(document.querySelector(".player2Sprite")).fadeIn(500),
        500
      );
      DisplayMessage(currentPoke.name + " used " + lastMove + "!");
    }
    let power = 0;
    let moveName = "";
    let moveCategory = "";
    let moveType = "";
    let statusEff = "";
    let statusProb = 0;
    let moveSound = "";
    let moveAcc = 0;
    //find move in pokemon moves
    currentPoke.moves.forEach(move => {
      if (move.name === lastMove) {
        power = move.power;
        moveName = move.name;
        moveCategory = move.category;
        moveType = move.type;
        statusEff = move.statusEff;
        statusProb = move.statusProb;
        moveSound = move.sound;
        moveAcc = move.accuracy;
      }
    });
    //reset preparing attack flag
    currentPoke.preparingAttack = false;
    //play sound
    let attack = new Audio(moveSound);
    attack.volume = this.props.volume;
    attack.play();

    let percentChance =
      (moveAcc * (currentPoke.accuracy / oppPoke.evasion)) / 100;
    let rand = Math.random();
    let lastMove2;
    if (this.props.playersTurn === "Player One") {
      lastMove2 = this.state.lastMovePlayer2;
    } else {
      lastMove2 = this.state.lastMovePlayer1;
    }

    if (
      rand > percentChance ||
      (oppPoke.preparingAttack && (lastMove2 === "Dig" || lastMove2 === "Fly"))
    ) {
      if (power > 0) {
        setTimeout(
          () => DisplayMessage(currentPoke.name + "'s attack missed!"),
          2000
        );
      } else {
        setTimeout(
          () => DisplayMessage(oppPoke.name + " was unaffected..."),
          2000
        );
      }
      setTimeout(() => this.switchTurns(), 4000);
    } else {
      //do move damage
      setTimeout(
        () =>
          DealDamage(
            power,
            currentPoke.lv,
            moveName,
            moveCategory,
            moveType,
            statusEff,
            statusProb,
            this.props.player1Team,
            this.props.player2Team,
            this.props.player1CurrentPokemon,
            this.props.player2CurrentPokemon,
            this.props.playersTurn,
            this.props.playerOneName,
            this.props.playerTwoName,
            this.resetMultipliers,
            this.handleTeam,
            this.props.handleFainted,
            this.handleForceUpdate,
            this.checkForStatusEffect,
            this.state.isUserPoisonedOrBurned,
            this.dealPoisonBurn,
            this.switchTurns,
            this.props.mode,
            this.props.volume,
            this.checkWin
          ),
        1500
      );
    }
  };

  //SWITCH TURNS FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  switchTurns = () => {
    //check last turn moves
    //console.log("switching turns...");

    //reset faintedByRecoilPoisonBurn
    this.handleFaintedByRecoilPoisonBurn(false);
    this.handlePoisonBurn(false);

    //if disabled counters have value, subtract 1 turn from them until reach zero
    if (this.props.playersTurn === "Player One") {
      if (this.state.disabledCounterP1 > 0) {
        this.setState({ disabledCounterP1: this.state.disabledCounterP1 - 1 });
        if (this.state.disabledCounterP1 - 1 === 0) {
          DisplayMessage(
            this.props.player1Team[this.props.player1CurrentPokemon].name +
              " is disabled no more!"
          );
          let disabledIndex = this.props.player1Team[
            this.state.disabledPokeIndexP1
          ].moves.findIndex((move, i) => {
            if (move.name === "--DISABLED--") {
              return i;
            }
            return undefined;
          });
          this.props.player1Team[this.state.disabledPokeIndexP1].moves[
            disabledIndex
          ].name = this.state.disabledMoveNameP1;
        }
      }
    } else {
      if (this.state.disabledCounterP2 > 0) {
        this.setState({ disabledCounterP2: this.state.disabledCounterP2 - 1 });
        if (this.state.disabledCounterP2 - 1 === 0) {
          DisplayMessage(
            this.props.player2Team[this.props.player2CurrentPokemon].name +
              " is disabled no more!"
          );
          let disabledIndex = this.props.player2Team[
            this.state.disabledPokeIndexP2
          ].moves.findIndex((move, i) => {
            if (move.name === "--DISABLED--") {
              return i;
            }
            return undefined;
          });
          if (disabledIndex !== undefined) {
            this.props.player2Team[this.state.disabledPokeIndexP2].moves[
              disabledIndex
            ].name = this.state.disabledMoveNameP2;
          }
        }
      }
    }

    //switch to next player
    let lastMove = "";
    if (this.props.mode === "Multi") {
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
        lastMove = this.state.lastMovePlayer2;
        this.setState({ lastMovePlayer2: "" });
      } else {
        this.props.setPlayersTurn("Player One");
        lastMove = this.state.lastMovePlayer1;
        this.setState({ lastMovePlayer1: "" });
      }
      if (
        lastMove === "Dig" ||
        lastMove === "Fly" ||
        lastMove === "Sky Attack" ||
        lastMove === "Skull Bash" ||
        lastMove === "Solar Beam"
      ) {
        //console.log("double stage move used last turn");
        //check if pokemon is not fainted, if not, use double stage move
        let poke = null;
        if (this.props.playersTurn === "Player One") {
          poke = this.props.player1Team[this.props.player1CurrentPokemon];
        } else {
          poke = this.props.player2Team[this.props.player2CurrentPokemon];
        }
        if (poke.hp > 0) {
          this.useDoubleMove(lastMove);
        }
      } else {
        setTimeout(
          () => $(document.querySelector(".options")).fadeIn(300),
          500
        );
        setTimeout(
          () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
          500
        );
      }
    } else if (this.props.mode === "Single") {
      //mode is single
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
        lastMove = this.state.lastMovePlayer2;
        this.setState({ lastMovePlayer2: "" });
        this.handleForceUpdate();
        if (
          lastMove === "Dig" ||
          lastMove === "Fly" ||
          lastMove === "Sky Attack" ||
          lastMove === "Skull Bash" ||
          lastMove === "Solar Beam"
        ) {
          //check if pokemon is not fainted, if not, use double stage move
          let poke = null;
          if (this.props.playersTurn === "Player One") {
            poke = this.props.player1Team[this.props.player1CurrentPokemon];
          } else {
            poke = this.props.player2Team[this.props.player2CurrentPokemon];
          }
          if (poke.hp > 0) {
            this.useDoubleMove(lastMove);
          } else {
            console.log("pokemon fainted before using double move");
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          }
        } else {
          if (
            this.state.player2Team[this.props.player2CurrentPokemon].hp <= 0
          ) {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          } else {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              500
            );
          }
        }
      } else {
        this.props.setPlayersTurn("Player One");
        lastMove = this.state.lastMovePlayer1;
        this.setState({ lastMovePlayer1: "" });
        if (
          lastMove === "Dig" ||
          lastMove === "Fly" ||
          lastMove === "Sky Attack" ||
          lastMove === "Skull Bash" ||
          lastMove === "Solar Beam"
        ) {
          //check if pokemon is not fainted, if not, use double stage move
          let poke = null;
          if (this.props.playersTurn === "Player One") {
            poke = this.props.player1Team[this.props.player1CurrentPokemon];
          } else {
            poke = this.props.player2Team[this.props.player2CurrentPokemon];
          }
          if (poke.hp > 0) {
            this.useDoubleMove(lastMove);
          }
        } else {
          setTimeout(
            () => $(document.querySelector(".options")).fadeIn(300),
            500
          );
          setTimeout(
            () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
            500
          );
        }
        setTimeout(
          () => $(document.querySelector(".options")).fadeIn(300),
          500
        );
        setTimeout(
          () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
          500
        );
      }
    } else if (this.props.mode === "CPUVSCPU") {
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
        lastMove = this.state.lastMovePlayer2;
        this.setState({ lastMovePlayer2: "" });
        this.handleForceUpdate();
        if (
          lastMove === "Dig" ||
          lastMove === "Fly" ||
          lastMove === "Sky Attack" ||
          lastMove === "Skull Bash" ||
          lastMove === "Solar Beam"
        ) {
          //check if pokemon is not fainted, if not, use double stage move
          let poke = null;
          if (this.props.playersTurn === "Player One") {
            poke = this.props.player1Team[this.props.player1CurrentPokemon];
          } else {
            poke = this.props.player2Team[this.props.player2CurrentPokemon];
          }
          if (poke.hp > 0) {
            this.useDoubleMove(lastMove);
          } else {
            console.log("pokemon fainted before using double move");
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          }
        } else {
          if (
            this.state.player2Team[this.props.player2CurrentPokemon].hp <= 0
          ) {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          } else {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              500
            );
          }
        }
      } else {
        this.props.setPlayersTurn("Player One");
        lastMove = this.state.lastMovePlayer1;
        this.setState({ lastMovePlayer1: "" });
        this.handleForceUpdate();
        if (
          lastMove === "Dig" ||
          lastMove === "Fly" ||
          lastMove === "Sky Attack" ||
          lastMove === "Skull Bash" ||
          lastMove === "Solar Beam"
        ) {
          //check if pokemon is not fainted, if not, use double stage move
          let poke = null;
          if (this.props.playersTurn === "Player One") {
            poke = this.props.player1Team[this.props.player1CurrentPokemon];
          } else {
            poke = this.props.player2Team[this.props.player2CurrentPokemon];
          }
          if (poke.hp > 0) {
            console.log("pokemon not fainted, using double move...");

            this.useDoubleMove(lastMove);
          } else {
            console.log("pokemon fainted before using double move");
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          }
        } else {
          if (
            this.state.player1Team[this.props.player1CurrentPokemon].hp <= 0
          ) {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          } else {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              500
            );
          }
        }
      }
    }
  };

  //CHECK FOR STATUS EFFECT FUNCTION ////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  checkForStatusEffect = (
    statusEff,
    statusProb,
    PKMNuser,
    PKMNtarget,
    targetType1,
    targetType2,
    moveName,
    HPbar,
    power,
    recoilDamage,
    recoverDamage,
    isUserPoisonedOrBurned
  ) => {
    let atkMultiplierUp = 0;
    let atkMultiplierDown = 0;
    let defMultiplierUp = 0;
    let defMultiplierDown = 0;
    let spdMultiplierUp = 0;
    let spdMultiplierDown = 0;
    let spcAtkMultiplierUp = 0;
    let spcAtkMultiplierDown = 0;
    let spcDefMultiplierUp = 0;
    let spcDefMultiplierDown = 0;
    if (this.props.playersTurn === "Player One") {
      atkMultiplierUp = this.state.atkMultiplierUp1 + 0.5;
      atkMultiplierDown = this.state.atkMultiplierDown1 - 0.12;
      defMultiplierUp = this.state.defMultiplierUp1 + 0.5;
      defMultiplierDown = this.state.defMultiplierDown1 - 0.12;
      spdMultiplierUp = this.state.spdMultiplierUp1 + 0.5;
      spdMultiplierDown = this.state.spdMultiplierDown1 - 0.12;
      spcAtkMultiplierUp = this.state.spcAtkMultiplierUp1 + 0.5;
      spcAtkMultiplierDown = this.state.spcAtkMultiplierDown1 - 0.12;
      spcDefMultiplierUp = this.state.spcDefMultiplierUp1 + 0.5;
      spcDefMultiplierDown = this.state.spcDefMultiplierDown1 - 0.12;
    } else {
      //is player two turn
      atkMultiplierUp = this.state.atkMultiplierUp2 + 0.5;
      atkMultiplierDown = this.state.atkMultiplierDown2 - 0.12;
      defMultiplierUp = this.state.defMultiplierUp2 + 0.5;
      defMultiplierDown = this.state.defMultiplierDown2 - 0.12;
      spdMultiplierUp = this.state.spdMultiplierUp2 + 0.5;
      spdMultiplierDown = this.state.spdMultiplierDown2 - 0.12;
      spcAtkMultiplierUp = this.state.spcAtkMultiplierUp2 + 0.5;
      spcAtkMultiplierDown = this.state.spcAtkMultiplierDown2 - 0.12;
      spcDefMultiplierUp = this.state.spcDefMultiplierUp2 + 0.5;
      spcDefMultiplierDown = this.state.spcDefMultiplierDown2 - 0.12;
    }

    //TRANSFORM/////////////////////////////////////////////////////////////////////////////
    //if effect is Transform, apply moveset/details of target to user
    if (statusEff === "Transform") {
      //get properties of target
      let frontSpriteTarget = PKMNtarget.frontSprite;
      let backSpriteTarget = PKMNtarget.backSprite;
      let attackTarget = PKMNtarget.attack;
      let defenseTarget = PKMNtarget.defense;
      let speedTarget = PKMNtarget.speed;
      let specialattackTarget = PKMNtarget.specialattack;
      let specialdefenseTarget = PKMNtarget.specialdefense;
      let typesTarget = PKMNtarget.types.map(type => {
        return type;
      });
      let movesTarget = PKMNtarget.moves.map(move => {
        return move;
      });

      PKMNuser.frontSprite = frontSpriteTarget;
      PKMNuser.backSprite = backSpriteTarget;
      PKMNuser.attack = attackTarget;
      PKMNuser.defense = defenseTarget;
      PKMNuser.speed = speedTarget;
      PKMNuser.specialattack = specialattackTarget;
      PKMNuser.specialdefense = specialdefenseTarget;
      PKMNuser.types = typesTarget;
      PKMNuser.moves = movesTarget;
      PKMNuser.isTransformed = true;

      //tint sprites to be purple
      if (this.props.playersTurn === "Player One") {
        $(document.querySelector(".player1Sprite")).fadeOut(500);
        setTimeout(
          () => $(document.querySelector(".player1Sprite")).fadeIn(500),
          2000
        );
      } else {
        $(document.querySelector(".player2Sprite")).fadeOut(500);
        setTimeout(
          () => $(document.querySelector(".player2Sprite")).fadeIn(500),
          2000
        );
      }

      setTimeout(() => this.handleForceUpdate(), 2000);

      setTimeout(
        () =>
          DisplayMessage(
            PKMNuser.name + " transformed into " + PKMNtarget.name + "!"
          ),
        2000
      );
    }

    //CONFUSION USER/////////////////////////////////////////////////////////////////////////////
    //if condition is ConfusionUser, only apply if user is not already confused
    if (statusEff === "ConfusionUser") {
      if (PKMNuser.isConfused === false) {
        setTimeout(() => (PKMNuser.isConfused = true), 2000);
        //confuse user for 1 to 4 turns
        PKMNuser.turnsConfused = Math.round(RandomNumberGenerator(1, 4));
        setTimeout(
          () => DisplayMessage(PKMNuser.name + " became Confused!"),
          2000
        );
      }
    }

    //CONFUSION TARGET/////////////////////////////////////////////////////////////////////////////
    //if condition is ConfusionTarget, only apply if target is not already confused
    if (statusEff === "ConfusionTarget") {
      if (PKMNtarget.isConfused === false) {
        let rand = Math.random();
        if (rand < statusProb) {
          setTimeout(() => (PKMNtarget.isConfused = true), 2000);
          //confuse target for 1 to 4 turns
          PKMNtarget.turnsConfused = Math.round(RandomNumberGenerator(1, 4));
          setTimeout(
            () => DisplayMessage(PKMNtarget.name + " became Confused!"),
            2000
          );
        }
      } else {
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + " is already confused."),
          2000
        );
      }
    }

    //DISABLE ///////////////////////////////////////////////////////////////////////////////////////////
    //if condition is disable, targets last used move is disabled for four turns
    if (statusEff === "disable") {
      //check if target used a move(not first turn)
      let lastMove = "";
      let counter = 0;
      if (this.props.playersTurn === "Player One") {
        lastMove = this.state.lastMovePlayer2;
        counter = this.state.disabledCounterP2;
      } else {
        lastMove = this.state.lastMovePlayer1;
        counter = this.state.disabledCounterP1;
      }

      //check if pokemon is already disabled, fail if true
      if (counter > 0) {
        setTimeout(() => DisplayMessage("But it failed..."), 1500);
      } else {
        //if lastMove is valid, get move stats from target
        let targetMoveIndex = null;
        if (lastMove !== "") {
          //console.log(lastMove);

          targetMoveIndex = PKMNtarget.moves.findIndex((move, i) => {
            console.log(move.name, lastMove, i);

            if (move.name === lastMove) {
              return i;
            }
            return undefined;
          });
          //console.log(targetMoveIndex);

          //set move name to disabled
          if (
            targetMoveIndex !== undefined &&
            PKMNtarget.moves[targetMoveIndex].name !== undefined
          ) {
            if (this.props.playersTurn === "Player One") {
              this.setState({ disabledCounterP2: 4 });
              this.setState({
                disabledMoveNameP2: PKMNtarget.moves[targetMoveIndex].name
              });
            } else {
              this.setState({ disabledCounterP1: 4 });
              this.setState({
                disabledMoveNameP1: PKMNtarget.moves[targetMoveIndex].name
              });
            }
            let origName = PKMNtarget.moves[targetMoveIndex].name;
            setTimeout(
              () =>
                DisplayMessage(
                  PKMNtarget.name + "'s " + origName + " was disabled!"
                ),
              1500
            );
            PKMNtarget.moves[targetMoveIndex].name = "--DISABLED--";
          } else {
            setTimeout(() => DisplayMessage("But it failed..."), 1500);
          }
        } else {
          setTimeout(() => DisplayMessage("But it failed..."), 1500);
        }
      }
    }

    //COPY ///////////////////////////////////////////////////////////////////////////////////////////
    //if condition is copy, user with replace move with targets last move if used, otherwise copy targets first move in list
    if (statusEff === "Copy") {
      //find copy move index in users move list
      let copyIndex = 0;
      PKMNuser.moves.forEach((move, i) => {
        if (move.statusEff === "Copy") {
          copyIndex = i;
        }
      });

      //check if target used a move(not first turn)
      let lastMove = "";
      if (this.props.playersTurn === "Player One") {
        lastMove = this.state.lastMovePlayer2;
      } else {
        lastMove = this.state.lastMovePlayer1;
      }
      //if lastMove is valid, get move stats from target
      let targetMove = null;
      if (lastMove !== "") {
        targetMove = PKMNtarget.moves.find(move => {
          return move.name === lastMove;
        });
        //replace copy move with target last move used
        PKMNuser.moves[copyIndex] = targetMove;
      } else {
        //replace copy move with targets first move
        PKMNuser.moves[copyIndex] = PKMNtarget.moves[0];
      }
      let copiedName =
        targetMove !== null && targetMove !== undefined
          ? targetMove.name
          : PKMNtarget.moves[0].name;
      DisplayMessage(PKMNuser.name + " copied " + copiedName + "!");
    }

    //BOUND/////////////////////////////////////////////////////////////
    // if (statusEff === "Bound") {
    //   if (!PKMNtarget.isBound) {
    //     PKMNtarget.isBound = true;
    //     PKMNtarget.turnsBound = Math.round(RandomNumberGenerator(2, 5));

    //     setTimeout(
    //       () =>
    //         DisplayMessage(
    //           PKMNtarget.name + " was wrapped by " + PKMNuser.name + "!"
    //         ),
    //       2000
    //     );
    //   }
    // }

    //RECOIL/////////////////////////////////////////////////////////////
    let faintedByRecoil = false;
    let faintedSameTurn = false;
    if (statusEff === "recoil") {
      //damage should be 1/4 damage dealt to target
      let Damage = recoilDamage;
      //if move is self destruct or explosion, recoil is 999
      if (moveName === "Self Destruct" || moveName === "Explosion") {
        Damage = 999;
      } else {
        setTimeout(
          () => DisplayMessage(PKMNuser.name + " was hit with recoil!"),
          2000
        );
      }

      let origHealth = parseInt(HPbar.css("width"));
      let asPercentage = Damage / PKMNuser.hp;

      //update target pokemon hp after damage dealt
      if (PKMNuser.hp - Damage < 1) {
        setTimeout(() => (PKMNuser.hp = 0), 2000);
        faintedByRecoil = true;
        this.handleFaintedByRecoilPoisonBurn(true);
      } else {
        setTimeout(() => (PKMNuser.hp = PKMNuser.hp - Damage), 2000);
      }
      let dmgDone = origHealth * asPercentage;
      let updatedBarHP = origHealth - dmgDone;
      if (updatedBarHP < 3) {
        updatedBarHP = 0;
      }

      //update health bar to reflect damage
      setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 2000);
      // console.log(
      //   "after recoil, " +
      //     PKMNuser.name +
      //     "'s HP is " +
      //     (PKMNuser.hp - Damage).toString()
      // );
      if (PKMNuser.hp - Damage < 1) {
        //pokemon fainted
        console.log(PKMNtarget.hp);

        if (PKMNtarget.hp < 1) {
          faintedSameTurn = true;
          //both pokemon fainted
          setTimeout(
            () =>
              FaintPokemon(
                this.state.player1Team,
                this.state.player2Team,
                this.props.player1CurrentPokemon,
                this.props.player2CurrentPokemon,
                this.props.playersTurn,
                this.props.playerOneName,
                this.props.playerTwoName,
                this.resetMultipliers,
                this.handleTeam,
                this.props.handleFainted,
                this.props.mode,
                this.props.volume,
                faintedSameTurn
              ),
            3500
          );
        } else {
          console.log(
            "user fainted from recoil, target did not faint this turn"
          );

          setTimeout(
            () =>
              FaintPokemon(
                this.state.player1Team,
                this.state.player2Team,
                this.props.player1CurrentPokemon,
                this.props.player2CurrentPokemon,
                this.props.playersTurn,
                this.props.playerOneName,
                this.props.playerTwoName,
                this.resetMultipliers,
                this.handleTeam,
                this.props.handleFainted,
                this.props.mode,
                this.props.volume
              ),
            3500
          );
        }
      }
      setTimeout(() => this.handleForceUpdate(), 2000);
    }

    //RECOVER DAMAGE/////////////////////////////////////////////////////////////
    if (statusEff === "recoverDamage") {
      //damage should be 1/2 damage dealt to target
      let Damage = recoverDamage;
      if (Damage < 1) {
        Damage = 1;
      }

      // let Damage = PKMNuser.hp / RecoverAmount;
      let origHealth = parseInt(HPbar.css("width"));
      let asPercentage = Damage / PKMNuser.hp;

      //update target pokemon hp after damage recovered
      //if hp will be over Orig, only raise to Orig hp
      if (PKMNuser.hp + Damage > PKMNuser.OrigHp) {
        setTimeout(() => (PKMNuser.hp = PKMNuser.OrigHp), 2000);
      } else {
        setTimeout(() => (PKMNuser.hp += Damage), 2000);
      }
      let hpRecovered = origHealth * asPercentage;
      let updatedBarHP = origHealth + hpRecovered;

      //update health bar to reflect recovery
      setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 2000);
      setTimeout(() => this.handleForceUpdate(), 2000);

      let recover = new Audio(recoverSound);
      recover.volume = this.props.volume;
      setTimeout(() => recover.play(), 2000);
      setTimeout(() => DisplayMessage(PKMNuser.name + " recovered HP!"), 2000);
    }

    //RECOVER HP/////////////////////////////////////////////////////////////
    if (statusEff === "recoverHP") {
      //recoveryAmount should be 1/2 original HP value
      let recoveryAmount = PKMNuser.OrigHp / 2;

      // let Damage = PKMNuser.hp / RecoverAmount;
      let origHealth = parseInt(HPbar.css("width"));
      let asPercentage = recoveryAmount / PKMNuser.hp;

      //update target pokemon hp after damage recovered
      //if hp will be over Orig, only raise to Orig hp
      if (PKMNuser.hp + recoveryAmount > PKMNuser.OrigHp) {
        PKMNuser.hp = PKMNuser.OrigHp;
      } else {
        PKMNuser.hp = PKMNuser.hp + recoveryAmount;
      }
      let hpRecovered = origHealth * asPercentage;
      let updatedBarHP = origHealth + hpRecovered;

      //update health bar to reflect recovery
      setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 2000);
      setTimeout(() => this.handleForceUpdate(), 2000);

      let recover = new Audio(recoverSound);
      recover.volume = this.props.volume;
      setTimeout(() => recover.play(), 2000);
      setTimeout(() => DisplayMessage(PKMNuser.name + " recovered HP!"), 2000);
    }

    //REST /////////////////////////////////////////////////////////////
    if (statusEff === "Rest") {
      //restore all hp
      setTimeout(() => (PKMNuser.hp = PKMNuser.OrigHp), 2500);

      //update health bar to reflect recovery
      setTimeout(() => HPbar.css("width", "100%"), 2500);
      setTimeout(() => HPbar.removeClass("onefifthhp"), 2500);
      setTimeout(() => HPbar.removeClass("halfhp"), 2500);
      setTimeout(() => HPbar.addClass("fullhp"), 2500);
      setTimeout(() => DisplayMessage(PKMNuser.name + " fell Asleep!"), 2000);

      //put user to sleep for exactly 2 turns
      setTimeout(() => (PKMNuser.statusCondition = "Sleep"), 2500);
      PKMNuser.turnsAsleep = 2;
    } else {
      //CONDITIONS //////////////////////////////////////////////////////////
      //POISON, BURN, PARALYZE, SLEEP, FROZEN, USERCONFUSION, TARGETCONFUSION,BOUND
      let rand = Math.random();
      if (statusEff === "Poison" && PKMNtarget.statusCondition === "") {
        if (
          targetType1 === "poison" ||
          targetType2 === "poison" ||
          targetType1 === "steel" ||
          targetType2 === "steel" ||
          PKMNtarget.statusCondition === "Poison"
        ) {
          //poison and steel types not effected by poison
          //do nothing...
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            setTimeout(() => (PKMNtarget.statusCondition = "Poison"), 2000);
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was Poisoned!"),
              2000
            );
          }
        }
      } else if (
        statusEff === "Burn" &&
        (PKMNtarget.statusCondition === "" ||
          PKMNtarget.statusCondition === "Frozen")
      ) {
        if (targetType1 === "fire" || targetType2 === "fire") {
          //if target is currently frozen, remove status
          if (PKMNtarget.statusCondition === "Frozen") {
            setTimeout(() => (PKMNtarget.statusCondition = ""), 2000);
            setTimeout(
              () =>
                DisplayMessage(
                  PKMNtarget.name + " thawed out from " + moveName + "!"
                ),
              2000
            );
          } else {
            //fire types not effected by burn
            //do nothing...
          }
        } else {
          //if target is currently frozen, remove status
          if (PKMNtarget.statusCondition === "Frozen") {
            setTimeout(() => (PKMNtarget.statusCondition = ""), 2000);
            setTimeout(
              () =>
                DisplayMessage(
                  PKMNtarget.name + " thawed out from " + moveName + "!"
                ),
              2000
            );
          } else {
            //check probability chance from move to see if hits
            if (rand < statusProb) {
              setTimeout(() => (PKMNtarget.statusCondition = "Burn"), 2000);
              setTimeout(
                () => DisplayMessage(PKMNtarget.name + " was Burned!"),
                2000
              );
            }
          }
        }
      } else if (
        statusEff === "Paralyze" &&
        PKMNtarget.statusCondition === ""
      ) {
        if (targetType1 === "ground" || targetType2 === "ground") {
          //ground types not effected by paralyze
          //do nothing...
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            setTimeout(() => (PKMNtarget.statusCondition = "Paralyze"), 2000);
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was Paralyzed!"),
              2000
            );
          }
        }
      } else if (statusEff === "Sleep" && PKMNtarget.statusCondition === "") {
        //if condition is Sleep, only apply if target is not already asleep
        if (PKMNtarget.statusCondition !== "Sleep") {
          setTimeout(() => (PKMNtarget.statusCondition = "Sleep"), 2000);
          let sleepTurns = Math.round(RandomNumberGenerator(2, 5));
          PKMNtarget.turnsAsleep = sleepTurns;
          setTimeout(
            () => DisplayMessage(PKMNtarget.name + " fell Asleep!"),
            2000
          );
        } else {
          //target is already asleep
          setTimeout(
            () => DisplayMessage(PKMNtarget.name + " was unaffected..."),
            2000
          );
        }
      } else if (statusEff === "Frozen" && PKMNtarget.statusCondition === "") {
        if (targetType1 === "ice" || targetType2 === "ice") {
          //ice types not effected by frozen
          //do nothing...
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            setTimeout(() => (PKMNtarget.statusCondition = "Frozen"), 2000);
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was Frozen solid!"),
              2000
            );
          }
        }
      } else if (
        statusEff === "TriAttack" &&
        PKMNtarget.statusCondition === ""
      ) {
        //chooses a random status to afficlt (paralyze, burn, freeze)
        let affliction = "";
        let num = RandomNumberGenerator(1, 3);
        num = Math.round(num);

        switch (num) {
          case 1:
            affliction = "Paralyze";
            break;
          case 2:
            affliction = "Burn";
            break;
          case 3:
            affliction = "Frozen";
            break;
          default:
            affliction = "Paralyze";
            break;
        }

        //do nothing if type is unaffected/ or already afflicted with status
        if (
          (affliction === "Frozen" &&
            (targetType1 === "ice" || targetType2 === "ice")) ||
          (affliction === "Burn" &&
            (targetType1 === "fire" || targetType2 === "fire")) ||
          (affliction === "Paralyze" &&
            (targetType1 === "ground" || targetType2 === "ground"))
        ) {
          //do nothing...
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            setTimeout(() => (PKMNtarget.statusCondition = affliction), 2000);
            switch (affliction) {
              case "Paralyze":
                setTimeout(
                  () => DisplayMessage(PKMNtarget.name + " was Paralyzed!"),
                  2000
                );
                break;
              case "Burn":
                setTimeout(
                  () => DisplayMessage(PKMNtarget.name + " was Burned!"),
                  2000
                );
                break;
              case "Frozen":
                setTimeout(
                  () => DisplayMessage(PKMNtarget.name + " was Frozen solid!"),
                  2000
                );
                break;
              default:
                setTimeout(
                  () => DisplayMessage(PKMNtarget.name + " was Paralyzed!"),
                  2000
                );
                break;
            }
          }
        }
      }
    }

    //STATUS MODIFIERS: raisesUserAtk, raisesUserDef,raisesUserSpd,raisesUserSpcAtk,raisesUserSpcDef,raisesUserAcc,raisesUserEva
    // lowersTargetAtk, lowersTargetDef,lowersTargetSpd,lowersTargetSpcAtk,lowersTargetSpcDef,lowersTargetAcc,lowersTargetEva
    //RAISES USER////////////////////////////////////////////////////////////
    let statUpSound = new Audio(statRise);
    statUpSound.volume = this.props.volume;
    let statDownSound = new Audio(statLower);
    statDownSound.volume = this.props.volume;
    if (statusEff === "raisesUserAtk") {
      if (PKMNuser.attack >= PKMNuser.OrigAttack * 4) {
        PKMNuser.attack = PKMNuser.OrigAttack * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s ATK wont go higher!"),
          2000
        );
      } else {
        PKMNuser.attack = PKMNuser.OrigAttack * atkMultiplierUp;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(() => DisplayMessage(PKMNuser.name + "'s ATK rose!"), 2000);
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ atkMultiplierUp1: atkMultiplierUp });
      } else {
        this.setState({ atkMultiplierUp2: atkMultiplierUp });
      }
    } else if (statusEff === "raisesUserDef") {
      if (PKMNuser.defense >= PKMNuser.OrigDefense * 4) {
        PKMNuser.defense = PKMNuser.OrigDefense * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s DEF wont go higher!"),
          2000
        );
      } else {
        PKMNuser.defense = PKMNuser.OrigDefense * defMultiplierUp;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(() => DisplayMessage(PKMNuser.name + "'s DEF rose!"), 2000);
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ defMultiplierUp1: defMultiplierUp });
      } else {
        this.setState({ defMultiplierUp2: defMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpd") {
      if (PKMNuser.speed >= PKMNuser.OrigSpeed * 4) {
        PKMNuser.speed = PKMNuser.OrigSpeed * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPD wont go higher!"),
          2000
        );
      } else {
        PKMNuser.speed = PKMNuser.OrigSpeed * spdMultiplierUp;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(() => DisplayMessage(PKMNuser.name + "'s SPD rose!"), 2000);
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ spdMultiplierUp1: spdMultiplierUp });
      } else {
        this.setState({ spdMultiplierUp2: spdMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpcAtk") {
      if (PKMNuser.specialattack >= PKMNuser.OrigSpecialattack * 4) {
        PKMNuser.specialattack = PKMNuser.OrigSpecialattack * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPC ATK wont go higher!"),
          2000
        );
      } else {
        PKMNuser.specialattack =
          PKMNuser.OrigSpecialattack * spcAtkMultiplierUp;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPC ATK rose!"),
          2000
        );
      }

      if (this.props.playersTurn === "Player One") {
        this.setState({ spcAtkMultiplierUp1: spcAtkMultiplierUp });
      } else {
        this.setState({ spcAtkMultiplierUp2: spcAtkMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpcDef") {
      if (PKMNuser.specialdefense >= PKMNuser.OrigSpecialdefense * 4) {
        PKMNuser.specialdefense = PKMNuser.OrigSpecialdefense * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPC DEF wont go higher!"),
          2000
        );
      } else {
        PKMNuser.specialdefense =
          PKMNuser.OrigSpecialdefense * spcDefMultiplierUp;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPC DEF rose!"),
          2000
        );
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ spcDefMultiplierUp1: spcDefMultiplierUp });
      } else {
        this.setState({ spcDefMultiplierUp2: spcDefMultiplierUp });
      }
    } else if (statusEff === "raisesUserAcc") {
      if (PKMNuser.accuracy > 1.5) {
        PKMNuser.accuracy = 1.5;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s ACCURACY wont go higher!"),
          2000
        );
      } else {
        PKMNuser.accuracy = PKMNuser.accuracy + 0.1;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s ACCURACY rose!"),
          2000
        );
      }
    } else if (statusEff === "raisesUserEva") {
      if (PKMNuser.evasion > 1.5) {
        PKMNuser.evasion = 1.5;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s EVASION wont go higher!"),
          2000
        );
      } else {
        PKMNuser.evasion = PKMNuser.evasion + 0.1;
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s EVASION rose!"),
          2000
        );
      }
    }

    //LOWERS TARGET////////////////////////////////////////////////////////////////
    if (statusEff === "lowersTargetAtk") {
      if (PKMNtarget.attack <= PKMNtarget.OrigAttack / 4) {
        PKMNtarget.attack = PKMNtarget.OrigAttack / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ATK wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.attack = PKMNtarget.OrigAttack * atkMultiplierDown;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ATK fell!"),
          2000
        );
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ atkMultiplierDown1: atkMultiplierDown });
      } else {
        this.setState({ atkMultiplierDown2: atkMultiplierDown });
      }
    } else if (statusEff === "lowersTargetDef") {
      if (PKMNtarget.defense <= PKMNtarget.OrigDefense / 4) {
        PKMNtarget.defense = PKMNtarget.OrigDefense / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s DEF wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.defense = PKMNtarget.defense * defMultiplierDown;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s DEF fell!"),
          2000
        );
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ defMultiplierDown1: defMultiplierDown });
      } else {
        this.setState({ defMultiplierDown2: defMultiplierDown });
      }
    } else if (statusEff === "lowersTargetSpd") {
      if (PKMNtarget.speed <= PKMNtarget.OrigSpeed / 4) {
        PKMNtarget.speed = PKMNtarget.OrigSpeed / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPD wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.speed = PKMNtarget.speed * spdMultiplierDown;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPD fell!"),
          2000
        );
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ spdMultiplierDown1: spdMultiplierDown });
      } else {
        this.setState({ spdMultiplierDown2: spdMultiplierDown });
      }
    } else if (statusEff === "lowersTargetSpcAtk") {
      if (PKMNtarget.specialattack <= PKMNtarget.OrigSpecialattack / 4) {
        PKMNtarget.specialattack = PKMNtarget.OrigSpecialattack / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPC ATK wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.specialattack =
          PKMNtarget.specialattack * spcAtkMultiplierDown;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPC ATK fell!"),
          2000
        );
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ spcAtkMultiplierDown1: spcAtkMultiplierDown });
      } else {
        this.setState({ spcAtkMultiplierDown2: spcAtkMultiplierDown });
      }
    } else if (statusEff === "lowersTargetSpcDef") {
      if (PKMNtarget.specialdefense <= PKMNtarget.OrigSpecialdefense / 4) {
        PKMNtarget.specialdefense = PKMNtarget.OrigSpecialdefense / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPC DEF wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.specialdefense =
          PKMNtarget.specialdefense * spcDefMultiplierDown;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPC DEF fell!"),
          2000
        );
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ spcDefMultiplierDown1: spcDefMultiplierDown });
      } else {
        this.setState({ spcDefMultiplierDown2: spcDefMultiplierDown });
      }
    } else if (statusEff === "lowersTargetAcc") {
      if (PKMNtarget.accuracy < 0.5) {
        PKMNtarget.accuracy = 0.5;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ACCURACY wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.accuracy = PKMNtarget.accuracy - 0.1;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ACCURACY fell!"),
          2000
        );
      }
    } else if (statusEff === "lowersTargetEva") {
      if (PKMNtarget.evasion < 0.5) {
        PKMNtarget.evasion = 0.5;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s EVASION wont go lower!"),
          2000
        );
      } else {
        PKMNtarget.evasion = PKMNtarget.evasion - 0.1;
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s EVASION fell!"),
          2000
        );
      }
    }
    //if move is not a damaging one, end turn
    if (power === 0 && statusEff !== "MirrorMove") {
      //if user is poisonedburned, delay switching turns
      if (isUserPoisonedOrBurned || PKMNuser.isBound) {
        setTimeout(() => this.dealPoisonBurn(PKMNuser, HPbar), 4000);
      } else {
        setTimeout(() => this.switchTurns(), 4000);
      }
    } else {
      //move did damage
      if (faintedByRecoil) {
        //dont switch turns here
      } else {
        if (!isUserPoisonedOrBurned) {
          setTimeout(() => this.switchTurns(), 3500);
        }
      }
    }
  };

  //TYPES FUNCTION ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  Types = array => {
    var typesList = array.map((item, i) => {
      return item.map((type, i) => {
        return MatchIconWithType(type);
      });
    });
    return <span>{typesList}</span>;
  };

  render() {
    if (this.props.battleReady) {
      let player = null;
      if (this.props.playersTurn === "Player One") {
        player = this.props.playerOneName;
      } else {
        player = this.props.playerTwoName;
      }
      if (!this.props.battleStarted) {
        this.startBattle();
      }

      return (
        <div className="battleWindow">
          <div className="battleContainer container">
            <div className="gymLeaderDiv">
              <img
                className="leader"
                id="gymLeader"
                src={this.state.gymLeaderLogo}
                alt="GYM_LEADER"
              />
              <br />
              <br />
              <h5>{this.props.playerTwoName}</h5>
            </div>
            <div className="gymBadgeDiv">
              <img
                className="badge"
                id="gymBadge"
                src={this.state.gymBadgeLogo}
                alt="GYM_BADGE"
              />
              <br />
              <br />
              <h5>{this.state.gymBadgeName}</h5>
            </div>
            <div className="side side1 col">
              <p className="row">
                <span className="teamRoster">
                  {this.state.player2Team.map((item, i) => {
                    return (
                      <img
                        className="pokeball-team"
                        id={"p2" + i}
                        key={i}
                        src={pokeball}
                        alt="pokeball"
                      />
                    );
                  })}
                </span>
              </p>
              <p className="row">
                {this.state.player2Team[this.props.player2CurrentPokemon].name}
                <span className="badge badge-dark">
                  Lv
                  {this.state.player2Team[this.props.player2CurrentPokemon].lv}
                </span>
                {this.Types(
                  this.state.player2Team[this.props.player2CurrentPokemon].types
                )}
                {Conditions(
                  this.state.player2Team[this.props.player2CurrentPokemon]
                    .statusCondition,
                  this.state.player2Team[this.props.player2CurrentPokemon]
                    .isConfused
                )}
                <button
                  className="btn btn-info typeChartButton"
                  data-toggle="modal"
                  data-target=".typeChartPopup"
                >
                  Type Charts
                </button>
                <img
                  className={` ${
                    this.props.volume === 0 ? "volume muted" : "volume"
                  }`}
                  src={volumeIcon}
                  alt="SOUND"
                  onClick={() => this.handleVolume()}
                />
              </p>
              <div
                className="modal typeChartPopup"
                style={{ overflowY: "hidden" }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <img className="typeChart chart-1" src={Bug} alt="Bug" />
                    <img
                      className="typeChart chart-2"
                      src={Dragon}
                      alt="Dragon"
                    />
                    <img
                      className="typeChart chart-3"
                      src={Electric}
                      alt="Electric"
                    />
                    <img
                      className="typeChart chart-4"
                      src={Fighting}
                      alt="Fighting"
                    />
                    <img className="typeChart chart-5" src={Fire} alt="Fire" />
                    <img
                      className="typeChart chart-6"
                      src={Flying}
                      alt="Flying"
                    />
                    <img
                      className="typeChart chart-7"
                      src={Ghost}
                      alt="Ghost"
                    />
                    <img
                      className="typeChart chart-8"
                      src={Grass}
                      alt="Grass"
                    />
                    <img
                      className="typeChart chart-9"
                      src={Ground}
                      alt="Ground"
                    />
                    <img className="typeChart chart-10" src={Ice} alt="Ice" />
                    <img
                      className="typeChart chart-11"
                      src={Normal}
                      alt="Normal"
                    />
                    <img
                      className="typeChart chart-12"
                      src={Poison}
                      alt="Poison"
                    />
                    <img
                      className="typeChart chart-13"
                      src={Psychic}
                      alt="Psychic"
                    />
                    <img className="typeChart chart-14" src={Rock} alt="Rock" />
                    <img
                      className="typeChart chart-15"
                      src={Steel}
                      alt="Steel"
                    />
                    <img
                      className="typeChart chart-16"
                      src={Water}
                      alt="Water"
                    />
                    <div className="modal-footer chart-f">
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

              <div className="progress">
                HP:
                <div
                  className="progress-bar player2HP fullhp"
                  role="progressbar"
                  aria-valuenow="41"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                />
              </div>
              <p className="smallText smallHP">
                {Math.round(
                  this.state.player2Team[this.props.player2CurrentPokemon].hp
                )}
                /
                {
                  this.state.player2Team[this.props.player2CurrentPokemon]
                    .OrigHp
                }
              </p>
              <div className="spriteContainer">
                <img
                  className={`${
                    this.state.player2Team[this.props.player2CurrentPokemon]
                      .isTransformed
                      ? `sprite player2Sprite transformed`
                      : `sprite player2Sprite`
                  }`}
                  src={
                    this.state.player2Team[this.props.player2CurrentPokemon]
                      .frontSprite
                  }
                  alt={
                    this.state.player2Team[this.props.player2CurrentPokemon]
                      .name
                  }
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = <Icon name="question circle" />;
                  }}
                />
              </div>
            </div>
            <div className="side side2 col">
              <p className="row">
                <span className="teamRoster">
                  {this.state.player1Team.map((item, i) => {
                    return (
                      <img
                        className="pokeball-team"
                        id={"p1" + i}
                        key={i}
                        src={pokeball}
                        alt="pokeball"
                      />
                    );
                  })}
                </span>
              </p>
              <p className="row">
                {this.state.player1Team[this.props.player1CurrentPokemon].name}
                <span className="badge badge-dark">
                  Lv
                  {this.state.player1Team[this.props.player1CurrentPokemon].lv}
                </span>
                {this.Types(
                  this.state.player1Team[this.props.player1CurrentPokemon].types
                )}
                {Conditions(
                  this.state.player1Team[this.props.player1CurrentPokemon]
                    .statusCondition,
                  this.state.player1Team[this.props.player1CurrentPokemon]
                    .isConfused
                )}
              </p>

              <div className="progress">
                HP:
                <div
                  className="progress-bar player1HP fullhp"
                  role="progressbar"
                  aria-valuenow="41"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                />
              </div>
              <p className="smallText smallHP">
                {Math.round(
                  this.state.player1Team[this.props.player1CurrentPokemon].hp
                )}
                /
                {
                  this.state.player1Team[this.props.player1CurrentPokemon]
                    .OrigHp
                }
              </p>
              <div className="spriteContainer">
                <img
                  className={`${
                    this.state.player1Team[this.props.player1CurrentPokemon]
                      .isTransformed
                      ? `sprite player1Sprite transformed`
                      : `sprite player1Sprite`
                  }`}
                  src={
                    this.state.player1Team[this.props.player1CurrentPokemon]
                      .backSprite
                  }
                  alt={
                    this.state.player1Team[this.props.player1CurrentPokemon]
                      .name
                  }
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = <Icon name="question circle" />;
                  }}
                />
              </div>
            </div>
            <div className="battleMessages">
              <p className="message" />
              <p className="playermessage" />
            </div>
          </div>
          <div className="battleInputs container">
            <div>{player}'s Turn</div>
            <div className="options row">
              <button
                type="button"
                className="btn btn-light fightButton"
                onClick={() => this.handleMoves()}
              >
                Fight
              </button>
              <button
                type="button"
                className="btn btn-light pkmnButton"
                onClick={() => this.handleTeam("swap")}
              >
                Pokémon
              </button>
              <button
                type="button"
                className="btn btn-light itemsButton"
                onClick={() => this.handleItems()}
              >
                Bag
              </button>
            </div>
            <TeamContainer
              displayTeam={this.state.displayTeam}
              player1Team={this.state.player1Team}
              player2Team={this.state.player2Team}
              handleTeam={this.handleTeam}
              handleSwapPokemon={this.handleSwapPokemon}
              handleFainted={this.props.handleFainted}
              resetMultipliers={this.resetMultipliers}
              switchTurns={this.switchTurns}
              faintedByRecoilPoisonBurn={this.state.faintedByRecoilPoisonBurn}
            />
            <ItemsContainer
              displayItems={this.state.displayItems}
              player1Team={this.state.player1Team}
              player2Team={this.state.player2Team}
              switchTurns={this.switchTurns}
              handleItems={this.handleItems}
              handleTeam={this.handleTeam}
              handleFainted={this.props.handleFainted}
              handleForceUpdate={this.handleForceUpdate}
              resetMultipliers={this.resetMultipliers}
              checkForStatusEffect={this.checkForStatusEffect}
              dealPoisonBurn={this.dealPoisonBurn}
            />
            <MovesContainer
              displayMoves={this.state.displayMoves}
              player1Team={this.state.player1Team}
              player2Team={this.state.player2Team}
              switchTurns={this.switchTurns}
              checkForStatusEffect={this.checkForStatusEffect}
              handleMoves={this.handleMoves}
              isPoisonBurned={this.state.isPoisonBurned}
              handlePoisonBurn={this.handlePoisonBurn}
              dealPoisonBurn={this.dealPoisonBurn}
              handleTeam={this.handleTeam}
              handleFainted={this.props.handleFainted}
              handleForceUpdate={this.handleForceUpdate}
              resetMultipliers={this.resetMultipliers}
              checkWin={this.checkWin}
              handleUpdateLastMove={this.handleUpdateLastMove}
              lastMovePlayer1={this.state.lastMovePlayer1}
              lastMovePlayer2={this.state.lastMovePlayer2}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BattleStage;

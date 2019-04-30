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
import { handleAI } from "../AI";
import Victory from "../../Sounds/victory.mp3";
import swapSound from "../../Sounds/BattleSounds/General/SWITCHIN.wav";
import statRise from "../../Sounds/BattleSounds/General/STATRISE.wav";
import statLower from "../../Sounds/BattleSounds/General/STATLOWER.wav";
import recoverSound from "../../Sounds/BattleSounds/General/RECOVER.wav";
import volumeIcon from "../../volume.png";
import TeamContainer from "../../Containers/TeamContainer";
import ItemsContainer from "../../Containers/ItemsContainer";
import MovesContainer from "../../Containers/MovesContainer";

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
      spcDefMultiplierDown2: 1
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
  }

  componentWillReceiveProps(props) {
    this.setState({
      player1Team: props.player1Team,
      player2Team: props.player2Team
    });
  }

  startBattle = () => {
    this.props.handleBattlePlaying();
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
      () => $(document.querySelector(".player2Sprite")).removeClass("hideMe"),
      4000
    );
    cry1 = new Audio(this.state.player2Team[0].cry);
    cry1.volume = this.props.volume;
    setTimeout(() => cry1.play(), 4500);

    if (this.props.mode === "Single") {
      setTimeout(
        () => DisplayMessage("Go " + this.state.player1Team[0].name + "!"),
        5500
      );
    } else {
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
    }

    setTimeout(
      () => $(document.querySelector(".player1Sprite")).removeClass("hideMe"),
      6500
    );
    cry2 = new Audio(this.state.player1Team[0].cry);
    cry2.volume = this.props.volume;
    setTimeout(() => cry2.play(), 7000);

    if (this.props.mode === "CPUVSCPU") {
      setTimeout(
        () =>
          handleAI(
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
            this.checkWin
          ),
        8000
      );
    } else {
      setTimeout(
        () => $(document.querySelector(".options")).removeClass("hideMe"),
        8000
      );
      //make 1000 to shorten
    }

    this.props.setBattleStarted(true);
  };

  handleVolume = () => {
    console.log("toggling sound");

    if (this.props.volume === 0) {
      console.log("unmuting");
      this.props.setVolume(0.7);
      this.props.handleBattleVol();
    } else {
      console.log("muting");
      this.props.setVolume(0);
      this.props.handleBattleVol();
    }
  };

  handleForceUpdate() {
    this.forceUpdate();
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
    console.log(
      "checkWin",
      "team1: " + faintedCountTeam1,
      "team 2: " + faintedCountTeam2,
      "team size: " + this.props.teamSize
    );

    if (faintedCountTeam1 === this.props.teamSize) {
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        2000
      );
      //everyone on player ones team has fainted
      $(document.querySelector(".options")).hide(500);
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
    }

    if (faintedCountTeam2 === this.props.teamSize) {
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        2000
      );
      //everyone on player twos team has fainted
      $(document.querySelector(".options")).hide(500);
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

      //badge earning
      ////////////////////////////////////////////////////////////////
      if (this.props.mode === "Single") {
        let badge = null;

        //get users current badges
        let badgesCount = this.props.badges;
        //increase badge count by 1 if less than 8, give player badge
        if (badgesCount < 8) {
          badgesCount += 1;
          this.props.setBadges(badgesCount);
          this.props.updateBadges(this.props.id, badgesCount);
          switch (this.props.playerTwoName) {
            case "Brock":
              badge = "Boulder Badge";
              break;
            case "Misty":
              badge = "Cascade Badge";
              break;
            case "Lt. Surge":
              badge = "Thunder Badge";
              break;
            case "Erika":
              badge = "Rainbow Badge";
              break;
            case "Koga":
              badge = "Soul Badge";
              break;
            case "Sabrina":
              badge = "Marsh Badge";
              break;
            case "Blaine":
              badge = "Volcano Badge";
              break;
            case "Giovanni":
              badge = "Earth Badge";
              break;
            default:
              badge = "Badge";
              break;
          }
          setTimeout(
            () =>
              $(document.querySelector(".playermessage")).text(
                this.props.playerOneName + " earned the " + badge + "!"
              ),
            5000
          );
        }
      }
      setTimeout(() => $(document.querySelector(".options")).hide(300), 3500);
    }
  };

  //RESET MULTPLIERS ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  resetMultipliers(reason) {
    console.log("resetting multipliers...");
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

  //HANDLE ITEMS ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleItems() {
    console.log("toggling items...");
    this.setState({
      displayItems: !this.state.displayItems,
      displayMoves: false,
      displayTeam: false
    });
  }

  //HANDLE MOVES ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleMoves() {
    console.log("toggling moves...");
    this.setState({
      displayMoves: !this.state.displayMoves,
      displayItems: false,
      displayTeam: false
    });
  }

  //HANDLE TEAM ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handleTeam(reason) {
    console.log("toggling team..." + reason);
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
          if (
            this.state.player2Team[this.props.player2CurrentPokemon].hp <= 0
          ) {
            //increment current pokemon to send out next one
            let Team = this.state.player2Team;
            let PKMN = this.props.player2CurrentPokemon;
            let HPbar = $(document.querySelector(".player2HP"));
            let Sprite = $(document.querySelector(".player2Sprite"));
            let swapPoke = this.props.player2CurrentPokemon + 1;
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
              console.log(updatedBarHP, HPbar.css("width"));
              //update health bar to reflect damage
              setTimeout(
                () => UpdateHP(HPbar, updatedBarHP, this.props.volume),
                2500
              );
            }
            if (this.state.faintedByRecoilPoisonBurn === true) {
              console.log("fainted from recoil/poison/burn switching turns");
              setTimeout(() => this.switchTurns(), 4000);
            }
          }
        }
      }
      if (this.props.mode === "CPUVSCPU") {
        //AI's turn, only swap if current pokemon fainted
        let Team = null;
        let PKMN = null;
        let HPbar = null;
        let Sprite = null;
        let swapPoke = null;
        let name = null;
        if (this.props.playersTurn === "Player One") {
          name = this.props.playerOneName;
          PKMN = this.props.player1CurrentPokemon;
          Team = this.state.player1Team;
          HPbar = $(document.querySelector(".player1HP"));
          Sprite = $(document.querySelector(".player1Sprite"));
          swapPoke = this.props.player1CurrentPokemon + 1;
        } else {
          name = this.props.playerTwoName;
          PKMN = this.props.player2CurrentPokemon;
          Team = this.state.player2Team;
          HPbar = $(document.querySelector(".player2HP"));
          Sprite = $(document.querySelector(".player2Sprite"));
          swapPoke = this.props.player2CurrentPokemon + 1;
        }
        if (Team[PKMN].hp <= 0) {
          //increment current pokemon to send out next one
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
          if (this.state.faintedByRecoilPoisonBurn === true) {
            console.log("fainted from recoil/poison/burn switching turns");
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
      console.log("setting recoil/poison/burn fainted to true");
      this.setState({ faintedByRecoilPoisonBurn: true });
    } else {
      console.log("resetting recoil/poison/burn fainted to false");
      this.setState({ faintedByRecoilPoisonBurn: false });
    }
  }

  //HANDLE POISON BURN ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  handlePoisonBurn(bool) {
    if (bool) {
      console.log("setting poison/burn damage to true");
      this.setState({ isPoisonBurned: true });
    } else {
      console.log("setting poison/burn damage to false");
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
    console.log("poison/burn/bound damage: " + damage);

    //store original bar percent
    let origHealth = 0;
    origHealth = parseInt(HPbar.css("width"));

    // calculate percent difference of hp / dmg
    let asPercentage = 0;
    asPercentage = damage / PKMNuser.hp;

    //update target pokemon hp after damage dealt
    PKMNuser.hp -= damage;
    if (PKMNuser.hp < 1) {
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
    }

    if (!faintedPoisonBurn) {
      setTimeout(() => this.switchTurns(), 2500);
    }
  };

  //SWITCH TURNS FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  switchTurns = () => {
    //reset faintedByRecoilPoisonBurn
    this.handleFaintedByRecoilPoisonBurn(false);
    this.handlePoisonBurn(false);

    //switch to next player
    if (this.props.mode === "Multi") {
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
      } else {
        this.props.setPlayersTurn("Player One");
      }
      setTimeout(() => $(document.querySelector(".options")).fadeIn(300), 500);
    } else if (this.props.mode === "Single") {
      //mode is single
      if (this.props.playersTurn === "Player One") {
        console.log("switching to AI's turn...");
        this.props.setPlayersTurn("Player Two");
        this.handleForceUpdate();
        if (this.state.player2Team[this.props.player2CurrentPokemon].hp <= 0) {
          setTimeout(
            () =>
              handleAI(
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
                this.checkWin
              ),
            4500
          );
        } else {
          setTimeout(
            () =>
              handleAI(
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
                this.checkWin
              ),
            500
          );
        }
      } else {
        this.props.setPlayersTurn("Player One");
        setTimeout(
          () => $(document.querySelector(".options")).fadeIn(300),
          500
        );
      }
    } else if (this.props.mode === "CPUVSCPU") {
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
        this.handleForceUpdate();
        if (this.state.player2Team[this.props.player2CurrentPokemon].hp <= 0) {
          setTimeout(
            () =>
              handleAI(
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
                this.checkWin
              ),
            4500
          );
        } else {
          setTimeout(
            () =>
              handleAI(
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
                this.checkWin
              ),
            500
          );
        }
      } else {
        this.props.setPlayersTurn("Player One");
        this.handleForceUpdate();
        if (this.state.player1Team[this.props.player1CurrentPokemon].hp <= 0) {
          setTimeout(
            () =>
              handleAI(
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
                this.checkWin
              ),
            4500
          );
        } else {
          setTimeout(
            () =>
              handleAI(
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
                this.checkWin
              ),
            500
          );
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
    console.log("checking for status effect...");
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
    if (this.PlayersTurn === "Player One") {
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
    console.log("move has status effect: " + statusEff);

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
      }
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
    if (statusEff === "recoil") {
      //damage should be 1/4 damage dealt to target
      let Damage = recoilDamage;

      // let Damage = PKMNuser.hp / RecoilAmount;
      let origHealth = parseInt(HPbar.css("width"));
      let asPercentage = Damage / PKMNuser.hp;

      //update target pokemon hp after damage dealt
      if (PKMNuser.hp - Damage < 1) {
        setTimeout(() => (PKMNuser.hp = 0), 2000);
        faintedByRecoil = true;
        this.setState({ faintedByRecoilPoisonBurn: true });
      } else {
        setTimeout(() => (PKMNuser.hp = PKMNuser.hp - Damage), 2000);
      }
      let dmgDone = origHealth * asPercentage;
      let updatedBarHP = origHealth - dmgDone;
      if (updatedBarHP < 3) {
        updatedBarHP = 0;
      }
      console.log("updatedhp: " + updatedBarHP);

      //update health bar to reflect damage
      setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 2000);
      if (PKMNuser.hp <= 0) {
        //pokemon fainted
        if (PKMNtarget.hp <= 0) {
          //if opponent pokemon is also fainted, delay fainting user until switch is done
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
            9000
          );
        } else {
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

      setTimeout(
        () => DisplayMessage(PKMNuser.name + " was hit with recoil!"),
        2000
      );
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
          if (PKMNtarget.statusCondition !== "Poison") {
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was unaffected..."),
              2000
            );
          }
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            console.log(PKMNtarget.name + " was Poisoned!");
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
        if (
          targetType1 === "fire" ||
          targetType2 === "fire" ||
          PKMNtarget.statusCondition === "Burn"
        ) {
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
            if (PKMNtarget.statusCondition !== "Burn") {
              setTimeout(
                () => DisplayMessage(PKMNtarget.name + " was unaffected..."),
                2000
              );
            }
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
              console.log(PKMNtarget.name + " was Burned!");
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
        if (
          targetType1 === "electric" ||
          targetType2 === "electric" ||
          PKMNtarget.statusCondition === "Paralyze"
        ) {
          //electric types not effected by paralyze
          //do nothing...
          if (PKMNtarget.statusCondition !== "Paralyze") {
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was unaffected..."),
              2000
            );
          }
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            console.log(PKMNtarget.name + " was Paralyzed!");
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
          console.log(
            PKMNtarget.name + " will sleep for " + sleepTurns + " turns..."
          );

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
        if (
          targetType1 === "ice" ||
          targetType2 === "ice" ||
          PKMNtarget.statusCondition === "Frozen"
        ) {
          //ice types not effected by frozen
          //do nothing...
          if (PKMNtarget.statusCondition !== "Frozen") {
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was unaffected..."),
              2000
            );
          }
        } else {
          //check probability chance from move to see if hits
          if (rand < statusProb) {
            console.log(PKMNtarget.name + " was Frozen!");
            setTimeout(() => (PKMNtarget.statusCondition = "Frozen"), 2000);
            setTimeout(
              () => DisplayMessage(PKMNtarget.name + " was Frozen solid!"),
              2000
            );
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
      PKMNuser.attack = PKMNuser.OrigAttack * atkMultiplierUp;

      if (PKMNuser.attack >= PKMNuser.OrigAttack * 4) {
        PKMNuser.attack = PKMNuser.OrigAttack * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s ATK wont go higher!"),
          2000
        );
      } else {
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(() => DisplayMessage(PKMNuser.name + "'s ATK rose!"), 2000);
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ atkMultiplierUp1: atkMultiplierUp });
      } else {
        this.setState({ atkMultiplierUp2: atkMultiplierUp });
      }
    } else if (statusEff === "raisesUserDef") {
      PKMNuser.defense = PKMNuser.OrigDefense * defMultiplierUp;

      if (PKMNuser.defense >= PKMNuser.OrigDefense * 4) {
        PKMNuser.defense = PKMNuser.OrigDefense * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s DEF wont go higher!"),
          2000
        );
      } else {
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(() => DisplayMessage(PKMNuser.name + "'s DEF rose!"), 2000);
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ defMultiplierUp1: defMultiplierUp });
      } else {
        this.setState({ defMultiplierUp2: defMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpd") {
      PKMNuser.speed = PKMNuser.OrigSpeed * spdMultiplierUp;

      if (PKMNuser.speed >= PKMNuser.OrigSpeed * 4) {
        PKMNuser.speed = PKMNuser.OrigSpeed * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPD wont go higher!"),
          2000
        );
      } else {
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(() => DisplayMessage(PKMNuser.name + "'s SPD rose!"), 2000);
      }
      if (this.props.playersTurn === "Player One") {
        this.setState({ spdMultiplierUp1: spdMultiplierUp });
      } else {
        this.setState({ spdMultiplierUp2: spdMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpcAtk") {
      PKMNuser.specialattack = PKMNuser.OrigSpecialattack * spcAtkMultiplierUp;

      if (PKMNuser.specialattack >= PKMNuser.OrigSpecialattack * 4) {
        PKMNuser.specialattack = PKMNuser.OrigSpecialattack * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPC ATK wont go higher!"),
          2000
        );
      } else {
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
      PKMNuser.specialdefense =
        PKMNuser.OrigSpecialdefense * spcDefMultiplierUp;

      if (PKMNuser.specialdefense >= PKMNuser.OrigSpecialdefense * 4) {
        PKMNuser.specialdefense = PKMNuser.OrigSpecialdefense * 4;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s SPC DEF wont go higher!"),
          2000
        );
      } else {
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
      PKMNuser.accuracy = PKMNuser.accuracy + 0.1;

      if (PKMNuser.accuracy > 1.5) {
        PKMNuser.accuracy = 1.5;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s ACCURACY wont go higher!"),
          2000
        );
      } else {
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s ACCURACY went up!"),
          2000
        );
      }
    } else if (statusEff === "raisesUserEva") {
      PKMNuser.evasion = PKMNuser.evasion + 0.1;

      if (PKMNuser.evasion > 1.5) {
        PKMNuser.evasion = 1.5;
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s EVASION wont go higher!"),
          2000
        );
      } else {
        setTimeout(() => statUpSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNuser.name + "'s EVASION went up!"),
          2000
        );
      }
    }

    //LOWERS TARGET////////////////////////////////////////////////////////////////
    if (statusEff === "lowersTargetAtk") {
      PKMNtarget.attack = PKMNtarget.OrigAttack * atkMultiplierDown;

      if (PKMNtarget.attack <= PKMNtarget.OrigAttack / 4) {
        PKMNtarget.attack = PKMNtarget.OrigAttack / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ATK wont go lower!"),
          2000
        );
      } else {
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
      PKMNtarget.defense = PKMNtarget.defense * defMultiplierDown;

      if (PKMNtarget.defense <= PKMNtarget.OrigDefense / 4) {
        PKMNtarget.defense = PKMNtarget.OrigDefense / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s DEF wont go lower!"),
          2000
        );
      } else {
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
      PKMNtarget.speed = PKMNtarget.speed * spdMultiplierDown;

      if (PKMNtarget.speed <= PKMNtarget.OrigSpeed / 4) {
        PKMNtarget.speed = PKMNtarget.OrigSpeed / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPD wont go lower!"),
          2000
        );
      } else {
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
      PKMNtarget.specialattack =
        PKMNtarget.specialattack * spcAtkMultiplierDown;

      if (PKMNtarget.specialattack <= PKMNtarget.OrigSpecialattack / 4) {
        PKMNtarget.specialattack = PKMNtarget.OrigSpecialattack / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPC ATK wont go lower!"),
          2000
        );
      } else {
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
      PKMNtarget.specialdefense =
        PKMNtarget.specialdefense * spcDefMultiplierDown;

      if (PKMNtarget.specialdefense <= PKMNtarget.OrigSpecialdefense / 4) {
        PKMNtarget.specialdefense = PKMNtarget.OrigSpecialdefense / 4;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s SPC DEF wont go lower!"),
          2000
        );
      } else {
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
      PKMNtarget.accuracy = PKMNtarget.accuracy - 0.1;

      if (PKMNtarget.accuracy < 0.5) {
        PKMNtarget.accuracy = 0.5;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ACCURACY wont go lower!"),
          2000
        );
      } else {
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s ACCURACY fell!"),
          2000
        );
      }
    } else if (statusEff === "lowersTargetEva") {
      PKMNtarget.evasion = PKMNtarget.evasion - 0.1;

      if (PKMNtarget.evasion < 0.5) {
        PKMNtarget.evasion = 0.5;
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s EVASION wont go lower!"),
          2000
        );
      } else {
        setTimeout(() => statDownSound.play(), 2000);
        setTimeout(
          () => DisplayMessage(PKMNtarget.name + "'s EVASION fell!"),
          2000
        );
      }
    }
    //if move is not a damaging one, end turn
    if (power === 0) {
      console.log("move has 0 power...");

      //if user is poisonedburned, delay switching turns
      if (isUserPoisonedOrBurned || PKMNuser.isBound) {
        console.log(PKMNuser.name + " is poisoned/burned");
        setTimeout(() => this.dealPoisonBurn(PKMNuser, HPbar), 4000);
      } else {
        setTimeout(() => this.switchTurns(), 4000);
      }
    } else {
      //move did damage
      if (faintedByRecoil) {
        console.log("pokemon fainted from recoil...");
        //dont switch turns here
      } else {
        console.log("move had status effect that did not cause fainting...");
        if (!isUserPoisonedOrBurned) {
          console.log(
            "user is not poisoned/burned and did not faint from move, switching turns..."
          );

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
            <div className="side side1 col">
              <p className="row">
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
                <img
                  className={` ${
                    this.props.volume === 0 ? "volume muted" : "volume"
                  }`}
                  src={volumeIcon}
                  alt="SOUND"
                  onClick={() => this.handleVolume()}
                />
              </p>

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
                />
              </div>
            </div>
            <div className="side side2 col">
              <p className="row">
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
            <div className="options row hideMe">
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

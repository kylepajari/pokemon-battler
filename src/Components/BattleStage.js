import React, { Component } from "react";
import "./BattleStage.css";
import pokeball from "../pokeball.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { CalcTypeAdvantage } from "./TypeAdvantage";
import $ from "jquery";
import { MatchIconWithType } from "./MatchTypeIcon";

class BattleStage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playersTurn: "Player One",
      player1Team: [],
      player2Team: [],
      player1CurrentPokemon: 0,
      player2CurrentPokemon: 0,
      player1PokemonCurrentHP: 0,
      player2PokemonCurrentHP: 0,
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
  }

  componentDidMount() {
    $(document.querySelector(".fightButton")).fadeIn(10);
    $(document.querySelector(".message")).fadeOut(10);
    $(document.querySelector(".playermessage")).fadeOut(10);
  }

  componentWillReceiveProps(props) {
    this.setState({
      player1Team: props.player1Team,
      player2Team: props.player2Team
    });
  }

  //RAPID FLASH FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  rapidFlash = img => {
    $(img).fadeOut(100);
    $(img).fadeIn(300);
    $(img).fadeOut(100);
    $(img).fadeIn(300);
    $(img).fadeOut(100);
    $(img).fadeIn(300);
  };

  //DISPLAY MOVES FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  displayMoves = playersTurn => {
    this.setState({
      player1PokemonInBattle: true,
      player2PokemonInBattle: true
    });

    if (playersTurn === "Player One") {
      //show moves for current battling pokemon
      $(document.querySelector(".player1Moves")).fadeIn(300);
      $(document.querySelector(".player1Moves")).show();
      $(document.querySelector(".player2Moves")).fadeOut(10);
      $(document.querySelector(".player2Moves")).hide();
    } else if (playersTurn === "Player Two") {
      //show moves for current battling pokemon
      $(document.querySelector(".player2Moves")).fadeIn(300);
      $(document.querySelector(".player2Moves")).show();
      $(document.querySelector(".player1Moves")).fadeOut(10);
      $(document.querySelector(".player1Moves")).hide();
    }

    $(document.querySelector(".fightButton")).fadeOut(300);
  };

  //RANDOM NUMBER GENERATOR FUNCTION //////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  randomNumberGenerator = (min, max) => {
    let num = (Math.random() * (max - min) + min).toFixed(2);
    return num;
  };

  //FAINT POKEMON FUNCTION //////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  faintPokemon = () => {
    let Sprite = null;
    let Pokeball = null;
    let PKMN = null;
    let Team = null;
    let HPbar = null;
    let PlayersTurn = this.state.playersTurn;
    if (PlayersTurn === "Player One") {
      HPbar = $(document.querySelector(".player1HP"));
      Team = this.state.player1Team;
      PKMN = this.state.player1CurrentPokemon;
      Sprite = $(document.querySelector(".player1Sprite"));
      Pokeball = $(
        document.getElementById("p1" + this.state.player1CurrentPokemon)
      );
    } else {
      HPbar = $(document.querySelector(".player2HP"));
      Team = this.state.player2Team;
      PKMN = this.state.player2CurrentPokemon;
      Sprite = $(document.querySelector(".player2Sprite"));
      Pokeball = $(
        document.getElementById("p2" + this.state.player2CurrentPokemon)
      );
    }

    //set fainted property to true on pokemon
    Team[PKMN].fainted = true;

    //hide sprite
    Sprite.fadeOut(1000);

    //add opacity to pokeball representing pokemon
    Pokeball.addClass("faded");

    //if pokemon fainted is not last in party
    if (PKMN + 1 < Team.length) {
      //increase currentPokemon number for team to send out next in party
      if (PlayersTurn === "Player One") {
        setTimeout(
          () =>
            this.setState({
              player1CurrentPokemon: this.state.player1CurrentPokemon + 1
            }),
          2000
        );

        //reset stat modifiers to defaults, for new pokemon
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
        setTimeout(
          () =>
            this.setState({
              player2CurrentPokemon: this.state.player2CurrentPokemon + 1
            }),
          2000
        );

        //reset stat modifiers to defaults, for new pokemon
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

      //fade sprite back in
      setTimeout(() => Sprite.fadeIn(1000), 3000);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(500),
        1500
      );
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2000);

      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            this.state.playersTurn + " sent out " + Team[PKMN + 1].name
          ),
        2000
      );
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(500),
        4000
      );
      setTimeout(() => HPbar.css("width", "100%"), 2000);
      HPbar.removeClass("halfhp");
      HPbar.removeClass("onefifthhp");
      HPbar.addClass("fullhp");
      setTimeout(
        () => $(document.querySelector(".fightButton")).fadeIn(500),
        4000
      );
    } else {
      setTimeout(
        () => $(document.querySelector(".fightButton")).fadeOut(500),
        500
      );
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        500
      );
      setTimeout(() => $(document.querySelector(".message")).fadeOut(500), 500);
      if (PlayersTurn === "Player One") {
        setTimeout(
          () =>
            $(document.querySelector(".playermessage")).text(
              "Player One is out of Pokémon! "
            ),
          2000
        );
        setTimeout(
          () =>
            $(document.querySelector(".playermessage")).text(
              "Player Two defeated Player One!"
            ),
          4500
        );
      } else {
        setTimeout(
          () =>
            $(document.querySelector(".playermessage")).text(
              "Player Two is out of Pokémon! "
            ),
          2000
        );
        setTimeout(
          () =>
            $(document.querySelector(".playermessage")).text(
              "Player One defeated Player Two!"
            ),
          4500
        );
      }
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeOut(500),
        3000
      );

      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        4500
      );
    }
  };

  //USE MOVE FUNCTION ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useMove = (
    index,
    moveName,
    moveCategory,
    moveType,
    power,
    pp,
    moveAcc,
    statusEff,
    lv
  ) => {
    let moves = null;
    let PKMNuser = null;
    let PKMNtarget = null;
    let HPbar = null;
    if (this.state.playersTurn === "Player One") {
      moves = $(document.querySelector(".player1Moves"));
      PKMNuser = this.state.player1Team[this.state.player1CurrentPokemon];
      PKMNtarget = this.state.player2Team[this.state.player2CurrentPokemon];
      HPbar = $(document.querySelector(".player1HP"));
    } else {
      moves = $(document.querySelector(".player2Moves"));
      PKMNuser = this.state.player2Team[this.state.player2CurrentPokemon];
      PKMNtarget = this.state.player1Team[this.state.player1CurrentPokemon];
      HPbar = $(document.querySelector(".player2HP"));
    }
    let targetType1 = PKMNtarget.types[0][0];
    let targetType2 = null;
    if (PKMNtarget.types[0][1] !== null) {
      targetType2 = PKMNtarget.types[0][1];
    }

    //does move have PP remaining?
    if (pp === 0) {
      //out of pp for move
      console.log("out of PP!");
      $(document.querySelector(".message")).text(moveName + " is out of PP!");
      $(document.querySelector(".message")).fadeIn(500);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(500),
        1500
      );
    } else if (pp > 0) {
      //subtract 1 pp from move used
      PKMNuser.moves[index].pp = pp - 1;

      //check if user is afflicted with sleep and has turns remaining
      if (PKMNuser.isAsleep && PKMNuser.turnsAsleep > 0) {
        console.log(PKMNuser.name + " is fast asleep...");
        console.log(
          PKMNuser.name +
            " will stay asleep for " +
            (PKMNuser.turnsAsleep - 1) +
            " more turns..."
        );
        //subtract one turn from asleep
        PKMNuser.turnsAsleep = PKMNuser.turnsAsleep - 1;
        $(document.querySelector(".message")).text(
          PKMNuser.name + " is fast asleep... "
        );
        $(document.querySelector(".message")).fadeIn(500);
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(500),
          1500
        );
        setTimeout(() => $(document.querySelector(".message")).text(""), 2000);
        moves.fadeOut(300);
        //switch to next player
        if (this.state.playersTurn === "Player One") {
          this.setState({ playersTurn: "Player Two" });
        } else {
          this.setState({ playersTurn: "Player One" });
        }
        $(document.querySelector(".fightButton")).fadeIn(300);
      } else {
        moves.fadeOut(300);
        //check if user is asleep and on last turn
        if (PKMNuser.isAsleep && PKMNuser.turnsAsleep === 0) {
          //wake up pokemon
          console.log(PKMNuser.name + " woke up!");
          $(document.querySelector(".message")).text(
            PKMNuser.name + " woke up! "
          );
          $(document.querySelector(".message")).fadeIn(500);
          setTimeout(
            () => $(document.querySelector(".message")).fadeOut(500),
            1500
          );
          setTimeout(
            () => $(document.querySelector(".message")).text(""),
            2000
          );
          PKMNuser.isAsleep = false;

          console.log(PKMNuser.name + " used " + moveName);
          setTimeout(
            () => $(document.querySelector(".message")).fadeIn(500),
            2000
          );

          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNuser.name + " used " + moveName
              ),
            2000
          );

          setTimeout(
            () => $(document.querySelector(".message")).fadeOut(500),
            3500
          );
          setTimeout(
            () => $(document.querySelector(".message")).text(""),
            4000
          );
        } else {
          //if pokemon not sleeping
          $(document.querySelector(".message")).fadeIn(500);
          console.log(PKMNuser.name + " used " + moveName);

          $(document.querySelector(".message")).text(
            PKMNuser.name + " used " + moveName
          );

          setTimeout(
            () => $(document.querySelector(".message")).fadeOut(500),
            1500
          );
          setTimeout(
            () => $(document.querySelector(".message")).text(""),
            2000
          );
        }

        //handle paralyze
        let paralysis = false;
        if (PKMNuser.statusCondition === "Paralyze") {
          //user is paralyzed
          let rand = Math.random();
          //25% chance of paralysis
          if (rand < 0.25) {
            //blocked by paralysis
            console.log(PKMNuser.name + " is paralyzed...");
            paralysis = true;

            $(document.querySelector(".message")).fadeIn(500);
            $(document.querySelector(".message")).text(
              PKMNuser.name + " is paralyzed!"
            );

            setTimeout(
              () => $(document.querySelector(".message")).fadeOut(500),
              1500
            );
            setTimeout(
              () => $(document.querySelector(".message")).text(""),
              2000
            );
            //switch to next player
            if (this.state.playersTurn === "Player One") {
              this.setState({ playersTurn: "Player Two" });
            } else {
              this.setState({ playersTurn: "Player One" });
            }
            $(document.querySelector(".fightButton")).fadeIn(300);
          }
        }

        //handle confusion
        let hurtitself = false;
        if (PKMNuser.isConfused) {
          if (PKMNuser.turnsConfused > 0) {
            //subtract one turn from confused
            PKMNuser.turnsConfused = PKMNuser.turnsConfused - 1;

            console.log(PKMNuser.name + " is confused...");
            let rand = Math.random();
            //50% chance of hurting itself
            if (rand > 0.5) {
              console.log(PKMNuser.name + " hurt itself in confusion...");
              hurtitself = true;

              //deal 1/8 of Orig HP as damage to user
              let damage = PKMNuser.OrigHp / 8;
              console.log("confusion damage: " + damage);

              //store original bar percent
              let origHealth = parseInt(HPbar.css("width"));

              // calculate percent difference of hp / dmg
              let asPercentage = damage / PKMNuser.hp;

              //update target pokemon hp after damage dealt
              PKMNuser.hp = PKMNuser.hp - damage;

              let dmgDone = origHealth * asPercentage;
              let updatedBarHP = origHealth - dmgDone;
              console.log(origHealth, asPercentage, dmgDone, updatedBarHP);

              //update health bar to reflect damage
              HPbar.css("width", updatedBarHP);
              if (updatedBarHP <= 260 && updatedBarHP >= 104) {
                HPbar.removeClass("fullhp");
                HPbar.addClass("halfhp");
              } else if (updatedBarHP <= 104 && updatedBarHP >= 0) {
                HPbar.removeClass("halfhp");
                HPbar.addClass("onefifthhp");
              }

              $(document.querySelector(".message")).fadeIn(500);
              $(document.querySelector(".message")).text(
                PKMNuser.name + " hurt itself in confusion!"
              );

              setTimeout(
                () => $(document.querySelector(".message")).fadeOut(500),
                1500
              );
              setTimeout(
                () => $(document.querySelector(".message")).text(""),
                2000
              );
              //switch to next player
              if (this.state.playersTurn === "Player One") {
                this.setState({ playersTurn: "Player Two" });
              } else {
                this.setState({ playersTurn: "Player One" });
              }
              $(document.querySelector(".fightButton")).fadeIn(300);
            }
          } else {
            console.log(PKMNuser.name + " snapped out of confusion...");
            PKMNuser.isConfused = false;
            $(document.querySelector(".message")).fadeIn(500);
            $(document.querySelector(".message")).text(
              PKMNuser.name + " snapped out of confusion! "
            );

            setTimeout(
              () => $(document.querySelector(".message")).fadeOut(500),
              1500
            );
            setTimeout(
              () => $(document.querySelector(".message")).text(""),
              2000
            );
          }
        }

        //if pokemon was hurt from confusion or blocked by paralysis, skip rest of move
        if (!hurtitself && !paralysis) {
          //if so, does move land hit (accuracy check)
          //formula: percentChance = moveAcc * (attacker accuracy / target evasion)
          console.log(
            "move acc: " +
              moveAcc +
              ", user acc: " +
              PKMNuser.accuracy +
              ", target evasion: " +
              PKMNtarget.evasion
          );
          let percentChance =
            (moveAcc * (PKMNuser.accuracy / PKMNtarget.evasion)) / 100;
          console.log("Chance of hitting: " + percentChance);
          let rand = Math.random();
          console.log("rand: " + rand);

          if (rand > percentChance) {
            console.log(PKMNuser.name + "'s attack Missed!");
            setTimeout(
              () => $(document.querySelector(".message")).fadeIn(500),
              2500
            );
            setTimeout(
              () =>
                $(document.querySelector(".message")).text(
                  PKMNuser.name + "'s attack Missed!"
                ),
              2500
            );
            setTimeout(
              () => $(document.querySelector(".message")).fadeOut(500),
              3500
            );

            //switch to next player
            if (this.state.playersTurn === "Player One") {
              this.setState({ playersTurn: "Player Two" });
            } else {
              this.setState({ playersTurn: "Player One" });
            }
            $(document.querySelector(".fightButton")).fadeIn(300);
          } else {
            //does move have power, if so deal damage
            if (power > 0) {
              //if move lands, continue with deal damage
              setTimeout(
                () =>
                  this.dealDamage(
                    power,
                    lv,
                    moveName,
                    moveCategory,
                    moveType,
                    statusEff
                  ),
                2000
              );
            }

            if (power === 0 && statusEff !== "") {
              this.checkForStatusEffect(
                statusEff,
                PKMNuser,
                PKMNtarget,
                targetType1,
                targetType2,
                moveName,
                HPbar,
                power
              );
            }

            if (power <= 0 && statusEff === "") {
              //move does nothing
              console.log(moveName + " did nothing...");
              setTimeout(
                () => $(document.querySelector(".message")).fadeIn(500),
                2300
              );
              setTimeout(
                () =>
                  $(document.querySelector(".message")).text(
                    moveName + " did nothing..."
                  ),
                2300
              );
              setTimeout(
                () => $(document.querySelector(".message")).fadeOut(1000),
                3300
              );
              //switch to next player
              if (this.state.playersTurn === "Player One") {
                this.setState({ playersTurn: "Player Two" });
              } else {
                this.setState({ playersTurn: "Player One" });
              }
              $(document.querySelector(".fightButton")).fadeIn(300);
            }
          }
        }
      }
    }
  };

  //CHECK FOR STATUS EFFECT FUNCTION ////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  checkForStatusEffect = (
    statusEff,
    PKMNuser,
    PKMNtarget,
    targetType1,
    targetType2,
    moveName,
    HPbar,
    power,
    recoilDamage,
    recoverDamage
  ) => {
    console.log(
      statusEff,
      PKMNuser,
      PKMNtarget,
      HPbar,
      power,
      recoilDamage,
      recoverDamage
    );
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

    //CONFUSION USER/////////////////////////////////////////////////////////////////////////////
    //if condition is ConfusionUser, only apply if user is not already confused
    if (statusEff === "ConfusionUser") {
      if (PKMNuser.isConfused === false) {
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        PKMNuser.isConfused = true;
        let amountTurnsConfused = Math.round(this.randomNumberGenerator(1, 4));
        console.log(
          PKMNuser.name +
            " will be confused for " +
            amountTurnsConfused +
            " turns..."
        );
        PKMNuser.turnsConfused = amountTurnsConfused;

        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + " became Confused!"
            ),
          2300
        );
      } else {
        //user is already confused
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + " was unaffected"
            ),
          2300
        );
      }
    }

    //CONFUSION TARGET/////////////////////////////////////////////////////////////////////////////
    //if condition is ConfusionTarget, only apply if target is not already confused
    if (statusEff === "ConfusionTarget") {
      if (PKMNtarget.isConfused === false) {
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        PKMNtarget.isConfused = true;
        let amountTurnsConfused = Math.round(this.randomNumberGenerator(1, 4));
        console.log(
          PKMNtarget.name +
            " will be confused for " +
            amountTurnsConfused +
            " turns..."
        );
        PKMNtarget.turnsConfused = amountTurnsConfused;

        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " became Confused!"
            ),
          2300
        );
      } else {
        //target is already confused
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " was unaffected"
            ),
          2300
        );
      }
    }

    //RECOIL/////////////////////////////////////////////////////////////
    if (statusEff === "recoil") {
      //damage should be 1/4 damage dealt to target
      let Damage = recoilDamage;

      // let Damage = PKMNuser.hp / RecoilAmount;
      let origHealth = parseInt(HPbar.css("width"));
      let asPercentage = Damage / PKMNuser.hp;

      //update target pokemon hp after damage dealt
      PKMNuser.hp = PKMNuser.hp - Damage;

      let dmgDone = origHealth * asPercentage;
      let updatedBarHP = origHealth - dmgDone;
      //update health bar to reflect damage
      setTimeout(() => HPbar.css("width", updatedBarHP), 2500);
      if (updatedBarHP <= 260 && updatedBarHP >= 104) {
        setTimeout(() => HPbar.removeClass("fullhp"), 2500);
        setTimeout(() => HPbar.addClass("halfhp"), 2500);
      } else if (updatedBarHP <= 104 && updatedBarHP >= 0) {
        setTimeout(() => HPbar.removeClass("halfhp"), 2500);
        setTimeout(() => HPbar.addClass("onefifthhp"), 2500);
      }
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + " was hit with recoil!"
          ),
        1800
      );
    }

    //RECOVER DAMAGE/////////////////////////////////////////////////////////////
    if (statusEff === "recoverDamage") {
      //damage should be 1/2 damage dealt to target
      let Damage = recoverDamage;

      // let Damage = PKMNuser.hp / RecoverAmount;
      let origHealth = parseInt(HPbar.css("width"));
      let asPercentage = Damage / PKMNuser.hp;

      //update target pokemon hp after damage recovered
      //if hp will be over Orig, only raise to Orig hp
      if (PKMNuser.hp + Damage > PKMNuser.OrigHp) {
        PKMNuser.hp = PKMNuser.OrigHp;
      } else {
        PKMNuser.hp = PKMNuser.hp + Damage;
      }

      let dmgDone = origHealth * asPercentage;
      let updatedBarHP = origHealth + dmgDone;
      //update health bar to reflect recovery
      setTimeout(() => HPbar.css("width", updatedBarHP), 2500);
      if (updatedBarHP <= 260 && updatedBarHP >= 104) {
        setTimeout(() => HPbar.removeClass("onfifthhp"), 2500);
        setTimeout(() => HPbar.addClass("halfhp"), 2500);
      } else if (updatedBarHP > 260 && updatedBarHP <= 520) {
        setTimeout(() => HPbar.removeClass("halfhp"), 2500);
        setTimeout(() => HPbar.addClass("fullhp"), 2500);
      }
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + " recovered HP!"
          ),
        1800
      );
    }

    //BOUND ////////////////////////////////////////////////////////////////////////////
    if (statusEff === "Bound") {
      if (PKMNtarget.isBound === false) {
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        PKMNtarget.isBound = true;

        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " was Bound by " + moveName + "!"
            ),
          2300
        );
      } else {
        //user is already bound
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " is already Bound"
            ),
          2300
        );
      }
    }

    //SLEEP/////////////////////////////////////////////////////////////////////////////
    //if condition is Sleep, only apply if target is not already asleep
    if (statusEff === "Sleep") {
      if (PKMNtarget.isAsleep === false) {
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        PKMNtarget.isAsleep = true;
        let sleepTurns = Math.round(this.randomNumberGenerator(1, 7));
        PKMNtarget.turnsAsleep = sleepTurns;
        console.log(
          PKMNtarget.name + " will sleep for " + sleepTurns + " turns..."
        );

        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " fell Asleep!"
            ),
          2300
        );
      } else {
        //target is already asleep
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " was unaffected"
            ),
          2300
        );
      }
    }

    //check if target is already afflicted with condition
    else if (PKMNtarget.statusCondition !== "") {
      //target already has status condition, do not apply again
      //do nothing...
      //if move only afflicts status, and target is already afflicted, display message
      if (power === 0) {
        setTimeout(
          () => $(document.querySelector(".message")).fadeIn(500),
          2300
        );
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(1000),
          3000
        );
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + " was unaffected"
            ),
          2300
        );
      }
    } else {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );

      //CONDITIONS //////////////////////////////////////////////////////////
      //POISON, BURN, PARALYZE, SLEEP, FROZEN, USERCONFUSION, TARGETCONFUSION,BOUND

      if (statusEff === "Poison") {
        if (targetType1 === "poison" || targetType2 === "poison") {
          //poison types not effected by poison
          //do nothing...
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was unaffected"
              ),
            2300
          );
        } else {
          PKMNtarget.statusCondition = "Poison";
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was Poisoned!"
              ),
            2300
          );
        }
      } else if (statusEff === "Burn") {
        if (targetType1 === "fire" || targetType2 === "fire") {
          //fire types not effected by burn
          //do nothing...
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was unaffected"
              ),
            2300
          );
        } else {
          PKMNtarget.statusCondition = "Burn";
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was Burned!"
              ),
            2300
          );
        }
      } else if (statusEff === "Paralyze") {
        if (targetType1 === "electric" || targetType2 === "electric") {
          //electric types not effected by paralyze
          //do nothing...
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was unaffected"
              ),
            2300
          );
        } else {
          PKMNtarget.statusCondition = "Paralyze";
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was Paralyzed!"
              ),
            2300
          );
        }
      } else if (statusEff === "Frozen") {
        if (targetType1 === "ice" || targetType2 === "ice") {
          //ice types not effected by frozen
          //do nothing...
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was unaffected"
              ),
            2300
          );
        } else {
          PKMNtarget.statusCondition = "Frozen";
          setTimeout(
            () =>
              $(document.querySelector(".message")).text(
                PKMNtarget.name + " was Frozen solid!"
              ),
            2300
          );
        }
      }
    }

    //STATUS MODIFIERS: raisesUserAtk, raisesUserDef,raisesUserSpd,raisesUserSpcAtk,raisesUserSpcDef,raisesUserAcc,raisesUserEva
    // lowersTargetAtk, lowersTargetDef,lowersTargetSpd,lowersTargetSpcAtk,lowersTargetSpcDef,lowersTargetAcc,lowersTargetEva
    //RAISES////////////////////////////////////////////////////////////
    if (statusEff === "raisesUserAtk") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.attack = PKMNuser.OrigAttack * atkMultiplierUp;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s attack rose!"
          ),
        2300
      );

      if (PKMNuser.attack >= PKMNuser.OrigAttack * 4) {
        PKMNuser.attack = PKMNuser.OrigAttack * 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s attack wont go higher!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ atkMultiplierUp1: atkMultiplierUp });
      } else {
        this.setState({ atkMultiplierUp2: atkMultiplierUp });
      }
    } else if (statusEff === "raisesUserDef") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.defense = PKMNuser.OrigDefense * defMultiplierUp;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s defense rose!"
          ),
        2300
      );

      if (PKMNuser.defense >= PKMNuser.OrigDefense * 4) {
        PKMNuser.defense = PKMNuser.OrigDefense * 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s defense wont go higher!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ defMultiplierUp1: defMultiplierUp });
      } else {
        this.setState({ defMultiplierUp2: defMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpd") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.speed = PKMNuser.OrigSpeed * spdMultiplierUp;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s speed rose!"
          ),
        2300
      );

      if (PKMNuser.speed >= PKMNuser.OrigSpeed * 4) {
        PKMNuser.speed = PKMNuser.OrigSpeed * 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s speed wont go higher!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ spdMultiplierUp1: spdMultiplierUp });
      } else {
        this.setState({ spdMultiplierUp2: spdMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpcAtk") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.specialattack = PKMNuser.OrigSpecialattack * spcAtkMultiplierUp;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s special attack rose!"
          ),
        2300
      );

      if (PKMNuser.specialattack >= PKMNuser.OrigSpecialattack * 4) {
        PKMNuser.specialattack = PKMNuser.OrigSpecialattack * 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s special attack wont go higher!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ spcAtkMultiplierUp1: spcAtkMultiplierUp });
      } else {
        this.setState({ spcAtkMultiplierUp2: spcAtkMultiplierUp });
      }
    } else if (statusEff === "raisesUserSpcDef") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.specialdefense =
        PKMNuser.OrigSpecialdefense * spcDefMultiplierUp;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s special defense rose!"
          ),
        2300
      );

      if (PKMNuser.specialdefense >= PKMNuser.OrigSpecialdefense * 4) {
        PKMNuser.specialdefense = PKMNuser.OrigSpecialdefense * 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s special defense wont go higher!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ spcDefMultiplierUp1: spcDefMultiplierUp });
      } else {
        this.setState({ spcDefMultiplierUp2: spcDefMultiplierUp });
      }
    } else if (statusEff === "raisesUserAcc") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.accuracy = PKMNuser.accuracy + 0.1;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s accuracy went up!"
          ),
        2300
      );

      if (PKMNuser.accuracy > 1.5) {
        PKMNuser.accuracy = 1.5;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s accuracy wont go higher!"
            ),
          2300
        );
      }
    } else if (statusEff === "raisesUserEva") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNuser.evasion = PKMNuser.evasion + 0.1;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNuser.name + "'s evasion went up!"
          ),
        2300
      );

      if (PKMNuser.evasion > 1.5) {
        PKMNuser.evasion = 1.5;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + "'s evasion wont go higher!"
            ),
          2300
        );
      }
    }

    //LOWERS////////////////////////////////////////////////////////////////
    if (statusEff === "lowersTargetAtk") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.attack = PKMNtarget.OrigAttack * atkMultiplierDown;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s attack fell!"
          ),
        2300
      );

      if (PKMNtarget.attack <= PKMNtarget.OrigAttack / 4) {
        PKMNtarget.attack = PKMNtarget.OrigAttack / 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s attack wont go lower!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ atkMultiplierDown1: atkMultiplierDown });
      } else {
        this.setState({ atkMultiplierDown2: atkMultiplierDown });
      }
    } else if (statusEff === "lowersTargetDef") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.defense = PKMNtarget.defense * defMultiplierDown;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s defense fell!"
          ),
        2300
      );

      if (PKMNtarget.defense <= PKMNtarget.OrigDefense / 4) {
        PKMNtarget.defense = PKMNtarget.OrigDefense / 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s defense wont go lower!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ defMultiplierDown1: defMultiplierDown });
      } else {
        this.setState({ defMultiplierDown2: defMultiplierDown });
      }
    } else if (statusEff === "lowersTargetSpd") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.speed = PKMNtarget.speed * spdMultiplierDown;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s speed fell!"
          ),
        2300
      );

      if (PKMNtarget.speed <= PKMNtarget.OrigSpeed / 4) {
        PKMNtarget.speed = PKMNtarget.OrigSpeed / 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s speed wont go lower!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ spdMultiplierDown1: spdMultiplierDown });
      } else {
        this.setState({ spdMultiplierDown2: spdMultiplierDown });
      }
    } else if (statusEff === "lowersTargetSpcAtk") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.specialattack =
        PKMNtarget.specialattack * spcAtkMultiplierDown;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s special attack fell!"
          ),
        2300
      );

      if (PKMNtarget.specialattack <= PKMNtarget.OrigSpecialattack / 4) {
        PKMNtarget.specialattack = PKMNtarget.OrigSpecialattack / 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s special attack wont go lower!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ spcAtkMultiplierDown1: spcAtkMultiplierDown });
      } else {
        this.setState({ spcAtkMultiplierDown2: spcAtkMultiplierDown });
      }
    } else if (statusEff === "lowersTargetSpcDef") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.specialdefense =
        PKMNtarget.specialdefense * spcDefMultiplierDown;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s special defense fell!"
          ),
        2300
      );

      if (PKMNtarget.specialdefense <= PKMNtarget.OrigSpecialdefense / 4) {
        PKMNtarget.specialdefense = PKMNtarget.OrigSpecialdefense / 4;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s special defense wont go lower!"
            ),
          2300
        );
      }
      if (this.state.PlayersTurn === "Player One") {
        this.setState({ spcDefMultiplierDown1: spcDefMultiplierDown });
      } else {
        this.setState({ spcDefMultiplierDown2: spcDefMultiplierDown });
      }
    } else if (statusEff === "lowersTargetAcc") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.accuracy = PKMNtarget.accuracy - 0.1;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s accuracy fell!"
          ),
        2300
      );

      if (PKMNtarget.accuracy < 0.5) {
        PKMNtarget.accuracy = 0.5;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s accuracy wont go lower!"
            ),
          2300
        );
      }
    } else if (statusEff === "lowersTargetEva") {
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2300);
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(1000),
        3000
      );
      PKMNtarget.evasion = PKMNtarget.evasion - 0.1;
      setTimeout(
        () =>
          $(document.querySelector(".message")).text(
            PKMNtarget.name + "'s evasion fell!"
          ),
        2300
      );

      if (PKMNtarget.evasion < 0.5) {
        PKMNtarget.evasion = 0.5;
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNtarget.name + "'s evasion wont go lower!"
            ),
          2300
        );
      }
    }
    if (power === 0) {
      //switch to next player
      if (this.state.playersTurn === "Player One") {
        this.setState({ playersTurn: "Player Two" });
      } else {
        this.setState({ playersTurn: "Player One" });
      }
      $(document.querySelector(".fightButton")).fadeIn(300);
    }
  };

  //DEAL DAMAGE FUNCTION ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  dealDamage = (power, lv, moveName, moveCategory, moveType, statusEff) => {
    let PKMNuser = "";
    let PKMNtarget = "";
    let UserHP = "";
    let TargetHP = "";
    if (this.state.playersTurn === "Player One") {
      PKMNuser = this.state.player1Team[this.state.player1CurrentPokemon];
      PKMNtarget = this.state.player2Team[this.state.player2CurrentPokemon];
      UserHP = $(document.querySelector(".player1HP"));
      TargetHP = $(document.querySelector(".player2HP"));
    } else {
      PKMNuser = this.state.player2Team[this.state.player2CurrentPokemon];
      PKMNtarget = this.state.player1Team[this.state.player1CurrentPokemon];
      UserHP = $(document.querySelector(".player2HP"));
      TargetHP = $(document.querySelector(".player1HP"));
    }

    //damage formula:
    let A = PKMNuser.attack; //attack stat of attacker
    let uSA = PKMNuser.specialattack; //special attack stat of attacker
    let D = PKMNtarget.defense; //defense stat of target
    let tSD = PKMNtarget.specialdefense; //special defense stat of target
    let userType1 = PKMNuser.types[0][0];
    let userType2 = null;
    if (PKMNuser.types[0][1] !== null) {
      userType2 = PKMNuser.types[0][1];
    }
    let targetType1 = PKMNtarget.types[0][0];
    let targetType2 = null;
    if (PKMNtarget.types[0][1] !== null) {
      targetType2 = PKMNtarget.types[0][1];
    }

    //calc STAB(Same-Type-Attack-Bonus) 1.5, if user is same as move type
    let STAB = 1;
    if (moveType === userType1 || moveType === userType2) {
      console.log(
        "move type " +
          moveType +
          " matches user type " +
          userType1 +
          " or " +
          userType2 +
          ", applying STAB 1.5x"
      );
      STAB = 1.5;
    }

    //calc type advantage
    let Type = CalcTypeAdvantage(moveType, targetType1, targetType2);

    let modifier = this.randomNumberGenerator(0.85, 1.0) * STAB * Type; //random * STAB * Type
    //formula taken from pokemon wiki, level * 2 / 5 + 2 * "move power" + (attack of attacker / defense of target) / 50 + 2 * modifier
    let Damage = 0;
    console.log("move category is: " + moveCategory);

    if (moveCategory === "physical") {
      //use attack/defense stats
      Damage = ((((lv * 2) / 5 + 2) * power * (A / D)) / 50 + 2) * modifier;
    } else if (moveCategory === "special") {
      //use special attack/defense stats
      Damage = ((((lv * 2) / 5 + 2) * power * (uSA / tSD)) / 50 + 2) * modifier;
    }

    //set up recoil damage
    let recoilDamage = Damage / 4;
    let recoverDamage = Damage / 2;
    //store original bar percent
    let origHealth = parseInt(TargetHP.css("width"));

    // calculate percent difference of hp / dmg
    let asPercentage = Damage / PKMNtarget.hp;

    //update target pokemon hp after damage dealt
    PKMNtarget.hp = PKMNtarget.hp - Damage;
    // this.forceUpdate();

    let dmgDone = origHealth * asPercentage;
    let updatedBarHP = origHealth - dmgDone;
    //if target pokemon hp is 0 or less, mark as fainted
    if (updatedBarHP <= 0) {
      if (power === 999) {
        $(document.querySelector(".message")).text("One-Hit KO!");
      } else {
        $(document.querySelector(".message")).text(
          PKMNtarget.name + " fainted!"
        );
      }

      $(document.querySelector(".message")).fadeIn(500);
      setTimeout(() => this.faintPokemon(), 1000);
    } else {
      $(document.querySelector(".fightButton")).fadeIn(300);
    }
    //update health bar to reflect damage
    TargetHP.css("width", updatedBarHP);
    if (updatedBarHP <= 260 && updatedBarHP >= 104) {
      TargetHP.removeClass("fullhp");
      TargetHP.addClass("halfhp");
    } else if (updatedBarHP <= 104 && updatedBarHP >= 0) {
      TargetHP.removeClass("halfhp");
      TargetHP.addClass("onefifthhp");
    }

    //if move does not do any damage, do not flash sprite
    if (Damage !== 0) {
      if (this.state.playersTurn === "Player One") {
        this.rapidFlash($(document.querySelector(".player2Sprite")));
      } else {
        this.rapidFlash($(document.querySelector(".player1Sprite")));
      }
    } else {
      $(document.querySelector(".message")).fadeIn(500);
      $(document.querySelector(".message")).text(
        PKMNtarget.name + " was unaffected"
      );
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(500),
        1500
      );
    }

    //Check for and apply status effect after damage
    if (statusEff !== "") {
      this.checkForStatusEffect(
        statusEff,
        PKMNuser,
        PKMNtarget,
        targetType1,
        targetType2,
        moveName,
        UserHP,
        power,
        recoilDamage,
        recoverDamage
      );
    }

    //switch to next player
    if (this.state.playersTurn === "Player One") {
      this.setState({ playersTurn: "Player Two" });
    } else {
      this.setState({ playersTurn: "Player One" });
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

  //CONDITIONS FUNCTION ///////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  Conditions = (status, isAsleep, isConfused) => {
    let StatusDiv = [];
    if (status === "Poison") {
      StatusDiv.push(
        <span className="badge badge-secondary poison" key={status}>
          PSN
        </span>
      );
    } else if (status === "Paralyze") {
      StatusDiv.push(
        <span className="badge badge-secondary paralyze" key={status}>
          PAR
        </span>
      );
    } else if (status === "Burn") {
      StatusDiv.push(
        <span className="badge badge-secondary burn" key={status}>
          BRN
        </span>
      );
    } else if (status === "Frozen") {
      StatusDiv.push(
        <span className="badge badge-secondary frozen" key={status}>
          FRZ
        </span>
      );
    }

    if (isAsleep === true) {
      StatusDiv.push(
        <span className="badge badge-secondary sleep" key="sleep">
          SLP
        </span>
      );
    }
    if (isConfused === true) {
      StatusDiv.push(
        <span className="badge badge-secondary" key="confuse">
          CON
        </span>
      );
    }

    return StatusDiv;
  };

  render() {
    if (this.props.battleReady) {
      return (
        <div className="battleWindow">
          <div className="battleContainer container">
            <div>{this.state.playersTurn}'s Turn</div>
            <div className="side side1 col">
              <p className="row">
                {this.state.player2Team.map((item, i) => {
                  return (
                    <img id={"p2" + i} key={i} src={pokeball} alt="pokeball" />
                  );
                })}

                {this.state.player2Team[this.state.player2CurrentPokemon].name}
                <span className="badge badge-dark">
                  Lv
                  {this.state.player2Team[this.state.player2CurrentPokemon].lv}
                </span>
                {this.Types(
                  this.state.player2Team[this.state.player2CurrentPokemon].types
                )}
                {this.Conditions(
                  this.state.player2Team[this.state.player2CurrentPokemon]
                    .statusCondition,
                  this.state.player2Team[this.state.player2CurrentPokemon]
                    .isAsleep,
                  this.state.player2Team[this.state.player2CurrentPokemon]
                    .isConfused
                )}
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
              <div className="spriteContainer">
                <img
                  className="sprite player2Sprite"
                  src={
                    this.state.player2Team[this.state.player2CurrentPokemon]
                      .frontSprite
                  }
                  alt={
                    this.state.player2Team[this.state.player2CurrentPokemon]
                      .name
                  }
                />
              </div>
            </div>
            <div className="side side2 col">
              <p className="row">
                {this.state.player1Team.map((item, i) => {
                  return (
                    <img id={"p1" + i} key={i} src={pokeball} alt="pokeball" />
                  );
                })}
                {this.state.player1Team[this.state.player1CurrentPokemon].name}
                <span className="badge badge-dark">
                  Lv
                  {this.state.player1Team[this.state.player1CurrentPokemon].lv}
                </span>
                {this.Types(
                  this.state.player1Team[this.state.player1CurrentPokemon].types
                )}
                {this.Conditions(
                  this.state.player1Team[this.state.player1CurrentPokemon]
                    .statusCondition,
                  this.state.player1Team[this.state.player1CurrentPokemon]
                    .isAsleep,
                  this.state.player1Team[this.state.player1CurrentPokemon]
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
              <div className="spriteContainer">
                <img
                  className="sprite player1Sprite"
                  src={
                    this.state.player1Team[this.state.player1CurrentPokemon]
                      .backSprite
                  }
                  alt={
                    this.state.player1Team[this.state.player1CurrentPokemon]
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
            <div className="fight row">
              <button
                type="button"
                className="btn btn-success fightButton"
                onClick={() => this.displayMoves(this.state.playersTurn)}
              >
                Fight
              </button>
            </div>
            <div className="moveList row container">
              <div className="player1Moves row">
                {this.state.player1Team[
                  this.state.player1CurrentPokemon
                ].moves.map((move, i) => {
                  return (
                    <button
                      key={i}
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={() =>
                        this.useMove(
                          i,
                          move.name,
                          move.category,
                          move.type,
                          move.power,
                          move.pp,
                          move.accuracy,
                          move.statusEff,
                          this.state.player1Team[
                            this.state.player1CurrentPokemon
                          ].lv
                        )
                      }
                    >
                      {move.name.toUpperCase()} / PP: {move.pp} /
                      {MatchIconWithType(move.type)}
                    </button>
                  );
                })}
              </div>
              {/* player 2 moves */}
              <div className="player2Moves row">
                {this.state.player2Team[
                  this.state.player2CurrentPokemon
                ].moves.map((move, i) => {
                  return (
                    <button
                      key={i}
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={() =>
                        this.useMove(
                          i,
                          move.name,
                          move.category,
                          move.type,
                          move.power,
                          move.pp,
                          move.accuracy,
                          move.statusEff,
                          this.state.player2Team[
                            this.state.player2CurrentPokemon
                          ].lv
                        )
                      }
                    >
                      {move.name.toUpperCase()} / PP: {move.pp} /
                      {MatchIconWithType(move.type)}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BattleStage;

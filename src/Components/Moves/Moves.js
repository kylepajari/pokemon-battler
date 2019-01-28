import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Moves.css";
import { MatchIconWithType } from "../MatchTypeIcon";
import $ from "jquery";

class Moves extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMoves: false
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      displayMoves: props.displayMoves
    });
  }

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
    statusProb,
    lv
  ) => {
    console.log("using move...");
    let options = $(document.querySelector(".options"));
    let PKMNuser = null;
    let PKMNtarget = null;
    let HPbar = null;
    if (this.props.playersTurn === "Player One") {
      PKMNuser = this.props.player1Team[this.props.player1CurrentPokemon];
      PKMNtarget = this.props.player2Team[this.props.player2CurrentPokemon];
      HPbar = $(document.querySelector(".player1HP"));
    } else {
      PKMNuser = this.props.player2Team[this.props.player2CurrentPokemon];
      PKMNtarget = this.props.player1Team[this.props.player1CurrentPokemon];
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
      //hide move list/ options
      this.props.handleMoves();
      options.hide(500);
      //subtract 1 pp from move used
      PKMNuser.moves[index].pp -= 1;

      let isUserPoisonedOrBurned = false;
      //check if user is poisoned or burned, set up for hp loss
      if (
        PKMNuser.statusCondition === "Poison" ||
        PKMNuser.statusCondition === "Burn"
      ) {
        console.log("using move function: detected user as poison or burned");

        isUserPoisonedOrBurned = true;
        this.props.handlePoisonBurn(true);
      }

      //check if user is afflicted with sleep and has turns remaining
      if (PKMNuser.statusCondition === "Sleep" && PKMNuser.turnsAsleep > 0) {
        console.log(PKMNuser.name + " is fast asleep...");
        //subtract one turn from asleep
        PKMNuser.turnsAsleep = PKMNuser.turnsAsleep - 1;
        console.log(
          PKMNuser.name +
            " will stay asleep for " +
            PKMNuser.turnsAsleep +
            " more turns..."
        );

        $(document.querySelector(".message")).text(
          PKMNuser.name + " is fast asleep... "
        );
        $(document.querySelector(".message")).fadeIn(500);
        setTimeout(
          () => $(document.querySelector(".message")).fadeOut(500),
          1500
        );
        setTimeout(() => $(document.querySelector(".message")).text(""), 2000);
        if (this.props.isPoisonBurned) {
          console.log(PKMNuser.name + " is poisoned/burned");
          setTimeout(() => this.props.dealPoisonBurn(PKMNuser, HPbar), 2000);
        } else {
          setTimeout(() => this.props.switchTurns(), 2000);
        }
      } else {
        //check if user is asleep and on last turn
        if (
          PKMNuser.statusCondition === "Sleep" &&
          PKMNuser.turnsAsleep === 0
        ) {
          //wake up pokemon
          console.log(PKMNuser.name + " woke up!");
          $(document.querySelector(".message")).text(
            PKMNuser.name + " woke up! "
          );
          $(document.querySelector(".message")).fadeIn(500);
          setTimeout(
            () => $(document.querySelector(".message")).fadeOut(500),
            1000
          );
          setTimeout(
            () => $(document.querySelector(".message")).text(""),
            1500
          );
          PKMNuser.statusCondition = "";

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
            3300
          );
          setTimeout(
            () => $(document.querySelector(".message")).text(""),
            3800
          );
        }

        //handle frozen
        let frozen = false;
        if (PKMNuser.statusCondition === "Frozen") {
          //user is frozen
          console.log(PKMNuser.name + " is frozen...");
          frozen = true;
          $(document.querySelector(".message")).fadeIn(500);
          $(document.querySelector(".message")).text(
            PKMNuser.name + " is Frozen Solid!"
          );

          setTimeout(
            () => $(document.querySelector(".message")).fadeOut(500),
            1500
          );
          setTimeout(
            () => $(document.querySelector(".message")).text(""),
            2000
          );
          setTimeout(() => this.props.switchTurns(), 2000);
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
            setTimeout(() => this.props.switchTurns(), 2000);
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
              let damage = PKMNuser.OrigHp / 16;
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
              setTimeout(
                () =>
                  this.props.updateHP(
                    HPbar,
                    updatedBarHP,
                    PKMNuser.name,
                    power
                  ),
                500
              );

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
              //if user is poisonedburned, delay switching turns
              if (this.props.isPoisonBurned) {
                console.log(PKMNuser.name + " is poisoned/burned");
                setTimeout(
                  () => this.props.dealPoisonBurn(PKMNuser, HPbar),
                  2000
                );
              } else {
                setTimeout(() => this.props.switchTurns(), 2000);
              }
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
        if (!hurtitself && !paralysis && !frozen) {
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
          //if so, does move land hit (accuracy check)
          //formula: percentChance = moveAcc * (attacker accuracy / target evasion)
          let percentChance =
            (moveAcc * (PKMNuser.accuracy / PKMNtarget.evasion)) / 100;
          let rand = Math.random();

          if (rand > percentChance) {
            console.log(PKMNuser.name + "'s attack Missed!");
            setTimeout(
              () => $(document.querySelector(".message")).fadeIn(500),
              2000
            );
            setTimeout(
              () =>
                $(document.querySelector(".message")).text(
                  PKMNuser.name + "'s attack Missed!"
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
            if (this.props.isPoisonBurned) {
              console.log(PKMNuser.name + " is poisoned/burned");
              setTimeout(
                () => this.props.dealPoisonBurn(PKMNuser, HPbar),
                4000
              );
            } else {
              setTimeout(() => this.props.switchTurns(), 4000);
            }
          } else {
            //does move have power, if so deal damage
            if (power > 0) {
              //if move lands, continue with deal damage
              setTimeout(
                () =>
                  this.props.dealDamage(
                    power,
                    lv,
                    moveName,
                    moveCategory,
                    moveType,
                    statusEff,
                    statusProb
                  ),
                2000
              );
            } else if (power === 0 && statusEff !== "") {
              console.log(isUserPoisonedOrBurned);
              this.props.checkForStatusEffect(
                statusEff,
                statusProb,
                PKMNuser,
                PKMNtarget,
                targetType1,
                targetType2,
                moveName,
                HPbar,
                power,
                0,
                0,
                isUserPoisonedOrBurned
              );
            } else if (power === 0 && statusEff === "") {
              //move does nothing
              console.log(moveName + " did nothing...");
              setTimeout(
                () => $(document.querySelector(".message")).fadeIn(500),
                2200
              );
              setTimeout(
                () =>
                  $(document.querySelector(".message")).text(
                    moveName + " did nothing..."
                  ),
                2200
              );
              setTimeout(
                () => $(document.querySelector(".message")).fadeOut(500),
                3500
              );
              if (this.props.isPoisonBurned) {
                console.log(PKMNuser.name + " is poisoned/burned");
                setTimeout(
                  () => this.props.dealPoisonBurn(PKMNuser, HPbar),
                  4000
                );
              } else {
                setTimeout(() => this.props.switchTurns(), 4000);
              }
            }
          }
        }
      }
    }
  };

  render() {
    let pokemon;
    if (this.props.playersTurn === "Player One") {
      pokemon = this.props.player1Team[this.props.player1CurrentPokemon];
    } else {
      pokemon = this.props.player2Team[this.props.player2CurrentPokemon];
    }
    if (this.state.displayMoves) {
      return (
        <div className="moveList row container">
          <div className="playerMoves row">
            <div className="moveListName">{pokemon.name}'s Moves:</div>
            <br />
            {pokemon.moves.map((move, i) => {
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
                      move.statusProb,
                      pokemon.lv
                    )
                  }
                >
                  {move.name.toUpperCase()} / PP:{move.pp} / PWR:
                  {move.power} {MatchIconWithType(move.type)}
                </button>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div className="moveList row container" />;
    }
  }
}

export default Moves;

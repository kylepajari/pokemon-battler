import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Moves.css";
import { MatchIconWithType } from "../MatchTypeIcon";
import { UpdateHP } from "../UpdateHP";
import { DealDamage } from "../DealDamage";
import { DisplayMessage } from "../DisplayMessage";
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
      DisplayMessage(moveName + " is out of PP!");
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
      let wokeup = false;
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
        DisplayMessage(PKMNuser.name + " is fast asleep... ");
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
          wokeup = true;
          console.log(PKMNuser.name + " woke up!");
          DisplayMessage(PKMNuser.name + " woke up!");
          PKMNuser.statusCondition = "";
        }

        //handle frozen
        let frozen = false;
        if (PKMNuser.statusCondition === "Frozen") {
          //user is frozen
          console.log(PKMNuser.name + " is frozen...");
          frozen = true;
          DisplayMessage(PKMNuser.name + " is Frozen Solid!");
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
            DisplayMessage(PKMNuser.name + " is paralyzed!");
            setTimeout(() => this.props.switchTurns(), 2000);
          }
        }

        //handle confusion
        let snappedOut = false;
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
              let damage = Math.round(PKMNuser.OrigHp / 8);
              //incase of really small damage amounts
              if (damage < 1) {
                damage = 1;
              }

              //store original bar percent
              let origHealth = parseInt(HPbar.css("width"));

              // calculate percent difference of hp / dmg
              let asPercentage = damage / PKMNuser.hp;

              //update target pokemon hp after damage dealt
              PKMNuser.hp = PKMNuser.hp - damage;
              this.props.handleForceUpdate();

              let dmgDone = origHealth * asPercentage;
              let updatedBarHP = origHealth - dmgDone;

              //update health bar to reflect damage
              setTimeout(
                () =>
                  UpdateHP(
                    HPbar,
                    updatedBarHP,
                    PKMNuser.name,
                    power,
                    this.props.player1Team,
                    this.props.player2Team,
                    this.props.player1CurrentPokemon,
                    this.props.player2CurrentPokemon,
                    this.props.playersTurn,
                    this.props.resetMultipliers,
                    this.props.handleTeam,
                    this.props.handleFainted
                  ),
                500
              );
              DisplayMessage(PKMNuser.name + " hurt itself in confusion!");
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
            console.log(PKMNuser.name + " snapped out of confusion");
            snappedOut = true;
            PKMNuser.isConfused = false;
            DisplayMessage(PKMNuser.name + " snapped out of confusion!");
          }
        }

        //if pokemon was woken up, snapped out of confusion, hurt itself from confusion, blocked by paralysis, or frozen; skip rest of move
        if (!wokeup && !snappedOut && !hurtitself && !paralysis && !frozen) {
          console.log(PKMNuser.name + " used " + moveName);
          DisplayMessage(PKMNuser.name + " used " + moveName);
          //if so, does move land hit (accuracy check)
          //formula: percentChance = moveAcc * (attacker accuracy / target evasion)
          let percentChance =
            (moveAcc * (PKMNuser.accuracy / PKMNtarget.evasion)) / 100;
          let rand = Math.random();

          if (rand > percentChance) {
            console.log(PKMNuser.name + "'s attack Missed!");
            setTimeout(
              () => DisplayMessage(PKMNuser.name + "'s attack Missed!"),
              2000
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
                  DealDamage(
                    power,
                    lv,
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
                    this.props.resetMultipliers,
                    this.props.handleTeam,
                    this.props.handleFainted,
                    this.props.handleForceUpdate,
                    this.props.checkForStatusEffect,
                    this.props.isPoisonBurned,
                    this.props.dealPoisonBurn,
                    this.props.switchTurns
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
                () => DisplayMessage(moveName + " did nothing..."),
                2000
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
        } else if (
          (wokeup || snappedOut) &&
          !hurtitself &&
          !paralysis &&
          !frozen
        ) {
          console.log(PKMNuser.name + " used " + moveName);
          setTimeout(
            () => DisplayMessage(PKMNuser.name + " used " + moveName),
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
              () => DisplayMessage(PKMNuser.name + "'s attack Missed!"),
              4000
            );
            if (this.props.isPoisonBurned) {
              console.log(PKMNuser.name + " is poisoned/burned");
              setTimeout(
                () => this.props.dealPoisonBurn(PKMNuser, HPbar),
                6000
              );
            } else {
              setTimeout(() => this.props.switchTurns(), 6000);
            }
          } else {
            //does move have power, if so deal damage
            if (power > 0) {
              //if move lands, continue with deal damage
              setTimeout(
                () =>
                  DealDamage(
                    power,
                    lv,
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
                    this.props.resetMultipliers,
                    this.props.handleTeam,
                    this.props.handleFainted,
                    this.props.handleForceUpdate,
                    this.props.checkForStatusEffect,
                    this.props.isPoisonBurned,
                    this.props.dealPoisonBurn,
                    this.props.switchTurns
                  ),
                4000
              );
            } else if (power === 0 && statusEff !== "") {
              console.log(isUserPoisonedOrBurned);
              setTimeout(
                () =>
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
                  ),
                2000
              );
            } else if (power === 0 && statusEff === "") {
              //move does nothing
              console.log(moveName + " did nothing...");
              setTimeout(
                () => DisplayMessage(moveName + " did nothing..."),
                4000
              );

              if (this.props.isPoisonBurned) {
                console.log(PKMNuser.name + " is poisoned/burned");
                setTimeout(
                  () => this.props.dealPoisonBurn(PKMNuser, HPbar),
                  6000
                );
              } else {
                setTimeout(() => this.props.switchTurns(), 6000);
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
        <div className="playerMoves">
          <p className="pokemonName">{pokemon.name}'s Moves:</p>
          {pokemon.moves.map((move, i) => {
            return (
              <button
                key={i}
                type="button"
                className="btn btn-outline-dark pokemonMove"
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
                {move.name.toUpperCase()} / PP:{move.pp}{" "}
                {MatchIconWithType(move.type)}
              </button>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Moves;

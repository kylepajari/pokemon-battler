import { UpdateHP } from "../UpdateHP";
import { FaintPokemon } from "../FaintPokemon";
import { DealDamage } from "../DealDamage";
import { DisplayMessage } from "../DisplayMessage";
import Confused from "../../Sounds/BattleSounds/General/CONFUSED.wav";
import ConfusedHitSelf from "../../Sounds/BattleSounds/General/ConfusedHitSelf.wav";
import Sleeping from "../../Sounds/BattleSounds/General/Sleeping.wav";
import $ from "jquery";
import { RandomNumberGenerator } from "../RandomNumberGenerator";

const UseMove = (
  index,
  moveName,
  moveCategory,
  moveType,
  power,
  pp,
  moveAcc,
  statusEff,
  statusProb,
  moveSound,
  lv,
  Player1Poke,
  Player2Poke,
  PlayersTurn,
  handleMoves,
  handlePoisonBurn,
  dealPoisonBurn,
  switchTurns,
  handleForceUpdate,
  player1Team,
  player2Team,
  playerOneName,
  playerTwoName,
  resetMultipliers,
  handleTeam,
  handleFainted,
  mode,
  isPoisonBurned,
  checkForStatusEffect,
  Volume,
  checkWin,
  handleUpdateLastMove,
  lastMoveUsedPlayer1,
  lastMoveUsedPlayer2
) => {
  let options = $(document.querySelector(".options"));
  let mainmenu = $(document.querySelector(".mainmenuButton"));
  let PKMNuser = null;
  let PKMNtarget = null;
  let HPbar = null;
  let attack = null;
  let Sprite = null;
  if (PlayersTurn === "Player One") {
    PKMNuser = player1Team[Player1Poke];
    PKMNtarget = player2Team[Player2Poke];
    HPbar = $(document.querySelector(".player1HP"));
    Sprite = $(document.querySelector(".player1Sprite"));
  } else {
    PKMNuser = player2Team[Player2Poke];
    PKMNtarget = player1Team[Player1Poke];
    HPbar = $(document.querySelector(".player2HP"));
    Sprite = $(document.querySelector(".player2Sprite"));
  }

  let targetType1 = PKMNtarget.types[0][0];
  let targetType2 = null;
  if (PKMNtarget.types[0][1] !== null) {
    targetType2 = PKMNtarget.types[0][1];
  }

  //play move sound
  attack = new Audio(moveSound);
  attack.volume = Volume;

  //does move have PP remaining?
  if (pp === 0) {
    //out of pp for move
    DisplayMessage(moveName + " is out of PP!");
  } else if (pp > 0) {
    //hide move list/ options
    if (mode === "Multi") {
      handleMoves();
      //subtract 1 pp from move used
      PKMNuser.moves[index].pp -= 1;
    } else if (mode === "Single") {
      //mode is single, only show moves for player
      if (PlayersTurn === "Player One") {
        handleMoves();
        //subtract 1 pp from move used
        PKMNuser.moves[index].pp -= 1;
      }
    }
    options.hide(500);
    mainmenu.hide(500);

    let isUserPoisonedOrBurned = false;
    //check if user is poisoned or burned, set up for hp loss
    if (
      PKMNuser.statusCondition === "Poison" ||
      PKMNuser.statusCondition === "Burn"
    ) {
      isUserPoisonedOrBurned = true;
      handlePoisonBurn(true);
    }

    let isUserBound = false;
    if (PKMNuser.isBound) {
      //subtract one turn from bound
      if (PKMNuser.turnsBound > 1) {
        isUserBound = true;
        //subtract one turn from bound
        PKMNtarget.turnsBound -= 1;
      } else {
        //set isbound to false
        PKMNtarget.isBound = false;
        PKMNtarget.turnsBound = 0;
      }
    }

    //check if user is afflicted with sleep and has turns remaining
    let wokeup = false;
    if (PKMNuser.statusCondition === "Sleep" && PKMNuser.turnsAsleep > 0) {
      //subtract one turn from asleep
      PKMNuser.turnsAsleep = PKMNuser.turnsAsleep - 1;
      DisplayMessage(PKMNuser.name + " is fast asleep...");
      let sleepingSound = new Audio(Sleeping);
      sleepingSound.volume = Volume;
      sleepingSound.play();
      if (isUserPoisonedOrBurned || isUserBound) {
        setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 2000);
      } else {
        setTimeout(() => switchTurns(), 2000);
      }
    } else {
      //check if user is asleep and on last turn
      if (PKMNuser.statusCondition === "Sleep" && PKMNuser.turnsAsleep === 0) {
        //wake up pokemon
        wokeup = true;
        DisplayMessage(PKMNuser.name + " woke up!");
        PKMNuser.statusCondition = "";
      }

      //handle frozen
      let frozen = false;
      if (PKMNuser.statusCondition === "Frozen") {
        //user is frozen
        frozen = true;
        DisplayMessage(PKMNuser.name + " is Frozen Solid!");
        if (isUserPoisonedOrBurned || isUserBound) {
          setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 2000);
        } else {
          setTimeout(() => switchTurns(), 2000);
        }
      }

      //handle is recharging
      let recharging = false;
      if (
        PKMNuser.isRecharging === true &&
        PKMNuser.statusCondition !== "Frozen" &&
        PKMNuser.statusCondition !== "Sleep"
      ) {
        //user is recharging
        recharging = true;
        DisplayMessage(PKMNuser.name + " must recharge...");
        //reset recharing flag
        PKMNuser.isRecharging = false;

        if (isUserPoisonedOrBurned || isUserBound) {
          setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 2000);
        } else {
          setTimeout(() => switchTurns(), 2000);
        }
      }

      //handle paralyze
      let paralysis = false;
      if (PKMNuser.statusCondition === "Paralyze" && !PKMNuser.isRecharging) {
        //user is paralyzed
        let rand = Math.random();
        //25% chance of paralysis
        if (rand < 0.25) {
          //blocked by paralysis
          paralysis = true;
          DisplayMessage(PKMNuser.name + " is paralyzed!");
          if (isUserPoisonedOrBurned || isUserBound) {
            setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 2000);
          } else {
            setTimeout(() => switchTurns(), 2000);
          }
        }
      }

      //handle confusion
      let snappedOut = false;
      let hurtitself = false;
      if (PKMNuser.isConfused && !PKMNuser.isRecharging) {
        if (PKMNuser.turnsConfused > 0) {
          //subtract one turn from confused
          PKMNuser.turnsConfused = PKMNuser.turnsConfused - 1;
          DisplayMessage(PKMNuser.name + " is confused...");
          let confusedSound = new Audio(Confused);
          confusedSound.volume = Volume;
          confusedSound.play();

          let rand = Math.random();
          //50% chance of hurting itself
          if (rand > 0.5) {
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
            if (PKMNuser.hp < 0) {
              PKMNuser.hp = 0;
            }
            setTimeout(() => handleForceUpdate(), 2500);

            let dmgDone = origHealth * asPercentage;
            let updatedBarHP = origHealth - dmgDone;

            setTimeout(
              () => DisplayMessage("It hurt itself in confusion!"),
              1500
            );

            //flash sprite
            setTimeout(() => Sprite.fadeOut(100), 1500);
            setTimeout(() => Sprite.fadeIn(300), 1600);
            //play hurt itself clip
            let hit = new Audio(ConfusedHitSelf);
            hit.volume = Volume;
            setTimeout(() => hit.play(), 1500);
            //update health bar to reflect damage
            setTimeout(() => UpdateHP(HPbar, updatedBarHP, Volume), 2500);
            if (PKMNuser.hp <= 0) {
              //pokemon fainted
              setTimeout(
                () =>
                  FaintPokemon(
                    player1Team,
                    player2Team,
                    Player1Poke,
                    Player2Poke,
                    PlayersTurn,
                    playerOneName,
                    playerTwoName,
                    resetMultipliers,
                    handleTeam,
                    handleFainted,
                    mode,
                    Volume
                  ),
                4500
              );
            } else {
              //if pokemon did not faint from damage
              //if user is poisonedburned, delay switching turns
              if (isUserPoisonedOrBurned || isUserBound) {
                setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 4500);
              } else {
                setTimeout(() => switchTurns(), 4500);
              }
            }
          }
        } else {
          snappedOut = true;
          PKMNuser.isConfused = false;
          DisplayMessage(PKMNuser.name + " snapped out of confusion!");
        }
      }

      //if pokemon has not woken up, snapped out of confusion, hurt itself from confusion, blocked by paralysis, or frozen or recharging; skip rest of move
      if (!hurtitself && !paralysis && !frozen && !recharging) {
        let timeout = 0;
        let timeout500 = 0;
        if (wokeup || snappedOut) {
          timeout = 2000;
          timeout500 = 500;
        }
        //update last move used with move name
        handleUpdateLastMove(moveName, PlayersTurn);

        //check for two stage moves
        let message = "";
        if (!PKMNuser.preparingAttack) {
          switch (moveName) {
            case "Dig":
              PKMNuser.preparingAttack = true;
              message = PKMNuser.name + " dug underground!";
              break;
            case "Fly":
              PKMNuser.preparingAttack = true;
              message = PKMNuser.name + " flew up high!";
              break;
            case "Sky Attack":
              PKMNuser.preparingAttack = true;
              message = PKMNuser.name + " is glowing!";
              break;
            case "Skull Bash":
              PKMNuser.preparingAttack = true;
              message = PKMNuser.name + " lowered it's head!";
              break;
            case "Solar Beam":
              PKMNuser.preparingAttack = true;
              message = PKMNuser.name + " took in sunlight!";
              break;
            default:
              break;
          }
          DisplayMessage(message);
          if (moveName === "Fly" || moveName === "Dig") {
            if (PlayersTurn === "Player One") {
              setTimeout(
                () => $(document.querySelector(".player1Sprite")).fadeOut(500),
                500
              );
            } else {
              setTimeout(
                () => $(document.querySelector(".player2Sprite")).fadeOut(500),
                500
              );
            }
          }
        }
        //if poke is using two stage move
        if (PKMNuser.preparingAttack) {
          if (PKMNuser.isConfused) {
            setTimeout(() => switchTurns(), 2500);
          } else {
            setTimeout(() => switchTurns(), 2000 + timeout);
          }
        } else {
          if (PKMNuser.isConfused) {
            setTimeout(
              () => DisplayMessage(PKMNuser.name + " used " + moveName + "!"),
              1500 + timeout500
            );
          } else {
            DisplayMessage(PKMNuser.name + " used " + moveName + "!");
          }
          if (PlayersTurn === "Player One") {
            if (power > 0) {
              setTimeout(
                () =>
                  Sprite.animate({ marginLeft: "+=25" }, 50, function() {
                    //animation complete
                    Sprite.animate({ marginLeft: "-=25" });
                  }),
                1400 + timeout
              );
            } else {
              //power is 0, animate sprite down
              setTimeout(
                () =>
                  Sprite.animate({ marginTop: "+=15" }, 80, function() {
                    //animation complete
                    Sprite.animate({ marginTop: "-=15" });
                  }),
                1400 + timeout
              );
            }
          } else if (PlayersTurn === "Player Two") {
            if (power > 0) {
              setTimeout(
                () =>
                  Sprite.animate({ marginLeft: "-=25" }, 50, function() {
                    //animation complete
                    Sprite.animate({ marginLeft: "+=25" });
                  }),
                1400 + timeout
              );
            } else {
              //power is 0, animate sprite down
              setTimeout(
                () =>
                  Sprite.animate({ marginTop: "+=15" }, 80, function() {
                    //animation complete
                    Sprite.animate({ marginTop: "-=15" });
                  }),
                1400 + timeout
              );
            }
          }
          //if so, does move land hit (accuracy check)
          //formula: percentChance = moveAcc * (attacker accuracy / target evasion)
          let percentChance =
            (moveAcc * (PKMNuser.accuracy / PKMNtarget.evasion)) / 100;
          let rand = Math.random();
          if (PKMNuser.isConfused) {
            setTimeout(() => attack.play(), 3000);
          } else {
            setTimeout(() => attack.play(), 1500 + timeout);
          }
          let lastMove;
          if (PlayersTurn === "Player One") {
            lastMove = lastMoveUsedPlayer2;
          } else {
            lastMove = lastMoveUsedPlayer1;
          }
          if (
            rand > percentChance ||
            (PKMNtarget.preparingAttack &&
              (lastMove === "Dig" || lastMove === "Fly") &&
              power > 0)
          ) {
            if (PKMNuser.isConfused) {
              setTimeout(
                () => DisplayMessage(PKMNuser.name + "'s attack Missed!"),
                4500
              );
            } else {
              setTimeout(
                () => DisplayMessage(PKMNuser.name + "'s attack Missed!"),
                3000 + timeout
              );
            }

            if (isUserPoisonedOrBurned || isUserBound) {
              if (PKMNuser.isConfused) {
                setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 6500);
              } else {
                setTimeout(
                  () => dealPoisonBurn(PKMNuser, HPbar),
                  5000 + timeout
                );
              }
            } else {
              if (PKMNuser.isConfused) {
                setTimeout(() => switchTurns(), 6500);
              } else {
                setTimeout(() => switchTurns(), 5000 + timeout);
              }
            }
          } else {
            //if user move does land
            //check for hyper beam
            if (moveName === "Hyper Beam" && PKMNuser.isRecharging === false) {
              //set recharging to true if Hyper Beam lands
              PKMNuser.isRecharging = true;
            }
            //does move have power, if so deal damage
            if (power > 0) {
              //if move lands, continue with deal damage

              //if magnitude is used, assign random power
              if (moveName === "Magnitude") {
                let newPower = 0;
                let magnitudeLevel = RandomNumberGenerator(4, 10);
                magnitudeLevel = Math.round(magnitudeLevel);
                switch (magnitudeLevel) {
                  case 4:
                    newPower = 10;
                    break;
                  case 5:
                    newPower = 30;
                    break;
                  case 6:
                    newPower = 50;
                    break;
                  case 7:
                    newPower = 70;
                    break;
                  case 8:
                    newPower = 90;
                    break;
                  case 9:
                    newPower = 110;
                    break;
                  case 10:
                    newPower = 150;
                    break;
                  default:
                    newPower = 30;
                    break;
                }
                setTimeout(
                  () => DisplayMessage("Magnitude " + magnitudeLevel + "!"),
                  2500 + timeout
                );
                setTimeout(
                  () =>
                    DealDamage(
                      newPower,
                      lv,
                      moveName,
                      moveCategory,
                      moveType,
                      statusEff,
                      statusProb,
                      player1Team,
                      player2Team,
                      Player1Poke,
                      Player2Poke,
                      PlayersTurn,
                      playerOneName,
                      playerTwoName,
                      resetMultipliers,
                      handleTeam,
                      handleFainted,
                      handleForceUpdate,
                      checkForStatusEffect,
                      isUserPoisonedOrBurned,
                      dealPoisonBurn,
                      switchTurns,
                      mode,
                      Volume,
                      checkWin
                    ),
                  4500 + timeout
                );
              } else {
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
                      player1Team,
                      player2Team,
                      Player1Poke,
                      Player2Poke,
                      PlayersTurn,
                      playerOneName,
                      playerTwoName,
                      resetMultipliers,
                      handleTeam,
                      handleFainted,
                      handleForceUpdate,
                      checkForStatusEffect,
                      isUserPoisonedOrBurned,
                      dealPoisonBurn,
                      switchTurns,
                      mode,
                      Volume,
                      checkWin
                    ),
                  3500 + timeout
                );
              }
            } else if (power === 0 && statusEff !== "") {
              setTimeout(
                () =>
                  checkForStatusEffect(
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
                1500 + timeout500
              );
            } else if (power === 0 && statusEff === "") {
              //move does nothing
              setTimeout(
                () => DisplayMessage(moveName + " did nothing..."),
                2000 + timeout
              );

              if (isUserPoisonedOrBurned || isUserBound) {
                setTimeout(
                  () => dealPoisonBurn(PKMNuser, HPbar),
                  4000 + timeout
                );
              } else {
                setTimeout(() => switchTurns(), 4000 + timeout);
              }
            }
          }
        }
      }
    }
  }
};

export { UseMove };

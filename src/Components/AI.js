import React from "react";
import { RandomNumberGenerator } from "./RandomNumberGenerator";
import { UseMove } from "./Moves/UseMove";

const handleAI = (
  player1CurrentPokemon,
  player2CurrentPokemon,
  playersTurn,
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
  checkForStatusEffect
) => {
  let PKMNuser = player2Team[player2CurrentPokemon];
  let PKMNtarget = player1Team[player1CurrentPokemon];
  //get types from target
  let targetType1 = PKMNtarget.types[0][0];
  let targetType2 = null;
  if (PKMNtarget.types[0][1] !== null) {
    targetType2 = PKMNtarget.types[0][1];
  }

  //use random move from pokemon
  let num = Math.round(RandomNumberGenerator(0, 3));
  console.log("move num chosen is: " + num);
  if (PKMNuser.hp <= 0) {
    setTimeout(
      () =>
        UseMove(
          num,
          PKMNuser.moves[num].name,
          PKMNuser.moves[num].category,
          PKMNuser.moves[num].type,
          PKMNuser.moves[num].power,
          PKMNuser.moves[num].pp,
          PKMNuser.moves[num].accuracy,
          PKMNuser.moves[num].statusEff,
          PKMNuser.moves[num].statusProb,
          PKMNuser.lv,
          player1CurrentPokemon,
          player2CurrentPokemon,
          playersTurn,
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
          checkForStatusEffect
        ),
      4500
    );
  } else {
    UseMove(
      num,
      PKMNuser.moves[num].name,
      PKMNuser.moves[num].category,
      PKMNuser.moves[num].type,
      PKMNuser.moves[num].power,
      PKMNuser.moves[num].pp,
      PKMNuser.moves[num].accuracy,
      PKMNuser.moves[num].statusEff,
      PKMNuser.moves[num].statusProb,
      PKMNuser.lv,
      player1CurrentPokemon,
      player2CurrentPokemon,
      playersTurn,
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
      checkForStatusEffect
    );
  }
};

export { handleAI };

import React from "react";
import { RandomNumberGenerator } from "./RandomNumberGenerator";
import { UseMove } from "./Moves/UseMove";
import { CalcTypeAdvantage } from "./TypeAdvantage";

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
  checkForStatusEffect,
  volume,
  checkWin
) => {
  let PKMNuser = null;
  let PKMNtarget = null;

  if (mode === "Single") {
    PKMNuser = player2Team[player2CurrentPokemon];
    PKMNtarget = player1Team[player1CurrentPokemon];
  } else if (mode === "CPUVSCPU") {
    if (playersTurn === "Player One") {
      PKMNuser = player1Team[player1CurrentPokemon];
      PKMNtarget = player2Team[player2CurrentPokemon];
    } else {
      PKMNuser = player2Team[player2CurrentPokemon];
      PKMNtarget = player1Team[player1CurrentPokemon];
    }
  }

  //get types from target
  let targetType1 = PKMNtarget.types[0][0];
  let targetType2 = null;
  if (PKMNtarget.types[0][1] !== null) {
    targetType2 = PKMNtarget.types[0][1];
  }
  let moveChosen = null;
  let num = 0;
  let chosen4 = false;
  let random = Math.random();
  for (let i = 0; i < PKMNuser.moves.length; i++) {
    let advanNum = CalcTypeAdvantage(
      PKMNuser.moves[i].type,
      targetType1,
      targetType2
    );
    console.log(
      "AI Move: " + PKMNuser.moves[i].name + ", advan calced to " + advanNum
    );

    if (advanNum === 4) {
      //double type advan
      num = i;
      moveChosen = PKMNuser.moves[i];
      chosen4 = true;
    } else if (advanNum === 2 && !chosen4) {
      //single type advan
      num = i;
      moveChosen = PKMNuser.moves[i];
    }
  }
  if (moveChosen === null) {
    console.log("no type advan, choosing random...");

    let rand = Math.round(RandomNumberGenerator(0, PKMNuser.moves.length - 1));
    moveChosen = PKMNuser.moves[rand];
    num = rand;
  } else {
    console.log("found type advan, might choose it...");
    if (random < 0.3) {
      console.log("choosing random...");
      let rand = Math.round(
        RandomNumberGenerator(0, PKMNuser.moves.length - 1)
      );
      moveChosen = PKMNuser.moves[rand];
      num = rand;
    }
  }

  //console.log("move num chosen is: " + num);
  if (PKMNuser.hp <= 0) {
    setTimeout(
      () =>
        UseMove(
          num,
          moveChosen.name,
          moveChosen.category,
          moveChosen.type,
          moveChosen.power,
          moveChosen.pp,
          moveChosen.accuracy,
          moveChosen.statusEff,
          moveChosen.statusProb,
          moveChosen.sound,
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
          checkForStatusEffect,
          volume,
          checkWin
        ),
      4500
    );
  } else {
    UseMove(
      num,
      moveChosen.name,
      moveChosen.category,
      moveChosen.type,
      moveChosen.power,
      moveChosen.pp,
      moveChosen.accuracy,
      moveChosen.statusEff,
      moveChosen.statusProb,
      moveChosen.sound,
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
      checkForStatusEffect,
      volume,
      checkWin
    );
  }
};

export { handleAI };

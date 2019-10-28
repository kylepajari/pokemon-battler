import $ from "jquery";
import { RandomNumberGenerator } from "./RandomNumberGenerator";
import { UseMove } from "./Moves/UseMove";
import { CalcTypeAdvantage } from "./TypeAdvantage";
import { DisplayMessage } from "./DisplayMessage";
import { UpdateHP } from "./UpdateHP";
import healSound from "../Sounds/BattleSounds/General/USEITEM.wav";
import store from "../store";

const HandleAI = (
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
  checkWin,
  aiUsedMaxPotion,
  aiUsedAntidote,
  aiUsedBurnHeal,
  aiUsedParalyzeHeal,
  aiUsedAwakening,
  aiUsedIceHeal,
  handleAIUseItems,
  handleUpdateLastMove,
  lastMovePlayer1,
  lastMovePlayer2
) => {
  //setting up hooks
  const state = store.getState();
  ////////////////////////////////////////////////
  let PKMNuser = null;
  let PKMNtarget = null;
  let canSwap = false;
  let usedItem = false;

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
  //get types from user
  let userType1 = PKMNuser.types[0][0];
  let userType2 = null;
  if (PKMNuser.types[0][1] !== null) {
    userType2 = PKMNuser.types[0][1];
  }
  //calc type advantages for current pokes out
  let advanNum1 = CalcTypeAdvantage(targetType1, userType1, userType2);
  let advanNum2 = 0;
  if (targetType2 !== null) {
    advanNum2 = CalcTypeAdvantage(targetType2, userType1, userType2);
  }

  //first, check if hp is low enough to use potion and is on either last two pokemon
  let currentTeam = playersTurn === "Player One" ? player1Team : player2Team;
  let numFainted = 0;
  let lastTwo = false;
  //check how many in team are fainted
  currentTeam.forEach(poke => {
    if (poke.fainted) {
      numFainted++;
    }
  });
  if (currentTeam.length <= 2) {
    //console.log("team has 2 or less pokemon");

    lastTwo = true;
  } else if (numFainted >= currentTeam.length - 2) {
    // console.log(
    //   "numfainted: " + numFainted + ", is greater than team length - 2"
    // );
    lastTwo = true;
  }
  let currentPlayer =
    playersTurn === "Player One" ? playerOneName : playerTwoName;

  if (PKMNuser.hp / PKMNuser.OrigHp <= 0.25 && lastTwo && !aiUsedMaxPotion) {
    //pokemon has less than or equal to 25% health
    DisplayMessage(
      currentPlayer +
        " used " +
        state.aiItems[0].name +
        " on " +
        PKMNuser.name +
        "!"
    );

    handleAIUseItems("Max Potion");
    usedItem = true;

    //heal hp
    //if increasing would bring them over full hp, cap hp
    let HPbar = null;
    if (playersTurn === "Player One" && mode === "CPUVSCPU") {
      //if CPU1's turn in CPUvsCPU mode, target player1 hp bar
      HPbar = $(document.querySelector(".player1HP"));
    } else {
      HPbar = $(document.querySelector(".player2HP"));
    }

    setTimeout(() => (PKMNuser.hp = PKMNuser.OrigHp), 1500);
    let difference = Math.round(PKMNuser.OrigHp - PKMNuser.hp);
    setTimeout(
      () =>
        DisplayMessage(
          PKMNuser.name + " recovered by " + difference.toString() + " HP!"
        ),
      1500
    );

    let origHealth = parseInt(HPbar.css("width"));

    let asPercentage = 999 / PKMNuser.hp;

    let hpRecovered = origHealth * asPercentage;
    let updatedBarHP = origHealth + hpRecovered;
    if (updatedBarHP > 560) {
      updatedBarHP = 560;
    }
    //play heal sound
    let heal = new Audio(healSound);
    heal.volume = volume;
    heal.play();

    setTimeout(() => UpdateHP(HPbar, updatedBarHP, volume), 1800);
    setTimeout(() => {
      handleForceUpdate();
    }, 1800);
    // if (
    //   PKMNuser.statusCondition === "Poison" ||
    //   PKMNuser.statusCondition === "Burn"
    // ) {
    //   setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 3500);
    // } else {
    //   setTimeout(() => switchTurns(), 3500);
    // }
  } else if (
    (PKMNuser.statusCondition === "Poison" && !aiUsedAntidote) ||
    (PKMNuser.statusCondition === "Paralyze" && !aiUsedParalyzeHeal) ||
    (PKMNuser.statusCondition === "Burn" && !aiUsedBurnHeal) ||
    (PKMNuser.statusCondition === "Sleep" && !aiUsedAwakening) ||
    (PKMNuser.statusCondition === "Frozen" && !aiUsedIceHeal)
  ) {
    //if not, check if ai pokemon is afflicted with status condition
    switch (PKMNuser.statusCondition) {
      case "Poison":
        DisplayMessage(playerTwoName + " used an Antidote!");
        handleAIUseItems("Antidote");
        break;
      case "Paralyze":
        DisplayMessage(playerTwoName + " used a Paralyze Heal!");
        handleAIUseItems("Paralyze Heal");
        break;
      case "Burn":
        DisplayMessage(playerTwoName + " used a Burn Heal!");
        handleAIUseItems("Burn Heal");
        break;
      case "Sleep":
        DisplayMessage(playerTwoName + " used an Awakening!");
        handleAIUseItems("Awakening");
        break;
      case "Frozen":
        DisplayMessage(playerTwoName + " used an Ice Heal!");
        handleAIUseItems("Ice Heal");
        break;
      default:
    }

    setTimeout(
      () =>
        DisplayMessage(
          PKMNuser.name + " was cured of " + PKMNuser.statusCondition + "!"
        ),
      1800
    );
    usedItem = true;
    //play heal sound
    let heal = new Audio(healSound);
    heal.volume = volume;
    heal.play();
    //remove status condition
    setTimeout(() => (PKMNuser.statusCondition = ""), 1900);
    //setTimeout(() => switchTurns(), 3500);
  }
  //check if opponent poke has type advantage over current poke
  if (advanNum1 > 1 || advanNum2 > 1) {
    let Team = null;
    let swapPoke = null;
    //scan team for type advantage
    if (mode === "Single") {
      PKMNtarget = player1Team[player1CurrentPokemon];
      Team = player2Team;
    } else if (mode === "CPUVSCPU") {
      if (playersTurn === "Player One") {
        PKMNtarget = player2Team[player2CurrentPokemon];
        Team = player1Team;
      } else {
        PKMNtarget = player1Team[player1CurrentPokemon];
        Team = player2Team;
      }
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
      //console.log(poke.name + "'s advan is " + advanNum1 + " and " + advanNum2);
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
    if (swapPoke != null) {
      canSwap = true;
      //console.log(swapPoke);
      if (usedItem) {
        setTimeout(() => handleTeam("swapAI", swapPoke), 4500);
      } else {
        setTimeout(() => handleTeam("swapAI", swapPoke), 1000);
      }
    }
  }
  if (!canSwap) {
    let moveChosen = null;
    let num = 0;
    let chosen4 = false;
    let random = Math.random();
    let i = PKMNuser.moves.forEach((move, i) => {
      //console.log(move.name);
      if (move.name === "Rest") {
        return i;
      }
    });
    //if health is below 1/4 and Rest is available, use it
    if (PKMNuser.hp <= PKMNuser.OrigHp / 4 && i !== undefined) {
      //find rest
      moveChosen = PKMNuser.moves[i];
      num = i;
      //give AI 25% at choosing different move
      if (random < 0.25) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      }
    } else {
      // if not low hp, or afflicted, continue using move as normal
      for (let i = 0; i < PKMNuser.moves.length; i++) {
        let advanNum = CalcTypeAdvantage(
          PKMNuser.moves[i].type,
          targetType1,
          targetType2
        );

        if (advanNum === 4 && PKMNuser.moves[i].power !== 0) {
          //double type advan
          num = i;
          moveChosen = PKMNuser.moves[i];
          chosen4 = true;
        } else if (
          advanNum === 2 &&
          !chosen4 &&
          PKMNuser.moves[i].power !== 0
        ) {
          //single type advan
          num = i;
          moveChosen = PKMNuser.moves[i];
        }
      }
      if (moveChosen === null || moveChosen === undefined) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      } else {
        //give AI 20% at choosing different move, to prevent move spam
        if (random < 0.2) {
          let rand = Math.round(
            RandomNumberGenerator(0, PKMNuser.moves.length - 1)
          );
          moveChosen = PKMNuser.moves[rand];
          num = rand;
        }
      }
      //if rest is chosen and HP is above half, choose again
      if (moveChosen.name === "Rest" && PKMNuser.hp > PKMNuser.OrigHp / 2) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      }
      //if confusion causing move is chosen and target is already confused, choose again
      if (
        moveChosen.statusEff === "ConfusionTarget" &&
        moveChosen.power === 0 &&
        PKMNtarget.isConfused
      ) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      }
      //if sleep causing move is chosen and target is already asleep, choose again
      if (moveChosen.statusEff === "Sleep" && PKMNtarget.isAsleep) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      }
    }
    //console.log(moveChosen);
    //console.log(usedItem);

    if (PKMNuser.hp <= 0) {
      //if current pokemon is fainted, delay using move by 5 seconds to allow time for new pokemon to come out
      if (usedItem) {
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
              checkWin,
              handleUpdateLastMove,
              lastMovePlayer1,
              lastMovePlayer2
            ),
          7000
        );
      } else {
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
              checkWin,
              handleUpdateLastMove,
              lastMovePlayer1,
              lastMovePlayer2
            ),
          5000
        );
      }
    } else {
      if (usedItem) {
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
              checkWin,
              handleUpdateLastMove,
              lastMovePlayer1,
              lastMovePlayer2
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
          checkWin,
          handleUpdateLastMove,
          lastMovePlayer1,
          lastMovePlayer2
        );
      }
    }
  }
};

export { HandleAI };

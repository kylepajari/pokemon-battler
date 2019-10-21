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
  handleAIUseItems
) => {
  //setting up hooks
  const state = store.getState();

  ////////////////////////////////////////////////
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

  //first, check if hp is low enough to use potion and is on either last two pokemon
  let currentPoke =
    playersTurn === "Player One"
      ? player1CurrentPokemon
      : player2CurrentPokemon;
  let currentTeam = playersTurn === "Player One" ? player1Team : player2Team;
  let currentPlayer =
    playersTurn === "Player One" ? playerOneName : playerTwoName;

  if (
    PKMNuser.hp / PKMNuser.OrigHp <= 0.25 &&
    (currentPoke === currentTeam.length - 1 ||
      currentPoke === currentTeam.length - 2) &&
    !aiUsedMaxPotion
  ) {
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
    if (
      PKMNuser.statusCondition === "Poison" ||
      PKMNuser.statusCondition === "Burn"
    ) {
      setTimeout(() => dealPoisonBurn(PKMNuser, HPbar), 3500);
    } else {
      setTimeout(() => switchTurns(), 3500);
    }
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
    //play heal sound
    let heal = new Audio(healSound);
    heal.volume = volume;
    heal.play();
    //remove status condition
    setTimeout(() => (PKMNuser.statusCondition = ""), 1900);
    setTimeout(() => switchTurns(), 3500);
  } else {
    // if not low hp, or afflicted, continue using move as normal

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
      let rand = Math.round(
        RandomNumberGenerator(0, PKMNuser.moves.length - 1)
      );
      moveChosen = PKMNuser.moves[rand];
      num = rand;
      //if rest is chosen and HP is above half, choose again
      if (
        moveChosen.name === "Rest" &&
        PKMNuser.Health > PKMNuser.origHealth / 2
      ) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      }
    } else {
      //give AI 30% at choosing different move, to prevent move spam
      if (random < 0.3) {
        let rand = Math.round(
          RandomNumberGenerator(0, PKMNuser.moves.length - 1)
        );
        moveChosen = PKMNuser.moves[rand];
        num = rand;
      }
    }
    if (PKMNuser.hp <= 0) {
      //if current pokemon is fainted, delay using move by 4.5 seconds to allow time for new pokemon to come out
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
  }
};

export { HandleAI };

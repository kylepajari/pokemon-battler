import $ from "jquery";
import { DisplayMessage } from "./DisplayMessage";
import FaintSound from "../Sounds/BattleSounds/General/IMDOWN.wav";

const FaintPokemon = (
  player1Team,
  player2Team,
  player1CurrentPokemon,
  player2CurrentPokemon,
  PlayersTurn,
  playerOneName,
  playerTwoName,
  resetMultipliers,
  handleTeam,
  handleFainted,
  mode,
  Volume,
  faintedSameTurn = null
) => {
  let Sprite = null;
  let Pokeball = null;
  let PKMN = null;
  let Team = null;
  let faintedFromRecoilPoisonBurn = false;
  if (PlayersTurn === "Player One") {
    if (player1Team[player1CurrentPokemon].hp <= 0) {
      faintedFromRecoilPoisonBurn = true;
      Team = player1Team;
      PKMN = player1CurrentPokemon;
      Sprite = $(document.querySelector(".player1Sprite"));
      Pokeball = $(document.getElementById("p1" + player1CurrentPokemon));
    } else if (player2Team[player2CurrentPokemon].hp <= 0) {
      Team = player2Team;
      PKMN = player2CurrentPokemon;
      Sprite = $(document.querySelector(".player2Sprite"));
      Pokeball = $(document.getElementById("p2" + player2CurrentPokemon));
    }
  } else {
    //player twos turn
    if (player2Team[player2CurrentPokemon].hp <= 0) {
      faintedFromRecoilPoisonBurn = true;
      Team = player2Team;
      PKMN = player2CurrentPokemon;
      Sprite = $(document.querySelector(".player2Sprite"));
      Pokeball = $(document.getElementById("p2" + player2CurrentPokemon));
    } else if (player1Team[player1CurrentPokemon].hp <= 0) {
      Team = player1Team;
      PKMN = player1CurrentPokemon;
      Sprite = $(document.querySelector(".player1Sprite"));
      Pokeball = $(document.getElementById("p1" + player1CurrentPokemon));
    }
  }
  if (Team === player2Team && mode === "Single") {
    DisplayMessage("Enemy " + Team[PKMN].name + " fainted!");
  } else {
    DisplayMessage(Team[PKMN].name + " fainted!");
  }

  //play fainted sound/cry
  let cry = new Audio(Team[PKMN].cry);
  cry.volume = Volume;
  cry.play();
  let faint = new Audio(FaintSound);
  faint.volume = Volume;
  setTimeout(() => faint.play(), 1000);

  //set fainted property to true on pokemon
  Team[PKMN].fainted = true;
  handleFainted(PKMN, PlayersTurn, faintedFromRecoilPoisonBurn);
  //set in battle to false
  Team[PKMN].inBattle = false;
  //hide sprite
  Sprite.fadeOut(1000);

  //add opacity to pokeball representing pokemon
  Pokeball.addClass("faded");

  //check if all pokemon are fainted
  let numFainted = 0;
  Team.forEach(poke => {
    if (poke.fainted === true) {
      numFainted++;
    }
  });

  if (numFainted < Team.length) {
    //increase currentPokemon number for team to send out next in party
    //reset stat modifiers to defaults, for new pokemon
    resetMultipliers("fainted");
    console.log(faintedSameTurn);
    if (mode === "Multi") {
      setTimeout(
        () => DisplayMessage("Select which Pokémon to send out..."),
        3000
      );
      //display list of available pokemon that are not inbattle/fainted
      if (!faintedSameTurn) {
        setTimeout(() => handleTeam("fainted"), 3000);
      }
    } else if (mode === "Single") {
      //if in single mode, only show message for player one
      if (
        PlayersTurn === "Player One" &&
        player1Team[player1CurrentPokemon].hp <= 0
      ) {
        setTimeout(
          () => DisplayMessage("Select which Pokémon to send out..."),
          3000
        );
      }
      //display list of available pokemon that are not inbattle/fainted
      //both pokemon fainted, do not handleteam yet
      if (!faintedSameTurn) {
        setTimeout(() => handleTeam("fainted"), 3000);
      }
    } else if (mode === "CPUVSCPU") {
      if (!faintedSameTurn) {
        setTimeout(() => handleTeam("fainted"), 3000);
      }
    }
  }
};

export { FaintPokemon };

import { FaintPokemon } from "./FaintPokemon";
import { DisplayMessage } from "./DisplayMessage";
import lowhealth from "../Sounds/BattleSounds/General/LOWHEALTH.wav";

const UpdateHP = (
  HPbar,
  value,
  pokemon,
  power,
  player1Team,
  player2Team,
  player1CurrentPokemon,
  player2CurrentPokemon,
  playersTurn,
  playerOneName,
  playerTwoName,
  resetMultipliers,
  handleTeam,
  handleFainted,
  mode,
  Volume
) => {
  console.log("changing HP Bar...", mode);
  console.log("update HP volume is " + Volume);

  value = parseInt(value);
  HPbar.css("width", value);
  if (value >= 0 && value <= 104) {
    HPbar.removeClass("fullhp");
    HPbar.removeClass("halfhp");
    HPbar.addClass("onefifthhp");
    let boop = new Audio(lowhealth);
    boop.volume = Volume;
    boop.play();
  } else if (value > 104 && value <= 280) {
    HPbar.removeClass("fullhp");
    HPbar.removeClass("onefifthhp");
    HPbar.addClass("halfhp");
  } else if (value > 280) {
    HPbar.removeClass("onefifthhp");
    HPbar.removeClass("halfhp");
    HPbar.addClass("fullhp");
  }
  if (value <= 3) {
    console.log(pokemon + " fainted");
    if (power === 999) {
      setTimeout(() => DisplayMessage("One-Hit KO!"), 1000);
    } else {
      setTimeout(() => DisplayMessage(pokemon + " fainted!"), 1000);
    }

    setTimeout(
      () =>
        FaintPokemon(
          player1Team,
          player2Team,
          player1CurrentPokemon,
          player2CurrentPokemon,
          playersTurn,
          playerOneName,
          playerTwoName,
          resetMultipliers,
          handleTeam,
          handleFainted,
          mode,
          Volume
        ),
      2000
    );
  }
};

export { UpdateHP };

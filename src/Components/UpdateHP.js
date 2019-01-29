import $ from "jquery";
import { FaintPokemon } from "./FaintPokemon";
import { DisplayMessage } from "./DisplayMessage";

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
  resetMultipliers,
  handleTeam,
  handleFainted
) => {
  console.log("changing HP Bar...");

  HPbar.css("width", value);
  if (value >= 0 && value <= 104) {
    HPbar.removeClass("fullhp");
    HPbar.removeClass("halfhp");
    HPbar.addClass("onefifthhp");
  } else if (value > 104 && value <= 280) {
    HPbar.removeClass("fullhp");
    HPbar.removeClass("onefifthhp");
    HPbar.addClass("halfhp");
  } else if (value > 280) {
    HPbar.removeClass("onefifthhp");
    HPbar.removeClass("halfhp");
    HPbar.addClass("fullhp");
  }

  if (value <= 1) {
    console.log(pokemon + " fainted");
    if (power === 999) {
      DisplayMessage("One-Hit KO!");
    } else {
      DisplayMessage(pokemon + " fainted!");
    }
    setTimeout(
      () =>
        FaintPokemon(
          player1Team,
          player2Team,
          player1CurrentPokemon,
          player2CurrentPokemon,
          playersTurn,
          resetMultipliers,
          handleTeam,
          handleFainted
        ),
      1000
    );
  }
};

export { UpdateHP };

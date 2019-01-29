import $ from "jquery";
import { DisplayMessage } from "./DisplayMessage";

const FaintPokemon = (
  player1Team,
  player2Team,
  player1CurrentPokemon,
  player2CurrentPokemon,
  PlayersTurn,
  resetMultipliers,
  handleTeam,
  handleFainted
) => {
  let Sprite = null;
  let Pokeball = null;
  let PKMN = null;
  let Team = null;
  let faintedFromRecoil = false;
  if (PlayersTurn === "Player One") {
    console.log(player1Team[player1CurrentPokemon].hp);

    if (player1Team[player1CurrentPokemon].hp <= 0) {
      faintedFromRecoil = true;
      Team = player1Team;
      PKMN = player1CurrentPokemon;
      Sprite = $(document.querySelector(".player1Sprite"));
      Pokeball = $(document.getElementById("p1" + player1CurrentPokemon));
    } else if (player2Team[player2CurrentPokemon].hp <= 0) Team = player2Team;
    PKMN = player2CurrentPokemon;
    Sprite = $(document.querySelector(".player2Sprite"));
    Pokeball = $(document.getElementById("p2" + player2CurrentPokemon));
  } else {
    //player twos turn
    if (player2Team[player2CurrentPokemon].hp <= 0) {
      faintedFromRecoil = true;
      Team = player2Team;
      PKMN = player2CurrentPokemon;
      Sprite = $(document.querySelector(".player2Sprite"));
      Pokeball = $(document.getElementById("p2" + player2CurrentPokemon));
    } else if (player1Team[player1CurrentPokemon].hp <= 0) Team = player1Team;
    PKMN = player1CurrentPokemon;
    Sprite = $(document.querySelector(".player1Sprite"));
    Pokeball = $(document.getElementById("p1" + player1CurrentPokemon));
  }
  console.log("running fainted function...");
  console.log(Sprite, Pokeball);

  //set fainted property to true on pokemon
  Team[PKMN].fainted = true;
  handleFainted(PKMN, PlayersTurn, faintedFromRecoil);
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
  console.log("number of pokemon fainted is: " + numFainted);

  if (numFainted < Team.length) {
    //increase currentPokemon number for team to send out next in party
    //reset stat modifiers to defaults, for new pokemon
    resetMultipliers("fainted");

    //allow choosing of pokemon to send out
    setTimeout(
      () => DisplayMessage("Select which Pokémon to send out..."),
      3000
    );

    //display list of available pokemon that are not inbattle/fainted
    setTimeout(() => handleTeam("fainted"), 3000);
  } else {
    console.log("All pokemon on team fainted...");
    setTimeout(
      () => $(document.querySelector(".playermessage")).fadeIn(500),
      3000
    );

    $(document.querySelector(".options")).hide(500);
    if (PlayersTurn === "Player One") {
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            "Player Two is out of Pokémon! "
          ),
        3000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            "Player One defeated Player Two!"
          ),
        4500
      );
    } else {
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            "Player One is out of Pokémon! "
          ),
        3000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            "Player Two defeated Player One!"
          ),
        4500
      );
    }
  }
};

export { FaintPokemon };

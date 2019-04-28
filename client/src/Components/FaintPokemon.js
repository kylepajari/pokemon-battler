import $ from "jquery";
import { DisplayMessage } from "./DisplayMessage";
import Victory from "../Sounds/victory.mp3";
import FaintSound from "../Sounds/BattleSounds/General/IMDOWN.wav";
import { setBadges } from "../actions";
import { connect } from "react-redux";

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
  Volume
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
  console.log("running fainted function...");
  DisplayMessage(Team[PKMN].name + " fainted!");
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
  console.log("number of pokemon fainted is: " + numFainted);

  if (numFainted < Team.length) {
    //increase currentPokemon number for team to send out next in party
    //reset stat modifiers to defaults, for new pokemon
    resetMultipliers("fainted");
    if (mode === "Multi") {
      setTimeout(
        () => DisplayMessage("Select which Pokémon to send out..."),
        3000
      );
      //display list of available pokemon that are not inbattle/fainted
      setTimeout(() => handleTeam("fainted"), 3000);
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
      setTimeout(() => handleTeam("fainted"), 3000);
    } else if (mode === "CPUVSCPU") {
      setTimeout(() => handleTeam("fainted"), 3000);
    }
  } else {
    console.log("All pokemon on team fainted...");
    setTimeout(
      () => $(document.querySelector(".playermessage")).fadeIn(500),
      3000
    );

    $(document.querySelector(".options")).hide(500);
    //play victory music
    let win = new Audio(Victory);
    if (Volume === 0) {
      win.volume = 0;
    } else {
      win.volume = 1;
    }

    setTimeout(() => win.play(), 3000);

    let faintedCountTeam1 = 0;
    let faintedCountTeam2 = 0;
    player1Team.forEach(poke => {
      if (poke.fainted) {
        faintedCountTeam1++;
      }
    });
    player2Team.forEach(poke => {
      if (poke.fainted) {
        faintedCountTeam2++;
      }
    });

    if (faintedCountTeam1 === Team.length) {
      //everyone on player ones team has fainted
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            playerOneName + " is out of Pokémon! "
          ),
        3000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            playerTwoName + " defeated " + playerOneName + "!"
          ),
        4500
      );
    }
    if (faintedCountTeam2 === Team.length) {
      //everyone on player twos team has fainted
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            playerTwoName + " is out of Pokémon! "
          ),
        3000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            playerOneName + " defeated " + playerTwoName + "!"
          ),
        4500
      );

      //badge earning
      ////////////////////////////////////////////////////////////////
      if (mode === "Single") {
        let badge = null;

        //get users current badges
        let badgesCount = this.props.badges;
        //increase badge count by 1 if less than 8, give player badge
        if (badgesCount < 8) {
          badgesCount += 1;
          this.props.setBadges(badgesCount);
          switch (playerTwoName) {
            case "Brock":
              badge = "Boulder Badge";
              break;
            case "Misty":
              badge = "Cascade Badge";
              break;
            case "Lt. Surge":
              badge = "Thunder Badge";
              break;
            case "Erika":
              badge = "Rainbow Badge";
              break;
            case "Koga":
              badge = "Soul Badge";
              break;
            case "Sabrina":
              badge = "Marsh Badge";
              break;
            case "Blaine":
              badge = "Volcano Badge";
              break;
            case "Giovanni":
              badge = "Earth Badge";
              break;
            default:
              badge = "Badge";
              break;
          }
          setTimeout(
            () =>
              $(document.querySelector(".playermessage")).text(
                playerOneName + " earned the " + badge + "!"
              ),
            6000
          );
        }
      }
    }
    setTimeout(() => $(document.querySelector(".options")).hide(300), 4500);
    setTimeout(() => $(document.querySelector(".mainmenu")).show(300), 7000);
  }
};

const mapStateToProps = state => {
  return {
    badges: state.badges
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setBadges: num => dispatch(setBadges(num))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FaintPokemon);

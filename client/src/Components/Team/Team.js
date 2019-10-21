import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";
import $ from "jquery";
import { UpdateHP } from "../UpdateHP";
import { DisplayMessage } from "../DisplayMessage";
import swapSound from "../../Sounds/BattleSounds/General/SWITCHIN.wav";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayTeam: false
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      displayTeam: props.displayTeam
    });
  }

  componentDidUpdate() {
    if (this.state.displayTeam) {
      $(document.querySelector(".playerTeam").lastChild).focus();
    }
  }

  //SWAP POKEMON FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  swapPokemon = swapPoke => {
    let Sprite = null;
    let PKMN = null;
    let Team = null;
    let HPbar = null;
    if (this.props.playersTurn === "Player One") {
      Team = this.props.player1Team;
      PKMN = this.props.player1CurrentPokemon;
      HPbar = $(document.querySelector(".player1HP"));
      Sprite = $(document.querySelector(".player1Sprite"));
    } else {
      Team = this.props.player2Team;
      PKMN = this.props.player2CurrentPokemon;
      HPbar = $(document.querySelector(".player2HP"));
      Sprite = $(document.querySelector(".player2Sprite"));
    }

    //reset stat modifiers to defaults, for new pokemon
    this.props.resetMultipliers("swap");
    //hide buttons while swapping
    $(document.querySelector(".options")).hide(300);
    $(document.querySelector(".mainmenuButton")).hide(300);

    //take current pokemon out of battle
    Team[PKMN].inBattle = false;
    //place swapped pokemon into battle
    Team[swapPoke].inBattle = true;

    //hide sprite
    Sprite.fadeOut(1000);
    if (this.props.playersTurn === "Player One") {
      setTimeout(
        () =>
          DisplayMessage(
            this.props.playerOneName + " withdrew " + Team[PKMN].name + "..."
          ),
        500
      );
    } else {
      setTimeout(
        () =>
          DisplayMessage(
            this.props.playerTwoName + " withdrew " + Team[PKMN].name + "..."
          ),
        500
      );
    }

    setTimeout(
      () => DisplayMessage("...and sent out " + Team[swapPoke].name + "!"),
      2500
    );
    let switchSound = new Audio(swapSound);
    switchSound.volume = this.props.volume;
    setTimeout(() => switchSound.play(), 1000);
    //update current pokemon to swapped pokemon
    setTimeout(() => this.props.handleSwapPokemon(swapPoke), 2500);

    //play new pokemon's cry
    let cry = new Audio(Team[swapPoke].cry);
    cry.volume = this.props.volume;
    setTimeout(cry.play.bind(cry), 3200);

    //fade sprite back in
    setTimeout(() => Sprite.fadeIn(1000), 3000);

    // calculate percent difference between current poke and swap pole hp in percentage
    let asPercentage = Team[swapPoke].hp / Team[swapPoke].OrigHp;

    //if swapped pokemon has full hp, make bar full
    if (Team[swapPoke].hp >= Team[swapPoke].OrigHp) {
      setTimeout(() => HPbar.css("width", "100%"), 2500);
      setTimeout(() => HPbar.removeClass("halfhp"), 2500);
      setTimeout(() => HPbar.removeClass("onefifthhp"), 2500);
      setTimeout(() => HPbar.addClass("fullhp"), 2500);
    } else {
      let updatedBarHP = 560 * asPercentage;

      //update health bar to reflect damage
      setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 2500);
    }
    setTimeout(
      () => $(document.querySelector(".mainmenuButton")).show(500),
      4000
    );
    setTimeout(() => $(document.querySelector(".options")).show(500), 4000);
    setTimeout(() => $(document.querySelector(".fightButton")).show(500), 4000);
    setTimeout(() => $(document.querySelector(".pkmnButton")).show(500), 4000);
    setTimeout(() => $(document.querySelector(".itemsButton")).show(500), 4000);
    //hide team list
    this.props.handleTeam("swap");
    if (this.props.faintedByRecoilPoisonBurn === true) {
      setTimeout(() => this.props.switchTurns(), 4000);
    }
  };

  render() {
    let team;
    if (this.props.playersTurn === "Player One") {
      team = this.props.player1Team;
    } else {
      team = this.props.player2Team;
    }
    if (this.state.displayTeam) {
      return (
        <div className="playerTeam">
          {team.map((pkmn, i) => {
            if (!pkmn.inBattle && !pkmn.fainted) {
              return (
                <div
                  className="playerTeamSprite"
                  key={i}
                  onClick={() => this.swapPokemon(i)}
                >
                  <p className="smallText">{pkmn.name}</p>
                  <img src={pkmn.frontSprite} alt={pkmn.name} key={pkmn.name} />
                  <p className="smallText">
                    HP:{Math.round(pkmn.hp)}/{pkmn.OrigHp}
                  </p>
                </div>
              );
            }
            return false;
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Team;

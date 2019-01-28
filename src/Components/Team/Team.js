import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";
import $ from "jquery";

class Teams extends Component {
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

  //SWAP POKEMON FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  swapPokemon = swapPoke => {
    console.log("swapping pokemon...");
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
    this.props.resetMultipliers();

    console.log(
      this.props.playersTurn + " sent out " + Team[swapPoke].name + "!"
    );
    //hide options buttons while swapping
    $(document.querySelector(".options")).hide(300);

    //take current pokemon out of battle
    Team[PKMN].inBattle = false;
    //place swapped pokemon into battle
    Team[swapPoke].inBattle = true;

    //hide sprite
    Sprite.fadeOut(1000);

    //fade sprite back in
    setTimeout(() => Sprite.fadeIn(1000), 3000);
    //clear text from message
    setTimeout(() => $(document.querySelector(".message")).text(""), 300);

    setTimeout(() => $(document.querySelector(".message")).fadeIn(300), 300);
    setTimeout(
      () =>
        $(document.querySelector(".message")).text(
          this.props.playersTurn + " withdrew " + Team[PKMN].name
        ),
      600
    );
    setTimeout(() => $(document.querySelector(".message")).fadeOut(300), 1500);

    setTimeout(() => $(document.querySelector(".message")).fadeIn(300), 2000);
    setTimeout(
      () =>
        $(document.querySelector(".message")).text(
          "and sent out " + Team[swapPoke].name
        ),
      2000
    );
    //clear text after swap
    setTimeout(() => $(document.querySelector(".message")).text(""), 3500);

    //update current pokemon to swapped pokemon
    setTimeout(() => this.props.handleSwapPokemon(swapPoke), 2000);

    // calculate percent difference between current poke and swap pole hp in percentage
    let asPercentage = Team[swapPoke].hp / Team[swapPoke].OrigHp;

    //if swapped pokemon has full hp, make bar full
    if (Team[swapPoke].hp >= Team[swapPoke].OrigHp) {
      setTimeout(() => HPbar.css("width", "100%"), 2000);
      setTimeout(() => HPbar.removeClass("halfhp"), 2000);
      setTimeout(() => HPbar.removeClass("onefifthhp"), 2000);
      setTimeout(() => HPbar.addClass("fullhp"), 2000);
    } else {
      let updatedBarHP = 560 * asPercentage;
      console.log(updatedBarHP, HPbar.css("width"));

      //update health bar to reflect damage
      setTimeout(
        () => this.props.updateHP(HPbar, updatedBarHP, swapPoke.name, 0),
        2000
      );
    }

    setTimeout(() => $(document.querySelector(".message")).fadeOut(500), 3000);

    setTimeout(() => $(document.querySelector(".options")).show(500), 4000);
    setTimeout(() => $(document.querySelector(".fightButton")).show(500), 4000);
    setTimeout(() => $(document.querySelector(".pkmnButton")).show(500), 4000);
    setTimeout(() => $(document.querySelector(".itemsButton")).show(500), 4000);
    //hide team list
    this.props.handleTeam("swap");
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
                <img
                  className="playerTeamSprite"
                  src={pkmn.frontSprite}
                  alt={pkmn.name}
                  onClick={() => this.swapPokemon(i)}
                  key={i}
                />
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

export default Teams;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Moves.css";
import { MatchIconWithType } from "../MatchTypeIcon";
import { UseMove } from "./UseMove";
import $ from "jquery";

class Moves extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMoves: false
    };
  }

  componentDidMount() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      displayMoves: props.displayMoves
    });
  }

  componentDidUpdate() {
    if (this.state.displayMoves) {
      $(document.querySelector(".playerMoves").lastChild).focus();
    }
  }

  //USE MOVE FUNCTION ////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    let pokemon;
    if (this.props.playersTurn === "Player One") {
      pokemon = this.props.player1Team[this.props.player1CurrentPokemon];
    } else {
      pokemon = this.props.player2Team[this.props.player2CurrentPokemon];
    }
    if (this.state.displayMoves) {
      return (
        <div className="playerMoves">
          {/* <p className="pokemonName">{pokemon.name}'s Moves:</p> */}
          {pokemon.moves.map((move, i) => {
            return (
              <button
                key={i}
                type="button"
                className="btn btn-outline-dark pokemonMove"
                onClick={() =>
                  UseMove(
                    i,
                    move.name,
                    move.category,
                    move.type,
                    move.power,
                    move.pp,
                    move.accuracy,
                    move.statusEff,
                    move.statusProb,
                    move.sound,
                    pokemon.lv,
                    this.props.player1CurrentPokemon,
                    this.props.player2CurrentPokemon,
                    this.props.playersTurn,
                    this.props.handleMoves,
                    this.props.handlePoisonBurn,
                    this.props.dealPoisonBurn,
                    this.props.switchTurns,
                    this.props.handleForceUpdate,
                    this.props.player1Team,
                    this.props.player2Team,
                    this.props.playerOneName,
                    this.props.playerTwoName,
                    this.props.resetMultipliers,
                    this.props.handleTeam,
                    this.props.handleFainted,
                    this.props.mode,
                    this.props.isPoisonBurned,
                    this.props.checkForStatusEffect,
                    this.props.volume,
                    this.props.checkWin
                  )
                }
              >
                {move.name.toUpperCase()} / PP:{move.pp}{" "}
                {MatchIconWithType(move.type)}
              </button>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Moves;

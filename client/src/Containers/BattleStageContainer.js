import { connect } from "react-redux";
import BattleStage from "../Components/BattleStage/BattleStage";
import {
  setVolume,
  setPlayersTurn,
  setBattleStarted,
  setPlayer1CurrentPokemon,
  setPlayer2CurrentPokemon
} from "../actions";

function mapStateToProps(state) {
  return {
    player1Team: state.player1Team,
    player2Team: state.player2Team,
    playerOneName: state.playerOneName,
    playerTwoName: state.playerTwoName,
    player1CurrentPokemon: state.player1CurrentPokemon,
    player2CurrentPokemon: state.player2CurrentPokemon,
    battleReady: state.battleReady,
    battleStarted: state.battleStarted,
    teamSize: state.teamSize,
    mode: state.mode,
    volume: state.volume,
    playersTurn: state.playersTurn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVolume: vol => dispatch(setVolume(vol)),
    setPlayersTurn: name => dispatch(setPlayersTurn(name)),
    setBattleStarted: isStarted => dispatch(setBattleStarted(isStarted)),
    setPlayer1CurrentPokemon: num => dispatch(setPlayer1CurrentPokemon(num)),
    setPlayer2CurrentPokemon: num => dispatch(setPlayer2CurrentPokemon(num))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleStage);

import { connect } from "react-redux";
import Moves from "../Components/Moves/Moves";

function mapStateToProps(state) {
  return {
    playersTurn: state.playersTurn,
    player1CurrentPokemon: state.player1CurrentPokemon,
    player2CurrentPokemon: state.player2CurrentPokemon,
    playerOneName: state.playerOneName,
    playerTwoName: state.playerTwoName,
    mode: state.mode,
    volume: state.volume
  };
}

export default connect(
  mapStateToProps,
  null
)(Moves);

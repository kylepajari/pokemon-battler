import { connect } from "react-redux";
import Team from "../Components/Team/Team";

function mapStateToProps(state) {
  return {
    playersTurn: state.playersTurn,
    player1CurrentPokemon: state.player1CurrentPokemon,
    player2CurrentPokemon: state.player2CurrentPokemon,
    playerOneName: state.playerOneName,
    playerTwoName: state.playerTwoName,
    volume: state.volume
  };
}

export default connect(
  mapStateToProps,
  null
)(Team);

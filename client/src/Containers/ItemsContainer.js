import { connect } from "react-redux";
import Items from "../Components/Items/Items";

function mapStateToProps(state) {
  return {
    playersTurn: state.playersTurn,
    player1CurrentPokemon: state.player1CurrentPokemon,
    player2CurrentPokemon: state.player2CurrentPokemon,
    volume: state.volume
  };
}

export default connect(
  mapStateToProps,
  null
)(Items);

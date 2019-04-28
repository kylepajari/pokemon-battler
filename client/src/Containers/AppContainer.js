import { connect } from "react-redux";
import App from "../App";
import {
  loadAllData,
  setLoggedIn,
  setPlayer1Team,
  setPlayer2Team,
  setPlayerOneName,
  setPlayerTwoName,
  setPlayer1CurrentPokemon,
  setPlayer2CurrentPokemon,
  setPlayersTurn,
  setBattleReady,
  setBattleStarted,
  setTeamSize,
  setMode,
  setBadges
} from "../actions";

function mapStateToProps(state) {
  return {
    allData: state.allData,
    loggedIn: state.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllData: () => dispatch(loadAllData()),
    setLoggedIn: log => dispatch(setLoggedIn(log)),
    setPlayer1Team: team => dispatch(setPlayer1Team(team)),
    setPlayer2Team: team => dispatch(setPlayer2Team(team)),
    setPlayerOneName: name => dispatch(setPlayerOneName(name)),
    setPlayerTwoName: name => dispatch(setPlayerTwoName(name)),
    setPlayer1CurrentPokemon: num => dispatch(setPlayer1CurrentPokemon(num)),
    setPlayer2CurrentPokemon: num => dispatch(setPlayer2CurrentPokemon(num)),
    setPlayersTurn: turn => dispatch(setPlayersTurn(turn)),
    setBattleReady: isReady => dispatch(setBattleReady(isReady)),
    setBattleStarted: isStarted => dispatch(setBattleStarted(isStarted)),
    setTeamSize: num => dispatch(setTeamSize(num)),
    setMode: mode => dispatch(setMode(mode)),
    setBadges: num => dispatch(setBadges(num))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

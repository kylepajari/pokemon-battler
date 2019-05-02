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
  setBadges,
  setId,
  setUser
} from "../actions";

function mapStateToProps(state) {
  return {
    allData: state.allData,
    loggedIn: state.loggedIn,
    username: state.username,
    id: state.id,
    player1Team: state.player1Team,
    player2Team: state.player2Team,
    battleVol: state.battleVol,
    battlePlaying: state.battlePlaying
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllData: () => dispatch(loadAllData()),
    setLoggedIn: log => dispatch(setLoggedIn(log)),
    setId: id => dispatch(setId(id)),
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
    setBadges: num => dispatch(setBadges(num)),
    setUser: payload => dispatch(setUser(payload))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

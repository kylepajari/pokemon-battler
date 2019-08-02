import { connect } from "react-redux";
import TeamBuilder from "../Components/TeamBuilder/TeamBuilder";
import {
  loadAllData,
  setPlayer1Team,
  setPlayer2Team,
  setPlayerOneName,
  setPlayerTwoName,
  setPlayer1CurrentPokemon,
  setPlayer2CurrentPokemon,
  setPlayersTurn,
  setCurrentPlayer,
  setBattleReady,
  setBattleStarted,
  setTeamSize,
  setMode,
  updateTeam,
  updateLeaderTeam,
  getTeam
} from "../actions";

function mapStateToProps(state) {
  return {
    user: state.user,
    player1Team: state.player1Team,
    player2Team: state.player2Team,
    playerOneName: state.playerOneName,
    playerTwoName: state.playerTwoName,
    playersTurn: state.playersTurn,
    currentPlayer: state.currentPlayer,
    allData: state.allData,
    battleReady: state.battleReady,
    teamSize: state.teamSize,
    username: state.username,
    mode: state.mode,
    badges: state.badges,
    id: state.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadAllData: () => dispatch(loadAllData()),
    setPlayer1Team: team => dispatch(setPlayer1Team(team)),
    setPlayer2Team: team => dispatch(setPlayer2Team(team)),
    setPlayerOneName: name => dispatch(setPlayerOneName(name)),
    setPlayerTwoName: name => dispatch(setPlayerTwoName(name)),
    setPlayer1CurrentPokemon: num => dispatch(setPlayer1CurrentPokemon(num)),
    setPlayer2CurrentPokemon: num => dispatch(setPlayer2CurrentPokemon(num)),
    setPlayersTurn: turn => dispatch(setPlayersTurn(turn)),
    setCurrentPlayer: player => dispatch(setCurrentPlayer(player)),
    setBattleReady: isReady => dispatch(setBattleReady(isReady)),
    setBattleStarted: isStarted => dispatch(setBattleStarted(isStarted)),
    setTeamSize: num => dispatch(setTeamSize(num)),
    setMode: mode => dispatch(setMode(mode)),
    updateTeam: (id, team) => dispatch(updateTeam(id, team)),
    updateLeaderTeam: (name, team) => dispatch(updateLeaderTeam(name, team)),
    getTeam: id => dispatch(getTeam(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamBuilder);

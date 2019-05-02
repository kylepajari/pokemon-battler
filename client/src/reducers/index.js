import { combineReducers } from "redux";
import Sound from "react-sound";

function allData(state = null, action) {
  if (action.type === "SET_ALL_DATA") {
    return action.value;
  }
  return state;
}

function username(state = "", action) {
  if (action.type === "SET_USERNAME") {
    return action.value;
  }
  return state;
}

function password(state = "", action) {
  if (action.type === "SET_PASSWORD") {
    return action.value;
  }
  return state;
}

function id(state = "", action) {
  if (action.type === "SET_ID") {
    return action.value;
  }
  return state;
}

function loggedIn(state = false, action) {
  if (action.type === "SET_LOGGED_IN") {
    return action.value;
  }
  return state;
}

function volume(state = 0, action) {
  if (action.type === "SET_VOLUME") {
    return action.value;
  }
  return state;
}

function playersTurn(state = "", action) {
  if (action.type === "SET_PLAYERS_TURN") {
    return action.value;
  }
  return state;
}

function player1Team(state = [], action) {
  if (action.type === "SET_PLAYER_1_TEAM") {
    return action.value;
  }
  return state;
}

function player2Team(state = [], action) {
  if (action.type === "SET_PLAYER_2_TEAM") {
    return action.value;
  }
  return state;
}

function displayItems(state = false, action) {
  if (action.type === "SET_DISPLAY_ITEMS") {
    return action.value;
  }
  return state;
}

function displayMoves(state = false, action) {
  if (action.type === "SET_DISPLAY_MOVES") {
    return action.value;
  }
  return state;
}

function displayTeam(state = false, action) {
  if (action.type === "SET_DISPLAY_TEAM") {
    return action.value;
  }
  return state;
}

function isPoisonBurned(state = false, action) {
  if (action.type === "SET_IS_POISON_BURNED") {
    return action.value;
  }
  return state;
}

function faintedByRecoilPoisonBurn(state = false, action) {
  if (action.type === "SET_FAINTED_BY_RECOIL_POISON_BURN") {
    return action.value;
  }
  return state;
}

function player1CurrentPokemon(state = 0, action) {
  if (action.type === "SET_PLAYER_1_CURRENT_POKEMON") {
    return action.value;
  }
  return state;
}

function player2CurrentPokemon(state = 0, action) {
  if (action.type === "SET_PLAYER_2_CURRENT_POKEMON") {
    return action.value;
  }
  return state;
}

function recoilDamage(state = 0, action) {
  if (action.type === "SET_RECOIL_DAMAGE") {
    return action.value;
  }
  return state;
}

function currentPlayer(state = "Player One", action) {
  if (action.type === "SET_CURRENT_PLAYER") {
    return action.value;
  }
  return state;
}

function playerOneName(state = "Player One", action) {
  if (action.type === "SET_PLAYER_ONE_NAME") {
    return action.value;
  }
  return state;
}

function playerTwoName(state = "Player Two", action) {
  if (action.type === "SET_PLAYER_TWO_NAME") {
    return action.value;
  }
  return state;
}

function mode(state = "", action) {
  if (action.type === "SET_MODE") {
    return action.value;
  }
  return state;
}

function teamSize(state = 6, action) {
  if (action.type === "SET_TEAM_SIZE") {
    return action.value;
  }
  return state;
}

function battleReady(state = false, action) {
  if (action.type === "SET_BATTLE_READY") {
    return action.value;
  }
  return state;
}

function battleStarted(state = false, action) {
  if (action.type === "SET_BATTLE_STARTED") {
    return action.value;
  }
  return state;
}

function battleVol(state = 0, action) {
  if (action.type === "SET_BATTLE_VOLUME") {
    return action.value;
  }
  return state;
}

function battlePlaying(state = Sound.status.STOPPED, action) {
  if (action.type === "SET_BATTLE_PLAYING") {
    return action.value;
  }
  return state;
}

function badges(state = 0, action) {
  if (action.type === "SET_BADGES") {
    return action.value;
  }
  return state;
}

function aiItems(state = [{ name: "Max Potion", count: 1 }], action) {
  if (action.type === "SET_AI_ITEMS") {
    return action.value;
  }
  return state;
}

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
    case "SET_USER":
      return action.value;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  allData,
  username,
  password,
  id,
  loggedIn,
  volume,
  playersTurn,
  player1Team,
  player2Team,
  displayItems,
  displayMoves,
  displayTeam,
  isPoisonBurned,
  faintedByRecoilPoisonBurn,
  player1CurrentPokemon,
  player2CurrentPokemon,
  recoilDamage,
  currentPlayer,
  playerOneName,
  playerTwoName,
  mode,
  teamSize,
  battleReady,
  battleStarted,
  battleVol,
  battlePlaying,
  badges,
  user,
  aiItems
});

import axios from "axios";
import jwt from "jsonwebtoken";

export const setAllData = data => {
  return {
    type: "SET_ALL_DATA",
    value: data
  };
};

export const loadAllData = () => dispatch => {
  return {
    type: "LOAD_ALL_DATA",
    value: axios
      .get(
        "https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/?offset=0&limit=151"
      )
      .then(res => dispatch(setAllData(res.data.results)))
      .catch(error => console.log("loadAllData error: ", error))
  };
};

export const setUserName = name => {
  return {
    type: "SET_USERNAME",
    value: name
  };
};

export const setPassword = pass => {
  return {
    type: "SET_PASSWORD",
    value: pass
  };
};

export const setLoggedIn = isLoggedIn => {
  return {
    type: "SET_LOGGED_IN",
    value: isLoggedIn
  };
};

export const setPlayer1Team = team => {
  return {
    type: "SET_PLAYER_1_TEAM",
    value: team
  };
};

export const setPlayer2Team = team => {
  return {
    type: "SET_PLAYER_2_TEAM",
    value: team
  };
};

export const setPlayerOneName = name => {
  return {
    type: "SET_PLAYER_ONE_NAME",
    value: name
  };
};

export const setPlayerTwoName = name => {
  return {
    type: "SET_PLAYER_TWO_NAME",
    value: name
  };
};

export const setPlayer1CurrentPokemon = num => {
  return {
    type: "SET_PLAYER_1_CURRENT_POKEMON",
    value: num
  };
};

export const setPlayer2CurrentPokemon = num => {
  return {
    type: "SET_PLAYER_2_CURRENT_POKEMON",
    value: num
  };
};

export const setPlayersTurn = name => {
  return {
    type: "SET_PLAYERS_TURN",
    value: name
  };
};

export const setCurrentPlayer = player => {
  return {
    type: "SET_CURRENT_PLAYER",
    value: player
  };
};

export const setBattleReady = isReady => {
  return {
    type: "SET_BATTLE_READY",
    value: isReady
  };
};

export const setBattleStarted = isStarted => {
  return {
    type: "SET_BATTLE_STARTED",
    value: isStarted
  };
};

export const setTeamSize = num => {
  return {
    type: "SET_TEAM_SIZE",
    value: num
  };
};

export const setMode = mode => {
  return {
    type: "SET_MODE",
    value: mode
  };
};

export const setVolume = vol => {
  return {
    type: "SET_VOLUME",
    value: vol
  };
};

export const setBadges = num => {
  return {
    type: "SET_BADGES",
    value: num
  };
};

export const setId = id => {
  return {
    type: "SET_ID",
    value: id
  };
};

export const login = ({ username, password }) => {
  return dispatch => {
    return axios({
      url: "/api/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ username, password })
    })
      .then(res => {
        console.log("actions login", res.data);
        //1 hr cookie expire
        document.cookie = `id_token=${res.data.token};max-age=1300;`;
        const payload = jwt.verify(res.data.token, "secret");
        dispatch({
          type: "LOGIN",
          value: payload._doc
        });
        return res.data.user;
      })
      .catch(err => Promise.reject(err));
  };
};

export const signUp = ({ username, password }) => {
  return dispatch => {
    return axios({
      url: "/api/signup",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ username, password })
    }).catch(err => Promise.reject(err));
  };
};

export function updateBadges(id, badgesCount) {
  console.log("actions update badges", id, badgesCount);

  return dispatch => {
    return axios({
      url: "/api/updatebadges",
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ id, badgesCount })
    }).catch(err => Promise.reject(err));
  };
}

export function updateTeam(id, team) {
  console.log("actions update team", id, team);

  return dispatch => {
    return axios({
      url: "/api/updateteam",
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ id, team })
    }).catch(err => Promise.reject(err));
  };
}

export const getTeam = id => {
  return dispatch => {
    return axios
      .get("/api/getteam/" + id)
      .then(res => dispatch(setPlayer1Team(res.data.team)))
      .catch(err => Promise.reject(err));
  };
};

export const getAllUsers = () => {
  return dispatch => {
    return fetch("/api/users").then(res => res.json(res));
  };
};

export function setUser(user) {
  return {
    type: "SET_USER",
    value: user
  };
}

export function logout() {
  return {
    type: "LOGOUT"
  };
}

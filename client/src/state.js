export default {
  user: {},
  allData: null,
  username: "",
  password: "",
  badges: 0,
  id: "",
  loggedIn: false,
  volume: 0.3,
  playersTurn: "Player One",
  player1Team: [],
  player2Team: [],
  displayItems: false,
  displayMoves: false,
  displayTeam: false,
  isPoisonBurned: false,
  faintedByRecoilPoisonBurn: false,
  player1CurrentPokemon: 0,
  player2CurrentPokemon: 0,
  recoilDamage: 0,
  currentPlayer: "Player One", //player who starts the game
  playerOneName: "Player One",
  playerTwoName: "Player Two",
  mode: "", //mode of play
  teamSize: 6, //max number of pokemon per team, adjust to allow more/less
  battleReady: false, //set when teams are picked
  battleStarted: false, //set when battle starts
  aiItems: [{ name: "Max Potion", count: 1 }]
};

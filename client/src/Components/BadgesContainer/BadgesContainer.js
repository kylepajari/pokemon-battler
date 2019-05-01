import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "./BadgesContainer.css";
import Boulder_Badge from "./Badges/Boulder_Badge.png";
import Cascade_Badge from "./Badges/Cascade_Badge.png";
import Thunder_Badge from "./Badges/Thunder_Badge.png";
import Rainbow_Badge from "./Badges/Rainbow_Badge.png";
import Marsh_Badge from "./Badges/Marsh_Badge.png";
import Soul_Badge from "./Badges/Soul_Badge.png";
import Volcano_Badge from "./Badges/Volcano_Badge.png";
import Earth_Badge from "./Badges/Earth_Badge.png";
import { RandomNumberGenerator } from "../RandomNumberGenerator";
import { connect } from "react-redux";
import {
  getLeaderTeam,
  createLeader,
  updateLeaderTeam,
  setPlayer2Team,
  setPlayerTwoName
} from "../../actions";

class BadgesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.loadBadgeProgress();
  }

  componentDidUpdate() {
    this.loadBadgeProgress();
  }

  loadBadgeProgress = () => {
    const badges = this.props.badges;
    switch (badges) {
      case 0:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", true);
        $(document.getElementById("thunderbadge")).prop("disabled", true);
        $(document.getElementById("rainbowbadge")).prop("disabled", true);
        $(document.getElementById("soulbadge")).prop("disabled", true);
        $(document.getElementById("marshbadge")).prop("disabled", true);
        $(document.getElementById("volcanobadge")).prop("disabled", true);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 1:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", true);
        $(document.getElementById("rainbowbadge")).prop("disabled", true);
        $(document.getElementById("soulbadge")).prop("disabled", true);
        $(document.getElementById("marshbadge")).prop("disabled", true);
        $(document.getElementById("volcanobadge")).prop("disabled", true);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 2:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", true);
        $(document.getElementById("soulbadge")).prop("disabled", true);
        $(document.getElementById("marshbadge")).prop("disabled", true);
        $(document.getElementById("volcanobadge")).prop("disabled", true);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 3:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", true);
        $(document.getElementById("marshbadge")).prop("disabled", true);
        $(document.getElementById("volcanobadge")).prop("disabled", true);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 4:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", true);
        $(document.getElementById("volcanobadge")).prop("disabled", true);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 5:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", true);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 6:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", true);
        break;
      case 7:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        break;
      default:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        break;
    }
  };

  aiTeamBuilder = badge => {
    let rand = 0;
    switch (badge) {
      //fetch params:
      //1st: pokemon num, 2nd: pokemon level, 3rd: assigned team
      case "Boulder Badge": //Brock
        //check if leader team exists in db
        this.props.getLeaderTeam("Brock").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Brock").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(74, 40, "team2", "Brock"); //Geodude
              this.props.fetchPokemon(28, 43, "team2", "Brock"); //Sandslash
              this.props.fetchPokemon(75, 45, "team2", "Brock"); //Graveler
              this.props.fetchPokemon(105, 47, "team2", "Brock"); //Marowak
              this.props.fetchPokemon(106, 44, "team2", "Brock"); //Hitmonlee
              this.props.fetchPokemon(95, 48, "team2", "Brock"); //Onix
            });
          }
        });
        this.props.setPlayerTwoName("Brock");
        break;
      case "Cascade Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Misty").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Misty").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(61, 43, "team2", "Misty"); //Polywhirl
              this.props.fetchPokemon(119, 45, "team2", "Misty"); //Seaking
              this.props.fetchPokemon(73, 48, "team2", "Misty"); //Tentacruel
              this.props.fetchPokemon(117, 45, "team2", "Misty"); //Seadra
              this.props.fetchPokemon(87, 48, "team2", "Misty"); //Dewgong
              this.props.fetchPokemon(121, 50, "team2", "Misty"); //Starmie
            });
          }
        });
        this.props.setPlayerTwoName("Misty");
        break;
      case "Thunder Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Lt. Surge").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Lt. Surge").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(25, 44, "team2", "Lt. Surge"); //Pikachu
              this.props.fetchPokemon(101, 47, "team2", "Lt. Surge"); //Electrode
              this.props.fetchPokemon(125, 50, "team2", "Lt. Surge"); //Electabuzz
              this.props.fetchPokemon(100, 48, "team2", "Lt. Surge"); //Voltorb
              this.props.fetchPokemon(82, 46, "team2", "Lt. Surge"); //Magneton
              this.props.fetchPokemon(26, 52, "team2", "Lt. Surge"); //Raichu
            });
          }
        });
        this.props.setPlayerTwoName("Lt. Surge");
        break;
      case "Rainbow Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Erika").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Erika").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(2, 45, "team2", "Erika"); //Ivysaur
              this.props.fetchPokemon(44, 45, "team2", "Erika"); //Gloom
              this.props.fetchPokemon(70, 48, "team2", "Erika"); //Weepinbell
              this.props.fetchPokemon(102, 49, "team2", "Erika"); //Exeggcute
              this.props.fetchPokemon(45, 52, "team2", "Erika"); //Vileplume
              this.props.fetchPokemon(71, 53, "team2", "Erika"); //Victreebel
            });
          }
        });
        this.props.setPlayerTwoName("Erika");
        break;
      case "Soul Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Koga").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Koga").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(109, 44, "team2", "Koga"); //Koffing
              this.props.fetchPokemon(24, 47, "team2", "Koga"); //Arbok
              this.props.fetchPokemon(110, 50, "team2", "Koga"); //Weezing
              this.props.fetchPokemon(89, 47, "team2", "Koga"); //Muk
              this.props.fetchPokemon(93, 52, "team2", "Koga"); //Haunter
              this.props.fetchPokemon(49, 54, "team2", "Koga"); //Venomoth
            });
          }
        });
        this.props.setPlayerTwoName("Koga");
        break;
      case "Marsh Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Sabrina").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Sabrina").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(122, 47, "team2", "Sabrina"); //Mr Mime
              this.props.fetchPokemon(64, 49, "team2", "Sabrina"); //Kadabra
              this.props.fetchPokemon(97, 50, "team2", "Sabrina"); //Hypno
              this.props.fetchPokemon(64, 46, "team2", "Sabrina"); //Kadabra
              this.props.fetchPokemon(124, 52, "team2", "Sabrina"); //Jynx
              this.props.fetchPokemon(65, 55, "team2", "Sabrina"); //Alakazam
            });
          }
        });
        this.props.setPlayerTwoName("Sabrina");
        break;
      case "Volcano Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Blaine").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Blaine").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(77, 48, "team2", "Blaine"); //Ponyta
              this.props.fetchPokemon(126, 52, "team2", "Blaine"); //Magmar
              this.props.fetchPokemon(78, 54, "team2", "Blaine"); //Rapidash
              this.props.fetchPokemon(38, 49, "team2", "Blaine"); //Ninetails
              this.props.fetchPokemon(6, 55, "team2", "Blaine"); //Charizard
              this.props.fetchPokemon(59, 58, "team2", "Blaine"); //Arcanine
            });
          }
        });
        this.props.setPlayerTwoName("Blaine");
        break;
      case "Earth Badge":
        //check if leader team exists in db
        this.props.getLeaderTeam("Giovanni").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.user.team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Giovanni").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(18, 50, "team2", "Giovanni"); //Pigeot
              this.props.fetchPokemon(110, 52, "team2", "Giovanni"); //Weezing
              this.props.fetchPokemon(112, 54, "team2", "Giovanni"); //Rhydon
              this.props.fetchPokemon(53, 57, "team2", "Giovanni"); //Persian
              this.props.fetchPokemon(115, 54, "team2", "Giovanni"); //Kangaskhan
              this.props.fetchPokemon(34, 60, "team2", "Giovanni"); //Nidoking
            });
          }
        });
        this.props.setPlayerTwoName("Giovanni");
        break;
      case "Rival50":
        rand = Math.round(RandomNumberGenerator(1, 151));
        this.props.fetchPokemon(rand, 50, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        this.props.fetchPokemon(rand, 50, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        this.props.fetchPokemon(rand, 50, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        this.props.fetchPokemon(rand, 50, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        this.props.fetchPokemon(rand, 50, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        this.props.fetchPokemon(rand, 50, "team2");
        this.props.setPlayerTwoName("Rival");
        break;
      default:
    }
    $(document.querySelector(".badgesContainer")).fadeOut(10);
    $(document.querySelector(".pokemonSheetContainer")).removeClass("deRender");
    $(document.querySelector(".teamsContainer")).fadeIn(300);
  };

  render() {
    return (
      <div className="badgesContainer">
        <button
          id="boulderbadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Boulder Badge")}
        >
          <img src={Boulder_Badge} alt="Boulder Badge" />
          Boulder Badge - Brock
        </button>
        <button
          id="cascadebadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Cascade Badge")}
        >
          <img src={Cascade_Badge} alt="Cascade Badge" />
          Cascade Badge - Misty
        </button>
        <button
          id="thunderbadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Thunder Badge")}
        >
          <img src={Thunder_Badge} alt="Thunder Badge" />
          Thunder Badge - Lt. Surge
        </button>
        <button
          id="rainbowbadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Rainbow Badge")}
        >
          <img src={Rainbow_Badge} alt="Rainbow Badge" />
          Rainbow Badge - Erika
        </button>
        <button
          id="soulbadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Soul Badge")}
        >
          <img src={Soul_Badge} alt="Soul Badge" />
          Soul Badge - Koga
        </button>
        <button
          id="marshbadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Marsh Badge")}
        >
          <img src={Marsh_Badge} alt="Marsh Badge" />
          Marsh Badge - Sabrina
        </button>
        <button
          id="volcanobadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Volcano Badge")}
        >
          <img src={Volcano_Badge} alt="Volcano Badge" />
          Volcano Badge - Blaine
        </button>
        <button
          id="earthbadge"
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Earth Badge")}
        >
          <img src={Earth_Badge} alt="Earth Badge" />
          Earth Badge - Giovanni
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Rival50")}
        >
          Random Trainer - Lv 50
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    badges: state.badges,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLeaderTeam: name => dispatch(getLeaderTeam(name)),
    createLeader: name => dispatch(createLeader(name)),
    updateLeaderTeam: (name, team) => dispatch(updateLeaderTeam(name, team)),
    setPlayer2Team: team => dispatch(setPlayer2Team(team)),
    setPlayerTwoName: name => dispatch(setPlayerTwoName(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BadgesContainer);

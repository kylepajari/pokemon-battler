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
import Champion_Badge from "./Badges/Champion_Badge.png";
import Elite_Four from "./Badges/Elite_Four.png";
import { connect } from "react-redux";
import {
  getLeaderTeam,
  createLeader,
  updateLeaderTeam,
  setPlayer2Team,
  setPlayerTwoName
} from "../../actions";
import { RandomNumberGenerator } from "../RandomNumberGenerator";

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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
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
        $(document.getElementById("lorelei")).prop("disabled", true);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
        break;
      case 8:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        $(document.getElementById("lorelei")).prop("disabled", false);
        $(document.getElementById("bruno")).prop("disabled", true);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
        break;
      case 9:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        $(document.getElementById("lorelei")).prop("disabled", false);
        $(document.getElementById("bruno")).prop("disabled", false);
        $(document.getElementById("agatha")).prop("disabled", true);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
        break;
      case 10:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        $(document.getElementById("lorelei")).prop("disabled", false);
        $(document.getElementById("bruno")).prop("disabled", false);
        $(document.getElementById("agatha")).prop("disabled", false);
        $(document.getElementById("lance")).prop("disabled", true);
        $(document.getElementById("rival")).prop("disabled", true);
        break;
      case 11:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        $(document.getElementById("lorelei")).prop("disabled", false);
        $(document.getElementById("bruno")).prop("disabled", false);
        $(document.getElementById("agatha")).prop("disabled", false);
        $(document.getElementById("lance")).prop("disabled", false);
        $(document.getElementById("rival")).prop("disabled", true);
        break;
      case 12:
        $(document.getElementById("boulderbadge")).prop("disabled", false);
        $(document.getElementById("cascadebadge")).prop("disabled", false);
        $(document.getElementById("thunderbadge")).prop("disabled", false);
        $(document.getElementById("rainbowbadge")).prop("disabled", false);
        $(document.getElementById("soulbadge")).prop("disabled", false);
        $(document.getElementById("marshbadge")).prop("disabled", false);
        $(document.getElementById("volcanobadge")).prop("disabled", false);
        $(document.getElementById("earthbadge")).prop("disabled", false);
        $(document.getElementById("lorelei")).prop("disabled", false);
        $(document.getElementById("bruno")).prop("disabled", false);
        $(document.getElementById("agatha")).prop("disabled", false);
        $(document.getElementById("lance")).prop("disabled", false);
        $(document.getElementById("rival")).prop("disabled", false);
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
        $(document.getElementById("lorelei")).prop("disabled", false);
        $(document.getElementById("bruno")).prop("disabled", false);
        $(document.getElementById("agatha")).prop("disabled", false);
        $(document.getElementById("lance")).prop("disabled", false);
        $(document.getElementById("rival")).prop("disabled", false);
        break;
    }
  };

  aiTeamBuilder = badge => {
    switch (badge) {
      //fetch params:
      //1st: pokemon num, 2nd: pokemon level, 3rd: assigned team
      case "Boulder Badge": //Brock
        //check if leader team exists in db
        this.props.getLeaderTeam("Brock").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(75, 53, "team2", "Brock"); //Graveler
              this.props.fetchPokemon(28, 50, "team2", "Brock"); //Sandslash
              this.props.fetchPokemon(139, 55, "team2", "Brock"); //Omastar
              this.props.fetchPokemon(111, 53, "team2", "Brock"); //Ryhorn
              this.props.fetchPokemon(141, 54, "team2", "Brock"); //Kabutops
              this.props.fetchPokemon(95, 56, "team2", "Brock"); //Onix
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(61, 48, "team2", "Misty"); //Polywhirl
              this.props.fetchPokemon(55, 54, "team2", "Misty"); //Golduck
              this.props.fetchPokemon(73, 55, "team2", "Misty"); //Tentacruel
              this.props.fetchPokemon(117, 52, "team2", "Misty"); //Seadra
              this.props.fetchPokemon(131, 54, "team2", "Misty"); //Lapras
              this.props.fetchPokemon(121, 56, "team2", "Misty"); //Starmie
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(25, 47, "team2", "Lt. Surge"); //Pikachu
              this.props.fetchPokemon(101, 51, "team2", "Lt. Surge"); //Electrode
              this.props.fetchPokemon(125, 55, "team2", "Lt. Surge"); //Electabuzz
              this.props.fetchPokemon(101, 51, "team2", "Lt. Surge"); //Electrode
              this.props.fetchPokemon(82, 54, "team2", "Lt. Surge"); //Magneton
              this.props.fetchPokemon(26, 56, "team2", "Lt. Surge"); //Raichu
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(3, 51, "team2", "Erika"); //Venusaur
              this.props.fetchPokemon(103, 52, "team2", "Erika"); //Exeggutor
              this.props.fetchPokemon(70, 52, "team2", "Erika"); //Weepinbell
              this.props.fetchPokemon(114, 52, "team2", "Erika"); //Tangela
              this.props.fetchPokemon(45, 56, "team2", "Erika"); //Vileplume
              this.props.fetchPokemon(71, 58, "team2", "Erika"); //Victreebel
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(109, 50, "team2", "Koga"); //Koffing
              this.props.fetchPokemon(24, 52, "team2", "Koga"); //Arbok
              this.props.fetchPokemon(110, 52, "team2", "Koga"); //Weezing
              this.props.fetchPokemon(89, 54, "team2", "Koga"); //Muk
              this.props.fetchPokemon(94, 55, "team2", "Koga"); //Gengar
              this.props.fetchPokemon(49, 56, "team2", "Koga"); //Venomoth
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(122, 55, "team2", "Sabrina"); //Mr Mime
              this.props.fetchPokemon(64, 52, "team2", "Sabrina"); //Kadabra
              this.props.fetchPokemon(97, 55, "team2", "Sabrina"); //Hypno
              this.props.fetchPokemon(64, 52, "team2", "Sabrina"); //Kadabra
              this.props.fetchPokemon(124, 56, "team2", "Sabrina"); //Jynx
              this.props.fetchPokemon(65, 58, "team2", "Sabrina"); //Alakazam
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(77, 52, "team2", "Blaine"); //Ponyta
              this.props.fetchPokemon(126, 55, "team2", "Blaine"); //Magmar
              this.props.fetchPokemon(78, 57, "team2", "Blaine"); //Rapidash
              this.props.fetchPokemon(38, 52, "team2", "Blaine"); //Ninetails
              this.props.fetchPokemon(6, 54, "team2", "Blaine"); //Charizard
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
            if (this.props.player1Team.length !== 0) {
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
              this.props.fetchPokemon(51, 52, "team2", "Giovanni"); //Dugtrio
              this.props.fetchPokemon(110, 52, "team2", "Giovanni"); //Weezing
              this.props.fetchPokemon(112, 57, "team2", "Giovanni"); //Rhydon
              this.props.fetchPokemon(53, 54, "team2", "Giovanni"); //Persian
              this.props.fetchPokemon(31, 58, "team2", "Giovanni"); //Nidoqueen
              this.props.fetchPokemon(34, 60, "team2", "Giovanni"); //Nidoking
            });
          }
        });
        this.props.setPlayerTwoName("Giovanni");
        break;
      case "Lorelei":
        this.props.getLeaderTeam("Lorelei").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.player1Team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Lorelei").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(87, 54, "team2", "Lorelei"); //Dewgong
              this.props.fetchPokemon(91, 53, "team2", "Lorelei"); //Cloyster
              this.props.fetchPokemon(80, 54, "team2", "Lorelei"); //Slowbro
              this.props.fetchPokemon(124, 57, "team2", "Lorelei"); //Jynx
              this.props.fetchPokemon(62, 57, "team2", "Lorelei"); //Poliwrath
              this.props.fetchPokemon(131, 60, "team2", "Lorelei"); //Lapras
            });
          }
        });
        this.props.setPlayerTwoName("Lorelei");
        break;
      case "Bruno":
        this.props.getLeaderTeam("Bruno").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.player1Team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Bruno").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(95, 55, "team2", "Bruno"); //Onix
              this.props.fetchPokemon(107, 57, "team2", "Bruno"); //Hitmonchan
              this.props.fetchPokemon(95, 55, "team2", "Bruno"); //Onix
              this.props.fetchPokemon(106, 57, "team2", "Bruno"); //Hitmonlee
              this.props.fetchPokemon(76, 59, "team2", "Bruno"); //Golem
              this.props.fetchPokemon(68, 61, "team2", "Bruno"); //Machamp
            });
          }
        });
        this.props.setPlayerTwoName("Bruno");
        break;
      case "Agatha":
        this.props.getLeaderTeam("Agatha").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.player1Team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Agatha").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(93, 55, "team2", "Agatha"); //Haunter
              this.props.fetchPokemon(42, 56, "team2", "Agatha"); //Golbat
              this.props.fetchPokemon(94, 60, "team2", "Agatha"); //Gengar
              this.props.fetchPokemon(93, 55, "team2", "Agatha"); //Haunter
              this.props.fetchPokemon(24, 58, "team2", "Agatha"); //Arbok
              this.props.fetchPokemon(94, 60, "team2", "Agatha"); //Gengar
            });
          }
        });
        this.props.setPlayerTwoName("Agatha");
        break;
      case "Lance":
        this.props.getLeaderTeam("Lance").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.player1Team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Lance").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(130, 58, "team2", "Lance"); //Gyarados
              this.props.fetchPokemon(148, 56, "team2", "Lance"); //Dragonair
              this.props.fetchPokemon(148, 56, "team2", "Lance"); //Dragonair
              this.props.fetchPokemon(142, 60, "team2", "Lance"); //Aerodyactl
              this.props.fetchPokemon(149, 62, "team2", "Lance"); //Dragonite
              this.props.fetchPokemon(149, 62, "team2", "Lance"); //Dragonite
            });
          }
        });
        this.props.setPlayerTwoName("Lance");
        break;
      case "Champion":
        this.props.getLeaderTeam("Blue").then(res => {
          if (res.data !== "") {
            //assign to team 2
            this.props.setPlayer2Team(res.data.team);
            if (this.props.player1Team.length !== 0) {
              $(document.querySelectorAll(".dropdown")).fadeOut(100);
              $(document.querySelector(".pokemonSheetContainer")).addClass(
                "deRender"
              );
              $(document.getElementById("BattleButton")).fadeIn(300);
            }
          } else {
            //create new leader in DB
            this.props.createLeader("Blue").then(() => {
              //fetch pokemon to create team
              this.props.fetchPokemon(18, 61, "team2", "Blue"); //Pigeot
              this.props.fetchPokemon(65, 59, "team2", "Blue"); //Alakazam
              this.props.fetchPokemon(112, 61, "team2", "Blue"); //Rhydon
              this.props.fetchPokemon(103, 63, "team2", "Blue"); //Exeggutor
              this.props.fetchPokemon(59, 62, "team2", "Blue"); //Arcanine
              this.props.fetchPokemon(9, 65, "team2", "Blue"); //Blastoise
            });
          }
        });
        this.props.setPlayerTwoName("Blue");
        break;
      case "Random":
        //fetch pokemon to create team
        let rand = Math.round(RandomNumberGenerator(1, 251));
        this.props.fetchPokemon(rand, 50, "team2", "CPU");
        rand = Math.round(RandomNumberGenerator(1, 251));
        this.props.fetchPokemon(rand, 50, "team2", "CPU");
        rand = Math.round(RandomNumberGenerator(1, 251));
        this.props.fetchPokemon(rand, 50, "team2", "CPU");
        rand = Math.round(RandomNumberGenerator(1, 251));
        this.props.fetchPokemon(rand, 50, "team2", "CPU");
        rand = Math.round(RandomNumberGenerator(1, 251));
        this.props.fetchPokemon(rand, 50, "team2", "CPU");
        rand = Math.round(RandomNumberGenerator(1, 251));
        this.props.fetchPokemon(rand, 50, "team2", "CPU");

        this.props.setPlayerTwoName("CPU");
        break;
      default:
    }
    $(document.querySelectorAll(".badgesContainer")).fadeOut(10);
    $(document.querySelector(".badgeSelectionPage")).fadeOut(10);
    $(document.querySelector(".pokemonSheetContainer")).removeClass("deRender");
    $(document.querySelector(".teamsContainer")).fadeIn(300);
  };

  render() {
    if (this.props.badges < 8) {
      return (
        <div className="badgeSelectionPage">
          <div className="badgesContainer">
            <h5>Gym Leaders:</h5>
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
              id="random"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Random")}
            >
              Random Team Trainer
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="badgeSelectionPage">
          <div className="badgesContainer">
            <h5>Gym Leaders:</h5>
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
              id="random"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Random")}
            >
              Random Team Trainer
            </button>
          </div>

          <div className="badgesContainer eliteFour">
            <h5>Elite Four:</h5>
            <button
              id="lorelei"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Lorelei")}
            >
              <img src={Elite_Four} alt="Elite Four" />
              Elite Four - Lorelei
            </button>
            <button
              id="bruno"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Bruno")}
            >
              <img src={Elite_Four} alt="Elite Four" />
              Elite Four - Bruno
            </button>
            <button
              id="agatha"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Agatha")}
            >
              <img src={Elite_Four} alt="Elite Four" />
              Elite Four - Agatha
            </button>
            <button
              id="lance"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Lance")}
            >
              <img src={Elite_Four} alt="Elite Four" />
              Elite Four - Lance
            </button>
            <button
              id="rival"
              type="button"
              className="btn btn-light"
              onClick={() => this.aiTeamBuilder("Champion")}
            >
              <img src={Champion_Badge} alt="Champion Badge" />
              Champion Badge - Blue
            </button>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    badges: state.badges,
    user: state.user,
    player1Team: state.player1Team
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

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

class BadgesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
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
    console.log("creating ai team for " + badge);
    let rand = 0;

    switch (badge) {
      //fetch params:
      //1st: pokemon num, 2nd: pokemon level, 3rd: assigned team
      case "Boulder Badge": //Brock
        this.props.fetchPokemon(74, 40, "team2"); //Geodude
        this.props.fetchPokemon(28, 43, "team2"); //Sandslash
        this.props.fetchPokemon(75, 45, "team2"); //Graveler
        this.props.fetchPokemon(105, 47, "team2"); //Marowak
        this.props.fetchPokemon(106, 44, "team2"); //Hitmonlee
        this.props.fetchPokemon(95, 48, "team2"); //Onix
        this.props.handleLeaderNames(1);
        break;
      case "Cascade Badge":
        this.props.fetchPokemon(61, 43, "team2"); //Polywhirl
        this.props.fetchPokemon(119, 45, "team2"); //Seaking
        this.props.fetchPokemon(73, 48, "team2"); //Tentacruel
        this.props.fetchPokemon(117, 45, "team2"); //Seadra lv 44
        this.props.fetchPokemon(87, 48, "team2"); //Dewgong lv 54
        this.props.fetchPokemon(121, 50, "team2"); //Starmie lv 55
        this.props.handleLeaderNames(2);
        break;
      case "Thunder Badge":
        this.props.fetchPokemon(25, 44, "team2"); //Pikachu lv 45
        this.props.fetchPokemon(101, 47, "team2"); //Electrode lv 51
        this.props.fetchPokemon(125, 50, "team2"); //Electabuzz lv 50
        this.props.fetchPokemon(100, 48, "team2"); //Voltorb lv 47
        this.props.fetchPokemon(82, 46, "team2"); //Magneton lv 52
        this.props.fetchPokemon(26, 52, "team2"); //Raichu lv 57
        this.props.handleLeaderNames(3);
        break;
      case "Rainbow Badge":
        this.props.fetchPokemon(2, 45, "team2"); //Ivysaur lv 44
        this.props.fetchPokemon(44, 45, "team2"); //Gloom lv 46
        this.props.fetchPokemon(70, 48, "team2"); //Weepinbell lv 50
        this.props.fetchPokemon(102, 49, "team2"); //Exeggcute lv 49
        this.props.fetchPokemon(45, 52, "team2"); //Vileplume lv 54
        this.props.fetchPokemon(71, 53, "team2"); //Victreebel lv 59
        this.props.handleLeaderNames(4);
        break;
      case "Soul Badge":
        this.props.fetchPokemon(12, 44, "team2"); //Butterfree lv 47
        this.props.fetchPokemon(24, 47, "team2"); //Arbok lv 50
        this.props.fetchPokemon(42, 47, "team2"); //Golbat lv 52
        this.props.fetchPokemon(89, 50, "team2"); //Muk lv 50
        this.props.fetchPokemon(93, 52, "team2"); //Haunter lv 55
        this.props.fetchPokemon(49, 54, "team2"); //Venomoth lv 60
        this.props.handleLeaderNames(5);
        break;
      case "Marsh Badge":
        this.props.fetchPokemon(122, 47, "team2"); //Mr Mime lv 52
        this.props.fetchPokemon(64, 49, "team2"); //Kadabra lv 54
        this.props.fetchPokemon(97, 50, "team2"); //Hypno lv 55
        this.props.fetchPokemon(64, 46, "team2"); //Kadabra lv 54
        this.props.fetchPokemon(124, 52, "team2"); //Jynx lv 58
        this.props.fetchPokemon(65, 55, "team2"); //Alakazam lv 65
        this.props.handleLeaderNames(6);
        break;
      case "Volcano Badge":
        this.props.fetchPokemon(77, 48, "team2"); //Ponyta lv 54
        this.props.fetchPokemon(126, 52, "team2"); //Magmar lv 58
        this.props.fetchPokemon(78, 54, "team2"); //Rapidash lv 60
        this.props.fetchPokemon(38, 49, "team2"); //Ninetails lv 60
        this.props.fetchPokemon(6, 55, "team2"); //Charizard lv 62
        this.props.fetchPokemon(59, 58, "team2"); //Arcanine lv 64
        this.props.handleLeaderNames(7);
        break;
      case "Earth Badge":
        this.props.fetchPokemon(18, 50, "team2"); //Pigeot lv 58
        this.props.fetchPokemon(110, 52, "team2"); //Weezing lv 62
        this.props.fetchPokemon(112, 54, "team2"); //Rhydon lv 65
        this.props.fetchPokemon(53, 57, "team2"); //Persian lv 63
        this.props.fetchPokemon(115, 54, "team2"); //Kangaskhan lv 67
        this.props.fetchPokemon(34, 60, "team2"); //Nidoking lv 70
        this.props.handleLeaderNames(8);
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
        this.props.handleLeaderNames(9);
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
    badges: state.badges
  };
}

export default connect(
  mapStateToProps,
  null
)(BadgesContainer);

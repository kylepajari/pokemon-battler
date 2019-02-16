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

class BadgesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  aiTeamBuilder = badge => {
    console.log("creating ai team for " + badge);
    let rand = 0;
    let randLvl = 0;

    switch (badge) {
      case "Boulder Badge": //Brock
        this.props.fetchPokemon(74, 42, "team2"); //Geodude lv 42
        this.props.fetchPokemon(28, 48, "team2"); //Sandslash lv 48
        this.props.fetchPokemon(75, 50, "team2"); //Graveler lv 50
        this.props.fetchPokemon(105, 45, "team2"); //Marowak lv 45
        this.props.fetchPokemon(106, 50, "team2"); //Hitmonlee lv 50
        this.props.fetchPokemon(95, 52, "team2"); //Onix lv 52
        this.props.handleLeaderNames(1);
        break;
      case "Cascade Badge":
        this.props.fetchPokemon(61, 46, "team2"); //Polywhirl lv 46
        this.props.fetchPokemon(119, 48, "team2"); //Seaking lv 48
        this.props.fetchPokemon(73, 52, "team2"); //Tentacruel lv 52
        this.props.fetchPokemon(117, 44, "team2"); //Seadra lv 44
        this.props.fetchPokemon(87, 54, "team2"); //Dewgong lv 54
        this.props.fetchPokemon(121, 55, "team2"); //Starmie lv 55
        this.props.handleLeaderNames(2);
        break;
      case "Thunder Badge":
        this.props.fetchPokemon(25, 45, "team2"); //Pikachu lv 45
        this.props.fetchPokemon(101, 51, "team2"); //Electrode lv 51
        this.props.fetchPokemon(125, 50, "team2"); //Electabuzz lv 50
        this.props.fetchPokemon(100, 47, "team2"); //Voltorb lv 47
        this.props.fetchPokemon(82, 52, "team2"); //Magneton lv 52
        this.props.fetchPokemon(26, 57, "team2"); //Raichu lv 57
        this.props.handleLeaderNames(3);
        break;
      case "Rainbow Badge":
        this.props.fetchPokemon(2, 44, "team2"); //Ivysaur lv 44
        this.props.fetchPokemon(44, 46, "team2"); //Gloom lv 46
        this.props.fetchPokemon(70, 50, "team2"); //Weepinbell lv 50
        this.props.fetchPokemon(102, 49, "team2"); //Exeggcute lv 49
        this.props.fetchPokemon(45, 54, "team2"); //Vileplume lv 54
        this.props.fetchPokemon(71, 59, "team2"); //Victreebel lv 59
        this.props.handleLeaderNames(4);
        break;
      case "Soul Badge":
        this.props.fetchPokemon(12, 47, "team2"); //Butterfree lv 47
        this.props.fetchPokemon(24, 50, "team2"); //Arbok lv 50
        this.props.fetchPokemon(42, 50, "team2"); //Golbat lv 52
        this.props.fetchPokemon(89, 52, "team2"); //Muk lv 50
        this.props.fetchPokemon(93, 55, "team2"); //Haunter lv 55
        this.props.fetchPokemon(49, 60, "team2"); //Venomoth lv 60
        this.props.handleLeaderNames(5);
        break;
      case "Marsh Badge":
        this.props.fetchPokemon(122, 52, "team2"); //Mr Mime lv 52
        this.props.fetchPokemon(64, 54, "team2"); //Kadabra lv 54
        this.props.fetchPokemon(97, 55, "team2"); //Hypno lv 55
        this.props.fetchPokemon(64, 54, "team2"); //Kadabra lv 54
        this.props.fetchPokemon(124, 60, "team2"); //Jynx lv 58
        this.props.fetchPokemon(65, 65, "team2"); //Alakazam lv 65
        this.props.handleLeaderNames(6);
        break;
      case "Volcano Badge":
        this.props.fetchPokemon(77, 54, "team2"); //Ponyta lv 54
        this.props.fetchPokemon(126, 58, "team2"); //Magmar lv 58
        this.props.fetchPokemon(78, 60, "team2"); //Rapidash lv 60
        this.props.fetchPokemon(38, 60, "team2"); //Ninetails lv 60
        this.props.fetchPokemon(6, 62, "team2"); //Charizard lv 62
        this.props.fetchPokemon(59, 64, "team2"); //Arcanine lv 64
        this.props.handleLeaderNames(7);
        break;
      case "Earth Badge":
        this.props.fetchPokemon(18, 58, "team2"); //Pigeot lv 58
        this.props.fetchPokemon(110, 62, "team2"); //Weezing lv 62
        this.props.fetchPokemon(112, 65, "team2"); //Rhydon lv 65
        this.props.fetchPokemon(53, 63, "team2"); //Persian lv 63
        this.props.fetchPokemon(115, 67, "team2"); //Kangaskhan lv 67
        this.props.fetchPokemon(34, 70, "team2"); //Nidoking lv 70
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
      case "RivalRandom":
        rand = Math.round(RandomNumberGenerator(1, 151));
        randLvl = Math.round(RandomNumberGenerator(1, 100));
        this.props.fetchPokemon(rand, randLvl, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        randLvl = Math.round(RandomNumberGenerator(1, 100));
        this.props.fetchPokemon(rand, randLvl, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        randLvl = Math.round(RandomNumberGenerator(1, 100));
        this.props.fetchPokemon(rand, randLvl, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        randLvl = Math.round(RandomNumberGenerator(1, 100));
        this.props.fetchPokemon(rand, randLvl, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        randLvl = Math.round(RandomNumberGenerator(1, 100));
        this.props.fetchPokemon(rand, randLvl, "team2");
        rand = Math.round(RandomNumberGenerator(1, 151));
        randLvl = Math.round(RandomNumberGenerator(1, 100));
        this.props.fetchPokemon(rand, randLvl, "team2");
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
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Boulder Badge")}
        >
          <img src={Boulder_Badge} alt="Boulder Badge" />
          Boulder Badge - Brock
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Cascade Badge")}
        >
          <img src={Cascade_Badge} alt="Cascade Badge" />
          Cascade Badge - Misty
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Thunder Badge")}
        >
          <img src={Thunder_Badge} alt="Thunder Badge" />
          Thunder Badge - Lt. Surge
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Rainbow Badge")}
        >
          <img src={Rainbow_Badge} alt="Rainbow Badge" />
          Rainbow Badge - Erika
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Soul Badge")}
        >
          <img src={Soul_Badge} alt="Soul Badge" />
          Soul Badge - Koga
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Marsh Badge")}
        >
          <img src={Marsh_Badge} alt="Marsh Badge" />
          Marsh Badge - Sabrina
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("Volcano Badge")}
        >
          <img src={Volcano_Badge} alt="Volcano Badge" />
          Volcano Badge - Blaine
        </button>
        <button
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
        <button
          type="button"
          className="btn btn-light"
          onClick={() => this.aiTeamBuilder("RivalRandom")}
        >
          Random Trainer - All Random Lv
        </button>
      </div>
    );
  }
}

export default BadgesContainer;

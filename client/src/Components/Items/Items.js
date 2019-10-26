import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Items.css";
import $ from "jquery";
import potion from "./ItemsIcons/potion.png";
import antidote from "./ItemsIcons/antidote.png";
import burnheal from "./ItemsIcons/burnheal.png";
import iceheal from "./ItemsIcons/iceheal.png";
import paralyzeheal from "./ItemsIcons/paralyzeheal.png";
import awakening from "./ItemsIcons/awakening.png";
import { UpdateHP } from "../UpdateHP";
import { DisplayMessage } from "../DisplayMessage";
import healSound from "../../Sounds/BattleSounds/General/USEITEM.wav";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Items: [
        {
          name: "Max Potion",
          sprite: potion,
          effect: "Heals All HP",
          count: 1
        },
        {
          name: "Antidote",
          sprite: antidote,
          effect: "Heals Poison",
          count: 1
        },
        {
          name: "Burn Heal",
          sprite: burnheal,
          effect: "Heals Burn",
          count: 1
        },
        {
          name: "Paralyze Heal",
          sprite: paralyzeheal,
          effect: "Heals Paralyze",
          count: 1
        },
        {
          name: "Ice Heal",
          sprite: iceheal,
          effect: "Heals Frozen",
          count: 1
        },
        {
          name: "Awakening",
          sprite: awakening,
          effect: "Heals Sleep",
          count: 1
        }
      ],
      player2Items: [
        {
          name: "Max Potion",
          sprite: potion,
          effect: "Heals All HP",
          count: 1
        },
        {
          name: "Antidote",
          sprite: antidote,
          effect: "Heals Poison",
          count: 1
        },
        {
          name: "Burn Heal",
          sprite: burnheal,
          effect: "Heals Burn",
          count: 1
        },
        {
          name: "Paralyze Heal",
          sprite: paralyzeheal,
          effect: "Heals Paralyze",
          count: 1
        },
        {
          name: "Ice Heal",
          sprite: iceheal,
          effect: "Heals Frozen",
          count: 1
        },
        {
          name: "Awakening",
          sprite: awakening,
          effect: "Heals Sleep",
          count: 1
        }
      ],
      displayItems: false
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      displayItems: props.displayItems
    });
  }

  componentDidUpdate() {
    if (this.state.displayItems) {
      $(document.querySelector(".playerItems").lastChild).focus();
    }
  }

  itemDoesNotApply = () => {
    //pokemon has no condition
    DisplayMessage("It won't have any effect.");
  };

  healHP = (PKMNuser, HPbar, healAmount) => {
    //if increasing would bring them over full hp, cap hp
    if (Math.round(PKMNuser.hp) + healAmount > PKMNuser.OrigHp) {
      setTimeout(() => (PKMNuser.hp = PKMNuser.OrigHp), 500);
      setTimeout(() => this.props.handleForceUpdate(), 500);
      let difference = Math.round(PKMNuser.OrigHp - PKMNuser.hp);
      // $(document.querySelector(".options")).fadeOut(300);
      // $(document.querySelector(".mainmenuButton")).fadeOut(300);
      DisplayMessage(
        PKMNuser.name + " recovered by " + difference.toString() + " HP!"
      );
    } else {
      //increase health by healAmount
      setTimeout(() => (PKMNuser.hp += healAmount), 300);
      setTimeout(() => this.props.handleForceUpdate(), 300);
      // $(document.querySelector(".options")).fadeOut(300);
      // $(document.querySelector(".mainmenuButton")).fadeOut(300);
      DisplayMessage(
        PKMNuser.name + " recovered by " + healAmount.toString() + " HP!"
      );
    }

    let origHealth = parseInt(HPbar.css("width"));

    let asPercentage = healAmount / PKMNuser.hp;

    let hpRecovered = origHealth * asPercentage;
    let updatedBarHP = origHealth + hpRecovered;
    if (updatedBarHP > 560) {
      updatedBarHP = 560;
    }
    //play heal sound
    let heal = new Audio(healSound);
    heal.volume = this.props.volume;
    heal.play();

    setTimeout(() => UpdateHP(HPbar, updatedBarHP, this.props.volume), 300);
    this.props.handleItems();
    this.props.handleForceUpdate();
    //removed switch turns to allow selection after item use
    // if (
    //   PKMNuser.statusCondition === "Poison" ||
    //   PKMNuser.statusCondition === "Burn"
    // ) {
    //   setTimeout(() => this.props.dealPoisonBurn(PKMNuser, HPbar), 1500);
    // } else {
    //   setTimeout(() => this.props.switchTurns(), 1500);
    // }
  };

  //HEAL STATUS FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  healStatus = PKMNuser => {
    // $(document.querySelector(".options")).fadeOut(300);
    // $(document.querySelector(".mainmenuButton")).fadeOut(300);
    DisplayMessage(
      PKMNuser.name + " was cured of " + PKMNuser.statusCondition + "!"
    );
    //play heal sound
    let heal = new Audio(healSound);
    heal.volume = this.props.volume;
    heal.play();
    //remove status condition
    setTimeout(() => (PKMNuser.statusCondition = ""), 500);
    this.props.handleItems();
    this.props.handleForceUpdate();
    //setTimeout(() => this.props.switchTurns(), 1500);
  };

  //USE ITEM FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useItem = (name, index) => {
    let PKMNuser = null;
    let HPbar = null;
    let healAmount = 0;
    let bag = null;
    if (this.props.playersTurn === "Player One") {
      PKMNuser = this.props.player1Team[this.props.player1CurrentPokemon];
      HPbar = $(document.querySelector(".player1HP"));
      bag = this.state.player1Items;
    } else {
      PKMNuser = this.props.player2Team[this.props.player2CurrentPokemon];
      HPbar = $(document.querySelector(".player2HP"));
      bag = this.state.player2Items;
    }

    //check if user trying to heal with potion
    if (name === "Max Potion") {
      healAmount = 999;
      //if user is at full health, deny usage
      if (PKMNuser.hp === PKMNuser.OrigHp) {
        this.itemDoesNotApply();
        return;
      } else {
        bag[index].count -= 1;
        this.healHP(PKMNuser, HPbar, healAmount);
      }
    } else if (PKMNuser.statusCondition === "") {
      this.itemDoesNotApply();
    } else {
      //check the effect and see if the item applies
      //if so, subtract one from bag and heal status
      if (PKMNuser.statusCondition === "Poison" && name === "Antidote") {
        bag[index].count -= 1;
        this.healStatus(PKMNuser);
      } else if (PKMNuser.statusCondition === "Burn" && name === "Burn Heal") {
        bag[index].count -= 1;
        this.healStatus(PKMNuser);
      } else if (
        PKMNuser.statusCondition === "Paralyze" &&
        name === "Paralyze Heal"
      ) {
        bag[index].count -= 1;
        this.healStatus(PKMNuser);
      } else if (PKMNuser.statusCondition === "Frozen" && name === "Ice Heal") {
        bag[index].count -= 1;
        this.healStatus(PKMNuser);
      } else if (PKMNuser.statusCondition === "Sleep" && name === "Awakening") {
        bag[index].count -= 1;
        this.healStatus(PKMNuser);
      } else {
        this.itemDoesNotApply();
      }
    }
  };

  render() {
    let items;
    if (this.props.playersTurn === "Player One") {
      items = this.state.player1Items;
    } else {
      items = this.state.player2Items;
    }
    if (this.state.displayItems) {
      return (
        <div className="playerItems">
          {items.map((item, i) => {
            if (item.count > 0) {
              return (
                <div
                  className="playerItem"
                  onClick={() => this.useItem(item.name, i)}
                  key={item.name}
                >
                  <p className="smallText">{item.name}</p>
                  <img
                    className="itemSprite"
                    src={item.sprite}
                    alt={item.name}
                    key={i}
                  />
                  <p className="smallText">{item.count}</p>
                </div>
              );
            } else {
              return false;
            }
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Items;

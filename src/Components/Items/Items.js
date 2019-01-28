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

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Items: [
        {
          name: "Potion",
          sprite: potion,
          effect: "Heals 20 HP",
          count: this.props.player1Team.length
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
          name: "Potion",
          sprite: potion,
          effect: "Heals 20 HP",
          count: this.props.player1Team.length
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

  itemDoesNotApply = () => {
    //pokemon has no condition
    $(document.querySelector(".message")).fadeIn(300);
    $(document.querySelector(".message")).text("It won't have any effect.");
    setTimeout(() => $(document.querySelector(".message")).fadeOut(300), 1000);
  };

  checkForPoisonBurn = (PKMNuser, HPbar) => {
    //check if user is poisoned or burned, set up for hp loss
    if (
      PKMNuser.statusCondition === "Poison" ||
      PKMNuser.statusCondition === "Burn"
    ) {
      //deal 1/8 of Orig HP as damage to user
      let damage = PKMNuser.OrigHp / 16;
      console.log("poison/burn damage: " + damage);

      //store original bar percent
      let origHealth = 0;
      setTimeout(() => (origHealth = parseInt(HPbar.css("width"))), 2800);

      // calculate percent difference of hp / dmg
      let asPercentage = 0;
      setTimeout(() => (asPercentage = damage / PKMNuser.hp), 2800);

      //update target pokemon hp after damage dealt else {
      setTimeout(() => (PKMNuser.hp -= damage), 2500);
      setTimeout(() => $(document.querySelector(".message")).fadeIn(500), 2500);
      if (PKMNuser.statusCondition === "Poison") {
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + " was hurt by Poison!"
            ),
          2500
        );
      } else if (PKMNuser.statusCondition === "Burn") {
        setTimeout(
          () =>
            $(document.querySelector(".message")).text(
              PKMNuser.name + " was hurt by Burn!"
            ),
          2500
        );
      }
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(500),
        3500
      );
      setTimeout(() => $(document.querySelector(".message")).text(""), 4000);
      let dmgDone = 0;
      setTimeout(() => (dmgDone = origHealth * asPercentage), 2800);
      let updatedBarHP = 0;
      setTimeout(() => (updatedBarHP = origHealth - dmgDone), 2800);

      //update health bar to reflect damage
      setTimeout(
        () => this.props.updateHP(HPbar, updatedBarHP, PKMNuser.name, 0),
        3000
      );
    }
  };

  healHP = (PKMNuser, HPbar, healAmount) => {
    //if increasing would bring them over full hp, cap hp
    if (Math.round(PKMNuser.hp) + healAmount > PKMNuser.OrigHp) {
      setTimeout(() => (PKMNuser.hp = PKMNuser.OrigHp), 500);
      let difference = Math.round(PKMNuser.OrigHp - PKMNuser.hp);
      $(document.querySelector(".message")).fadeIn(300);
      $(document.querySelector(".message")).text(
        PKMNuser.name + " recovered by " + difference.toString() + " HP!"
      );
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(300),
        1000
      );
    } else {
      //increase health by healAmount
      setTimeout(() => (PKMNuser.hp += healAmount), 500);
      $(document.querySelector(".message")).fadeIn(300);
      $(document.querySelector(".message")).text(
        PKMNuser.name + " recovered by " + healAmount.toString() + " HP!"
      );
      setTimeout(
        () => $(document.querySelector(".message")).fadeOut(300),
        1000
      );
    }

    let origHealth = parseInt(HPbar.css("width"));

    let asPercentage = healAmount / PKMNuser.hp;

    let hpRecovered = origHealth * asPercentage;
    let updatedBarHP = origHealth + hpRecovered;
    console.log(origHealth, asPercentage, hpRecovered, updatedBarHP);
    if (updatedBarHP > 560) {
      updatedBarHP = 560;
    }

    setTimeout(
      () => this.props.updateHP(HPbar, updatedBarHP, PKMNuser, 0),
      500
    );

    this.checkForPoisonBurn(PKMNuser, HPbar);
    this.props.handleItems();
    setTimeout(() => this.props.switchTurns(), 1300);
  };

  //HEAL STATUS FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  healStatus = (PKMNuser, name) => {
    console.log(PKMNuser.name + " was cured of " + PKMNuser.statusCondition);
    $(document.querySelector(".message")).fadeIn(300);
    $(document.querySelector(".message")).text(
      PKMNuser.name + " was cured of " + PKMNuser.statusCondition
    );
    setTimeout(() => $(document.querySelector(".message")).fadeOut(300), 1000);
    //remove status condition
    PKMNuser.statusCondition = "";

    this.props.handleItems();
    setTimeout(() => this.props.switchTurns(), 1300);
  };

  //USE ITEM FUNCTION ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useItem = (name, index) => {
    console.log("attempting to use item " + name + " at index " + index);
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
    if (name === "Potion") {
      healAmount = 20;
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
                  <img
                    className="itemSprite"
                    src={item.sprite}
                    alt={item.name}
                    key={i}
                  />
                  {item.name} / {item.count}
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

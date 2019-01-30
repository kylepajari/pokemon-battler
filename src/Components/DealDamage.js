import $ from "jquery";
import { UpdateHP } from "./UpdateHP";
import { CalcTypeAdvantage } from "./TypeAdvantage";
import { RandomNumberGenerator } from "./RandomNumberGenerator";
import { DisplayMessage } from "./DisplayMessage";

const DealDamage = (
  power,
  lv,
  moveName,
  moveCategory,
  moveType,
  statusEff,
  statusProb,
  player1Team,
  player2Team,
  player1CurrentPokemon,
  player2CurrentPokemon,
  playersTurn,
  resetMultipliers,
  handleTeam,
  handleFainted,
  handleForceUpdate,
  checkForStatusEffect,
  isPoisonBurned,
  dealPoisonBurn,
  switchTurns
) => {
  console.log("dealing damage...");
  let PKMNuser = "";
  let PKMNtarget = "";
  let UserHP = "";
  let TargetHP = "";
  if (playersTurn === "Player One") {
    PKMNuser = player1Team[player1CurrentPokemon];
    PKMNtarget = player2Team[player2CurrentPokemon];
    UserHP = $(document.querySelector(".player1HP"));
    TargetHP = $(document.querySelector(".player2HP"));
  } else {
    PKMNuser = player2Team[player2CurrentPokemon];
    PKMNtarget = player1Team[player1CurrentPokemon];
    UserHP = $(document.querySelector(".player2HP"));
    TargetHP = $(document.querySelector(".player1HP"));
  }

  //damage formula:
  let A = PKMNuser.attack; //attack stat of attacker
  let uSA = PKMNuser.specialattack; //special attack stat of attacker
  let D = PKMNtarget.defense; //defense stat of target
  let tSD = PKMNtarget.specialdefense; //special defense stat of target
  let userType1 = PKMNuser.types[0][0];
  let userType2 = null;
  if (PKMNuser.types[0][1] !== null) {
    userType2 = PKMNuser.types[0][1];
  }
  let targetType1 = PKMNtarget.types[0][0];
  let targetType2 = null;
  if (PKMNtarget.types[0][1] !== null) {
    targetType2 = PKMNtarget.types[0][1];
  }
  //calc STAB(Same-Type-Attack-Bonus) 1.5, if user is same as move type
  let STAB = 1;
  if (moveType === userType1 || moveType === userType2) {
    console.log(
      "move type " +
        moveType +
        " matches user type " +
        userType1 +
        " or " +
        userType2 +
        ", applying STAB 1.5x"
    );
    STAB = 1.5;
  }

  //calc type advantage
  let Type = CalcTypeAdvantage(moveType, targetType1, targetType2);
  let effectiveMessage = false;
  if (Type < 1) {
    effectiveMessage = true;
    DisplayMessage("It's not very effective...");
  }
  if (Type > 1) {
    effectiveMessage = true;
    DisplayMessage("It's super effective!");
  }

  let modifier = RandomNumberGenerator(0.85, 1.0) * STAB * Type; //random * STAB * Type
  //formula taken from pokemon wiki, level * 2 / 5 + 2 * "move power" + (attack of attacker / defense of target) / 50 + 2 * modifier
  let Damage = 0;
  console.log("move category is: " + moveCategory);

  if (moveCategory === "physical") {
    //use attack/defense stats
    Damage = ((((lv * 2) / 5 + 2) * power * (A / D)) / 50 + 2) * modifier;
  } else if (moveCategory === "special") {
    //use special attack/defense stats
    Damage = ((((lv * 2) / 5 + 2) * power * (uSA / tSD)) / 50 + 2) * modifier;
  }
  Damage = Math.round(Damage);
  console.log("Damage is: " + Damage);

  //set up recoil/recover damage
  let recoilDamage = Damage / 4;
  let recoverDamage = Damage / 2;
  //store original bar percent
  let origHealth = parseInt(TargetHP.css("width"));

  // calculate percent difference of hp / dmg
  let asPercentage = Damage / PKMNtarget.hp;

  //update target pokemon hp after damage dealt
  PKMNtarget.hp = PKMNtarget.hp - Damage;
  if (PKMNtarget.hp < 0) {
    PKMNtarget.hp = 0;
  }
  if (!effectiveMessage) {
    handleForceUpdate();
  } else {
    setTimeout(() => handleForceUpdate(), 1500);
  }

  let dmgDone = Math.round(origHealth * asPercentage);
  let updatedBarHP = origHealth - dmgDone;

  //if move does not do any damage, do not flash sprite
  if (Damage !== 0) {
    //update health bar to reflect damage
    if (!effectiveMessage) {
      UpdateHP(
        TargetHP,
        updatedBarHP,
        PKMNtarget.name,
        power,
        player1Team,
        player2Team,
        player1CurrentPokemon,
        player2CurrentPokemon,
        playersTurn,
        resetMultipliers,
        handleTeam,
        handleFainted
      );
      if (playersTurn === "Player One") {
        $(document.querySelector(".player2Sprite")).fadeOut(100);
        $(document.querySelector(".player2Sprite")).fadeIn(300);
        $(document.querySelector(".player2Sprite")).fadeOut(100);
        $(document.querySelector(".player2Sprite")).fadeIn(300);
        $(document.querySelector(".player2Sprite")).fadeOut(100);
        $(document.querySelector(".player2Sprite")).fadeIn(300);
      } else {
        $(document.querySelector(".player1Sprite")).fadeOut(100);
        $(document.querySelector(".player1Sprite")).fadeIn(300);
        $(document.querySelector(".player1Sprite")).fadeOut(100);
        $(document.querySelector(".player1Sprite")).fadeIn(300);
        $(document.querySelector(".player1Sprite")).fadeOut(100);
        $(document.querySelector(".player1Sprite")).fadeIn(300);
      }
    } else {
      setTimeout(
        () =>
          UpdateHP(
            TargetHP,
            updatedBarHP,
            PKMNtarget.name,
            power,
            player1Team,
            player2Team,
            player1CurrentPokemon,
            player2CurrentPokemon,
            playersTurn,
            resetMultipliers,
            handleTeam,
            handleFainted
          ),
        1500
      );
      if (playersTurn === "Player One") {
        $(document.querySelector(".player2Sprite")).fadeOut(100);
        $(document.querySelector(".player2Sprite")).fadeIn(300);
        $(document.querySelector(".player2Sprite")).fadeOut(100);
        $(document.querySelector(".player2Sprite")).fadeIn(300);
        $(document.querySelector(".player2Sprite")).fadeOut(100);
        $(document.querySelector(".player2Sprite")).fadeIn(300);
      } else {
        $(document.querySelector(".player1Sprite")).fadeOut(100);
        $(document.querySelector(".player1Sprite")).fadeIn(300);
        $(document.querySelector(".player1Sprite")).fadeOut(100);
        $(document.querySelector(".player1Sprite")).fadeIn(300);
        $(document.querySelector(".player1Sprite")).fadeOut(100);
        $(document.querySelector(".player1Sprite")).fadeIn(300);
      }
    }
  } else {
    //damage was calced to 0
    DisplayMessage(PKMNtarget.name + " was unaffected");
  }
  console.log("HP left after damage: " + PKMNtarget.hp);

  if (
    PKMNtarget.hp > 0
    // ||
    // statusEff === "recoverDamage" ||
    // statusEff === "recoil"
  ) {
    //Check for and apply status effect after damage only if pokemon is not fainted
    if (statusEff !== "") {
      if (!effectiveMessage) {
        checkForStatusEffect(
          statusEff,
          statusProb,
          PKMNuser,
          PKMNtarget,
          targetType1,
          targetType2,
          moveName,
          UserHP,
          power,
          recoilDamage,
          recoverDamage,
          isPoisonBurned
        );
      } else {
        setTimeout(
          () =>
            checkForStatusEffect(
              statusEff,
              statusProb,
              PKMNuser,
              PKMNtarget,
              targetType1,
              targetType2,
              moveName,
              UserHP,
              power,
              recoilDamage,
              recoverDamage,
              isPoisonBurned
            ),
          1500
        );
      }

      if (isPoisonBurned) {
        console.log(PKMNuser.name + " is poisoned/burned");
        if (!effectiveMessage) {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 2000);
        } else {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 3500);
        }
      }
      // } else {
      //   console.log(PKMNuser.name + " is not poisoned/burned, switching turns");
      //   setTimeout(() => switchTurns(), 2500);
      // }
    } else {
      if (isPoisonBurned) {
        console.log(PKMNuser.name + " is poisoned/burned");
        if (!effectiveMessage) {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 2000);
        } else {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 3500);
        }
      } else {
        //no effect from move, switch turns
        if (!effectiveMessage) {
          setTimeout(() => switchTurns(), 2000);
        } else {
          setTimeout(() => switchTurns(), 3500);
        }
      }
    }
  }
};

export { DealDamage };

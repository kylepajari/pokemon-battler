import $ from "jquery";
import { UpdateHP } from "./UpdateHP";
import { CalcTypeAdvantage } from "./TypeAdvantage";
import { RandomNumberGenerator } from "./RandomNumberGenerator";
import { DisplayMessage } from "./DisplayMessage";
import HitSound from "../Sounds/BattleSounds/General/IMHIT.wav";
import HitSoundSuper from "../Sounds/BattleSounds/General/IMHITSUPER.wav";
import HitSoundWeak from "../Sounds/BattleSounds/General/IMHITWEAK.wav";

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
  playerOneName,
  playerTwoName,
  resetMultipliers,
  handleTeam,
  handleFainted,
  handleForceUpdate,
  checkForStatusEffect,
  isPoisonBurned,
  dealPoisonBurn,
  switchTurns,
  mode,
  Volume
) => {
  console.log("dealing damage...volume is " + Volume);
  let PKMNuser = "";
  let PKMNtarget = "";
  let UserHP = "";
  let TargetHP = "";
  let TargetSprite = "";
  if (playersTurn === "Player One") {
    PKMNuser = player1Team[player1CurrentPokemon];
    PKMNtarget = player2Team[player2CurrentPokemon];
    UserHP = $(document.querySelector(".player1HP"));
    TargetHP = $(document.querySelector(".player2HP"));
    TargetSprite = $(document.querySelector(".player2Sprite"));
  } else {
    PKMNuser = player2Team[player2CurrentPokemon];
    PKMNtarget = player1Team[player1CurrentPokemon];
    UserHP = $(document.querySelector(".player2HP"));
    TargetHP = $(document.querySelector(".player1HP"));
    TargetSprite = $(document.querySelector(".player1Sprite"));
  }

  //damage formula:
  let A = PKMNuser.attack; //attack stat of attacker
  let uSA = PKMNuser.specialattack; //special attack stat of attacker
  let SPD = PKMNuser.speed; //speed stat of attacker
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
  let effectiveMessage = "";
  let Hit = null;
  if (Type < 1) {
    effectiveMessage = "It's not very effective...";
    Hit = new Audio(HitSoundWeak);
  } else if (Type > 1) {
    effectiveMessage = "It's super effective!";
    Hit = new Audio(HitSoundSuper);
  } else {
    Hit = new Audio(HitSound);
  }
  Hit.volume = Volume;

  //calc Critical hit
  let critMessage = "";
  let CriticalHit = 1;
  //critical hit 'P' probability is 'baseSpeed / 512'
  let threshold = Math.random();
  // let P = Math.round((SPD * 100) / 512);
  // console.log(P, threshold);
  //6.25% chance of critical hit
  if (threshold <= 0.0625) {
    CriticalHit = 2;
    critMessage = "Critical Hit!";
  }

  let modifier = RandomNumberGenerator(0.85, 1.0) * STAB * Type * CriticalHit; //random * STAB * Type

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
  if (PKMNtarget.hp < 1) {
    PKMNtarget.hp = 0;
  }

  let dmgDone = Math.round(origHealth * asPercentage);
  let updatedBarHP = origHealth - dmgDone;
  if (updatedBarHP < 1) {
    updatedBarHP = 0;
  }

  //if move does not do any damage, do not flash sprite
  if (Damage !== 0) {
    //play hit sound
    Hit.play();
    //flash sprite
    TargetSprite.fadeOut(100);
    TargetSprite.fadeIn(300);
    TargetSprite.fadeOut(100);
    TargetSprite.fadeIn(300);
    TargetSprite.fadeOut(100);
    TargetSprite.fadeIn(300);

    //update health bar to reflect damage
    if (effectiveMessage === "" && critMessage === "") {
      setTimeout(() => handleForceUpdate(), 1500);
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
            playerOneName,
            playerTwoName,
            resetMultipliers,
            handleTeam,
            handleFainted,
            mode,
            Volume
          ),
        1500
      );
    } else if (critMessage !== "" && effectiveMessage === "") {
      setTimeout(() => handleForceUpdate(), 1500);
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
            playerOneName,
            playerTwoName,
            resetMultipliers,
            handleTeam,
            handleFainted,
            mode,
            Volume
          ),
        1500
      );
      setTimeout(() => DisplayMessage(critMessage), 3000);
    } else if (critMessage === "" && effectiveMessage !== "") {
      setTimeout(() => handleForceUpdate(), 1500);
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
            playerOneName,
            playerTwoName,
            resetMultipliers,
            handleTeam,
            handleFainted,
            mode,
            Volume
          ),
        1500
      );
      setTimeout(() => DisplayMessage(effectiveMessage), 3000);
    } else if (critMessage !== "" && effectiveMessage !== "") {
      setTimeout(() => handleForceUpdate(), 1500);
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
            playerOneName,
            playerTwoName,
            resetMultipliers,
            handleTeam,
            handleFainted,
            mode,
            Volume
          ),
        1500
      );
      setTimeout(() => DisplayMessage(critMessage), 3500);
      setTimeout(() => DisplayMessage(effectiveMessage), 5000);
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
      if (effectiveMessage === "" && critMessage === "") {
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
          2500
        );
      }

      if (isPoisonBurned) {
        console.log(PKMNuser.name + " is poisoned/burned");
        if (effectiveMessage === "" && critMessage === "") {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 2500);
        } else {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 4000);
        }
      }
      // } else {
      //   console.log(PKMNuser.name + " is not poisoned/burned, switching turns");
      //   setTimeout(() => switchTurns(), 2500);
      // }
    } else {
      if (isPoisonBurned) {
        console.log(PKMNuser.name + " is poisoned/burned");
        if (effectiveMessage === "" && critMessage === "") {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 2500);
        } else {
          setTimeout(() => dealPoisonBurn(PKMNuser, UserHP), 4000);
        }
      } else {
        //no effect from move, switch turns
        if (effectiveMessage === "" && critMessage === "") {
          setTimeout(() => switchTurns(), 2500);
        } else {
          setTimeout(() => switchTurns(), 4000);
        }
      }
    }
  }
};

export { DealDamage };
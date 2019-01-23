const CreateMoves = moveName => {
  if (moveName === "Pound") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Karate Chop") {
    return {
      name: moveName,
      power: 50,
      type: "fighting",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    };
  }
  if (moveName === "Double Slap") {
    return {
      name: moveName,
      power: 15,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Comet Punch") {
    return {
      name: moveName,
      power: 18,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Mega Punch") {
    return {
      name: moveName,
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Pay Day") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Fire Punch") {
    return {
      name: moveName,
      power: 75,
      type: "fire",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Ice Punch") {
    return {
      name: moveName,
      power: 75,
      type: "ice",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Thunder Punch") {
    return {
      name: moveName,
      power: 75,
      type: "electric",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Scratch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Vice Grip") {
    return {
      name: moveName,
      power: 55,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    };
  }
  if (moveName === "Guillotine") {
    return {
      name: moveName,
      power: 999,
      type: "normal",
      accuracy: 20,
      pp: 5,
      statusEff: ""
    }; //one-hit KO if lands
  }
  if (moveName === "Razor Wind") {
    return {
      name: moveName,
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Swords Dance") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 25,
      statusEff: "raisesUserAtk"
    }; // boosts attack
  }
  if (moveName === "Cut") {
    return {
      name: moveName,
      power: 50,
      type: "normal",
      accuracy: 95,
      pp: 30,
      statusEff: ""
    };
  }
  if (moveName === "Gust") {
    return {
      name: moveName,
      power: 40,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wing Attack") {
    return {
      name: moveName,
      power: 60,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Whirlwind") {
    return {
      name: moveName,
      power: 70,
      type: "flying",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Fly") {
    return {
      name: moveName,
      power: 90,
      type: "flying",
      accuracy: 95,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Bind") {
    return {
      name: moveName,
      power: 15,
      type: "normal",
      accuracy: 85,
      pp: 20,
      statusEff: ""
    }; //hits 4-5 times
  }
  if (moveName === "Slam") {
    return {
      name: moveName,
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Vine Whip") {
    return {
      name: moveName,
      power: 45,
      type: "grass",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    };
  }
  if (moveName === "Stomp") {
    return {
      name: moveName,
      power: 65,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Double Kick") {
    return {
      name: moveName,
      power: 30,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    }; //hits 2 times in one turn
  }
  if (moveName === "Mega Kick") {
    return {
      name: moveName,
      power: 120,
      type: "normal",
      accuracy: 75,
      pp: 5,
      statusEff: ""
    };
  }
  if (moveName === "Jump Kick") {
    return {
      name: moveName,
      power: 100,
      type: "fighting",
      accuracy: 95,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Rolling Kick") {
    return {
      name: moveName,
      power: 60,
      type: "fighting",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Sand Attack") {
    return {
      name: moveName,
      power: 0,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetAcc"
    }; //lowers accuracy
  }
  if (moveName === "Headbutt") {
    return {
      name: moveName,
      power: 70,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Horn Attack") {
    return {
      name: moveName,
      power: 65,
      type: "normal",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    };
  }
  if (moveName === "Fury Attack") {
    return {
      name: moveName,
      power: 15,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //hits 2-5 times
  }
  if (moveName === "Horn Drill") {
    return {
      name: moveName,
      power: 999,
      type: "normal",
      accuracy: 20,
      pp: 5,
      statusEff: ""
    }; //One-hit KO if lands
  }
  if (moveName === "Tackle") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Body Slam") {
    return {
      name: moveName,
      power: 85,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //may cause PARALYZE
  }
  if (moveName === "Wrap") {
    return {
      name: moveName,
      power: 15,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //hits 4-5 times
  }
  if (moveName === "Take Down") {
    return {
      name: moveName,
      power: 90,
      type: "normal",
      accuracy: 85,
      pp: 20,
      statusEff: "recoil"
    }; //user receives recoil (10% of damage dealt)
  }
  if (moveName === "Thrash") {
    return {
      name: moveName,
      power: 120,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    }; //user becomes CONFUSION afterwards
  }
  if (moveName === "Double Edge") {
    return {
      name: moveName,
      power: 120,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "recoil"
    }; //causes recoil (10% damage)
  }
  if (moveName === "Tail Whip") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetDef"
    };
  }
  if (moveName === "Poison Sting") {
    return {
      name: moveName,
      power: 15,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //may cause POISON
  }
  if (moveName === "Twineedle") {
    return {
      name: moveName,
      power: 25,
      type: "bug",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //hits 2 times, may cause POISON
  }
  if (moveName === "Pin Missile") {
    return {
      name: moveName,
      power: 25,
      type: "bug",
      accuracy: 95,
      pp: 20,
      statusEff: ""
    }; //hits 2-5 times
  }
  if (moveName === "Leer") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetDef"
    }; //lowers defense
  }
  if (moveName === "Bite") {
    return {
      name: moveName,
      power: 60,
      type: "dark",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    }; //may cause flinch
  }
  if (moveName === "Growl") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetAtk"
    }; //lowers attack
  }
  if (moveName === "Roar") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetAtk"
    }; //greatly lowers attack
  }
  if (moveName === "Sing") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 55,
      pp: 15,
      statusEff: ""
    }; //may cause SLEEP
  }
  if (moveName === "Supersonic") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 55,
      pp: 20,
      statusEff: ""
    }; //causes CONFUSION
  }
  if (moveName === "Sonic Boom") {
    return {
      name: moveName,
      power: 20,
      type: "normal",
      accuracy: 90,
      pp: 20,
      statusEff: ""
    }; //always deals 20 hp
  }
  if (moveName === "Disable") {
    return {
      name: moveName,
      power: 20,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //prevents random move from being used
  }
  if (moveName === "Acid") {
    return {
      name: moveName,
      power: 40,
      type: "poison",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    }; //may cause POISON
  }
  if (moveName === "Ember") {
    return {
      name: moveName,
      power: 40,
      type: "fire",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    }; //may cause BURN
  }
  if (moveName === "Flamethrower") {
    return {
      name: moveName,
      power: 90,
      type: "fire",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //may cause BURN
  }
  if (moveName === "Mist") {
    return {
      name: moveName,
      power: 40,
      type: "ice",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    };
  }
  if (moveName === "Water Gun") {
    return {
      name: moveName,
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    };
  }
  if (moveName === "Hydro Pump") {
    return {
      name: moveName,
      power: 110,
      type: "water",
      accuracy: 80,
      pp: 5,
      statusEff: ""
    };
  }
  if (moveName === "Surf") {
    return {
      name: moveName,
      power: 90,
      type: "water",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Ice Beam") {
    return {
      name: moveName,
      power: 90,
      type: "ice",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    }; //may cause FRZN
  }
  if (moveName === "Blizzard") {
    return {
      name: moveName,
      power: 110,
      type: "ice",
      accuracy: 80,
      pp: 5,
      statusEff: ""
    }; //may cause FRZN
  }
  if (moveName === "Psybeam") {
    return {
      name: moveName,
      power: 65,
      type: "psychic",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Bubble Beam") {
    return {
      name: moveName,
      power: 65,
      type: "water",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Aurora Beam") {
    return {
      name: moveName,
      power: 65,
      type: "ice",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Hyper Beam") {
    return {
      name: moveName,
      power: 150,
      type: "normal",
      accuracy: 90,
      pp: 5,
      statusEff: ""
    };
  }
  if (moveName === "Peck") {
    return {
      name: moveName,
      power: 35,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Drill Peck") {
    return {
      name: moveName,
      power: 80,
      type: "flying",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Submission") {
    return {
      name: moveName,
      power: 80,
      type: "fighting",
      accuracy: 80,
      pp: 20,
      statusEff: "recoil"
    }; //cause recoil
  }
  if (moveName === "Low Kick") {
    return {
      name: moveName,
      power: 55,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Counter") {
    return {
      name: moveName,
      power: 50,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Seismic Toss") {
    return {
      name: moveName,
      power: 60,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //damage equal to users level
  }
  if (moveName === "Strength") {
    return {
      name: moveName,
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Absorb") {
    return {
      name: moveName,
      power: 20,
      type: "grass",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    }; //adds 1/2 damage done back to users HP
  }
  if (moveName === "Mega Drain") {
    return {
      name: moveName,
      power: 40,
      type: "grass",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //adds 1/2 damage done back to users HP
  }
  if (moveName === "Leech Seed") {
    return {
      name: moveName,
      power: 15,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //adds damage done back to users HP
  }
  if (moveName === "Growth") {
    return {
      name: moveName,
      power: 0,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserSpc"
    };
  }
  if (moveName === "Razor Leaf") {
    return {
      name: moveName,
      power: 55,
      type: "grass",
      accuracy: 95,
      pp: 25,
      statusEff: ""
    };
  }
  if (moveName === "Solar Beam") {
    return {
      name: moveName,
      power: 120,
      type: "grass",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Poison Powder") {
    return {
      name: moveName,
      power: 20,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes POISON
  }
  if (moveName === "Stun Spore") {
    return {
      name: moveName,
      power: 20,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes PARALYZE
  }
  if (moveName === "Sleep Powder") {
    return {
      name: moveName,
      power: 20,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes SLEEP
  }
  if (moveName === "Petal Dance") {
    return {
      name: moveName,
      power: 120,
      type: "grass",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "String Shot") {
    return {
      name: moveName,
      power: 0,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetSpd"
    }; //lowers speed
  }
  if (moveName === "Dragon Rage") {
    return {
      name: moveName,
      power: 60,
      type: "dragon",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //alaways does 40hp damage
  }
  if (moveName === "Fire Spin") {
    return {
      name: moveName,
      power: 35,
      type: "fire",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //hits 4-5 times
  }
  if (moveName === "Thunder Shock") {
    return {
      name: moveName,
      power: 40,
      type: "electric",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    }; //may cause PARALYZE
  }
  if (moveName === "Thunderbolt") {
    return {
      name: moveName,
      power: 90,
      type: "electric",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //may cause PARALYZE
  }
  if (moveName === "Thunder Wave") {
    return {
      name: moveName,
      power: 20,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes PARALYZE
  }
  if (moveName === "Thunder") {
    return {
      name: moveName,
      power: 110,
      type: "electric",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    }; //may cause PARALYZE
  }
  if (moveName === "Rock Throw") {
    return {
      name: moveName,
      power: 50,
      type: "rock",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Earthquake") {
    return {
      name: moveName,
      power: 100,
      type: "ground",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Fissure") {
    return {
      name: moveName,
      power: 999,
      type: "ground",
      accuracy: 20,
      pp: 5,
      statusEff: ""
    }; //One-hit KO if lands
  }
  if (moveName === "Dig") {
    return {
      name: moveName,
      power: 80,
      type: "ground",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Toxic") {
    return {
      name: moveName,
      power: 60,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes POISON
  }
  if (moveName === "Confusion") {
    return {
      name: moveName,
      power: 50,
      type: "psychic",
      accuracy: 100,
      pp: 25,
      statusEff: ""
    }; //causes CONFUSION
  }
  if (moveName === "Psychic") {
    return {
      name: moveName,
      power: 90,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    }; //may lower special
  }
  if (moveName === "Hypnosis") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 60,
      pp: 20,
      statusEff: ""
    }; //causes SLEEP
  }
  if (moveName === "Meditate") {
    return {
      name: moveName,
      power: 0,
      type: "psychic",
      accuracy: 100,
      pp: 40,
      statusEff: "raisesUserAtk"
    };
  }
  if (moveName === "Agility") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserSpd"
    }; //raises users speed
  }
  if (moveName === "Quick Attack") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    };
  }
  if (moveName === "Rage") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Teleport") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //Does nothing in battle
  }
  if (moveName === "Night Shade") {
    return {
      name: moveName,
      power: 50,
      type: "ghost",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mimic") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Screech") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetDef"
    }; //greatly lowers defense
  }
  if (moveName === "Double Team") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserEva"
    }; //raises evasion
  }
  if (moveName === "Recover") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //recovers users hp 20%
  }
  if (moveName === "Harden") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserDef"
    }; //increases defense
  }
  if (moveName === "Minimize") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserEva"
    }; //increases evasion
  }
  if (moveName === "Smokescreen") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetAcc"
    }; //lowers opponent accuracy
  }
  if (moveName === "Confuse Ray") {
    return {
      name: moveName,
      power: 20,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes CONFUSION
  }
  if (moveName === "Withdraw") {
    return {
      name: moveName,
      power: 20,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserDef"
    }; //raises defense
  }
  if (moveName === "Defense Curl") {
    return {
      name: moveName,
      power: 20,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserDef"
    }; //raises defense
  }
  if (moveName === "Barrier") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Light Screen") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Haze") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Reflect") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Focus Energy") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserAtk"
    };
  }
  if (moveName === "Bide") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Metronome") {
    return {
      name: moveName,
      power: 120,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Mirror Move") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Self Destruct") {
    return {
      name: moveName,
      power: 200,
      type: "normal",
      accuracy: 100,
      pp: 5,
      statusEff: ""
    }; //faints users after use
  }
  if (moveName === "Egg Bomb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Lick") {
    return {
      name: moveName,
      power: 35,
      type: "ghost",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Smog") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sludge") {
    return {
      name: moveName,
      power: 65,
      type: "poison",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //may cause POISON
  }
  if (moveName === "Bone Club") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fire Blast") {
    return {
      name: moveName,
      power: 110,
      type: "fire",
      accuracy: 85,
      pp: 5,
      statusEff: ""
    };
  }
  if (moveName === "Waterfall") {
    return {
      name: moveName,
      power: 80,
      type: "water",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Clamp") {
    return {
      name: moveName,
      power: 35,
      type: "water",
      accuracy: 85,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Swift") {
    return {
      name: moveName,
      power: 60,
      type: "normal",
      accuracy: 999,
      pp: 20,
      statusEff: ""
    }; //never misses
  }
  if (moveName === "Skull Bash") {
    return {
      name: moveName,
      power: 130,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Spike Cannon") {
    return {
      name: moveName,
      power: 20,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //hits 2-5 times
  }
  if (moveName === "Constrict") {
    return {
      name: moveName,
      power: 10,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //hits 4-5 times
  }
  if (moveName === "Amnesia") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserSpc"
    };
  }
  if (moveName === "Kinesis") {
    return {
      name: moveName,
      power: 0,
      type: "psychic",
      accuracy: 100,
      pp: 15,
      statusEff: "lowersTargetAcc"
    };
  }
  if (moveName === "Soft Boiled") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "High Jump-kick") {
    return {
      name: moveName,
      power: 130,
      type: "fighting",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Glare") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 75,
      pp: 35,
      statusEff: ""
    }; //causes PARALYZE
  }
  if (moveName === "Dream Eater") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Poison Gas") {
    return {
      name: moveName,
      power: 0,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //causes poison
  }
  if (moveName === "Barrage") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Leech Life") {
    return {
      name: moveName,
      power: 80,
      type: "bug",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    }; //add 1/2 damage back to hp
  }
  if (moveName === "Lovely Kiss") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sky Attack") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Transform") {
    return {
      name: moveName,
      power: 120,
      type: "normal",
      accuracy: 80,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bubble") {
    return {
      name: moveName,
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 30,
      statusEff: "lowerTargetSpd"
    }; //may lower speed
  }
  if (moveName === "Dizzy Punch") {
    return {
      name: moveName,
      power: 40,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spore") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flash") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Psywave") {
    return {
      name: moveName,
      power: 65,
      type: "psychic",
      accuracy: 80,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Splash") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //does nothing in battle
  }
  if (moveName === "Acid Armor") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Crabhammer") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Explosion") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fury Swipes") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bonemerang") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rest") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    }; //recovers all HP, puts user to sleep
  }
  if (moveName === "Rock Slide") {
    return {
      name: moveName,
      power: 40,
      type: "rock",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hyper Fang") {
    return {
      name: moveName,
      power: 80,
      type: "normal",
      accuracy: 90,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Sharpen") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Conversion") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Tri Attack") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Super Fang") {
    return {
      name: moveName,
      power: 70,
      type: "normal",
      accuracy: 90,
      pp: 10,
      statusEff: ""
    };
  }
  if (moveName === "Slash") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Substitute") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Struggle") {
    return {
      name: moveName,
      power: 10,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sketch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Triple Kick") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Thief") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spider Web") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mind Reader") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Nightmare") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flame Wheel") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Snore") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Curse") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flail") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Conversion 2") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aeroblast") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Cotton Spore") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Reversal") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spite") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Powder Snow") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Protect") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mach Punch") {
    return {
      name: moveName,
      power: 40,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Scary Face") {
    return {
      name: moveName,
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersUserAtk"
    };
  }
  if (moveName === "Feint Attack") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sweet Kiss") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Belly Drum") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sludge Bomb") {
    return {
      name: moveName,
      power: 65,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sludge Wave") {
    return {
      name: moveName,
      power: 60,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mud Slap") {
    return {
      name: moveName,
      power: 20,
      type: "ground",
      accuracy: 100,
      pp: 10,
      statusEff: "lowersTargetAcc"
    };
  }
  if (moveName === "Octazooka") {
    return {
      name: moveName,
      power: 70,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spikes") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Zap Cannon") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Foresight") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Destiny Bond") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Perish Song") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Icy Wind") {
    return {
      name: moveName,
      power: 55,
      type: "ice",
      accuracy: 95,
      pp: 15,
      statusEff: "lowersTargetSpd"
    };
  }
  if (moveName === "Detect") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bone Rush") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Lock On") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Outrage") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sandstorm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Giga Drain") {
    return {
      name: moveName,
      power: 75,
      type: "grass",
      accuracy: 100,
      pp: 10,
      statusEff: ""
    }; //adds 1/2 damage back to hp
  }
  if (moveName === "Endure") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Charm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rollout") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "False Swipe") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Swagger") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Milk Drink") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spark") {
    return {
      name: moveName,
      power: 65,
      type: "eletric",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //may cause PARALYZE
  }
  if (moveName === "Fury Cutter") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Steel Wing") {
    return {
      name: moveName,
      power: 70,
      type: "steel",
      accuracy: 90,
      pp: 25,
      statusEff: "raisesUserDef"
    };
  }
  if (moveName === "Mean Look") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Attract") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sleep Talk") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heal Bell") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Return") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Present") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Frustration") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Safeguard") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Pain Split") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sacred Fire") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magnitude") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dynamic Punch") {
    return {
      name: moveName,
      power: 100,
      type: "fighting",
      accuracy: 50,
      pp: 5,
      statusEff: ""
    }; //may CONFUSION user
  }
  if (moveName === "Megahorn") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dragon Breath") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Baton Pass") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Encore") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Pursuit") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rapid Spin") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sweet Scent") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Iron Tail") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Metal Claw") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Vital Throw") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Morning Sun") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Synthesis") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Moonlight") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hidden Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Cross Chop") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Twister") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rain Dance") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sunny Day") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Crunch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mirror Coat") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Psych Up") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Extremespeed") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Ancient Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Shadow Ball") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Future Sight") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rock Smash") {
    return {
      name: moveName,
      power: 40,
      type: "fighting",
      accuracy: 100,
      pp: 15,
      statusEff: "lowersTargetDef"
    };
  }
  if (moveName === "Whirlpool") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Beat Up") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fake Out") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Uproar") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Stockpile") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spit Up") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Swallow") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heat Wave") {
    return {
      name: moveName,
      power: 95,
      type: "fire",
      accuracy: 90,
      pp: 10,
      statusEff: ""
    }; //may cause BURN
  }
  if (moveName === "Hail") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Torment") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flatters") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Will O-wisp") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Memento") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Facade") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Focus Punch") {
    return {
      name: moveName,
      power: 150,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Smellingsalt") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Follow Me") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Nature Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Charge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Taunt") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Helping Hand") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Trick") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Role Play") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wish") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Assist") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Ingrain") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Superpower") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magic Coat") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Recycle") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Revenge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Brick Break") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Yawn") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Knock Off") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Endeavor") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Eruption") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Skill Swap") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Imprison") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Refresh") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Grudge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Snatch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Secret Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dive") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Arm Thrust") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Camouflage") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Tail Glow") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Luster Purge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mist Ball") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Feather Dance") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Teeter Dance") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Blaze Kick") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mud Sport") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Ice Ball") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Needle Arm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Slack Off") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hyper Voice") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Poison Fang") {
    return {
      name: moveName,
      power: 50,
      type: "poison",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    }; //causes POISON
  }
  if (moveName === "Crush Claw") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Blast Burn") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hydro Cannon") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Meteor Mash") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Astonish") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Weather Ball") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aromatherapy") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fake Tears") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Air Cutter") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Overheat") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Odor Sleuth") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rock Tomb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Silver Wind") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Metal Sound") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Grass Whistle") {
    return {
      name: moveName,
      power: 40,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Tickle") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Cosmic Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Water Spout") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Signal Beam") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Shadow Punch") {
    return {
      name: moveName,
      power: 60,
      type: "ghost",
      accuracy: 999,
      pp: 20,
      statusEff: ""
    };
  }
  if (moveName === "Extrasensory") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sky Uppercut") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sand Tomb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sheer Cold") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Muddy Water") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bullet Seed") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aerial Ace") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Icicle Spear") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Iron Defense") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Block") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Howl") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dragon Claw") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Frenzy Plant") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bulk Up") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bounce") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mud Shot") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Poison Tail") {
    return {
      name: moveName,
      power: 40,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Covet") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Volt Tackle") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magical Leaf") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Water Sport") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Calm Mind") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Leaf Blade") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dragon Dance") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rock Blast") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Shock Wave") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Water Pulse") {
    return {
      name: moveName,
      power: 60,
      type: "water",
      accuracy: 100,
      pp: 20,
      statusEff: ""
    }; //may CONFUSION target
  }
  if (moveName === "Doom Desire") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Pyscho Boost") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Roost") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Gravity") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Miracle Eye") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wake Up-slap") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hammer Arm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Gyro Ball") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Healing Wish") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Brine") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Natural Gift") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Feint") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Pluck") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Tailwind") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Acupressure") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Meatl Burst") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "U Turn") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Close Combat") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Payback") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Assurance") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Embargo") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fling") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Psycho Shift") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Trump Card") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heal Block") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wring Out") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Trick") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Gastro Acid") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Lucky Chant") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Me First") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Copycat") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Swap") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Guard Swap") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Punishment") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Last Resort") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Worry Seed") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sucker Punch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Toxic Spikes") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heart Swap") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aqua Ring") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magnet Rise") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flare Blitz") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Force Palm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aura Sphere") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rock Polish") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Poison Jab") {
    return {
      name: moveName,
      power: 40,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dark Pulse") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Night Slash") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aqua Tail") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Seed Bomb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Air Slash") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "X Scissor") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bug Buzz") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dragon Pulse") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dragon Rush") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Gem") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Drain Punch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Vacuum Wave") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Focus Blast") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Energy Ball") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Brave Bird") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Earth Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Switcheroo") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Giga Impact") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Nasty Plot") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bullet Punch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Up-punch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Avalanche") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Ice Shard") {
    return {
      name: moveName,
      power: 40,
      type: "ice",
      accuracy: 100,
      pp: 30,
      statusEff: ""
    };
  }
  if (moveName === "Shadow Claw") {
    return {
      name: moveName,
      power: 70,
      type: "ghost",
      accuracy: 100,
      pp: 15,
      statusEff: ""
    };
  }
  if (moveName === "Thunder Fang") {
    return {
      name: moveName,
      power: 65,
      type: "eletric",
      accuracy: 95,
      pp: 15,
      statusEff: ""
    }; //may cause PARALYZE
  }
  if (moveName === "Ice Fang") {
    return {
      name: moveName,
      power: 65,
      type: "ice",
      accuracy: 95,
      pp: 15,
      statusEff: ""
    }; //may cause FRZN
  }
  if (moveName === "Fire Fang") {
    return {
      name: moveName,
      power: 65,
      type: "fire",
      accuracy: 95,
      pp: 15,
      statusEff: ""
    }; //may cause BURN
  }
  if (moveName === "Shadow Sneak") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mud Bomb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Psycho Cut") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Zen Headbutt") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Mirror Shot") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flash Cannon") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rock Climb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Defog") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Trick Room") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Draco Meteor") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Discharge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Lava Plume") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Leaf Storm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Whip") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rock Wrecker") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Cross Poison") {
    return {
      name: moveName,
      power: 40,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Gunk Shot") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Iron Head") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magnet Bomb") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Stone Edge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Captivate") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Stealth Rock") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Grass Knot") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Chatter") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Judgment") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bug Bite") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Charge Beam") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wood Hammer") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aqua Jet") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Attack Order") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Defend Order") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heal Order") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Head Smash") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Double Hit") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Roar of Time") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spacial Rend") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Lunar Dance") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Crush Grip") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magma Storm") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dark Void") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Seed Flare") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Shadow Force") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Venoshock") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Round") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Echoed Voice") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Grass Pledge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Work Up") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Grassy Terrain") {
    return {
      name: moveName,
      power: 40,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Electric Terrain") {
    return {
      name: moveName,
      power: 40,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Misty Terrain") {
    return {
      name: moveName,
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Confide") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hone Claws") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flame Burst") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flame Charge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Incinerate") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Inferno") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fire Pledge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Water Pledge") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Scald") {
    return {
      name: moveName,
      power: 60,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Smack Down") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dragon Tail") {
    return {
      name: moveName,
      power: 70,
      type: "dragon",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bulldoze") {
    return {
      name: moveName,
      power: 80,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Petal Blizzard") {
    return {
      name: moveName,
      power: 90,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Ominous Wind") {
    return {
      name: moveName,
      power: 60,
      type: "dark",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Sky Drop") {
    return {
      name: moveName,
      power: 60,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Brutal Swing") {
    return {
      name: moveName,
      power: 80,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Electroweb") {
    return {
      name: moveName,
      power: 50,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rage Powder") {
    return {
      name: moveName,
      power: 40,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Quiver Dance") {
    return {
      name: moveName,
      power: 30,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Acrobatics") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Struggle Bug") {
    return {
      name: moveName,
      power: 20,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Infestation") {
    return {
      name: moveName,
      power: 40,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Drill Run") {
    return {
      name: moveName,
      power: 60,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Fell Stinger") {
    return {
      name: moveName,
      power: 50,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hurricane") {
    return {
      name: moveName,
      power: 60,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Retaliate") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Final Gambit") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wild Charge") {
    return {
      name: moveName,
      power: 60,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Coil") {
    return {
      name: moveName,
      power: 30,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Acid Spray") {
    return {
      name: moveName,
      power: 60,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Belch") {
    return {
      name: moveName,
      power: 55,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Electro Ball") {
    return {
      name: moveName,
      power: 55,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Volt Switch") {
    return {
      name: moveName,
      power: 40,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Play Nice") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Play Rough") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Nuzzle") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Chip Away") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Rototiller") {
    return {
      name: moveName,
      power: 50,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Flatter") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Venom Drench") {
    return {
      name: moveName,
      power: 70,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Quash") {
    return {
      name: moveName,
      power: 60,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Smart Strike") {
    return {
      name: moveName,
      power: 55,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wonder Room") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Psyshock") {
    return {
      name: moveName,
      power: 60,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Telekinesis") {
    return {
      name: moveName,
      power: 40,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "After You") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Stored Power") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Bestow") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Disarming Voice") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Moonblast") {
    return {
      name: moveName,
      power: 90,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dazzling Gleam") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Spotlight") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Foul Play") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Hex") {
    return {
      name: moveName,
      power: 60,
      type: "ghost",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Tail Slap") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Baby Doll-eyes") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magic Room") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Quick Guard") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Wide Guard") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Synchronoise") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Soak") {
    return {
      name: moveName,
      power: 50,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Simple Beam") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Clear Smog") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Low Sweep") {
    return {
      name: moveName,
      power: 45,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Smelling Salts") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Dual Chop") {
    return {
      name: moveName,
      power: 30,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Trip") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Stomping Tantrum") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Snarl") {
    return {
      name: moveName,
      power: 20,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Burn Up") {
    return {
      name: moveName,
      power: 55,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Extreme Speed") {
    return {
      name: moveName,
      power: 60,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Circle Throw") {
    return {
      name: moveName,
      power: 60,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Guard Split") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Ally Switch") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heavy Slam") {
    return {
      name: moveName,
      power: 80,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Leaf Tornado") {
    return {
      name: moveName,
      power: 60,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Reflect Type") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Autotomize") {
    return {
      name: moveName,
      power: 55,
      type: "rock",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Steamroller") {
    return {
      name: moveName,
      power: 70,
      type: "rock",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heal Pulse") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Entrainment") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Frost Breath") {
    return {
      name: moveName,
      power: 50,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Shell Smash") {
    return {
      name: moveName,
      power: 60,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Razor Shell") {
    return {
      name: moveName,
      power: 55,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Icicle Crash") {
    return {
      name: moveName,
      power: 60,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Eerie Impulse") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Magnetic Flux") {
    return {
      name: moveName,
      power: 70,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Metal Burst") {
    return {
      name: moveName,
      power: 70,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Power Split") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Heart Stamp") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Draining Kiss") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Aurora Veil") {
    return {
      name: moveName,
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Storm Throw") {
    return {
      name: moveName,
      power: 50,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Freeze Dry") {
    return {
      name: moveName,
      power: 65,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "High Horsepower") {
    return {
      name: moveName,
      power: 75,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Psystrike") {
    return {
      name: moveName,
      power: 70,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  if (moveName === "Laser Focus") {
    return {
      name: moveName,
      power: 50,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: ""
    };
  }
  console.log("MOVE NOT FOUND: ", moveName);
};

export { CreateMoves };

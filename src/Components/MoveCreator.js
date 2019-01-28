const CreateMoves = moveName => {
  if (moveName === "Pound") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Karate Chop") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "fighting",
      accuracy: 100,
      pp: 25,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Double Slap") {
    return {
      name: moveName,
      category: "physical",
      power: 15,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Comet Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 18,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mega Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Pay Day") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fire Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 75,
      type: "fire",
      accuracy: 100,
      pp: 15,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Ice Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 75,
      type: "ice",
      accuracy: 100,
      pp: 15,
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Thunder Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 75,
      type: "electric",
      accuracy: 100,
      pp: 15,
      statusEff: "Paralyze",
      statusProb: 0.1
    };
  }
  if (moveName === "Scratch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Vice Grip") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Guillotine") {
    return {
      name: moveName,
      category: "physical",
      power: 999,
      type: "normal",
      accuracy: 20,
      pp: 5,
      statusEff: "",
      statusProb: 1
    }; //one-hit KO if lands
  }
  if (moveName === "Razor Wind") {
    return {
      name: moveName,
      category: "special",
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Swords Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 25,
      statusEff: "raisesUserAtk",
      statusProb: 1
    };
  }
  if (moveName === "Cut") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "normal",
      accuracy: 95,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Gust") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "flying",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wing Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "flying",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Whirlwind") {
    return {
      name: moveName,
      category: "special",
      power: 0,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fly") {
    return {
      name: moveName,
      category: "physical",
      power: 90,
      type: "flying",
      accuracy: 95,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bind") {
    return {
      name: moveName,
      category: "physical",
      power: 15,
      type: "normal",
      accuracy: 85,
      pp: 20,
      statusEff: "Bound",
      statusProb: 1
    }; //hits for 2-5 turns
  }
  if (moveName === "Slam") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Vine Whip") {
    return {
      name: moveName,
      category: "physical",
      power: 45,
      type: "grass",
      accuracy: 100,
      pp: 25,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Stomp") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Double Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 30,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    }; //hits 2 times in one turn
  }
  if (moveName === "Mega Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 120,
      type: "normal",
      accuracy: 75,
      pp: 5,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Jump Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "fighting",
      accuracy: 95,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rolling Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "fighting",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sand Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "ground",
      accuracy: 100,
      pp: 15,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    }; //lowers accuracy
  }
  if (moveName === "Headbutt") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Horn Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "normal",
      accuracy: 100,
      pp: 25,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fury Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 15,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //hits 2-5 times
  }
  if (moveName === "Horn Drill") {
    return {
      name: moveName,
      category: "physical",
      power: 999,
      type: "normal",
      accuracy: 20,
      pp: 5,
      statusEff: "",
      statusProb: 1
    }; //One-hit KO if lands
  }
  if (moveName === "Tackle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Body Slam") {
    return {
      name: moveName,
      category: "physical",
      power: 85,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "Paralyze",
      statusProb: 0.3
    };
  }
  if (moveName === "Wrap") {
    return {
      name: moveName,
      category: "physical",
      power: 15,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "Bound",
      statusProb: 1
    }; //hits 4-5 times
  }
  if (moveName === "Take Down") {
    return {
      name: moveName,
      category: "physical",
      power: 90,
      type: "normal",
      accuracy: 85,
      pp: 20,
      statusEff: "recoil",
      statusProb: 1
    }; //user receives recoil (10% of damage dealt)
  }
  if (moveName === "Thrash") {
    return {
      name: moveName,
      category: "physical",
      power: 120,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "ConfusionUser",
      statusProb: 1
    };
  }
  if (moveName === "Double Edge") {
    return {
      name: moveName,
      category: "physical",
      power: 120,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "recoil",
      statusProb: 1
    }; //causes recoil
  }
  if (moveName === "Tail Whip") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "lowersTargetDef",
      statusProb: 1
    };
  }
  if (moveName === "Poison Sting") {
    return {
      name: moveName,
      category: "physical",
      power: 15,
      type: "poison",
      accuracy: 100,
      pp: 30,
      statusEff: "Poison",
      statusProb: 0.4
    };
  }
  if (moveName === "Twineedle") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "bug",
      accuracy: 100,
      pp: 20,
      statusEff: "Poison",
      statusProb: 0.2
    };
  }
  if (moveName === "Pin Missile") {
    return {
      name: moveName,
      category: "physical",
      power: 25,
      type: "bug",
      accuracy: 95,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //hits 2-5 times
  }
  if (moveName === "Leer") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "lowersTargetDef",
      statusProb: 1
    }; //lowers defense
  }
  if (moveName === "Bite") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "dark",
      accuracy: 100,
      pp: 25,
      statusEff: "",
      statusProb: 1
    }; //may cause flinch
  }
  if (moveName === "Growl") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 40,
      statusEff: "lowersTargetAtk",
      statusProb: 1
    }; //lowers attack
  }
  if (moveName === "Roar") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "lowersTargetAtk",
      statusProb: 1
    }; //greatly lowers attack
  }
  if (moveName === "Sing") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 55,
      pp: 15,
      statusEff: "Sleep",
      statusProb: 1
    };
  }
  if (moveName === "Supersonic") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 55,
      pp: 20,
      statusEff: "ConfusionTarget",
      statusProb: 1
    };
  }
  if (moveName === "Sonic Boom") {
    return {
      name: moveName,
      category: "physical",
      power: 20,
      type: "normal",
      accuracy: 90,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //always deals 20 hp
  }
  if (moveName === "Disable") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    }; //prevents random move from being used
  }
  if (moveName === "Acid") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "poison",
      accuracy: 100,
      pp: 30,
      statusEff: "lowersTargetSpcDef",
      statusProb: 0.2
    };
  }
  if (moveName === "Ember") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "fire",
      accuracy: 100,
      pp: 25,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Flamethrower") {
    return {
      name: moveName,
      category: "special",
      power: 90,
      type: "fire",
      accuracy: 100,
      pp: 15,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Mist") {
    return {
      name: moveName,
      category: "special",
      power: 0,
      type: "ice",
      accuracy: 100,
      pp: 30,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    };
  }
  if (moveName === "Water Gun") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 25,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hydro Pump") {
    return {
      name: moveName,
      category: "special",
      power: 110,
      type: "water",
      accuracy: 80,
      pp: 5,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Surf") {
    return {
      name: moveName,
      category: "special",
      power: 90,
      type: "water",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ice Beam") {
    return {
      name: moveName,
      category: "special",
      power: 90,
      type: "ice",
      accuracy: 100,
      pp: 10,
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Blizzard") {
    return {
      name: moveName,
      category: "special",
      power: 110,
      type: "ice",
      accuracy: 70,
      pp: 5,
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Psybeam") {
    return {
      name: moveName,
      category: "special",
      power: 65,
      type: "psychic",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bubble Beam") {
    return {
      name: moveName,
      category: "special",
      power: 65,
      type: "water",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aurora Beam") {
    return {
      name: moveName,
      category: "special",
      power: 65,
      type: "ice",
      accuracy: 100,
      pp: 20,
      statusEff: "lowersTargetAtk",
      statusProb: 0.1
    };
  }
  if (moveName === "Hyper Beam") {
    return {
      name: moveName,
      category: "special",
      power: 150,
      type: "normal",
      accuracy: 90,
      pp: 5,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Peck") {
    return {
      name: moveName,
      category: "physical",
      power: 35,
      type: "flying",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Drill Peck") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "flying",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Submission") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "fighting",
      accuracy: 80,
      pp: 20,
      statusEff: "recoil",
      statusProb: 1
    }; //cause recoil
  }
  if (moveName === "Low Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Counter") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Seismic Toss") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "fighting",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //damage equal to users level
  }
  if (moveName === "Strength") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Absorb") {
    return {
      name: moveName,
      category: "special",
      power: 20,
      type: "grass",
      accuracy: 100,
      pp: 25,
      statusEff: "recoverDamage",
      statusProb: 1
    }; //adds 1/2 damage done back to users HP
  }
  if (moveName === "Mega Drain") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "grass",
      accuracy: 100,
      pp: 15,
      statusEff: "recoverDamage",
      statusProb: 1
    }; //adds 1/2 damage done back to users HP
  }
  if (moveName === "Leech Seed") {
    return {
      name: moveName,
      category: "special",
      power: 15,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: "recoverDamage",
      statusProb: 1
    }; //adds 1/2 damage done back to users HP
  }
  if (moveName === "Growth") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "grass",
      accuracy: 999,
      pp: 40,
      statusEff: "raisesUserSpcAtk",
      statusProb: 1
    };
  }
  if (moveName === "Razor Leaf") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "grass",
      accuracy: 95,
      pp: 25,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Solar Beam") {
    return {
      name: moveName,
      category: "special",
      power: 120,
      type: "grass",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Poison Powder") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "poison",
      accuracy: 75,
      pp: 30,
      statusEff: "Poison",
      statusProb: 1
    };
  }
  if (moveName === "Stun Spore") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "grass",
      accuracy: 75,
      pp: 30,
      statusEff: "Paralyze",
      statusProb: 1
    };
  }
  if (moveName === "Sleep Powder") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "grass",
      accuracy: 75,
      pp: 15,
      statusEff: "Sleep",
      statusProb: 1
    };
  }
  if (moveName === "Petal Dance") {
    return {
      name: moveName,
      category: "special",
      power: 120,
      type: "grass",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "String Shot") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "bug",
      accuracy: 95,
      pp: 40,
      statusEff: "lowersTargetSpd",
      statusProb: 1
    }; //lowers speed
  }
  if (moveName === "Dragon Rage") {
    return {
      name: moveName,
      category: "special",
      power: 60,
      type: "dragon",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //alaways does 40hp damage
  }
  if (moveName === "Fire Spin") {
    return {
      name: moveName,
      category: "special",
      power: 35,
      type: "fire",
      accuracy: 100,
      pp: 15,
      statusEff: "Bound",
      statusProb: 1
    }; //hits for 2-5 turns
  }
  if (moveName === "Thunder Shock") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "electric",
      accuracy: 100,
      pp: 30,
      statusEff: "Paralyze",
      statusProb: 0.1
    };
  }
  if (moveName === "Thunderbolt") {
    return {
      name: moveName,
      category: "special",
      power: 90,
      type: "electric",
      accuracy: 100,
      pp: 15,
      statusEff: "Paralyze",
      statusProb: 0.1
    };
  }
  if (moveName === "Thunder Wave") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "electric",
      accuracy: 90,
      pp: 20,
      statusEff: "Paralyze",
      statusProb: 1
    };
  }
  if (moveName === "Thunder") {
    return {
      name: moveName,
      category: "special",
      power: 110,
      type: "electric",
      accuracy: 100,
      pp: 10,
      statusEff: "Paralyze",
      statusProb: 0.3
    };
  }
  if (moveName === "Rock Throw") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "rock",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Earthquake") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "ground",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fissure") {
    return {
      name: moveName,
      category: "physical",
      power: 999,
      type: "ground",
      accuracy: 20,
      pp: 5,
      statusEff: "",
      statusProb: 1
    }; //One-hit KO if lands
  }
  if (moveName === "Dig") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "ground",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Toxic") {
    return {
      name: moveName,
      category: "special",
      power: 50,
      type: "poison",
      accuracy: 90,
      pp: 10,
      statusEff: "Poison",
      statusProb: 0.2
    };
  }
  if (moveName === "Confusion") {
    return {
      name: moveName,
      category: "special",
      power: 50,
      type: "psychic",
      accuracy: 100,
      pp: 25,
      statusEff: "ConfusionTarget",
      statusProb: 0.3
    };
  }
  if (moveName === "Psychic") {
    return {
      name: moveName,
      category: "special",
      power: 90,
      type: "psychic",
      accuracy: 100,
      pp: 10,
      statusEff: "lowerTargetSpc",
      statusProb: 1
    }; //may lower special
  }
  if (moveName === "Hypnosis") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 60,
      pp: 20,
      statusEff: "Sleep",
      statusProb: 1
    };
  }
  if (moveName === "Meditate") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "psychic",
      accuracy: 999,
      pp: 40,
      statusEff: "raisesUserAtk",
      statusProb: 1
    };
  }
  if (moveName === "Agility") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 30,
      statusEff: "raisesUserSpd",
      statusProb: 1
    }; //raises users speed
  }
  if (moveName === "Quick Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rage") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Teleport") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //Does nothing in battle
  }
  if (moveName === "Night Shade") {
    return {
      name: moveName,
      category: "special",
      power: 50,
      type: "ghost",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mimic") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Screech") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 85,
      pp: 40,
      statusEff: "lowersTargetDef",
      statusProb: 1
    }; //greatly lowers defense
  }
  if (moveName === "Double Team") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 15,
      statusEff: "raisesUserEva",
      statusProb: 1
    }; //raises evasion
  }
  if (moveName === "Recover") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 30,
      statusEff: "recoverHP",
      statusProb: 1
    };
  }
  if (moveName === "Harden") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 30,
      statusEff: "raisesUserDef",
      statusProb: 1
    }; //increases defense
  }
  if (moveName === "Minimize") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 10,
      statusEff: "raisesUserEva",
      statusProb: 1
    }; //increases evasion
  }
  if (moveName === "Smokescreen") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    }; //lowers opponent accuracy
  }
  if (moveName === "Confuse Ray") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "psychic",
      accuracy: 100,
      pp: 10,
      statusEff: "ConfusionTarget",
      statusProb: 1
    };
  }
  if (moveName === "Withdraw") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "water",
      accuracy: 999,
      pp: 30,
      statusEff: "raisesUserDef",
      statusProb: 1
    }; //raises defense
  }
  if (moveName === "Defense Curl") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 30,
      statusEff: "raisesUserDef",
      statusProb: 1
    }; //raises defense
  }
  if (moveName === "Barrier") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "psychic",
      accuracy: 999,
      pp: 20,
      statusEff: "raisesUserDef",
      statusProb: 1
    };
  }
  if (moveName === "Light Screen") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "psychic",
      accuracy: 999,
      pp: 20,
      statusEff: "raisesUserSpcDef",
      statusProb: 1
    };
  }
  if (moveName === "Haze") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "dark",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    };
  }
  if (moveName === "Reflect") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "psychic",
      accuracy: 999,
      pp: 20,
      statusEff: "raisesUserDef",
      statusProb: 1
    };
  }
  if (moveName === "Focus Energy") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 30,
      statusEff: "raisesUserAtk",
      statusProb: 1
    };
  }
  if (moveName === "Bide") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Metronome") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mirror Move") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Self Destruct") {
    return {
      name: moveName,
      category: "physical",
      power: 200,
      type: "normal",
      accuracy: 100,
      pp: 5,
      statusEff: "FaintsUser",
      statusProb: 1
    };
  }
  if (moveName === "Egg Bomb") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "normal",
      accuracy: 75,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Lick") {
    return {
      name: moveName,
      category: "physical",
      power: 30,
      type: "ghost",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Smog") {
    return {
      name: moveName,
      category: "special",
      power: 30,
      type: "poison",
      accuracy: 70,
      pp: 20,
      statusEff: "Poison",
      statusProb: 0.4
    };
  }
  if (moveName === "Sludge") {
    return {
      name: moveName,
      category: "special",
      power: 65,
      type: "poison",
      accuracy: 100,
      pp: 20,
      statusEff: "Poison",
      statusProb: 0.3
    };
  }
  if (moveName === "Bone Club") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "ground",
      accuracy: 85,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fire Blast") {
    return {
      name: moveName,
      category: "special",
      power: 110,
      type: "fire",
      accuracy: 85,
      pp: 5,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Waterfall") {
    return {
      name: moveName,
      category: "special",
      power: 80,
      type: "water",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Clamp") {
    return {
      name: moveName,
      category: "physical",
      power: 35,
      type: "water",
      accuracy: 85,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Swift") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "normal",
      accuracy: 999,
      pp: 20,
      statusEff: "",
      statusProb: 1
    }; //never misses
  }
  if (moveName === "Skull Bash") {
    return {
      name: moveName,
      category: "physical",
      power: 130,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spike Cannon") {
    return {
      name: moveName,
      category: "physical",
      power: 20,
      type: "normal",
      accuracy: 100,
      pp: 15,
      statusEff: "",
      statusProb: 1
    }; //hits 2-5 times
  }
  if (moveName === "Constrict") {
    return {
      name: moveName,
      category: "physical",
      power: 10,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "Bound",
      statusProb: 1
    }; //hits 4-5 times
  }
  if (moveName === "Amnesia") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 20,
      statusEff: "raisesUserSpcDef",
      statusProb: 1
    };
  }
  if (moveName === "Kinesis") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "psychic",
      accuracy: 100,
      pp: 15,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    };
  }
  if (moveName === "Soft Boiled") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 10,
      statusEff: "recoverHP",
      statusProb: 1
    }; //recovers 1/2 max HP
  }
  if (moveName === "High Jump-kick") {
    return {
      name: moveName,
      category: "physical",
      power: 130,
      type: "fighting",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Glare") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "Paralyze",
      statusProb: 1
    };
  }
  if (moveName === "Dream Eater") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Poison Gas") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "poison",
      accuracy: 90,
      pp: 40,
      statusEff: "Poison",
      statusProb: 1
    };
  }
  if (moveName === "Barrage") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Leech Life") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "bug",
      accuracy: 100,
      pp: 10,
      statusEff: "recoverDamage",
      statusProb: 1
    }; //add 1/2 damage back to hp
  }
  if (moveName === "Lovely Kiss") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 75,
      pp: 10,
      statusEff: "Sleep",
      statusProb: 1
    };
  }
  if (moveName === "Sky Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 140,
      type: "flying",
      accuracy: 90,
      pp: 5,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Transform") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bubble") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 30,
      statusEff: "lowersTargetSpd",
      statusProb: 1
    };
  }
  if (moveName === "Dizzy Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "ConfusionTarget",
      statusProb: 0.2
    };
  }
  if (moveName === "Spore") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "grass",
      accuracy: 100,
      pp: 15,
      statusEff: "Sleep",
      statusProb: 1
    };
  }
  if (moveName === "Flash") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    };
  }
  if (moveName === "Psywave") {
    return {
      name: moveName,
      category: "special",
      power: 65,
      type: "psychic",
      accuracy: 80,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Splash") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "water",
      accuracy: 100,
      pp: 40,
      statusEff: "",
      statusProb: 1
    }; //does nothing in battle
  }
  if (moveName === "Acid Armor") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "poison",
      accuracy: 100,
      pp: 20,
      statusEff: "raisesUserDef",
      statusProb: 1
    };
  }
  if (moveName === "Crabhammer") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "water",
      accuracy: 90,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Explosion") {
    return {
      name: moveName,
      category: "physical",
      power: 250,
      type: "normal",
      accuracy: 100,
      pp: 5,
      statusEff: "FaintsUser",
      statusProb: 1
    };
  }
  if (moveName === "Fury Swipes") {
    return {
      name: moveName,
      category: "physical",
      power: 18,
      type: "normal",
      accuracy: 80,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bonemerang") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "ground",
      accuracy: 90,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rest") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 10,
      statusEff: "Rest",
      statusProb: 1
    }; //recovers all HP, puts user to sleep
  }
  if (moveName === "Rock Slide") {
    return {
      name: moveName,
      category: "physical",
      power: 75,
      type: "rock",
      accuracy: 90,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hyper Fang") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "normal",
      accuracy: 90,
      pp: 15,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sharpen") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 999,
      pp: 30,
      statusEff: "raisesUserAtk",
      statusProb: 1
    };
  }
  if (moveName === "Conversion") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 30,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Tri Attack") {
    return {
      name: moveName,
      category: "special",
      power: 80,
      type: "normal",
      accuracy: 100,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Super Fang") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "normal",
      accuracy: 90,
      pp: 10,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Slash") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "normal",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Substitute") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Struggle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sketch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Triple Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Thief") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spider Web") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mind Reader") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Nightmare") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flame Wheel") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Snore") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Curse") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flail") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Conversion 2") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aeroblast") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Cotton Spore") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Reversal") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spite") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Powder Snow") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Protect") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mach Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Scary Face") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "lowersTargetAtk",
      statusProb: 1
    };
  }
  if (moveName === "Feint Attack") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sweet Kiss") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "fairy",
      accuracy: 75,
      pp: 35,
      statusEff: "ConfusionTarget",
      statusProb: 1
    };
  }
  if (moveName === "Belly Drum") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sludge Bomb") {
    return {
      name: moveName,
      category: "special",
      power: 90,
      type: "poison",
      accuracy: 100,
      pp: 10,
      statusEff: "Poison",
      statusProb: 0.3
    };
  }
  if (moveName === "Sludge Wave") {
    return {
      name: moveName,
      category: "special",
      power: 95,
      type: "poison",
      accuracy: 100,
      pp: 10,
      statusEff: "Poison",
      statusProb: 0.3
    };
  }
  if (moveName === "Mud Slap") {
    return {
      name: moveName,
      category: "physical",
      power: 20,
      type: "ground",
      accuracy: 100,
      pp: 10,
      statusEff: "lowersTargetAcc",
      statusProb: 1
    };
  }
  if (moveName === "Octazooka") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spikes") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Zap Cannon") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Foresight") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Destiny Bond") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Perish Song") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Icy Wind") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "ice",
      accuracy: 95,
      pp: 15,
      statusEff: "lowersTargetSpd",
      statusProb: 1
    };
  }
  if (moveName === "Detect") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bone Rush") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Lock On") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Outrage") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sandstorm") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Giga Drain") {
    return {
      name: moveName,
      category: "special",
      power: 75,
      type: "grass",
      accuracy: 100,
      pp: 10,
      statusEff: "recoverDamage",
      statusProb: 1
    }; //adds 1/2 damage done back to users HP
  }
  if (moveName === "Endure") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Charm") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rollout") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "False Swipe") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Swagger") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Milk Drink") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spark") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "eletric",
      accuracy: 100,
      pp: 35,
      statusEff: "Paralyze",
      statusProb: 0.1
    };
  }
  if (moveName === "Fury Cutter") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Steel Wing") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "steel",
      accuracy: 90,
      pp: 25,
      statusEff: "raisesUserDef",
      statusProb: 1
    };
  }
  if (moveName === "Mean Look") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Attract") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sleep Talk") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heal Bell") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Return") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Present") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Frustration") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Safeguard") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Pain Split") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sacred Fire") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "fire",
      accuracy: 95,
      pp: 35,
      statusEff: "Burn",
      statusProb: 0.5
    };
  }
  if (moveName === "Magnitude") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dynamic Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 100,
      type: "fighting",
      accuracy: 50,
      pp: 5,
      statusEff: "ConfusionTarget",
      statusProb: 1
    };
  }
  if (moveName === "Megahorn") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dragon Breath") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Baton Pass") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Encore") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Pursuit") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rapid Spin") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sweet Scent") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Iron Tail") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Metal Claw") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Vital Throw") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Morning Sun") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Synthesis") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Moonlight") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hidden Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Cross Chop") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Twister") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rain Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sunny Day") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "fire",
      accuracy: 999,
      pp: 35,
      statusEff: "raisesUserSpcAtk",
      statusProb: 1
    };
  }
  if (moveName === "Crunch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mirror Coat") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Psych Up") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Extremespeed") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ancient Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Shadow Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Future Sight") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rock Smash") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "fighting",
      accuracy: 100,
      pp: 15,
      statusEff: "lowersTargetDef",
      statusProb: 1
    };
  }
  if (moveName === "Whirlpool") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Beat Up") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fake Out") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Uproar") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Stockpile") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spit Up") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Swallow") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heat Wave") {
    return {
      name: moveName,
      category: "physical",
      power: 95,
      type: "fire",
      accuracy: 90,
      pp: 35,
      statusEff: "",
      statusProb: 0.1
    };
  }
  if (moveName === "Hail") {
    return {
      name: moveName,
      category: "special",
      power: 50,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Torment") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flatters") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Will O-wisp") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "fire",
      accuracy: 85,
      pp: 5,
      statusEff: "Burn",
      statusProb: 1
    };
  }
  if (moveName === "Memento") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Facade") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Focus Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 150,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Smellingsalt") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Follow Me") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Nature Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Charge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Taunt") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Helping Hand") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Trick") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Role Play") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wish") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Assist") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ingrain") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Superpower") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Magic Coat") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Recycle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Revenge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Brick Break") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Yawn") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Knock Off") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Endeavor") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Eruption") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Skill Swap") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Imprison") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Refresh") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Grudge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Snatch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Secret Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dive") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Arm Thrust") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Camouflage") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Tail Glow") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Luster Purge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mist Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Feather Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Teeter Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Blaze Kick") {
    return {
      name: moveName,
      category: "physical",
      power: 85,
      type: "fire",
      accuracy: 90,
      pp: 35,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Mud Sport") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ice Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 30,
      type: "ice",
      accuracy: 90,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Needle Arm") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Slack Off") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hyper Voice") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Poison Fang") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "poison",
      accuracy: 100,
      pp: 15,
      statusEff: "Poison",
      statusProb: 0.5
    };
  }
  if (moveName === "Crush Claw") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Blast Burn") {
    return {
      name: moveName,
      category: "special",
      power: 150,
      type: "fire",
      accuracy: 90,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hydro Cannon") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Meteor Mash") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Astonish") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Weather Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aromatherapy") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fake Tears") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Air Cutter") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Overheat") {
    return {
      name: moveName,
      category: "special",
      power: 130,
      type: "fire",
      accuracy: 90,
      pp: 35,
      statusEff: "lowersUserSpcAtk",
      statusProb: 1
    };
  }
  if (moveName === "Odor Sleuth") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rock Tomb") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Silver Wind") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Metal Sound") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Grass Whistle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Tickle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Cosmic Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Water Spout") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Signal Beam") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Shadow Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "ghost",
      accuracy: 999,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Extrasensory") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sky Uppercut") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sand Tomb") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sheer Cold") {
    return {
      name: moveName,
      category: "special",
      power: 999,
      type: "ice",
      accuracy: 20,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Muddy Water") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bullet Seed") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aerial Ace") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Icicle Spear") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Iron Defense") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Block") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Howl") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dragon Claw") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Frenzy Plant") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bulk Up") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bounce") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mud Shot") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Poison Tail") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: "Poison",
      statusProb: 0.1
    };
  }
  if (moveName === "Covet") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Volt Tackle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Magical Leaf") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Water Sport") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Calm Mind") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Leaf Blade") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dragon Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rock Blast") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Shock Wave") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Water Pulse") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "water",
      accuracy: 100,
      pp: 20,
      statusEff: "ConfusionTarget",
      statusProb: 0.2
    };
  }
  if (moveName === "Doom Desire") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Pyscho Boost") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Roost") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Gravity") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Miracle Eye") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wake Up-slap") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hammer Arm") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Gyro Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Healing Wish") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Brine") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Natural Gift") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Feint") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Pluck") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Tailwind") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Acupressure") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Meatl Burst") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "U Turn") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Close Combat") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Payback") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Assurance") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Embargo") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fling") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Psycho Shift") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Trump Card") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heal Block") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wring Out") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Trick") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Gastro Acid") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Lucky Chant") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Me First") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Copycat") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Swap") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Guard Swap") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Punishment") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Last Resort") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Worry Seed") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sucker Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Toxic Spikes") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heart Swap") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aqua Ring") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "water",
      accuracy: 999,
      pp: 35,
      statusEff: "recoverHP",
      statusProb: 1
    };
  }
  if (moveName === "Magnet Rise") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flare Blitz") {
    return {
      name: moveName,
      category: "physical",
      power: 120,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: "recoil",
      statusProb: 1
    };
  }
  if (moveName === "Force Palm") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aura Sphere") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rock Polish") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Poison Jab") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: "Poison",
      statusProb: 0.3
    };
  }
  if (moveName === "Dark Pulse") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Night Slash") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aqua Tail") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Seed Bomb") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Air Slash") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "X Scissor") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bug Buzz") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dragon Pulse") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dragon Rush") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Gem") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Drain Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 75,
      type: "fighting",
      accuracy: 100,
      pp: 10,
      statusEff: "recoverDamage",
      statusProb: 1
    };
  }
  if (moveName === "Vacuum Wave") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Focus Blast") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Energy Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Brave Bird") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Earth Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Switcheroo") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Giga Impact") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Nasty Plot") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bullet Punch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Up-punch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Avalanche") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ice Shard") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "ice",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Shadow Claw") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "ghost",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Thunder Fang") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "electric",
      accuracy: 95,
      pp: 15,
      statusEff: "Paralyze",
      statusProb: 0.1
    };
  }
  if (moveName === "Ice Fang") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "ice",
      accuracy: 95,
      pp: 15,
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Fire Fang") {
    return {
      name: moveName,
      category: "physical",
      power: 65,
      type: "fire",
      accuracy: 95,
      pp: 15,
      statusEff: "Burn",
      statusProb: 0.1
    };
  }
  if (moveName === "Shadow Sneak") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mud Bomb") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Psycho Cut") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Zen Headbutt") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Mirror Shot") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flash Cannon") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rock Climb") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Defog") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Trick Room") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Draco Meteor") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Discharge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Lava Plume") {
    return {
      name: moveName,
      category: "special",
      power: 80,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: "Burn",
      statusProb: 0.3
    };
  }
  if (moveName === "Leaf Storm") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Whip") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rock Wrecker") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Cross Poison") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: "Poison",
      statusProb: 0.1
    };
  }
  if (moveName === "Gunk Shot") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Iron Head") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Magnet Bomb") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Stone Edge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Captivate") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Stealth Rock") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Grass Knot") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Chatter") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Judgment") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bug Bite") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "bug",
      accuracy: 100,
      pp: 20,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Charge Beam") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wood Hammer") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Aqua Jet") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Attack Order") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Defend Order") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heal Order") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Head Smash") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Double Hit") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Roar of Time") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spacial Rend") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Lunar Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Crush Grip") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Magma Storm") {
    return {
      name: moveName,
      category: "special",
      power: 100,
      type: "fire",
      accuracy: 75,
      pp: 35,
      statusEff: "Bound",
      statusProb: 1
    };
  }
  if (moveName === "Dark Void") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Seed Flare") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Shadow Force") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Venoshock") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Round") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Echoed Voice") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Grass Pledge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Work Up") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Grassy Terrain") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Electric Terrain") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Misty Terrain") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Confide") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hone Claws") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flame Burst") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flame Charge") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: "raisesUserSpd",
      statusProb: 1
    };
  }
  if (moveName === "Incinerate") {
    return {
      name: moveName,
      category: "special",
      power: 60,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: "Burn",
      statusProb: 0.3
    };
  }
  if (moveName === "Inferno") {
    return {
      name: moveName,
      category: "special",
      power: 100,
      type: "normal",
      accuracy: 50,
      pp: 35,
      statusEff: "Burn",
      statusProb: 1
    };
  }
  if (moveName === "Fire Pledge") {
    return {
      name: moveName,
      category: "special",
      power: 80,
      type: "fire",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Water Pledge") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Scald") {
    return {
      name: moveName,
      category: "special",
      power: 80,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "Burn",
      statusProb: 0.3
    };
  }
  if (moveName === "Smack Down") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dragon Tail") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "dragon",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bulldoze") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Petal Blizzard") {
    return {
      name: moveName,
      category: "physical",
      power: 90,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ominous Wind") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "dark",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Sky Drop") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Brutal Swing") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Electroweb") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rage Powder") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Quiver Dance") {
    return {
      name: moveName,
      category: "physical",
      power: 30,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Acrobatics") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Struggle Bug") {
    return {
      name: moveName,
      category: "physical",
      power: 20,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Infestation") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Drill Run") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Fell Stinger") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "bug",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hurricane") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "flying",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Retaliate") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Final Gambit") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wild Charge") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Coil") {
    return {
      name: moveName,
      category: "physical",
      power: 30,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Acid Spray") {
    return {
      name: moveName,
      category: "special",
      power: 40,
      type: "poison",
      accuracy: 100,
      pp: 35, //20
      statusEff: "lowersTargetSpcDef",
      statusProb: 1
    };
  }
  if (moveName === "Belch") {
    return {
      name: moveName,
      category: "special",
      power: 120,
      type: "poison",
      accuracy: 90,
      pp: 35, //10
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Electro Ball") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Volt Switch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Play Nice") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Play Rough") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Nuzzle") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Chip Away") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Rototiller") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Flatter") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "dark",
      accuracy: 100,
      pp: 35, //15
      statusEff: "ConfusionTarget",
      statusProb: 1
    };
  }
  if (moveName === "Venom Drench") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "poison",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Quash") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "ground",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Smart Strike") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wonder Room") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Psyshock") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Telekinesis") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "After You") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Stored Power") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Bestow") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Disarming Voice") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Moonblast") {
    return {
      name: moveName,
      category: "physical",
      power: 90,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dazzling Gleam") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Spotlight") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Foul Play") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Hex") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "ghost",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Tail Slap") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Baby Doll-eyes") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Magic Room") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Quick Guard") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Wide Guard") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Synchronoise") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Soak") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Simple Beam") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Clear Smog") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Low Sweep") {
    return {
      name: moveName,
      category: "physical",
      power: 45,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Smelling Salts") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Dual Chop") {
    return {
      name: moveName,
      category: "physical",
      power: 30,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Trip") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Stomping Tantrum") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Snarl") {
    return {
      name: moveName,
      category: "physical",
      power: 20,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Burn Up") {
    return {
      name: moveName,
      category: "special",
      power: 130,
      type: "fire",
      accuracy: 70,
      pp: 35, //5
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Extreme Speed") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Circle Throw") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Guard Split") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Ally Switch") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heavy Slam") {
    return {
      name: moveName,
      category: "physical",
      power: 80,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Leaf Tornado") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "grass",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Reflect Type") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Autotomize") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "rock",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Steamroller") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "rock",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heal Pulse") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Entrainment") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Frost Breath") {
    return {
      name: moveName,
      category: "special",
      power: 60,
      type: "ice",
      accuracy: 90,
      pp: 35, //10
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Shell Smash") {
    return {
      name: moveName,
      category: "physical",
      power: 60,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Razor Shell") {
    return {
      name: moveName,
      category: "physical",
      power: 55,
      type: "water",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Icicle Crash") {
    return {
      name: moveName,
      category: "physical",
      power: 85,
      type: "ice",
      accuracy: 90,
      pp: 35, //10
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "Eerie Impulse") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Magnetic Flux") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "electric",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Metal Burst") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Power Split") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Heart Stamp") {
    return {
      name: moveName,
      category: "physical",
      power: 40,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Draining Kiss") {
    return {
      name: moveName,
      category: "special",
      power: 50,
      type: "fairy",
      accuracy: 100,
      pp: 35, //10
      statusEff: "recoverDamage",
      statusProb: 1
    };
  }
  if (moveName === "Aurora Veil") {
    return {
      name: moveName,
      category: "physical",
      power: 0,
      type: "ice",
      accuracy: 999,
      pp: 35, //20
      statusEff: "raisesUserSpcDef",
      statusProb: 1
    };
  }
  if (moveName === "Storm Throw") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "fighting",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Freeze Dry") {
    return {
      name: moveName,
      category: "special",
      power: 70,
      type: "ice",
      accuracy: 100,
      pp: 35, //20
      statusEff: "Frozen",
      statusProb: 0.1
    };
  }
  if (moveName === "High Horsepower") {
    return {
      name: moveName,
      category: "physical",
      power: 75,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Psystrike") {
    return {
      name: moveName,
      category: "physical",
      power: 70,
      type: "psychic",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  if (moveName === "Laser Focus") {
    return {
      name: moveName,
      category: "physical",
      power: 50,
      type: "normal",
      accuracy: 100,
      pp: 35,
      statusEff: "",
      statusProb: 1
    };
  }
  console.log("MOVE NOT FOUND: ", moveName);
};

export { CreateMoves };

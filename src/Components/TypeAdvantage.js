const CalcTypeAdvantage = (moveType, targetType1, targetType2) => {
  //type effectiveness: 0 (ineffective), 0.50 (not very effective), 1 (normally effective), 2 (super effective)

  //defaults at 1 for both types
  let type1Advantage = 1;
  let type2Advantage = 1;

  if (moveType === "normal" && targetType1 === "ghost") {
    type1Advantage = 0;
  } else if (moveType === "normal" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "normal" && targetType1 === "rock") {
    type1Advantage = 0.5;
  } else if (moveType === "fighting" && targetType1 === "normal") {
    type1Advantage = 2;
  } else if (moveType === "fighting" && targetType1 === "flying") {
    type1Advantage = 0.5;
  } else if (moveType === "fighting" && targetType1 === "poison") {
    type1Advantage = 0.5;
  } else if (moveType === "fighting" && targetType1 === "rock") {
    type1Advantage = 2;
  } else if (moveType === "fighting" && targetType1 === "bug") {
    type1Advantage = 0.5;
  } else if (moveType === "fighting" && targetType1 === "ghost") {
    type1Advantage = 0;
  } else if (moveType === "fighting" && targetType1 === "steel") {
    type1Advantage = 2;
  } else if (moveType === "fighting" && targetType1 === "psychic") {
    type1Advantage = 0.5;
  } else if (moveType === "fighting" && targetType1 === "ice") {
    type1Advantage = 2;
  } else if (moveType === "fighting" && targetType1 === "dark") {
    type1Advantage = 2;
  } else if (moveType === "flying" && targetType1 === "fighting") {
    type1Advantage = 2;
  } else if (moveType === "flying" && targetType1 === "rock") {
    type1Advantage = 0.5;
  } else if (moveType === "flying" && targetType1 === "bug") {
    type1Advantage = 2;
  } else if (moveType === "flying" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "flying" && targetType1 === "grass") {
    type1Advantage = 2;
  } else if (moveType === "flying" && targetType1 === "electric") {
    type1Advantage = 0.5;
  } else if (moveType === "poison" && targetType1 === "poison") {
    type1Advantage = 0.5;
  } else if (moveType === "poison" && targetType1 === "ground") {
    type1Advantage = 0.5;
  } else if (moveType === "poison" && targetType1 === "rock") {
    type1Advantage = 0.5;
  } else if (moveType === "poison" && targetType1 === "ghost") {
    type1Advantage = 0.5;
  } else if (moveType === "poison" && targetType1 === "steel") {
    type1Advantage = 0;
  } else if (moveType === "poison" && targetType1 === "grass") {
    type1Advantage = 2;
  } else if (moveType === "ground" && targetType1 === "flying") {
    type1Advantage = 0;
  } else if (moveType === "ground" && targetType1 === "poison") {
    type1Advantage = 2;
  } else if (moveType === "ground" && targetType1 === "rock") {
    type1Advantage = 2;
  } else if (moveType === "ground" && targetType1 === "bug") {
    type1Advantage = 0.5;
  } else if (moveType === "ground" && targetType1 === "steel") {
    type1Advantage = 2;
  } else if (moveType === "ground" && targetType1 === "fire") {
    type1Advantage = 2;
  } else if (moveType === "ground" && targetType1 === "grass") {
    type1Advantage = 0.5;
  } else if (moveType === "ground" && targetType1 === "electric") {
    type1Advantage = 2;
  } else if (moveType === "rock" && targetType1 === "fighting") {
    type1Advantage = 0.5;
  } else if (moveType === "rock" && targetType1 === "flying") {
    type1Advantage = 2;
  } else if (moveType === "rock" && targetType1 === "ground") {
    type1Advantage = 0.5;
  } else if (moveType === "rock" && targetType1 === "bug") {
    type1Advantage = 2;
  } else if (moveType === "rock" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "rock" && targetType1 === "fire") {
    type1Advantage = 2;
  } else if (moveType === "rock" && targetType1 === "ice") {
    type1Advantage = 2;
  } else if (moveType === "bug" && targetType1 === "fighting") {
    type1Advantage = 0.5;
  } else if (moveType === "bug" && targetType1 === "flying") {
    type1Advantage = 0.5;
  } else if (moveType === "bug" && targetType1 === "poison") {
    type1Advantage = 0.5;
  } else if (moveType === "bug" && targetType1 === "ghost") {
    type1Advantage = 0.5;
  } else if (moveType === "bug" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "bug" && targetType1 === "fire") {
    type1Advantage = 0.5;
  } else if (moveType === "bug" && targetType1 === "grass") {
    type1Advantage = 2;
  } else if (moveType === "bug" && targetType1 === "psychic") {
    type1Advantage = 2;
  } else if (moveType === "bug" && targetType1 === "dark") {
    type1Advantage = 2;
  } else if (moveType === "ghost" && targetType1 === "normal") {
    type1Advantage = 0;
  } else if (moveType === "ghost" && targetType1 === "ghost") {
    type1Advantage = 2;
  } else if (moveType === "ghost" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "ghost" && targetType1 === "psychic") {
    type1Advantage = 2;
  } else if (moveType === "ghost" && targetType1 === "dark") {
    type1Advantage = 0.5;
  } else if (moveType === "steel" && targetType1 === "rock") {
    type1Advantage = 2;
  } else if (moveType === "steel" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "steel" && targetType1 === "fire") {
    type1Advantage = 0.5;
  } else if (moveType === "steel" && targetType1 === "water") {
    type1Advantage = 0.5;
  } else if (moveType === "steel" && targetType1 === "electric") {
    type1Advantage = 0.5;
  } else if (moveType === "steel" && targetType1 === "ice") {
    type1Advantage = 2;
  } else if (moveType === "fire" && targetType1 === "rock") {
    type1Advantage = 0.5;
  } else if (moveType === "fire" && targetType1 === "bug") {
    type1Advantage = 2;
  } else if (moveType === "fire" && targetType1 === "steel") {
    type1Advantage = 2;
  } else if (moveType === "fire" && targetType1 === "fire") {
    type1Advantage = 0.5;
  } else if (moveType === "fire" && targetType1 === "water") {
    type1Advantage = 0.5;
  } else if (moveType === "fire" && targetType1 === "grass") {
    type1Advantage = 2;
  } else if (moveType === "fire" && targetType1 === "ice") {
    type1Advantage = 2;
  } else if (moveType === "fire" && targetType1 === "dragon") {
    type1Advantage = 0.5;
  } else if (moveType === "water" && targetType1 === "ground") {
    type1Advantage = 2;
  } else if (moveType === "water" && targetType1 === "rock") {
    type1Advantage = 2;
  } else if (moveType === "water" && targetType1 === "fire") {
    type1Advantage = 2;
  } else if (moveType === "water" && targetType1 === "water") {
    type1Advantage = 0.5;
  } else if (moveType === "water" && targetType1 === "grass") {
    type1Advantage = 0.5;
  } else if (moveType === "water" && targetType1 === "dragon") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "flying") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "poison") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "ground") {
    type1Advantage = 2;
  } else if (moveType === "grass" && targetType1 === "rock") {
    type1Advantage = 2;
  } else if (moveType === "grass" && targetType1 === "bug") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "fire") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "water") {
    type1Advantage = 2;
  } else if (moveType === "grass" && targetType1 === "grass") {
    type1Advantage = 0.5;
  } else if (moveType === "grass" && targetType1 === "dragon") {
    type1Advantage = 0.5;
  } else if (moveType === "electric" && targetType1 === "flying") {
    type1Advantage = 2;
  } else if (moveType === "electric" && targetType1 === "ground") {
    type1Advantage = 0;
  } else if (moveType === "electric" && targetType1 === "water") {
    type1Advantage = 2;
  } else if (moveType === "electric" && targetType1 === "grass") {
    type1Advantage = 0.5;
  } else if (moveType === "electric" && targetType1 === "electric") {
    type1Advantage = 0.5;
  } else if (moveType === "electric" && targetType1 === "dragon") {
    type1Advantage = 0.5;
  } else if (moveType === "psychic" && targetType1 === "fighting") {
    type1Advantage = 2;
  } else if (moveType === "psychic" && targetType1 === "poison") {
    type1Advantage = 2;
  } else if (moveType === "psychic" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "psychic" && targetType1 === "psychic") {
    type1Advantage = 0.5;
  } else if (moveType === "psychic" && targetType1 === "dark") {
    type1Advantage = 0;
  } else if (moveType === "ice" && targetType1 === "flying") {
    type1Advantage = 2;
  } else if (moveType === "ice" && targetType1 === "ground") {
    type1Advantage = 2;
  } else if (moveType === "ice" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "ice" && targetType1 === "fire") {
    type1Advantage = 0.5;
  } else if (moveType === "ice" && targetType1 === "water") {
    type1Advantage = 0.5;
  } else if (moveType === "ice" && targetType1 === "grass") {
    type1Advantage = 2;
  } else if (moveType === "ice" && targetType1 === "ice") {
    type1Advantage = 0.5;
  } else if (moveType === "ice" && targetType1 === "dragon") {
    type1Advantage = 2;
  } else if (moveType === "dragon" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "dragon" && targetType1 === "dragon") {
    type1Advantage = 2;
  } else if (moveType === "dark" && targetType1 === "fighting") {
    type1Advantage = 0.5;
  } else if (moveType === "dark" && targetType1 === "ghost") {
    type1Advantage = 2;
  } else if (moveType === "dark" && targetType1 === "steel") {
    type1Advantage = 0.5;
  } else if (moveType === "dark" && targetType1 === "psychic") {
    type1Advantage = 2;
  } else if (moveType === "dark" && targetType1 === "dark") {
    type1Advantage = 0.5;
  }

  if (targetType2 !== undefined) {
    if (moveType === "normal" && targetType2 === "ghost") {
      type2Advantage = 0;
    } else if (moveType === "normal" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "normal" && targetType2 === "rock") {
      type2Advantage = 0.5;
    } else if (moveType === "fighting" && targetType2 === "normal") {
      type2Advantage = 2;
    } else if (moveType === "fighting" && targetType2 === "flying") {
      type2Advantage = 0.5;
    } else if (moveType === "fighting" && targetType2 === "poison") {
      type2Advantage = 0.5;
    } else if (moveType === "fighting" && targetType2 === "rock") {
      type2Advantage = 2;
    } else if (moveType === "fighting" && targetType2 === "bug") {
      type2Advantage = 0.5;
    } else if (moveType === "fighting" && targetType2 === "ghost") {
      type2Advantage = 0;
    } else if (moveType === "fighting" && targetType2 === "steel") {
      type2Advantage = 2;
    } else if (moveType === "fighting" && targetType2 === "psychic") {
      type2Advantage = 0.5;
    } else if (moveType === "fighting" && targetType2 === "ice") {
      type2Advantage = 2;
    } else if (moveType === "fighting" && targetType2 === "dark") {
      type2Advantage = 2;
    } else if (moveType === "flying" && targetType2 === "fighting") {
      type2Advantage = 2;
    } else if (moveType === "flying" && targetType2 === "rock") {
      type2Advantage = 0.5;
    } else if (moveType === "flying" && targetType2 === "bug") {
      type2Advantage = 2;
    } else if (moveType === "flying" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "flying" && targetType2 === "grass") {
      type2Advantage = 2;
    } else if (moveType === "flying" && targetType2 === "electric") {
      type2Advantage = 0.5;
    } else if (moveType === "poison" && targetType2 === "poison") {
      type2Advantage = 0.5;
    } else if (moveType === "poison" && targetType2 === "ground") {
      type2Advantage = 0.5;
    } else if (moveType === "poison" && targetType2 === "rock") {
      type2Advantage = 0.5;
    } else if (moveType === "poison" && targetType2 === "ghost") {
      type2Advantage = 0.5;
    } else if (moveType === "poison" && targetType2 === "steel") {
      type2Advantage = 0;
    } else if (moveType === "poison" && targetType2 === "grass") {
      type2Advantage = 2;
    } else if (moveType === "ground" && targetType2 === "flying") {
      type2Advantage = 0;
    } else if (moveType === "ground" && targetType2 === "poison") {
      type2Advantage = 2;
    } else if (moveType === "ground" && targetType2 === "rock") {
      type2Advantage = 2;
    } else if (moveType === "ground" && targetType2 === "bug") {
      type2Advantage = 0.5;
    } else if (moveType === "ground" && targetType2 === "steel") {
      type2Advantage = 2;
    } else if (moveType === "ground" && targetType2 === "fire") {
      type2Advantage = 2;
    } else if (moveType === "ground" && targetType2 === "grass") {
      type2Advantage = 0.5;
    } else if (moveType === "ground" && targetType2 === "electric") {
      type2Advantage = 2;
    } else if (moveType === "rock" && targetType2 === "fighting") {
      type2Advantage = 0.5;
    } else if (moveType === "rock" && targetType2 === "flying") {
      type2Advantage = 2;
    } else if (moveType === "rock" && targetType2 === "ground") {
      type2Advantage = 0.5;
    } else if (moveType === "rock" && targetType2 === "bug") {
      type2Advantage = 2;
    } else if (moveType === "rock" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "rock" && targetType2 === "fire") {
      type2Advantage = 2;
    } else if (moveType === "rock" && targetType2 === "ice") {
      type2Advantage = 2;
    } else if (moveType === "bug" && targetType2 === "fighting") {
      type2Advantage = 0.5;
    } else if (moveType === "bug" && targetType2 === "flying") {
      type2Advantage = 0.5;
    } else if (moveType === "bug" && targetType2 === "poison") {
      type2Advantage = 0.5;
    } else if (moveType === "bug" && targetType2 === "ghost") {
      type2Advantage = 0.5;
    } else if (moveType === "bug" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "bug" && targetType2 === "fire") {
      type2Advantage = 0.5;
    } else if (moveType === "bug" && targetType2 === "grass") {
      type2Advantage = 2;
    } else if (moveType === "bug" && targetType2 === "psychic") {
      type2Advantage = 2;
    } else if (moveType === "bug" && targetType2 === "dark") {
      type2Advantage = 2;
    } else if (moveType === "ghost" && targetType2 === "normal") {
      type2Advantage = 0;
    } else if (moveType === "ghost" && targetType2 === "ghost") {
      type2Advantage = 2;
    } else if (moveType === "ghost" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "ghost" && targetType2 === "psychic") {
      type2Advantage = 2;
    } else if (moveType === "ghost" && targetType2 === "dark") {
      type2Advantage = 0.5;
    } else if (moveType === "steel" && targetType2 === "rock") {
      type2Advantage = 2;
    } else if (moveType === "steel" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "steel" && targetType2 === "fire") {
      type2Advantage = 0.5;
    } else if (moveType === "steel" && targetType2 === "water") {
      type2Advantage = 0.5;
    } else if (moveType === "steel" && targetType2 === "electric") {
      type2Advantage = 0.5;
    } else if (moveType === "steel" && targetType2 === "ice") {
      type2Advantage = 2;
    } else if (moveType === "fire" && targetType2 === "rock") {
      type2Advantage = 0.5;
    } else if (moveType === "fire" && targetType2 === "bug") {
      type2Advantage = 2;
    } else if (moveType === "fire" && targetType2 === "steel") {
      type2Advantage = 2;
    } else if (moveType === "fire" && targetType2 === "fire") {
      type2Advantage = 0.5;
    } else if (moveType === "fire" && targetType2 === "water") {
      type2Advantage = 0.5;
    } else if (moveType === "fire" && targetType2 === "grass") {
      type2Advantage = 2;
    } else if (moveType === "fire" && targetType2 === "ice") {
      type2Advantage = 2;
    } else if (moveType === "fire" && targetType2 === "dragon") {
      type2Advantage = 0.5;
    } else if (moveType === "water" && targetType2 === "ground") {
      type2Advantage = 2;
    } else if (moveType === "water" && targetType2 === "rock") {
      type2Advantage = 2;
    } else if (moveType === "water" && targetType2 === "fire") {
      type2Advantage = 2;
    } else if (moveType === "water" && targetType2 === "water") {
      type2Advantage = 0.5;
    } else if (moveType === "water" && targetType2 === "grass") {
      type2Advantage = 0.5;
    } else if (moveType === "water" && targetType2 === "dragon") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "flying") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "poison") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "ground") {
      type2Advantage = 2;
    } else if (moveType === "grass" && targetType2 === "rock") {
      type2Advantage = 2;
    } else if (moveType === "grass" && targetType2 === "bug") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "fire") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "water") {
      type2Advantage = 2;
    } else if (moveType === "grass" && targetType2 === "grass") {
      type2Advantage = 0.5;
    } else if (moveType === "grass" && targetType2 === "dragon") {
      type2Advantage = 0.5;
    } else if (moveType === "electric" && targetType2 === "flying") {
      type2Advantage = 2;
    } else if (moveType === "electric" && targetType2 === "ground") {
      type2Advantage = 0;
    } else if (moveType === "electric" && targetType2 === "water") {
      type2Advantage = 2;
    } else if (moveType === "electric" && targetType2 === "grass") {
      type2Advantage = 0.5;
    } else if (moveType === "electric" && targetType2 === "electric") {
      type2Advantage = 0.5;
    } else if (moveType === "electric" && targetType2 === "dragon") {
      type2Advantage = 0.5;
    } else if (moveType === "psychic" && targetType2 === "fighting") {
      type2Advantage = 2;
    } else if (moveType === "psychic" && targetType2 === "poison") {
      type2Advantage = 2;
    } else if (moveType === "psychic" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "psychic" && targetType2 === "psychic") {
      type2Advantage = 0.5;
    } else if (moveType === "psychic" && targetType2 === "dark") {
      type2Advantage = 0;
    } else if (moveType === "ice" && targetType2 === "flying") {
      type2Advantage = 2;
    } else if (moveType === "ice" && targetType2 === "ground") {
      type2Advantage = 2;
    } else if (moveType === "ice" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "ice" && targetType2 === "fire") {
      type2Advantage = 0.5;
    } else if (moveType === "ice" && targetType2 === "water") {
      type2Advantage = 0.5;
    } else if (moveType === "ice" && targetType2 === "grass") {
      type2Advantage = 2;
    } else if (moveType === "ice" && targetType2 === "ice") {
      type2Advantage = 0.5;
    } else if (moveType === "ice" && targetType2 === "dragon") {
      type2Advantage = 2;
    } else if (moveType === "dragon" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "dragon" && targetType2 === "dragon") {
      type2Advantage = 2;
    } else if (moveType === "dark" && targetType2 === "fighting") {
      type2Advantage = 0.5;
    } else if (moveType === "dark" && targetType2 === "ghost") {
      type2Advantage = 2;
    } else if (moveType === "dark" && targetType2 === "steel") {
      type2Advantage = 0.5;
    } else if (moveType === "dark" && targetType2 === "psychic") {
      type2Advantage = 2;
    } else if (moveType === "dark" && targetType2 === "dark") {
      type2Advantage = 0.5;
    }
  }

  console.log("Type 1 Advantage Calced to: " + type1Advantage);
  console.log("Type 2 Advantage Calced to: " + type2Advantage);

  return type1Advantage * type2Advantage;
};

export { CalcTypeAdvantage };

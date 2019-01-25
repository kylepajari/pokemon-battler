import React from "react";

const MatchIconWithType = moveType => {
  if (moveType === "bug") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/bugicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "dark") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/darkicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "dragon") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/dragonicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "electric") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/electricicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "fairy") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/fairyicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "fighting") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/fightingicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "fire") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/fireicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "flying") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/flyingicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "ghost") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/ghosticon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "grass") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/grassicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "ground") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/groundicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "ice") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/iceicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "normal") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/normalicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "psychic") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/physicicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "poison") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/poisonicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "rock") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/rockicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "steel") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/steelicon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
  if (moveType === "water") {
    return (
      <img
        className="type"
        src={require("../TypeLogos/watericon.png")}
        alt={moveType}
        key={moveType}
      />
    );
  }
};

export { MatchIconWithType };

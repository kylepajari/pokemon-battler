import React, { Component } from "react";

const Conditions = (status, isConfused) => {
  let StatusDiv = [];
  if (status === "Poison") {
    StatusDiv.push(
      <span className="badge badge-secondary poison" key={status}>
        PSN
      </span>
    );
  } else if (status === "Paralyze") {
    StatusDiv.push(
      <span className="badge badge-secondary paralyze" key={status}>
        PAR
      </span>
    );
  } else if (status === "Burn") {
    StatusDiv.push(
      <span className="badge badge-secondary burn" key={status}>
        BRN
      </span>
    );
  } else if (status === "Frozen") {
    StatusDiv.push(
      <span className="badge badge-secondary frozen" key={status}>
        FRZ
      </span>
    );
  } else if (status === "Sleep") {
    StatusDiv.push(
      <span className="badge badge-secondary sleep" key="sleep">
        SLP
      </span>
    );
  }

  if (isConfused === true) {
    StatusDiv.push(
      <span className="badge badge-secondary" key="confuse">
        CON
      </span>
    );
  }

  return StatusDiv;
};

export { Conditions };

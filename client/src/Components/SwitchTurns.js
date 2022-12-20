import { DisplayMessage } from "./DisplayMessage";
import { HandleAI } from "./AI";
import $ from "jquery";

const SwitchTurns = () => {
    //check last turn moves
    //console.log("switching turns...");

    //reset faintedByRecoilPoisonBurn
    this.handleFaintedByRecoilPoisonBurn(false);
    this.handlePoisonBurn(false);

    //if disabled counters have value, subtract 1 turn from them until reach zero
    if (this.props.playersTurn === "Player One") {
      if (this.state.disabledCounterP1 > 0) {
        this.setState({ disabledCounterP1: this.state.disabledCounterP1 - 1 });
        if (this.state.disabledCounterP1 - 1 === 0) {
          DisplayMessage(
            this.props.player1Team[this.props.player1CurrentPokemon].name +
              " is disabled no more!"
          );
          let disabledIndex = this.props.player1Team[
            this.state.disabledPokeIndexP1
          ].moves.findIndex((move, i) => {
            if (move.name === "--DISABLED--") {
              return i;
            }
            return undefined;
          });
          this.props.player1Team[this.state.disabledPokeIndexP1].moves[
            disabledIndex
          ].name = this.state.disabledMoveNameP1;
        }
      }
    } else {
      if (this.state.disabledCounterP2 > 0) {
        this.setState({ disabledCounterP2: this.state.disabledCounterP2 - 1 });
        if (this.state.disabledCounterP2 - 1 === 0) {
          DisplayMessage(
            this.props.player2Team[this.props.player2CurrentPokemon].name +
              " is disabled no more!"
          );
          let disabledIndex = this.props.player2Team[
            this.state.disabledPokeIndexP2
          ].moves.findIndex((move, i) => {
            if (move.name === "--DISABLED--") {
              return i;
            }
            return undefined;
          });
          if (disabledIndex !== undefined) {
            this.props.player2Team[this.state.disabledPokeIndexP2].moves[
              disabledIndex
            ].name = this.state.disabledMoveNameP2;
          }
        }
      }
    }

    //switch to next player
    let lastMove = "";
    if (this.props.mode === "Multi") {
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
        lastMove = this.state.lastMovePlayer2;
        this.setState({ lastMovePlayer2: "" });
      } else {
        this.props.setPlayersTurn("Player One");
        lastMove = this.state.lastMovePlayer1;
        this.setState({ lastMovePlayer1: "" });
      }
      if (
        lastMove === "Dig" ||
        lastMove === "Fly" ||
        lastMove === "Sky Attack" ||
        lastMove === "Skull Bash" ||
        lastMove === "Solar Beam"
      ) {
        //console.log("double stage move used last turn");
        //check if pokemon is not fainted, if not, use double stage move
        let poke = null;
        if (this.props.playersTurn === "Player One") {
          poke = this.props.player1Team[this.props.player1CurrentPokemon];
        } else {
          poke = this.props.player2Team[this.props.player2CurrentPokemon];
        }
        if (poke.hp > 0) {
          this.useDoubleMove(lastMove);
        }
      } else {
        setTimeout(
          () => $(document.querySelector(".options")).fadeIn(300),
          500
        );
        setTimeout(
          () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
          500
        );
        $(document.querySelector(".fightButton")).show(500);
        $(document.querySelector(".pkmnButton")).show(500);
        $(document.querySelector(".itemsButton")).show(500);
      }
    } else if (this.props.mode === "Single") {
      //mode is single
      //console.log("mode is single player");
      if (this.props.playersTurn === "Player One") {
        this.props.setPlayersTurn("Player Two");
        lastMove = this.state.lastMovePlayer2;
        this.setState({ lastMovePlayer2: "" });
        this.handleForceUpdate();
        if (
          lastMove === "Dig" ||
          lastMove === "Fly" ||
          lastMove === "Sky Attack" ||
          lastMove === "Skull Bash" ||
          lastMove === "Solar Beam"
        ) {
          //check if pokemon is not fainted, if not, use double stage move
          let poke = null;
          if (this.props.playersTurn === "Player One") {
            poke = this.props.player1Team[this.props.player1CurrentPokemon];
          } else {
            poke = this.props.player2Team[this.props.player2CurrentPokemon];
          }
          if (poke.hp > 0) {
            this.useDoubleMove(lastMove);
          } else {
            console.log("pokemon fainted before using double move");
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          }
        } else {
          if (
            this.state.player2Team[this.props.player2CurrentPokemon].hp <= 0
          ) {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              5300
            );
          } else {
            setTimeout(
              () =>
                HandleAI(
                  this.props.player1CurrentPokemon,
                  this.props.player2CurrentPokemon,
                  this.props.playersTurn,
                  this.handleMoves,
                  this.handlePoisonBurn,
                  this.dealPoisonBurn,
                  this.switchTurns,
                  this.handleForceUpdate,
                  this.state.player1Team,
                  this.state.player2Team,
                  this.props.playerOneName,
                  this.props.playerTwoName,
                  this.resetMultipliers,
                  this.handleTeam,
                  this.props.handleFainted,
                  this.props.mode,
                  this.state.isPoisonBurned,
                  this.checkForStatusEffect,
                  this.props.volume,
                  this.checkWin,
                  this.state.aiUsedMaxPotion,
                  this.state.aiUsedAntidote,
                  this.state.aiUsedBurnHeal,
                  this.state.aiUsedParalyzeHeal,
                  this.state.aiUsedAwakening,
                  this.state.aiUsedIceHeal,
                  this.handleAIUseItems,
                  this.handleUpdateLastMove,
                  this.state.lastMovePlayer1,
                  this.state.lastMovePlayer2
                ),
              500
            );
          }
        }
        $(document.querySelector(".fightButton")).hide(500);
        $(document.querySelector(".pkmnButton")).hide(500);
        $(document.querySelector(".itemsButton")).hide(500);
      } else {
        //console.log("setting turn to player one");
        this.props.setPlayersTurn("Player One");
        lastMove = this.state.lastMovePlayer1;
        this.setState({ lastMovePlayer1: "" });
        if (
          lastMove === "Dig" ||
          lastMove === "Fly" ||
          lastMove === "Sky Attack" ||
          lastMove === "Skull Bash" ||
          lastMove === "Solar Beam"
        ) {
          //check if pokemon is not fainted, if not, use double stage move
          let poke = null;
          if (this.props.playersTurn === "Player One") {
            poke = this.props.player1Team[this.props.player1CurrentPokemon];
          } else {
            poke = this.props.player2Team[this.props.player2CurrentPokemon];
          }
          if (poke.hp > 0) {
            this.useDoubleMove(lastMove);
          }
        } else {
          setTimeout(
            () => $(document.querySelector(".options")).fadeIn(300),
            500
          );
          setTimeout(
            () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
            500
          );
        }
        //console.log("showing options and main menu");
        setTimeout(
          () => $(document.querySelector(".options")).fadeIn(300),
          500
        );
        setTimeout(
          () => $(document.querySelector(".mainmenuButton")).fadeIn(300),
          500
        );
        $(document.querySelector(".fightButton")).show(500);
        $(document.querySelector(".pkmnButton")).show(500);
        $(document.querySelector(".itemsButton")).show(500);
      }
    }
  };

  export { SwitchTurns };
import { DisplayMessage } from "./DisplayMessage";
import Victory from "../Sounds/victory.mp3";
import { PlayLeaderOutro } from "./LeaderOutro";
import $ from "jquery";

  const CheckWin = () => {
    let faintedCountTeam1 = 0;
    let faintedCountTeam2 = 0;
    this.state.player1Team.forEach((poke) => {
      if (poke.fainted) {
        faintedCountTeam1++;
      }
    });
    this.state.player2Team.forEach((poke) => {
      if (poke.fainted) {
        faintedCountTeam2++;
      }
    });

    if (faintedCountTeam1 === this.props.teamSize) {
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        2000
      );
      //everyone on player ones team has fainted
      $(document.querySelector(".options")).fadeOut(300);
      $(document.querySelector(".mainmenuButton")).fadeOut(300);
      //play victory music
      let win = new Audio(Victory);
      if (this.props.volume === 0) {
        win.volume = 0;
      } else {
        win.volume = 1;
      }
      setTimeout(() => win.play(), 2000);
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerOneName + " is out of Pokémon! "
          ),
        2000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerTwoName +
              " defeated " +
              this.props.playerOneName +
              "!"
          ),
        3500
      );
      //reset ai items used
      this.setState({
        aiUsedMaxPotion: false,
        aiUsedAntidote: false,
        aiUsedAwakening: false,
        aiUsedBurnHeal: false,
        aiUsedIceHeal: false,
        aiUsedParalyzeHeal: false,
      });
      setTimeout(() => win.pause(), 6000);
      setTimeout(() => this.props.battleMusic.pause(), 6000);
      setTimeout(() => this.props.returnToMainMenu(), 6000);
    }

    if (faintedCountTeam2 === this.props.teamSize) {
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeIn(500),
        2000
      );
      //everyone on player twos team has fainted
      $(document.querySelector(".options")).fadeOut(300);
      $(document.querySelector(".mainmenuButton")).fadeOut(300);
      //play victory music
      let win = new Audio(Victory);
      if (this.props.volume === 0) {
        win.volume = 0;
      } else {
        win.volume = 1;
      }
      setTimeout(() => win.play(), 2000);
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerTwoName + " is out of Pokémon! "
          ),
        2000
      );
      setTimeout(
        () =>
          $(document.querySelector(".playermessage")).text(
            this.props.playerOneName +
              " defeated " +
              this.props.playerTwoName +
              "!"
          ),
        3500
      );
      setTimeout(
        () => $(document.querySelector(".playermessage")).fadeOut(100),
        5000
      );
      if (this.props.mode === "Single" && this.props.playerTwoName !== "CPU") {
        //if in Single Player
        setTimeout(
          () => $(document.querySelectorAll(".side")).fadeOut(10),
          5000
        );
        setTimeout(
          () => $(document.querySelector(".gymLeaderDiv")).fadeIn(300),
          5000
        );
        setTimeout(() => PlayLeaderOutro(this.props.playerTwoName), 5000);

        //badge earning
        ////////////////////////////////////////////////////////////////

        //get users current badges
        let badgesCount = this.props.badges;
        //increase badge count by 1 if less than 8, give player badge
        if (badgesCount < 13) {
          let earnBadge = false;
          switch (this.props.playerTwoName) {
            case "Brock":
              if (badgesCount === 0) {
                earnBadge = true;
              }
              break;
            case "Misty":
              if (badgesCount === 1) {
                earnBadge = true;
              }
              break;
            case "Lt. Surge":
              if (badgesCount === 2) {
                earnBadge = true;
              }
              break;
            case "Erika":
              if (badgesCount === 3) {
                earnBadge = true;
              }
              break;
            case "Koga":
              if (badgesCount === 4) {
                earnBadge = true;
              }
              break;
            case "Sabrina":
              if (badgesCount === 5) {
                earnBadge = true;
              }
              break;
            case "Blaine":
              if (badgesCount === 6) {
                earnBadge = true;
              }
              break;
            case "Giovanni":
              if (badgesCount === 7) {
                earnBadge = true;
              }
              break;
            case "Lorelei":
              if (badgesCount === 8) {
                earnBadge = true;
              }
              break;
            case "Bruno":
              if (badgesCount === 9) {
                earnBadge = true;
              }
              break;
            case "Agatha":
              if (badgesCount === 10) {
                earnBadge = true;
              }
              break;
            case "Lance":
              if (badgesCount === 11) {
                earnBadge = true;
              }
              break;
            case "Blue":
              if (badgesCount === 12) {
                earnBadge = true;
              }
              break;
            default:
              break;
          }
          if (earnBadge) {
            badgesCount += 1;
            this.props.setBadges(badgesCount);
            this.props.updateBadges(this.props.id, badgesCount);
            localStorage.setItem("Badges", badgesCount);
            $(document.querySelector(".eliteFour")).fadeOut(1);
            let badgeName = this.state.gymBadgeName;
            if (badgeName.includes("Elite")) {
              setTimeout(
                () =>
                  $(
                    DisplayMessage(
                      this.props.playerOneName +
                        " has beaten a member of the Elite Four!"
                    )
                  ),
                16000
              );
            } else {
              setTimeout(
                () =>
                  $(
                    DisplayMessage(
                      this.props.playerOneName +
                        " earned the " +
                        badgeName +
                        "!"
                    )
                  ),
                16000
              );
            }
          }
        }
        setTimeout(() => win.pause(), 20000);
        setTimeout(() => this.props.battleMusic.pause(), 2000);
        this.setState({
          aiUsedAwakening: false,
          aiUsedBurnHeal: false,
          aiUsedMaxPotion: false,
          aiUsedParalyzeHeal: false,
          aiUsedIceHeal: false,
          aiUsedAntidote: false,
        });
        setTimeout(() => this.props.returnToMainMenu(), 20000);
      } else {
        setTimeout(() => win.pause(), 8000);
        setTimeout(() => this.props.battleMusic.pause(), 2000);
        this.setState({
          aiUsedAwakening: false,
          aiUsedBurnHeal: false,
          aiUsedMaxPotion: false,
          aiUsedParalyzeHeal: false,
          aiUsedIceHeal: false,
          aiUsedAntidote: false,
        });
        setTimeout(() => this.props.returnToMainMenu(), 8000);
      }
    }
  };

  export { CheckWin };
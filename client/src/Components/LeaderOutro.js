import { DisplayMessage } from "./DisplayMessage";
import $ from "jquery";

const PlayLeaderOutro = name => {
  let outroMessage1 = "";
  let outroMessage2 = "";
  let outroMessage3 = "";
  switch (name) {
    case "Brock":
      outroMessage1 = "That was a great match!";
      outroMessage2 = "You really gave it your all!";
      outroMessage3 = "Looks like you've proven yourself worthy..";
      break;
    case "Misty":
      outroMessage1 = "Wow! I didn't expect you to win!";
      outroMessage2 = "Congratulations on your victory!";
      outroMessage3 = "I hope we can have a rematch again someday!";
      break;
    case "Lt. Surge":
      outroMessage1 = "That match was electric!";
      outroMessage2 = "Looks like you've got what it takes..";
      outroMessage3 = "You've earned yourself a win, kid!";
      break;
    case "Erika":
      outroMessage1 = "Oh!  You managed to beat my team!";
      outroMessage2 = "Thank you for your challenge!";
      outroMessage3 = "Good luck in future battles!";
      break;
    case "Koga":
      outroMessage1 = "My ultimate Poison team!";
      outroMessage2 = "You beat them!";
      outroMessage3 = "I guess you deserve this...";
      break;
    case "Sabrina":
      outroMessage1 = "No, it's not possible!";
      outroMessage2 = "I forsaw that you would lose this battle!";
      outroMessage3 = "Looks like my powers failed me...";
      break;
    case "Blaine":
      outroMessage1 = "Haha!  What a splendid match!";
      outroMessage2 = "You had me up against the ropes!";
      outroMessage3 = "Next time you won't be so lucky!  Ha!";
      break;
    case "Giovanni":
      outroMessage1 = "...";
      outroMessage2 = "It can't be...beaten by you!  An amateur!";
      outroMessage3 =
        "You've gotten what you came for.  Now get out of my sight...";
      break;
    case "Lorelei":
      outroMessage1 = "That was quite a sight...";
      outroMessage2 = "I'd never thought I'd get beaten like that...";
      outroMessage3 = "Thank you for the excellent match!";
      break;
    case "Bruno":
      outroMessage1 = "What...I lost.  Come on!";
      outroMessage2 = "My Pokémon weren't warmed up yet!  Yeah, that's it!";
      outroMessage3 = "Aw well, a win's a win.  Take it!";
      break;
    case "Agatha":
      outroMessage1 = "I must say I'm impressed!";
      outroMessage2 =
        "It's been along time since I have been beaten in battle.";
      outroMessage3 = "Hurry now child, your greatest test still awaits...";
      break;
    case "Lance":
      outroMessage1 = "Well done!  You managed to beat us all..";
      outroMessage2 = "..but your journey to become Champion is not over yet!";
      outroMessage3 = "There is still one who stands in your way...";
      break;
    case "Blue":
      outroMessage1 = "Woah!  That was intense!";
      outroMessage2 = "It's hard to admit it, but rules are rules...";
      outroMessage3 = "You're the new Pokémon League Champion!";
      break;
    default:
  }
  setTimeout(() => DisplayMessage(outroMessage1, 2000), 1000);
  setTimeout(() => DisplayMessage(outroMessage2, 2000), 4000);
  setTimeout(() => DisplayMessage(outroMessage3, 2000), 7000);
  setTimeout(
    () => $(document.querySelector(".gymLeaderDiv")).fadeOut(1000),
    10000
  );
};

export { PlayLeaderOutro };

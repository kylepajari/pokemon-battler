import { DisplayMessage } from "./DisplayMessage";
import $ from "jquery";

const PlayLeaderIntro = name => {
  let introMessage1 = "";
  let introMessage2 = "";
  let introMessage3 = "";
  let introMessage4 = "";
  switch (name) {
    case "Brock":
      introMessage1 = "I believe in rock hard defense and determination!";
      introMessage2 = "That's why my Pokémon are all Rock-type!";
      introMessage3 = "Do you still want to challenge me?";
      introMessage4 = "Fine then! Show me your best!";
      break;
    case "Misty":
      introMessage1 = "Hi, you're a new face!";
      introMessage2 = "What's your policy on Pokémon?";
      introMessage3 = "Mine is an all-out offensive with Water-types!";
      introMessage4 = "Are you ready?";
      break;
    case "Lt. Surge":
      introMessage1 = "You think your ready for war, kid!";
      introMessage2 = "My Electric-type Pokémon will take charge!";
      introMessage3 = "They zapped my enemies into paralysis!";
      introMessage4 = "The same as I'll do to you!";
      break;
    case "Erika":
      introMessage1 = "Hello there! My name is Erika.";
      introMessage2 = "My Pokémon are of the Grass-type variety.";
      introMessage3 = "You wish to challenge me?";
      introMessage4 = "Very well, but I shall not lose.";
      break;
    case "Koga":
      introMessage1 = "Poison brings steady doom...";
      introMessage2 = "Sleep renders foes helpless...";
      introMessage3 = "Prepare to feel the deadly sting..";
      introMessage4 = "..from my team of Poison-type Pokémon!";
      break;
    case "Sabrina":
      introMessage1 = "I had a vision of your arrival!";
      introMessage2 = "I have had psychic powers since I was a child.";
      introMessage3 = " I dislike fighting...";
      introMessage4 = "...but if you wish, I will show you my powers!";
      break;
    case "Blaine":
      introMessage1 = "Hah! I'm Blaine!";
      introMessage2 = "My Fire-type Pokémon incinerate all challengers!";
      introMessage3 = "You better have a Burn Heal..";
      introMessage4 = "..or you'll be toast!";
      break;
    case "Giovanni":
      introMessage1 = "So you've managed to make it this far.";
      introMessage2 = "No matter...";
      introMessage3 = "If you wish to challenge me, so be it.";
      introMessage4 = "This is the end of the line for you!";
      break;
    default:
  }
  setTimeout(() => DisplayMessage(introMessage1), 1000);
  setTimeout(() => DisplayMessage(introMessage2), 3200);
  setTimeout(() => DisplayMessage(introMessage3), 5400);
  setTimeout(() => DisplayMessage(introMessage4), 7600);
  setTimeout(
    () => $(document.querySelector(".gymLeaderDiv")).fadeOut(1000),
    8600
  );
};

export { PlayLeaderIntro };

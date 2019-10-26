import { DisplayMessage } from "./DisplayMessage";
import $ from "jquery";
import LeaderBattle from "../Sounds/leaderbattle.wav";

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
      introMessage2 = "My Electric-type Pokémon fought beside me in battle!";
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
      introMessage3 = "You better have a Burn Heal handy..";
      introMessage4 = "..because my team is straight fire!";
      break;
    case "Giovanni":
      introMessage1 = "So you've managed to make it this far..";
      introMessage2 =
        "..and you think you can deafeat the leader of Team Rocket?!";
      introMessage3 = "You overestimate your abilites as a trainer.";
      introMessage4 = "This is the end of the line for you!";
      break;
    case "Lorelei":
      introMessage1 = "Welcome to the Pokémon League!";
      introMessage2 = "I am Lorelei of the Elite Four!";
      introMessage3 = "No one can best me when it comes to Ice-type Pokémon!";
      introMessage4 =
        "Your Pokémon will be at my mercy when they are frozen solid!";
      break;
    case "Bruno":
      introMessage1 = "I am Bruno of the Elite Four!";
      introMessage2 = "I've lived and trained with my Fighting-type Pokémon!";
      introMessage3 = "We are prepared face to any challenger!";
      introMessage4 = "We will grind you down with our superior power!";
      break;
    case "Agatha":
      introMessage1 = "Welcome child!";
      introMessage2 = "I am Agatha, the third member of the Elite Four.";
      introMessage3 = "I hope you're not afraid of the dark.";
      introMessage4 = "Or my Ghost-type Pokémon will haunt you forever!";
      break;
    case "Lance":
      introMessage1 =
        "Greetings! I am Lance. The final member of the Elite Four.";
      introMessage2 = "You must be very talented to make it this far.";
      introMessage3 = "I'm looking forward to face you in battle.";
      introMessage4 = "Let's begin!";
      break;
    case "Blue":
      introMessage1 = "Hey there!  My name's Blue!";
      introMessage2 = "I'm the Pokémon League Champ!";
      introMessage3 = "You think you can beat me and take my place?";
      introMessage4 = "Bring it on!";
      break;
    default:
  }
  setTimeout(() => DisplayMessage(introMessage1, 2000), 1000);
  setTimeout(() => DisplayMessage(introMessage2, 2000), 4000);
  setTimeout(() => DisplayMessage(introMessage3, 2000), 7000);
  setTimeout(() => DisplayMessage(introMessage4, 2000), 10000);
  const sound = new Audio(LeaderBattle);
  sound.volume = 0.2;
  setTimeout(() => sound.play(), 11800);
  setTimeout(
    () => $(document.querySelector(".gymLeaderDiv")).fadeOut(1000),
    13000
  );
};

export { PlayLeaderIntro };

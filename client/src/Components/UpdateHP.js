import lowhealth from "../Sounds/BattleSounds/General/LOWHEALTH.wav";

var origBarWidth = 0;

const UpdateHP = (HPbar, value, Volume) => {
  value = parseInt(value);
  if (origBarWidth === 0) {
    origBarWidth = HPbar.css("width");
  }
  HPbar.css("width", value);
  const halfHP = parseInt(origBarWidth) / 2;
  const onefifthHP = parseInt(origBarWidth) / 5;

  if (value >= 0 && value <= onefifthHP) {
    HPbar.removeClass("fullhp");
    HPbar.removeClass("halfhp");
    HPbar.addClass("onefifthhp");
    let boop = new Audio(lowhealth);
    boop.volume = Volume;
    boop.play();
  } else if (value > onefifthHP && value <= halfHP) {
    HPbar.removeClass("fullhp");
    HPbar.removeClass("onefifthhp");
    HPbar.addClass("halfhp");
  } else if (value > halfHP) {
    HPbar.removeClass("onefifthhp");
    HPbar.removeClass("halfhp");
    HPbar.addClass("fullhp");
  }
};

export { UpdateHP };

import $ from "jquery";
const DisplayMessage = (string, time) => {
  let seconds = 1000;
  if (time) {
    seconds = time;
  }

  $(document.querySelector(".message")).fadeIn(500);
  $(document.querySelector(".message")).text(string);
  setTimeout(() => $(document.querySelector(".message")).fadeOut(500), seconds);
  setTimeout(
    () => $(document.querySelector(".message")).text(""),
    seconds + 500
  );
};

export { DisplayMessage };

import $ from "jquery";
const DisplayMessage = string => {
  $(document.querySelector(".message")).fadeIn(500);
  $(document.querySelector(".message")).text(string);
  setTimeout(() => $(document.querySelector(".message")).fadeOut(500), 1000);
  setTimeout(() => $(document.querySelector(".message")).text(""), 1500);
};

export { DisplayMessage };

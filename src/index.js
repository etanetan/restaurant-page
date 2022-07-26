import { homePage } from "./home.js";
// function
function tabSwitch(pageClicked) {
  // gather variables for each page
  let hero = document.getElementById("heroPage");
  if (pageClicked == "homeTab") {
    hero.style.display = "flex";
    hero.classList.remove("hide");
  } else if (pageClicked == "menuTab") {
    hero.style.display = "none";
  } else {
    hero.style.display = "none";
  }
}

document.querySelectorAll(".navbarLink").forEach((link) =>
  link.addEventListener("click", function () {
    tabSwitch(link.id);
  })
);

homePage();

const loadPage = (() => {
  let content = document.getElementById("content");
  content.style.cssText += "font-family: Varela Round, sans-serif;";
  // div to hold the navbar main text and links
  let navbar = document.createElement("div");
  navbar.style.cssText +=
    "display: flex; align-items: center; justify-content: space-between; padding-left: 10vw; padding-right: 10vw; background-color: white;";
  // navbar text for restaurant name
  let navbarText = document.createElement("h1");
  navbarText.innerHTML = "Papa's Pizzeria";
  navbarText.style.cssText += "color: red;";
  // div to house navbar links on right side
  let navbarLinks = document.createElement("div");
  navbarLinks.style.cssText +=
    "display: flex; align-items: center; justify-content: space-between; gap: 3rem; color: black;";
  // first link for home page
  let home = document.createElement("p");
  home.innerHTML = "Home";
  // second link for menu
  let menu = document.createElement("p");
  menu.innerHTML = "Menu";
  // third link for contact page
  let contact = document.createElement("p");
  contact.innerHTML = "Contact Us";

  // append navbar links to navbar link div
  navbarLinks.append(home, menu, contact);
  // append main text and links to whole navbar
  navbar.append(navbarText, navbarLinks);

  // add homepage image, copy, and meny button
  // hero to house all hero information
  let hero = document.createElement("div");

  hero.style.cssText +=
    "display: flex; flex-direction: column; justify-content: center; align-items: center; padding-top: 30vh; background-image: url('../images/pizzaImage.jpg'); position: relative;";

  // overlay for image
  let overlay = document.createElement("div");
  overlay.style.cssText +=
    "position: absolute; background-color: rgba(226, 226, 226, 0.5); top: 0; left: 0; width: 100%; height: 100%;";
  // header to display info
  let heroHeader = document.createElement("h1");
  heroHeader.style.cssText +=
    "position: relative; z-index: 1; font-size: 4rem; color: black;";
  heroHeader.innerHTML = "Come Down To Papa's Pizzeria!";
  // text below hero header
  let heroText = document.createElement("p");
  heroText.style.cssText +=
    "position: relative; z-index: 1; font-size: 2rem; color: red;";
  heroText.innerHTML = "We have great food at an affordable price.";
  // button to lead to menu page
  let heroButton = document.createElement("button");
  heroButton.style.cssText +=
    "position: relative; z-index: 1;width: 5rem; font-size: 1rem; white-space: nowrap; color: white; background-color: red; border: none; border-radius: 1rem; padding-left: 1rem; padding-right: 1rem;font-family: Varela Round, sans-serif;";
  heroButton.innerHTML = "Order Now";

  hero.append(overlay, heroHeader, heroText, heroButton);

  content.append(navbar, hero);
})();

export { loadPage };

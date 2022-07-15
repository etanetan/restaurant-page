const homePage = (() => {
  let content = document.getElementById("content");
  // div to hold the navbar main text and links
  let navbar = document.createElement("div");
  navbar.classList.add("navbar");

  // navbar text for restaurant name
  let navbarLeftText = document.createElement("h1");
  navbarLeftText.innerHTML = "Papa's Pizzeria";
  navbarLeftText.classList.add("navLeftText");

  // div to house navbar links on right side
  let navbarLinks = document.createElement("div");
  navbarLinks.classList.add("navbarLinks");

  // first link for home page
  let home = document.createElement("p");
  home.classList.add("navbarLink");
  home.id = "homeTab";
  home.innerHTML = "Home";

  // second link for menu
  let menu = document.createElement("p");
  menu.classList.add("navbarLink");
  menu.id = "menuTab";
  menu.innerHTML = "Menu";

  // third link for contact page
  let contact = document.createElement("p");
  contact.classList.add("navbarLink");
  contact.id = "contactTab";
  contact.innerHTML = "Contact Us";

  // append navbar links to navbar link div
  navbarLinks.append(home, menu, contact);
  // append main text and links to whole navbar
  navbar.append(navbarLeftText, navbarLinks);

  // add homepage image, copy, and menu button
  // hero to house all hero information
  let hero = document.createElement("div");
  hero.classList.add("hero");

  // overlay for image
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // header to display info
  let heroHeader = document.createElement("p");
  heroHeader.classList.add("heroText", "heroHeader");
  heroHeader.innerHTML = "Come Down To Papa's Pizzeria!";

  // text below hero header
  let heroText = document.createElement("p");
  heroText.classList.add("heroText");
  heroText.innerHTML = "We have great food at an affordable price.";

  // button to go to menu
  let heroButton = document.createElement("button");
  heroButton.classList.add("heroText", "heroButton");
  heroButton.innerHTML = "Order Now";
  // go to menu when clicked

  heroButton.addEventListener("click", function () {
    hero.classList.add("hide");
    // add functionality to display menu page
  });

  hero.append(overlay, heroHeader, heroText, heroButton);

  content.append(navbar, hero);
})();

export { homePage };

import { createContactTab } from "./contact.js";
import { createHomepage } from "./homepage.js";
import { createMenuTab } from "./menu.js";

// Get a reference to the page content
const content = document.getElementById("content");

// Generate the homepage on page load
document.addEventListener("DOMContentLoaded", () => {
  createHomepage(content);
});

// Switch to the Contact page when clicked
const contactTab = document.getElementById("contact-tab");
contactTab.addEventListener("click", () => {
  content.innerHTML = "";
  createContactTab(content);
});

// Switch to the Menu page when clicked
const menuTab = document.getElementById("menu-tab");
menuTab.addEventListener("click", () => {
  content.innerHTML = "";
  createMenuTab(content);
});

export function createHomepage(parent) {
  const nav = document.createElement("nav");

  const contactTab = document.createElement("a");
  contactTab.innerText = "Contact";
  contactTab.id = "contact-tab";
  nav.appendChild(contactTab);

  const menuTab = document.createElement("a");
  menuTab.innerText = "Menu";
  menuTab.id = "menu-tab";
  nav.appendChild(menuTab);

  const headline = document.createElement("h1");
  headline.innerText = "Welcome to Our Restaurant";
  parent.appendChild(headline);

  const image = document.createElement("img");
  image.src = "https://source.unsplash.com/1600x900/?restaurant";
  parent.appendChild(image);

  const copy = document.createElement("p");
  copy.innerText =
    "We are a family-owned restaurant specializing in homemade Italian cuisine. We use only the freshest ingredients and our recipes have been passed down for generations. Come visit us and taste the difference for yourself!";
  parent.appendChild(copy);

  // Clear the content of the page before adding the homepage content
  parent.innerHTML = "";
  parent.appendChild(nav);
  parent.appendChild(headline);
  parent.appendChild(image);
  parent.appendChild(copy);
}

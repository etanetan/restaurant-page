export function createMenuTab(parent) {
  const headline = document.createElement("h1");
  headline.innerText = "Our Menu";
  parent.appendChild(headline);

  const appetizers = document.createElement("h2");
  appetizers.innerText = "Appetizers";
  parent.appendChild(appetizers);

  const appetizersList = document.createElement("ul");
  parent.appendChild(appetizersList);

  const appetizersItems = ["Mozzarella sticks", "Bruschetta", "Fried calamari"];
  appetizersItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    appetizersList.appendChild(li);
  });

  const entrees = document.createElement("h2");
  entrees.innerText = "Entrees";
  parent.appendChild(entrees);

  const entreesList = document.createElement("ul");
  parent.appendChild(entreesList);

  const entreesItems = [
    "Spaghetti Bolognese",
    "Chicken Parmesan",
    "Grilled salmon",
  ];
  entreesItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    entreesList.appendChild(li);
  });

  // Clear the content of the page before adding the Menu tab content
  parent.innerHTML = "";
  parent.appendChild(headline);
  parent.appendChild(appetizers);
  parent.appendChild(appetizersList);
  parent.appendChild(entrees);
  parent.appendChild(entreesList);
}

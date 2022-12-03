export function createContactTab(parent) {
  const headline = document.createElement("h1");
  headline.innerText = "Contact Us";
  parent.appendChild(headline);

  const address = document.createElement("p");
  address.innerText = "123 Main Street, Anytown USA";
  parent.appendChild(address);

  const phone = document.createElement("p");
  phone.innerText = "123-456-7890";
  parent.appendChild(phone);

  const email = document.createElement("p");
  email.innerText = "contact@ourrestaurant.com";
  parent.appendChild(email);

  // Clear the content of the page before adding the Contact tab content
  parent.innerHTML = "";
  parent.appendChild(headline);
  parent.appendChild(address);
  parent.appendChild(phone);
  parent.appendChild(email);
}

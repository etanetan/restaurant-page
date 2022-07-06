const loadPage = (() => {
  let content = document.getElementById("content");
  let header = document.createElement("div");
  header.style.cssText +=
    "display: flex; flex-direction: column; align-items: center;";
  let headerImage = document.createElement("img");
  headerImage.src = "../images/papas.jpeg";
  headerImage.alt = "Papa's Pizzeria Image";
  headerImage.style.cssText += "height: 30vh;";

  let headerText = document.createElement("h1");
  headerText.innerHTML = "Papa's Pizzeria";
  headerText.style.cssText += "color: red;";
  let headerParagraph = document.createElement("p");
  headerParagraph.innerHTML =
    "Emily likes this game and look like an iPad kid when she plays! but, she is so hot so it cancels out!!!!";
  headerParagraph.style.cssText +=
    "color: pink; text-align: center; max-width: 50ch; font-size: 1.2rem";
  header.append(headerImage, headerText, headerParagraph);
  content.appendChild(header);
})();

export { loadPage };

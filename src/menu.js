import menuImg  from './assets/imgs/jayssweetsmenu.jpg';jj

export function menu() {

  const contentDiv = document.querySelector("#content");

  //Remove any excisting DOM children if present
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.style.color = "black";
  heading.textContent = "Jelani's Sweets Shop Menu";
  contentDiv.appendChild(heading);

  const menuImage = document.createElement("img");
  menuImage.classList.add("img");
  menuImage.src = menuImg;
  contentDiv.appendChild(menuImage);


}

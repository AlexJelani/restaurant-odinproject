export function contact() {

    const contentDiv = document.querySelector("#content");

  //Remove any excisting DOM children if present
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.style.color = "black";
  heading.textContent = "Contact Me";
  contentDiv.appendChild(heading);


    
}
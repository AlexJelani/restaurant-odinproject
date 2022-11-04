export function menu() {
  const contentDiv = document.querySelector("#content");

  //Remove any excisting DOM children if present
  contentDiv.replaceChild();

  const heading = document.createElement("h1");
  heading.style.color = "black";
  heading.textContent = "Jelani's Sweets Shop Menu";
  contentDiv.appendChild(heading);

  const rightImage = document.createElement("img");
  rightImage.classList.add("coverimg");
  rightImage.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80";
  contentDiv.appendChild(rightImage);


}

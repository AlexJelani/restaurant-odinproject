export function intialPageLoad() {
  const contentDiv = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Jelani's Sweets Shop";
  contentDiv.appendChild(heading);

  const rightImage = document.createElement("img");
  rightImage.classList.add(".img");
  rightImage.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80";
  contentDiv.appendChild(rightImage);

  const para1 = document.createElement("p");
  para1.textContent = "Opening Hours";
  contentDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = "monday - friday 10-23 | saturday 14-02";
  contentDiv.appendChild(para2);

  const para3 = document.createElement("p");
  para3.textContent = "Location";
  contentDiv.appendChild(para3);

  const para4 = document.createElement("p");
  para4.textContent = "42 village St, New York";
  contentDiv.appendChild(para4);
}

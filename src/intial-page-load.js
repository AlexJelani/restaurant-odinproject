export function intialPageLoad() {

  const contentDiv = document.querySelector("#content");

  //Remove any existing DOM element
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.style.color = "white";
  heading.textContent = "Welcome to Jelani's Sweets Shop";
  contentDiv.appendChild(heading);

  const rightImage = document.createElement("img");
  rightImage.classList.add("img");
  rightImage.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80";
  contentDiv.appendChild(rightImage);

  const para1 = document.createElement("h2");
  para1.textContent = "Brownies, Cakes, & Donuts!";
  para1.classList.add("content-text-style");
  contentDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli";
  para2.classList.add("content-text-style");
  contentDiv.appendChild(para2);

  const para3 = document.createElement("h2");
  para3.textContent = "Opening Hours";
  para3.classList.add("content-text-style");
  contentDiv.appendChild(para3);

  const para4 = document.createElement("h2");
  para4.textContent = "monday - friday 10-23 | saturday 14-02";
  para4.classList.add("content-text-style");
  contentDiv.appendChild(para4);

  const para5 = document.createElement("h2");
  para5.textContent = "Location";
  para5.classList.add("content-text-style");
  contentDiv.appendChild(para5);

  const para6 = document.createElement("h2");
  para6.classList.add("content-text-style");
  para6.textContent = "42 village St, New York";
  contentDiv.appendChild(para6);
}

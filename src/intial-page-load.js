export function intialPageLoad() {

  const contentDiv = document.querySelector("#content");

  //Remove any existing DOM element
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.style.color = "black";
  heading.textContent = "Welcome to Jelani's Sweets Shop";
  contentDiv.appendChild(heading);

  const rightImage = document.createElement("img");
  rightImage.classList.add("coverimg");
  rightImage.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80";
  contentDiv.appendChild(rightImage);

  const para1 = document.createElement("h2");
  para1.textContent = "Brownies, Cakes, & Donuts!";
  para1.classList.add("content-text-style-black");
  contentDiv.appendChild(para1);

  const para2 = document.createElement("p");
  para2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing eli Lorem ipsum dolor sit amet consectetur adipisicing eli";
  para2.classList.add("content-text-style-black");
  contentDiv.appendChild(para2);

  const para3 = document.createElement("h2");
  para3.textContent = "Opening Hours";
  para3.classList.add("content-text-style-black");
  contentDiv.appendChild(para3);

  const para4 = document.createElement("h2");
  para4.textContent = "monday - friday 10-23 | saturday 14-02";
  para4.classList.add("content-text-style-black");
  contentDiv.appendChild(para4);

  const para5 = document.createElement("h2");
  para5.textContent = "Location";
  para5.classList.add("content-text-style-black");
  contentDiv.appendChild(para5);

  const para6 = document.createElement("h2");
  para6.classList.add("content-text-style-black");
  para6.textContent = "42 village St, New York";
  contentDiv.appendChild(para6);

  const para7 = document.createElement("h2");
  para7.classList.add("content-text-style-black");
  para7.textContent = "Phone Number";
  contentDiv.appendChild(para7);

  const para8 = document.createElement("h2");
  para8.classList.add("content-text-style-black");
  para8.textContent = "222-1234-5678";
  contentDiv.appendChild(para8);

  const para9 = document.createElement("iframe");
  para9.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1885514073897!2d-73.99132759999999!3d40.7578775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25853174d55e3%3A0x99ced942dc90b3ac!2sW%2042nd%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sjp!4v1667541690774!5m2!1sen!2sjp";
  contentDiv.appendChild(para9);
}

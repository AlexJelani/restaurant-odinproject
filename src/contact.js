export function contact() {
  const contentDiv = document.querySelector("#content");

  //Remove any excisting DOM children if present
  contentDiv.replaceChildren();

  const heading = document.createElement("h1");
  heading.style.color = "black";
  heading.textContent = "Contact Me";
  contentDiv.appendChild(heading);

  const contactDiv = document.createElement("div");
  contactDiv.innerHTML = `<form action="https://formsubmit.co/jelanialexander82@gmail.com"method="POST" >
  <label for="name">Name</label> <input type="text" name="name" required> 
  <!-- <input type="hidden" name="_captcha" value="false"> -->
  <label for="email">Email:</label> <input type="email" name="email" required> 
   <label for="message">Message</label> 
  <textarea name="message" id="message" cols="30" rows="10" required></textarea>
   <input type="submit" name="submit" value="submit">
</form>
</div>`;
  heading.appendChild(contactDiv);
}


function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

const form = document.getElementById("form");
const inputName = document.querySelector("#inputName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

const formParent = form.parentNode;
formParent.style.border = "2px solid #ff0000ff"; 
formParent.style.padding = "10px";


const firstFormChild = form.firstElementChild; 
if (firstFormChild) firstFormChild.style.outline = "2px dotted green"; 

const nextSibling = inputName.nextElementSibling;
if (nextSibling) nextSibling.style.border = "2px dashed orange"; 

const statusMessage = document.createElement("p");
statusMessage.textContent = "Fill out the form";
statusMessage.style.color = "blue";
form.appendChild(statusMessage);

const fragment = document.createDocumentFragment();
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
  const clone = input.cloneNode(true);
  fragment.appendChild(clone);
});

form.addEventListener("submit", handleSubmit);
inputName.addEventListener("input", validateName);

// input validation handling
function validateName() {
  if (inputName.value.length < 2) {
    inputName.classList.add("invalid");
    inputName.setAttribute("title", "Name too short");
  } else {
    inputName.classList.remove("invalid");
    inputName.removeAttribute("title");
  }
}

// submission handler/validation
function handleSubmit(e) {
  e.preventDefault();
  
  if (!inputName.value || !email.value || !message.value) {
    alert("Enter input.");
    return;
  }

  alert(
    "Name: " + inputName.value +
    "\nEmail: " + email.value +
    "\nMessage: " + message.value
  );

  document.getElementById("greeting").textContent = "Welcome, " + inputName.value + "!";

  form.reset();
}


console.log(window.innerWidth);
alert("Welcome to the contact form!");


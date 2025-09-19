let user = prompt("Enter your name:");
document.getElementById("greeting").textContent = "Welcome, " + user + "!";

function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function handleSubmit(e) {
  e.preventDefault();
  alert(
    "Name: " + name.value + 
    "\nEmail: " + email.value + 
    "\nMessage: " + message.value
  );
}

document.getElementById("form").onsubmit = handleSubmit;

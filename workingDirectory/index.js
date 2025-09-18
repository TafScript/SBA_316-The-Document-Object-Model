let user = prompt("Enter your name:");

document.getElementById("greeting").textContent = "Welcome, " + user + "!";


function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
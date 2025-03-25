document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out!');
});
const jokes = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why was the math book sad? Because it had too many problems!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why can't a nose be 12 inches long? Because then it would be a foot!",
    "Why don't eggs tell each other secrets? Because they might crack up!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why was the computer cold? It left its Windows open!",
    "Why don't fish play basketball? Because they're afraid of the net!"
];

function showJoke() {
    const jokeBox = document.getElementById("joke");
    jokeBox.innerText = jokes[Math.floor(Math.random() * jokes.length)];
}

setInterval(showJoke, 5000);
window.onload = showJoke;
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    localStorage.setItem("contact-message", JSON.stringify(Object.fromEntries(formData)));
    alert("Message saved locally!");
    event.target.reset();
});
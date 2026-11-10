function welcomeMessage() {
    alert("Welcome to my Personal Resume Website!");
}

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
// ================= Variables & Conditionals =================
// Store my age and name, then check if I am old enough to vote.
let myAge = 17;
const myName = "Khensani";

if (myAge >= 18) {
    console.log(myName + " can vote!");
} else {
    console.log(myName + " is too young to vote.");
}

// ================= Functions =================
// Function that greets the user with their name
function greetUser(name) {
    return "Hi " + name + ", welcome to my page!";
}

// Function that describes my favorite snack and how much of it I want
function favoriteSnack(snack, quantity) {
    return `I love ${quantity} servings of ${snack}!`;
}

// Function that calculates how many years are left until voting age
function yearsUntilVoting(age) {
    if (age >= 18) {
        return "You are already old enough to vote!";
    } else {
        return "You have " + (18 - age) + " years until you can vote.";
    }
}

// Call functions and log results
console.log(greetUser(myName));
console.log(favoriteSnack("tropical fruit salad", 2));
console.log(yearsUntilVoting(myAge));

// ================= Loops =================
// Create an array of hobbies
const hobbies = ["coding", "writing"];

// For loop: display hobbies one by one
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}

// forEach loop: show hobbies with extra text
hobbies.forEach(hobby => console.log("I enjoy " + hobby));

// While loop: simple countdown example
let countdown = 3;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ================= DOM Interactions =================
// Change the heading text using DOM
const heading = document.getElementById("title");
heading.textContent = "Welcome to " + myName + "'s page!";

// Button 1: show an alert when clicked
const button = document.getElementById("clickMe");
button.addEventListener("click", () => {
    alert("Thanks for visiting my page!");
});

// Add hobbies dynamically to the list
const hobbyList = document.getElementById("menu");
hobbies.forEach(hobby => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
});

// Make the heading text change color when clicked
heading.addEventListener("click", () => {
    heading.classList.toggle("active");
});

// Button 2: change the description text
const desc = document.getElementById("description");
const changeBtn = document.getElementById("changeText");
changeBtn.addEventListener("click", () => {
    desc.textContent = "I love coding and writing, and I enjoy making interactive web pages!";
});

// Button 3: add a new hobby to the list
const addBtn = document.getElementById("addHobby");
addBtn.addEventListener("click", () => {
    const newHobby = prompt("Enter a new hobby:");
    if (newHobby) {
        const li = document.createElement("li");
        li.textContent = newHobby;
        hobbyList.appendChild(li);
    }
});

// Button 4: change the background color randomly
const bgBtn = document.getElementById("changeBG");
bgBtn.addEventListener("click", () => {
    const colors = ["lightblue", "lightgreen", "lavender", "peachpuff", "mistyrose"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variable + conditional example
function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "✅ You are an adult.";
  } else {
    document.getElementById("ageResult").textContent = "❌ You are under 18.";
  }
}

// ==========================
// Part 2: Functions
// ==========================

// Function to calculate total price
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").textContent =
    `Total: $${total}`;
  return total;
}

// Another function: format a string
function formatName(name) {
  return name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// ==========================
// Part 3: Loops
// ==========================

// For loop example
function showNumbers() {
  let numbers = document.getElementById("numberList");
  numbers.innerHTML = ""; // clear previous list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    numbers.appendChild(li);
  }
}

// While loop example (countdown)
function countdown() {
  let i = 5;
  while (i > 0) {
    console.log("Countdown: " + i);
    i--;
  }
  console.log("Blast off!");
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Toggle visibility of a message
document.getElementById("toggleBtn").addEventListener("click", function () {
  let message = document.getElementById("message");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});

// Create a new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "🌟 This paragraph was added using JS!";
document.getElementById("dom").appendChild(newPara);
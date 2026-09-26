

/* MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


/* FARMERS MARKETPLACE SEARCH */

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product-card");

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    products.forEach(function (product) {
        const productName = product.innerText.toLowerCase();
        const productCategory = product.dataset.category;

        const matchesSearch = productName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            selectedCategory === productCategory;

        if (matchesSearch && matchesCategory) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);


/* PRODUCT INTEREST BUTTONS */

document.querySelectorAll(".interest-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const productName = button.dataset.name;

        alert(
            "You selected " + productName +
            ". This is a demo marketplace. No order has been placed."
        );
    });
});


/* NUTRITION GUIDE */

const nutritionForm = document.getElementById("nutritionForm");
const nutritionResult = document.getElementById("nutritionResult");

nutritionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const foodType = document.getElementById("foodType").value;
    const foodBudget = document.getElementById("foodBudget").value;
    const mealGoal = document.getElementById("mealGoal").value;

    let foodSuggestions = [];

    // Suggestions based on food preference
    if (foodType === "vegetarian") {
        foodSuggestions.push(
            "Try dal, chana, beans, peas, or soy foods."
        );
    }

    if (foodType === "eggetarian") {
        foodSuggestions.push(
            "Eggs, pulses, beans, and dairy can add variety."
        );
    }

    if (foodType === "nonvegetarian") {
        foodSuggestions.push(
            "Eggs, fish, or lean meat can be included if suitable for your diet."
        );
    }

    // Suggestions based on budget
    if (foodBudget === "low") {
        foodSuggestions.push(
            "Consider seasonal vegetables, rice, dal, and locally available foods."
        );
    }

    if (foodBudget === "medium") {
        foodSuggestions.push(
            "Combine seasonal produce with different grains and pulses."
        );
    }

    if (foodBudget === "high") {
        foodSuggestions.push(
            "Choose a variety of foods from different food groups."
        );
    }

    // Suggestions based on meal preference
    if (mealGoal === "balanced") {
        foodSuggestions.push(
            "Include grains, protein-containing foods, vegetables, and fruit where available."
        );
    }

    if (mealGoal === "protein") {
        foodSuggestions.push(
            "Explore pulses, beans, chickpeas, soy, eggs, or dairy according to your preference."
        );
    }

    if (mealGoal === "school") {
        foodSuggestions.push(
            "Try a lunchbox combining a familiar staple, a protein-containing food, and fruit or vegetables."
        );
    }

    // Display the result
    nutritionResult.innerHTML = `
        <h4>🌱 Your General Food Guide</h4>
        <ul>
            ${foodSuggestions.map(function (item) {
                return "<li>" + item + "</li>";
            }).join("")}
        </ul>
    `;

    nutritionResult.classList.add("show");
});


/* SCHOOL MEAL SUPPORT FORM */

const donationForm = document.querySelector(".donation-form form");

donationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const donorName = document.getElementById("donorName").value;
    const donationType = document.getElementById("donationType").value;

    alert(
        "Thank you, " + donorName + "!\n\n" +
        "Your interest in " + donationType +
        " has been demonstrated successfully.\n\n" +
        "This is a college project prototype. " +
        "No payment or real donation was made."
    );

    donationForm.reset();
});


/* VOLUNTEER INTEREST */

const volunteerBtn = document.getElementById("volunteerBtn");

volunteerBtn.addEventListener("click", function () {
    const interest = document.getElementById("volunteerInterest");
    const selectedInterest = interest.options[interest.selectedIndex].text;

    alert(
        "Thank you for your interest in " +
        selectedInterest + "!\n\n" +
        "This is a demonstration. " +
        "Volunteer registrations are not being submitted."
    );
});


/* FOOD WASTE QUIZ */

const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");
const resetQuiz = document.getElementById("resetQuiz");

quizOptions.forEach(function (option) {
    option.addEventListener("click", function () {

        const isCorrect = option.dataset.correct === "true";

        if (isCorrect) {
            quizResult.textContent =
                "Correct! Planning meals and storing food properly " +
                "can help reduce avoidable food waste.";

            quizResult.style.color = "#174f3b";
        } else {
            quizResult.textContent =
                "Not quite! Meal planning and proper food storage " +
                "are helpful ways to reduce food waste.";

            quizResult.style.color = "#c15a35";
        }

        // Disable the options after answering
        quizOptions.forEach(function (button) {
            button.disabled = true;
            button.style.opacity = "0.7";
        });
    });
});

// Reset the quiz
resetQuiz.addEventListener("click", function () {
    quizResult.textContent = "";

    quizOptions.forEach(function (button) {
        button.disabled = false;
        button.style.opacity = "1";
    });
});


/* SIMPLE WELCOME MESSAGE IN CONSOLE */

console.log("Welcome to Nourish - SDG 2: Zero Hunger!");

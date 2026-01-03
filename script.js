// Dark mode toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (themeBtn.innerText === "Dark Mode") {
        themeBtn.innerText = "Light Mode";
    } else {
        themeBtn.innerText = "Dark Mode";
    }
});

// Contact form submission
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
});

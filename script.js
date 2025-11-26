/* SKILL BAR ANIMATION */
const skillBars = document.querySelectorAll(".skill-bar");

function animateSkills() {
    skillBars.forEach(bar => {
        bar.style.width = bar.dataset.skill + "%";
    });
}
window.addEventListener("load", animateSkills);

/* CONTACT FORM */
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        document.getElementById("msg").innerText =
            (!name || !email || !message)
            ? "All fields are required!"
            : "Message sent successfully!";
    });
}

// Project 1 → Weather App Page
document.getElementById("p1").addEventListener("click", function () {
    window.location.href = "https://melisha501.github.io/weatherapp/"; 
});

// Project 2 → Portfolio URL
document.getElementById("p2").addEventListener("click", function () {
    window.open("https://melisha501.github.io/Assignment/", "_blank");
});

/* CANVAS */
const c = document.getElementById("myCanvas");

if (c) {
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#00c7b7";
    ctx.fillRect(20, 20, 260, 110);
    ctx.fillStyle = "#002523";
    ctx.font = "22px Arial";
    ctx.fillText("Hello Melishaaa", 40, 80);
}

/* DARK MODE */
const darkBtn = document.getElementById("darkBtn");
if (darkBtn) {
    darkBtn.onclick = () => {
        document.body.classList.toggle("dark-mode");
    };
}

/* SCROLL TO TOP */
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
    if (topBtn) topBtn.style.display = window.scrollY > 250 ? "block" : "none";
};

if (topBtn) {
    topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}
/* IMAGE SLIDER — FINAL FIXED */
const sliderImages = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    
];

let sliderIndex = 0;

const slideImg = document.getElementById("slideImage");
const nextButton = document.getElementById("nextBtn");

if (slideImg && nextButton) {

    nextButton.onclick = () => {

        slideImg.classList.add("fade-out");

        setTimeout(() => {

            sliderIndex = (sliderIndex + 1) % sliderImages.length;
            slideImg.src = sliderImages[sliderIndex];

            slideImg.classList.remove("fade-out");
            slideImg.classList.add("fade-in");

            setTimeout(() => {
                slideImg.classList.remove("fade-in");
            }, 300);

        }, 300);
    };
}

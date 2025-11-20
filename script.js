/* =======================================================
   SKILL BAR ANIMATION
======================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach(bar => {
    const target = bar.dataset.skill;
    bar.style.width = target + "%";
  });
});


/* =======================================================
   CONTACT FORM: VALIDATION + SAVE TO LOCALSTORAGE + REDIRECT
======================================================= */
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.getElementById("msg");

    if (!name || !email || !message) {
      msgBox.textContent = "All fields are required!";
      return;
    }

    // Save to Local Storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    window.location.href = "form-details.html";
  });
}


/* =======================================================
   PROJECT BUTTON REDIRECTS
======================================================= */
const project1 = document.getElementById("p1");
const project2 = document.getElementById("p2");

if (project1)
  project1.onclick = () => window.open("https://your-first-project-link.com", "_blank");

if (project2)
  project2.onclick = () => window.open("https://your-second-project-link.com", "_blank");



/* =======================================================
   CANVAS DRAW
======================================================= */
const canvas = document.getElementById("myCanvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "cyan";
  ctx.fillRect(20, 20, 200, 100);

  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Hello Melisha!", 40, 80);
}



/* =======================================================
   DARK/LIGHT MODE
======================================================= */
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.onclick = () => {
    document.body.classList.toggle("light-mode");
  };
}



/* =======================================================
   BACK TO TOP BUTTON
======================================================= */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
});

if (topBtn) {
  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}



/* =======================================================
   IMAGE SLIDER
======================================================= */
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

const slideImage = document.getElementById("slideImage");
const nextBtn = document.getElementById("nextBtn");

if (nextBtn && slideImage) {
  nextBtn.onclick = () => {
    index = (index + 1) % images.length;
    slideImage.src = images[index];
  };
}

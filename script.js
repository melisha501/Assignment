const skillBars = document.querySelectorAll('.skill-bar');

function animateSkills() {
  skillBars.forEach(bar => {
    const target = bar.getAttribute('data-skill');
    bar.style.width = target + "%";
  });
}

window.addEventListener("load", animateSkills);
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {
        document.getElementById("msg").innerText = "All fields are required!";
        return;
    }
document.getElementById("p1").onclick = () => {
    window.location.href = "https://your-first-project-link.com";
};

document.getElementById("p2").onclick = () => {
    window.location.href = "https://your-second-project-link.com";
};
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// Background rectangle
ctx.fillStyle = "cyan";
ctx.fillRect(20, 20, 200, 100);

// Text
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Hello Melisha!", 40, 80);
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let i = 0;
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if(window.scrollY > 200){
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

document.getElementById("nextBtn").onclick = () => {
    i = (i + 1) % images.length;
    document.getElementById("slideImage").src = images[i];
};


    // Save to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    // Redirect
    window.location.href = "form-details.html";
});

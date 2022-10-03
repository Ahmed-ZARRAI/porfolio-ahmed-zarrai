/* navbar */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

function toggleNav() {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
}
/* const tl = new gsap.timeline();
tl.to(".navbar", {
  clipPath: "circle(150% at 45px 45px)"
}).to(
  ".item",
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.2,
    stagger: 0.1
  },
  "-=0.25"
);

tl.pause();

const navIcon = document.querySelector(".nav-icon");
navIcon.addEventListener("click", () => {
  if (tl.reversed() || tl.paused()) tl.play();
  else tl.reverse();
});

const navItems = document.querySelectorAll('nav li');
navItems.forEach(item => item.addEventListener('click', () => tl.reverse())) */

// Loader
setTimeout(() => {
  let loader = document.querySelector(".preload");

  loader.style.display = "none";

  document.querySelector("body").classList.add("fade");
}, 4000);
// header canvas

var Headeroptions = {
  background: "../img/bg0.png",
  backgroundSize: "contain",
  particleColor: "#888",
  interactive: true,
  speed: "high",
  density: "medium",
};

// initaiate scroll animation
AOS.init();

// filter projects

let f = document.querySelectorAll(".filter li");

f.forEach((item) =>
  item.addEventListener("click", (e) => {
    for (let i = 0; i < f.length; i++) {
      console.log(f[i]);
      f[i].classList.remove("selected_filter");
    }

    e.target.classList.add("selected_filter");
    console.log(e.target);
    filtring(e.target.attributes[0].nodeValue);
  })
);

function filtring(filter) {
  let project = document.querySelectorAll("[data-project]");

  project.forEach((p) => {
    let type = p.dataset.project;
    p.style.display = "block";
    p.style.animation = "filter 0.3s ease forwards";

    if (filter == "all") {
      project.forEach((p) => (p.style.display = "block"));
      return 0;
    }
    if (type != filter) {
      p.style.animation = "filterOut 0.3s ease forwards";
      p.style.display = "none";
    }
  });
}

document.getElementById("short").click();

function openLink(url) {
  window.open(url, "_blank");
}

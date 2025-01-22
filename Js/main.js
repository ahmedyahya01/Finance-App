// Show and Hide Navigation Links
const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");
const faSolid = document.querySelector(".fa-solid");
const hLink = document.querySelectorAll("#hLink");
const html = document.documentElement;

bars.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
  html.classList.toggle("overflow-hidden");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
    html.classList.remove("overflow-hidden");
  });
});
// Testimonial
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (let userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (let userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// Toggle Card
const toggleBtn = document.getElementById("toggle-btn");

const card_1_front = document.querySelector("#card-1-front");
const card_1_back = document.querySelector("#card-1-back");
const card_2_front = document.querySelector("#card-2-front");
const card_2_back = document.querySelector("#card-2-back");
const card_3_front = document.querySelector("#card-3-front");
const card_3_back = document.querySelector("#card-3-back");

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");
  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");
  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});
// Navbar
const navBar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navBar.classList.add("bg-color-primary-dark");
    navBar.classList.add("border-b");
    navBar.classList.add("border-color-gray");
  } else {
    navBar.classList.remove("bg-color-primary-dark");
    navBar.classList.remove("border-b");
    navBar.classList.remove("border-color-gray");
  }
};

// Active Link
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav ul a");

// window.scroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((link) => {
//         link.classList.remove("text-color-secondary");
//         document.querySelector(`header nav a[href*=${id}]`).classList.add("text-color-secondary");
//       });
//     }
//   });
// };

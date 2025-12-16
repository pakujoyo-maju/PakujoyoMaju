// loading
window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  const body = document.body;
  setTimeout(() => {
    loading.style.display = "none";
    body.classList.add("loaded");
  }, 6000);
});

// navbar hamburger
const navbarNav = document.querySelector('.navbar-nav');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const sb = document.querySelector('.search-form label');

// hamburger
document.querySelector('#hamburger-menu').onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle('active');
};

// klik di luar
document.addEventListener('click', function (e) {

  // close navbar
  if (!document.querySelector('#hamburger-menu').contains(e.target) &&
      !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  })
//gallery
const btnFoto = document.getElementById("btnFoto");
const btnVideo = document.getElementById("btnVideo");
const fotoSection = document.getElementById("fotoSection");
const videoSection = document.getElementById("videoSection");

btnFoto.onclick = () => {
const isHidden = fotoSection.classList.contains("hidden") === false;

  if (isHidden) {
      fotoSection.classList.add("hidden");
      btnFoto.classList.remove("active");
  } else {
      fotoSection.classList.remove("hidden");
      videoSection.classList.add("hidden");
      btnFoto.classList.add("active");
      btnVideo.classList.remove("active");
  }
};

btnVideo.onclick = () => {
const isHidden = videoSection.classList.contains("hidden") === false;

  if (isHidden) {
      videoSection.classList.add("hidden");
      btnVideo.classList.remove("active");
  } else {
      videoSection.classList.remove("hidden");
      fotoSection.classList.add("hidden");
      btnVideo.classList.add("active");
      btnFoto.classList.remove("active");
    }
};


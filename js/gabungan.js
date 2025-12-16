document.addEventListener("DOMContentLoaded", () => {
  /* =====================
     LOADING SCREEN
  ===================== */
  const loading = document.getElementById("loading");
  if (loading) {
    setTimeout(() => {
      loading.style.display = "none";
    }, 6000);
  }

  /* =====================
     NAVBAR HAMBURGER
  ===================== */
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.getElementById("hamburger-menu");

  if (hamburger && navbarNav) {
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      navbarNav.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  }

  /* =====================
     GALLERY TAB (FOTO / VIDEO)
  ===================== */
  const btnFoto = document.getElementById("btnFoto");
  const btnVideo = document.getElementById("btnVideo");
  const fotoSection = document.getElementById("fotoSection");
  const videoSection = document.getElementById("videoSection");

  if (btnFoto && btnVideo && fotoSection && videoSection) {

    // default
    fotoSection.classList.remove("hidden");
    videoSection.classList.add("hidden");
    btnFoto.classList.add("active");

    btnFoto.addEventListener("click", () => {
      fotoSection.classList.remove("hidden");
      videoSection.classList.add("hidden");
      btnFoto.classList.add("active");
      btnVideo.classList.remove("active");
    });

    btnVideo.addEventListener("click", () => {
      videoSection.classList.remove("hidden");
      fotoSection.classList.add("hidden");
      btnVideo.classList.add("active");
      btnFoto.classList.remove("active");
    });
  }

  /* =====================
     IMAGE ZOOM MODAL
  ===================== */
  const zoomImages = document.querySelectorAll(".zoomable");
  const imgModal = document.getElementById("imgModal");
  const imgPreview = document.getElementById("imgPreview");
  const imgClose = document.querySelector(".img-close");

  if (zoomImages.length && imgModal && imgPreview && imgClose) {
    zoomImages.forEach(img => {
      img.addEventListener("click", () => {
        imgModal.style.display = "flex";
        imgPreview.src = img.src;
      });
    });

    imgClose.addEventListener("click", () => {
      imgModal.style.display = "none";
    });

    imgModal.addEventListener("click", (e) => {
      if (e.target === imgModal) {
        imgModal.style.display = "none";
      }
    });
  }

  /* =====================
     VIDEO ZOOM MODAL
  ===================== */
  const zoomVideos = document.querySelectorAll(".zoom-video");
  const videoModal = document.getElementById("videoModal");
  const videoPreview = document.getElementById("videoPreview");
  const videoClose = document.querySelector(".video-close");

  if (zoomVideos.length && videoModal && videoPreview && videoClose) {
    zoomVideos.forEach(video => {
      video.addEventListener("click", () => {
        videoModal.style.display = "flex";
        videoPreview.src = video.querySelector("source").src;
        videoPreview.play();
      });
    });

    const closeVideo = () => {
      videoPreview.pause();
      videoPreview.src = "";
      videoModal.style.display = "none";
    };

    videoClose.addEventListener("click", closeVideo);
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) closeVideo();
        });
    }

    });

  /* =====================
     POPUP BELI (MENU)
  ===================== */
  const popup = document.getElementById("popup-buy");
  const popupTitle = document.getElementById("popup-title");
  const linkWA = document.getElementById("buy-wa");
  const linkTT = document.getElementById("buy-tt");
  const closePopup = document.querySelector(".close-popup");

  if (popup && popupTitle && linkWA) {
    document.querySelectorAll(".menu-card").forEach(card => {
      card.addEventListener("click", () => {
        const produk = card.dataset.produk;
        popupTitle.innerText = "Beli " + produk;
        linkWA.href =
            "https://wa.me/6285748331696?text=Saya%20mau%20beli%20" + encodeURIComponent(produk);
        linkTT.href =
            "https://www.tiktok.com/@pakujoyo.maju?_r=1&_t=ZS-92DxIqqFYHQ";
        popup.style.display = "flex";
      });
    });

    if (closePopup) {
      closePopup.onclick = () => popup.style.display = "none";
    }
    window.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
  }

  /* =====================
     FORM KONTAK
  ===================== */
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (form && successMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
      }

      successMsg.style.display = "block";
      form.reset();

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 3000);
    });

    const textarea = document.getElementById("message");
    const insertButtons = document.querySelectorAll(".icon-insert button");

    insertButtons.forEach(btn => {
        btn.addEventListener("click", () => {
        const text = btn.dataset.text;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    textarea.value =
      textarea.value.substring(0, start) +
      text +
      textarea.value.substring(end);

    textarea.focus();
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
        });
    });

  }

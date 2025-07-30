function reload() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("main-header");
  function toggleHeaderBg() {
    if (window.scrollY > 0) {
      header.classList.add("show-header");
    } else {
      header.classList.remove("show-header");
    }
  }
  window.addEventListener("scroll", toggleHeaderBg);
  toggleHeaderBg();

  const readMoreBtn = document.getElementById("welcome-readmore");
  const moreText = document.getElementById("welcome-more");

  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener("click", function () {
      if (moreText.classList.contains("collapsed")) {
        moreText.classList.remove("collapsed");
        moreText.classList.add("expanded");
        readMoreBtn.textContent = "Read Less";
      } else {
        moreText.classList.add("collapsed");
        moreText.classList.remove("expanded");
        readMoreBtn.textContent = "Read More";
      }
    });
  }

  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mainNav = document.getElementById("main-nav");

  if (hamburgerIcon && mainNav) {
    hamburgerIcon.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
        }
      });
    });
  }

  document.getElementById("contact-us").onclick = function () {
    location.href = "contact-us.html";
  };
});

// Footer year
const year = document.getElementById("y");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Smooth scroll for navbar
document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => observer.observe(el));

// Certificate image modal
const zoomableImages = document.querySelectorAll(".zoomable");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalClose = document.getElementById("modalClose");

zoomableImages.forEach(img => {
  img.addEventListener("click", () => {
    imageModal.classList.add("show");
    modalImage.src = img.src;
    modalImage.alt = img.alt;
  });
});

if (modalClose) {
  modalClose.addEventListener("click", () => {
    imageModal.classList.remove("show");
  });
}

if (imageModal) {
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove("show");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && imageModal.classList.contains("show")) {
    imageModal.classList.remove("show");
  }
});
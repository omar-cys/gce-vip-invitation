window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("hide");
  }, 1200);
});
const imageFrame = document.querySelector(".image-frame");
document.addEventListener("mousemove", function (event) {
  if (window.innerWidth <= 768 || !imageFrame) {
    return;
  }
  const x = (window.innerWidth / 2 - event.clientX) / 45;
  const y = (window.innerHeight / 2 - event.clientY) / 45;
  imageFrame.style.transform = `
            perspective(1000px)
            rotateY(${x}deg)
            rotateX(${y}deg)
        `;
});
document.addEventListener("mouseleave", function () {
  if (imageFrame) {
    imageFrame.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  }
});
const revealElements = document.querySelectorAll(
  ".section-heading, .invitation-layout, .experience-card, .link-card, .final-message",
);
revealElements.forEach(function (element) {
  element.classList.add("reveal");
});
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);
revealElements.forEach(function (element) {
  observer.observe(element);
});
const exploreButton = document.querySelector(".explore-button");
if (exploreButton) {
  exploreButton.addEventListener("click", function (event) {
    const target = document.querySelector("#invitation");
    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}
const linkCards = document.querySelectorAll(".link-card");
linkCards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    const arrow = card.querySelector(".link-arrow");
    if (arrow) {
      arrow.style.transform = "translate(5px, -5px)";
    }
  });
  card.addEventListener("mouseleave", function () {
    const arrow = card.querySelector(".link-arrow");
    if (arrow) {
      arrow.style.transform = "translate(0, 0)";
    }
  });
});

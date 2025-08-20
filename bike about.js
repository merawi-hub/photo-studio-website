// Smooth header link animation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.2)";
    link.style.transition = "transform 0.3s";
  });
  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});

// Title animation on scroll
window.addEventListener("scroll", () => {
  const title = document.querySelector(".animated-title");
  if (window.scrollY > 50) {
    title.style.color = "#ffdd57";
  } else {
    title.style.color = "#fff";
  }
});

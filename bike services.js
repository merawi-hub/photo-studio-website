document.addEventListener("DOMContentLoaded", () => {
  console.log("🛠 Services Page Ready");

  // Animate service cards on scroll
  let services = document.querySelectorAll(".service");
  window.addEventListener("scroll", () => {
    services.forEach(s => {
      let pos = s.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        s.style.opacity = 1;
        s.style.transform = "translateY(0)";
      }
    });
  });
});

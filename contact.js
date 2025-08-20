// Animate contact buttons on page load
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".contact-btn");
  buttons.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    setTimeout(() => {
      btn.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, index * 150);
  });
});

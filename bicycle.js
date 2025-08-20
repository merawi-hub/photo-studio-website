document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 Abe Bicycles Home Page Ready!");

  // Add scroll animation
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if(window.scrollY > 50) {
      header.style.background = "rgba(0,0,0,0.9)";
    } else {
      header.style.background = "rgba(0,0,0,0.6)";
    }
  });
});

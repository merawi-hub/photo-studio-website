document.addEventListener("DOMContentLoaded", () => {
  console.log("🚲 Bicycles Page Ready");

  let bikes = document.querySelectorAll(".bike");
  bikes.forEach(bike => {
    bike.addEventListener("mouseenter", () => {
      bike.style.boxShadow = "0 0 20px #FFD700";
    });
    bike.addEventListener("mouseleave", () => {
      bike.style.boxShadow = "none";
    });
  });
});

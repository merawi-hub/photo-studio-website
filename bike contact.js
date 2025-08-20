document.addEventListener("DOMContentLoaded", () => {
  console.log("📞 Contact Page Ready");

  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Message Sent Successfully!");
    form.reset();
  });
});

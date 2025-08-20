// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Reveal-on-scroll for all sections with .section and common blocks
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section, .service-card, .gallery a, .page-hero, .contact-left, .contact-right").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

// Contact page: send message via email client (no backend needed yet)
function sendAsEmail(e) {
  e.preventDefault();
  const textarea = document.getElementById("message");
  const body = encodeURIComponent(textarea.value.trim());
  const mailto = `mailto:hello@yonistudio.et?subject=Special%20Request%20from%20Website&body=${body}`;
  window.location.href = mailto;
  return false;
}

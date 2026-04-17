const envelope = document.getElementById("envelope");
const intro = document.getElementById("envelopeIntro");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

 setTimeout(() => {
  intro.style.display = 'none';
  window.location.href = 'main.html';
}, 2800);
});
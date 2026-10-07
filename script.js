const bootEl = document.getElementById("boot");
const message = "Portfolio online. Hello, I am RAJAT RANJAN THAKUR.";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  bootEl.textContent = message;
} else {
  let i = 0;
  function type() {
    if (i < message.length) {
      bootEl.textContent += message.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}
const cmdForm = document.getElementById("cmd");
const cmdInput = document.getElementById("cmd-input");
const cmdMsg = document.getElementById("cmd-msg");

cmdForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const word = cmdInput.value.trim().toLowerCase();
  const target = document.getElementById(word === "home" ? "home" : word);

  if (target) {
    cmdMsg.textContent = "Executing: " + word + "...";
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    cmdMsg.textContent = "Command not recognised: " + word;
  }
  cmdInput.value = "";
});
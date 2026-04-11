const textArea = document.getElementById("message");
const textCount = document.querySelector(".counter");
const remainingCount = document.querySelector(".remaining");
const warningContainer = document.querySelector(".warning-container");

textArea.addEventListener("input", function (event) {
  var length = event.target.value.length;
  if (length > 0 && length <= 200) {
    textCount.textContent = length + " / 200 characters";
    remainingCount.textContent = 200 - length + " remaining";
  } else {
    textCount.textContent = "0 / 200 characters";
    remainingCount.textContent = "200 remaining";
  }
  if (length == 200 && !warningContainer.querySelector(".overlimite")) {
    const warning = document.createElement("p");
    warning.className = "overlimite";
    warning.textContent = "You have reached the character limit..";
    warningContainer.appendChild(warning);
  }
  if (length < 200 && warningContainer.querySelector(".overlimite")) {
    warningContainer.querySelector(".overlimite").remove();
  }
});

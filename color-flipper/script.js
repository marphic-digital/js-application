const currentColorEl = document.getElementById("current-colour");
const newColorBtnEl = document.getElementById("new-colour-button");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
function getRandomHexValue() {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValueNumber = hexValues[randomIndexPosition];

  return randomHexValueNumber;
}

function getRandomHexString(stringLength) {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }

  return hexString;
}

newColorBtnEl.addEventListener("click", function () {
  const randomHexValue = "#" + getRandomHexString(6);
  document.body.style.setProperty("background-color", randomHexValue);
  currentColorEl.textContent = randomHexValue;
});

// TEMPERATURE CONVERSION PROGRAM
textBox = document.getElementById("textBox");
toFahrenheit = document.getElementById("toFahrenheit");
toCelsius = document.getElementById("toCelsius");
mySubmit = document.getElementById("mySubmit");
result = document.getElementById("result");
let temp;


function convert(event) {
  event.preventDefault();
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  }
  else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  }
  else {
    result.textContent = "Select a unit";
  }
  return false;
}
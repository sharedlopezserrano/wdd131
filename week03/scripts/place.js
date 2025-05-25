document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modification-date").textContent = document.lastModified;

let temperature = 18;
let windSpeed = 15;


function calculateWindChill(temp, speed) {
  let chill =
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16);
  return chill.toFixed(1);
}


window.addEventListener("DOMContentLoaded", function () {
  let weatherSection = document.querySelector(".card.bottom-right .card-body");


  let windChillParagraph = document.createElement("p");
  let labelSpan = document.createElement("span");
  labelSpan.className = "label";
  labelSpan.textContent = "Wind Chill:";
  let valueSpan = document.createElement("span");
  valueSpan.className = "value";


  if (temperature <= 10 && windSpeed > 4.8) {
    let windChill = calculateWindChill(temperature, windSpeed);
    valueSpan.textContent = windChill + " °C";
  } else {
    valueSpan.textContent = "N/A";
  }


  windChillParagraph.appendChild(labelSpan);
  windChillParagraph.appendChild(valueSpan);


  weatherSection.appendChild(windChillParagraph);


  let yearSpan = document.getElementById("year");
  let modifiedSpan = document.getElementById("modification-date");


  if (yearSpan != null) {
    yearSpan.textContent = new Date().getFullYear();
  }


  if (modifiedSpan != null) {
    modifiedSpan.textContent = document.lastModified;
  }
});

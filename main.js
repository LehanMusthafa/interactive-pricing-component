"use strict";
// Slider Range
const slider = document.getElementById("slider");
const checkbox = document.getElementById("checkboxButton");
slider.addEventListener("input", function () {
  let sliderV = slider.value;
  let price;
  let output;
  switch (sliderV) {
    case "0":
      output = "10k";
      price = "8.00";
      break;
    case "1":
      output = "50k";
      price = "12.00";
      break;
    case "2":
      output = "100k";
      price = "16.00";
      break;
    case "3":
      output = `500 k`;
      price = "24.00";
      break;
    case "4":
      output = "1M";
      price = "36.00";
      break;
  }
  if (checkbox.checked) {
    price = ((price / 100) * 75).toFixed(2);
  }
  document.getElementById("rSliderValue").innerText = output;
  document.querySelector(".pricing-item-price-amount").innerHTML = price;
});

// Switch Toggle
checkbox.addEventListener("click", function () {
  let newPrice = document.querySelector(".pricing-item-price-amount").innerHTML;
  if (!this.checked) {
    newPrice = ((newPrice / 3) * 4).toFixed(2);
  }
  if (this.checked) {
    newPrice = ((newPrice / 100) * 75).toFixed(2);
  }
  document.querySelector(".pricing-item-price-amount").innerHTML = newPrice;
});

function sliderMovement() {
  let x = (this.value / this.max) * 100;
  slider.style.background =
    "linear-gradient(90deg, hsl(174, 77%, 80%) " +
    x +
    "%, hsl(224, 65%, 95%) " +
    x +
    "%)";
}

slider.addEventListener("mousemove", sliderMovement, false);
slider.addEventListener("click", sliderMovement, false);

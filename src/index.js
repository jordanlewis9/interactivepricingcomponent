import "./style.scss";

const track = document.querySelector(".slider__slider");
const showMoney = document.querySelector(".slider__stats--money-bold");
const showPageviews = document.querySelector(".slider__stats--pageviews-total");
const checkbox = document.querySelector(".slider__options--checkbox");
const time = document.querySelector(".slider__stats--time");

const monthlyCost = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];
const yearlyCost = ['$72.00', '$108.00', '$144.00', '$216.00', '$324.00'];
const pageviews = ['10K', '50K', '100K', '500K', '1M'];

track.addEventListener("input", (e) => {
  const arrayIndex = Math.ceil(e.target.value / 20) - 1;
  track.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${e.target.value}%, ${e.target.value}%, hsl(224, 65%, 95%))`;
  if (checkbox.checked) {
    showMoney.innerHTML = `${yearlyCost[arrayIndex]}`;
    showPageviews.innerHTML = `${pageviews[arrayIndex]}`;
  } else {
    showMoney.innerHTML = `${monthlyCost[arrayIndex]}`;
    showPageviews.innerHTML = `${pageviews[arrayIndex]}`;
  }
});

checkbox.addEventListener("input", (e) => {
  const arrayIndex = Math.ceil(track.value / 20) - 1;
  if (checkbox.checked) {
    showMoney.innerHTML = `${yearlyCost[arrayIndex]}`;
    time.innerHTML = 'year';
  } else {
    showMoney.innerHTML = `${monthlyCost[arrayIndex]}`;
    time.innerHTML = 'month';
  }
})
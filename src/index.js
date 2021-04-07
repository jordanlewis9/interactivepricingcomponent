import "./style.scss";

const track = document.querySelector(".slider__slider");
const showMoney = document.querySelector(".slider__stats--money-bold");
const showPageviews = document.querySelector(".slider__stats--pageviews-total");

const monthlyCost = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];
const yearlyCost = ['$72.00', '$108.00', '$144.00', '$216.00', '$324.00'];
const pageviews = ['10K', '50K', '100K', '500K', '1M'];

track.addEventListener("input", (e) => {
  const arrayIndex = Math.ceil(e.target.value / 20) - 1
  track.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${e.target.value}%, ${e.target.value}%, hsl(224, 65%, 95%))`;
  showMoney.innerHTML = `${monthlyCost[arrayIndex]}`;
  showPageviews.innerHTML = `${pageviews[arrayIndex]}`;
});
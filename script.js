window.onload = init();

function init() {
  setDaysLeft(getDaysLeft());
}

function getDaysLeft() {
  const oneDay = 24 * 60 * 60 * 1000;
  const date = new Date();
  const firstDate = new Date(2022, 4, 21);
  const secondDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

function setDaysLeft(days) {
  document.getElementById("daysLeft").innerHTML = `${days} days left`;
}

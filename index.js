const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  body: document.querySelector("body"),
  buttonStart: document.querySelector('[data-action = "start"]'),
  buttonStop: document.querySelector('[data-action = "stop"]'),
  handleInterval: 0
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const handleStart = () => {
  refs.buttonStart.disabled = true;
  refs.handleInterval = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
};

const handleStop = () => {
  refs.buttonStart.disabled = false;
  clearInterval(refs.handleInterval);
};

refs.buttonStart.addEventListener("click", handleStart);

refs.buttonStop.addEventListener("click", handleStop);

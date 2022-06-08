const container = document.getElementById("container");
const colors = [
  "#9ADCFF",
  "#FFF89A",
  "#FFB2A6",
  "#FF8AAE",
  "#B983FF",
  "#94B3FD",
  "#94DAFF",
  "#99FEFF",
  "#FF87CA",
  "#FFC4E1",
  "#EAEAEA",
  "#EED7CE",
  "#F0E4D7",
  "#F5C0C0",
  "#FF7171",
  "#9FD8DF",
  "#CC7351",
  "#E08F62",
  "#DED7B1",
  "#9DAB86",
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

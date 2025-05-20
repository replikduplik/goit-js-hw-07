function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const text   = document.querySelector(".color");

button.addEventListener("click", (event)=>{
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    text.textContent = color;
});
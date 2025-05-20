const input = document.querySelector("input[type='number']");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

const boxes = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
destroyButton.addEventListener("click" , (event)=>{
    destroyBoxes();
})

createButton.addEventListener("click", (event)=>{
    destroyBoxes();
    createBoxes(input.value);
});

function createBoxes(amount){
    let  size = 30;
    
    if(amount >= 1 && amount <= 100){
        
        for(let i = 0; i< amount; i++){
            
            const box = document.createElement("div");
            box.style.height = `${size}px`;
            box.style.width = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            boxes.appendChild(box);
            size += 10;
        }
    }
}

function destroyBoxes(){
    return boxes.innerHTML = '';
}


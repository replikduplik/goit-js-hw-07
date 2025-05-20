const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () =>{
  const str = input.value.trim();
  output.textContent = str === '' ? 'Anonymous' : str;
} )
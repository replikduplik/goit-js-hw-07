const listItem = document.querySelectorAll(".item"); 
const count = listItem.length; 

console.log(`Number of categories: ${count}`);
listItem.forEach((list) => {
  const title = list.querySelector("h2").textContent;
  const itemsCount = list.querySelectorAll("ul li").length;
  console.log(`Category : ${title}`);
  console.log(`Elements : ${itemsCount}`);
});
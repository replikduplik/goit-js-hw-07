const images = [
  {
    url: ,
    alt: ,
  },
  {
    url: ,
    alt: ,
  },
  {
    url: ,
    alt: ,
  },
];


const gallery = document.querySelector(".gallery");

const addGallery = images.map(({url, alt}) => 
    `<li class="gallery-item">
      <img src='${url.replace(/^<|>$/g, "")}' alt = '${alt}'>
    </li>`
).join("");

gallery.insertAdjacentHTML('beforeend', addGallery);



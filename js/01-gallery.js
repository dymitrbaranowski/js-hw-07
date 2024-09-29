import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const ulContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
ulContainer.insertAdjacentHTML("beforeend", galleryMarkup);
ulContainer.addEventListener("click", onUlContainerClick);

function onUlContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const selectedImage = evt.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
       <img src="${selectedImage}" width="800" height="600">
  `);

  instance.show();
  ulContainer.addEventListener("click", onUlContainerClick);
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
       />
      </a>
    </li>
`;
    })
    .join("");
}

import { galleryItems } from "./gallery-items.js";

const ulContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
ulContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
       <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
      </li>
  `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  animationSpeed: 250,
  overlayOpacity: 0.7,
  captionsData: "alt",
  captionDelay: 250,
});

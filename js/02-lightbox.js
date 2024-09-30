import { galleryItems } from "./gallery-items.js";

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

  document.addEventListener("keyup", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
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

import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);
const ulContainer = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
ulContainer.insertAdjacentHTML("beforeend", galleryMarkup);
ulContainer.addEventListener("click", onulContainerClick);

function onulContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(evt.target.dataset.source);
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
console.log(createGalleryMarkup(galleryItems));

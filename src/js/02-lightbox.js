import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(`.gallery`);
const galleryImages = galleryItems
  .map(({ preview, original, description }) => {
    const galleryItem = `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li >`;
    return galleryItem;
  })
  .join(``);
gallery.insertAdjacentHTML(`beforeend`, galleryImages);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

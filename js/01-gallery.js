import { galleryItems } from "./gallery-items.js";
// Change code below this line
// const galleryContainer = document.querySelector(".gallery");
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
// galleryContainer.addEventListener("click", onImgClick);

// // rendered items
// function createGalleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }

// // create modal
// function onImgClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") return;

//   const isItemImage = e.target.classList.contains("gallery__image");
//   if (!isItemImage) return;

//   const currentImgUrl = e.target.dataset.source;

//   const instance = basicLightbox.create(
//     `
// 		<img src="${currentImgUrl}" width="1280" height="auto"/>
//         `,
//     {
//       onShow: (instance) => {
//         window.addEventListener("keydown", onEscKeyPress);
//       },
//       onClose: (instance) => {
//         window.removeEventListener("keydown", onEscKeyPress);
//       },
//     }
//   );
//   instance.show();

//   function onEscKeyPress(e) {
//     const ESC_KEY_CODE = "Escape";
//     const isEscKey = e.code === ESC_KEY_CODE;
//     if (!isEscKey) return;
//     instance.close();
//   }
// }
// var2:

console.log(galleryItems);
const galleryItemsUl = document.querySelector(".gallery");
const createItems = galleryItems.map(({ preview, original, description }) => {
  const galleryList = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  return galleryList;
});

galleryItemsUl.insertAdjacentHTML(`beforeend`, createItems.join(``));

galleryItemsUl.addEventListener(`click`, handleImgClick);
function handleImgClick(event) {
  event.preventDefault();
  const imgTarget = event.target;
  if (imgTarget.nodeName !== `IMG`) {
    return imgTarget;
  }
  const currentImgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `);
  instance.show();
  galleryItemsUl.addEventListener(`keydown`, (event) => {
    if (event.code === "Escape") instance.close();
  });
}
import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const itemsGallery = galleryItems
    .map(img => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
    />
    </a>
    </div>`).join("");

gallery.insertAdjacentHTML("afterbegin", itemsGallery)
gallery.addEventListener("click", onImgClick)

function onImgClick (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    };
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `)
    instance.show()
}

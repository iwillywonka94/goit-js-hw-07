import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery")
const itemsGallery = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`
).join("");
gallery.insertAdjacentHTML("afterbegin", itemsGallery);

const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, showCounter: false});
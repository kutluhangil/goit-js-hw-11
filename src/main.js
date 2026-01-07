import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import {
  renderGallery,
  clearGallery,
  showNoResultsMessage,
  showErrorMessage,
} from "./js/render-functions.js";

const form = document.querySelector("#search-form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search term",
      position: "topRight",
    });
    return;
  }

  // Show loader
  loader.classList.remove("hidden");

  // Clear gallery
  clearGallery();

  fetchImages(query)
    .then((data) => {
      if (data.hits.length === 0) {
        showNoResultsMessage();
      } else {
        renderGallery(data.hits);
        lightbox.refresh();
      }
    })
    .catch((error) => {
      showErrorMessage(error);
    })
    .finally(() => {
      loader.classList.add("hidden");
      form.reset();
    });
});

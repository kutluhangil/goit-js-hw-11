const API_KEY = "54097420-c3256ea2dfff8b14c6496ca25";

const BASE_URL = "https://pixabay.com/api/";

/**
 * Fetches images from Pixabay API
 * @param {string} query - The search query
 * @returns {Promise<Object>} - The JSON response
 */
export function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

  return fetch(`${BASE_URL}?${searchParams}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

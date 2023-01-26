import axios from 'axios';

const API_KEY = '32953066-47814ccbf72ca5843b0571ab2';
const BASE_URL = 'https://pixabay.com/api/';
const imageType = 'photo';
const orientationType = 'horizontal';
const safesearch = 'true';
const countImage = '40';

async function fetchImages(query, page) {
  if (query !== '') {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${orientationType}&safesearch=${safesearch}&page=${page}&per_page=${countImage}`
    );
    return response.data;
  }
}

export { fetchImages };

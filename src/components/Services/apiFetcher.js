import axios from 'axios';
// const axios = require('axios').default;
const URL = 'https://api.themoviedb.org/3/movie/550?';
const searchParams = new URLSearchParams({
  key: 'cf140a587ec927271eacbad378897741',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

//* Можно так ===========================================================================
async function fetchImages(keyWord, page) {
  const search = `${URL}?q=${keyWord}&${searchParams}&page=${page}&per_page=12`;

  const response = await axios.get(search);

  return response.data;
}

const ppp = {
  fetchImages,
};
export default ppp;

//* Можно так ===========================================================================
// export const fetchImages = async (keyWord, page) => {
//   const search = `${URL}?q=${keyWord}&${searchParams}&page=${page}&per_page=12`;

//   const response = await axios.get(search);

//   return response.data;
// };

// export default {
//   fetchImages,
// };
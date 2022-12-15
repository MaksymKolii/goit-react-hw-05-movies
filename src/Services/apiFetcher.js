import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const searchParams = new URLSearchParams({
  api_key: 'cf140a587ec927271eacbad378897741',
  language: 'en-US',
  // language: 'pl',
  //   orientation: 'horizontal',
  //   safesearch: true,
});

async function fetchMoviesByName(keyWord) {
  const search = `search/movie?${searchParams}&query=${keyWord}`;

  const response = await axios.get(search);

  return response.data;
}

async function fetchMostPopular() {
  const search = `trending/movie/day?${searchParams}`;

  const response = await axios(search);

  return response.data.results;
}
async function fetchMovieById(movieId) {
  const search = `/movie/${movieId}?${searchParams}`;

  const response = await axios.get(search);

  //* нужно будет (genres, id, poster_path, overview, tagline, vote_average)

  return response.data;
}

const allAPIs = {
  fetchMoviesByName,
  fetchMostPopular,
  fetchMovieById,
};
export default allAPIs;

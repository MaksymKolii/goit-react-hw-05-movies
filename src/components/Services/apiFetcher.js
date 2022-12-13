import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';

const searchParams = new URLSearchParams({
  api_key: 'cf140a587ec927271eacbad378897741',
language: 'en-US',
// language: 'pl',
//   orientation: 'horizontal',
//   safesearch: true,

});

async function fetchMoviesByName(keyWord) {
  const search = `${URL}search/movie?${searchParams}&query=${keyWord}`;

  const response = await axios.get(search);

  return response.data;
}

async function fetchMostPopular() {
  const search = `${URL}trending/movie/day?${searchParams}`;

  const response = await axios.get(search);

  return response.data;
}



const allAPIs = {
  fetchMoviesByName,
  fetchMostPopular
};
export default allAPIs;


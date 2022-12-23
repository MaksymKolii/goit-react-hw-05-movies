// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Api from '../Services/apiFetcher';

// export const useFetchMovie = () => {
//   const [movie, setMovie] = useState(null);
//   const { movieId } = useParams();

//   useEffect(() => {
//     Api.fetchMovieById(movieId).then(setMovie);
//   }, [movieId]);

//   return movie;
// };

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      Api.fetchActors(movieId).then(setCast);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  console.log(cast);
  // cast.map(({ gender }) => {
  //   return console.log('typeQff', typeof gender);
  // });
  return (
    <>
      <ul>
        {cast &&
          cast.map(({ cast_id, name, gender, profile_path }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://louisville.edu/history/images/noimage.jpg/image'
                }
                alt={name}
                width="100"
              ></img>

              {{ gender } === '2' ? <p>Actress</p> : <p>Actor</p>}
              <span>{name}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

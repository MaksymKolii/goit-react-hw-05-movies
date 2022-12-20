import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  // const location = userLocation();

  useEffect(() => {
    async function getActors() {
      try {
        const res = await Api.fetchActors(movieId);
        setCast(res);
      } catch (error) {
        console.log(error);
      }
    }
    getActors();
  }, [movieId]);

  console.log(cast);
  const genderSwitcher = data => {
    if (data === 2) {
      return 'Actor';
    }
    if (data === 1) {
      return 'Actress';
    }
  };
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
              {/* <p>{{ gender } === 1 ? 'Actress' : 'Actor'}</p> */}
              <p>{genderSwitcher(gender)}</p>

              {/* {{ gender } === 2 ? <p>Actress</p> : <p>Actor</p>} */}
              <span>{name}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

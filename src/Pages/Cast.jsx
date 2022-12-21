import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../Services/apiFetcher';
import { CastList } from 'components/CastList/CastList';

export const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

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

  return <>{cast && <CastList cast={cast} />}</>;
};

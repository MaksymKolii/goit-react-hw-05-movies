import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Api from '../Services/apiFetcher';
import { CastList } from 'components/CastList/CastList';
import { Loader } from '../components/Loader/Loader';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const isFirstRender = useRef(true);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getActors() {
      setIsLoading(true);
      try {
        const res = await Api.fetchActors(movieId);

        setCast(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (isFirstRender.current) {
      getActors();
      isFirstRender.current = false;
      return;
    }
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {/* {cast && <CastList cast={cast} />} */}
      {cast.length === 0 && !isLoading ? (
        <p> We don't have any actors</p>
      ) : (
        <CastList cast={cast} />
      )}
    </>
  );
};

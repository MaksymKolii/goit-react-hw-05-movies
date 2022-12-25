import { useLocation } from 'react-router-dom';
import { CardLink, CardBottom, CardTitle, Image } from './MovieCard.styled';

export const MovieCard = ({ release, title, poster, id }) => {
  const location = useLocation();
  const year = new Date(release).getFullYear();
  console.log(typeof year);

  return (
    <CardLink to={`/movies/${id}`} state={{ from: location }}>
      <Image
        src={
          poster
            ? `https://image.tmdb.org/t/p/w300${poster}`
            : 'https://louisville.edu/history/images/noimage.jpg/image'
        }
        alt={title}
        width="200"
        height="100%"
      />
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        <h4>Release date: {release}</h4>
      </CardBottom>
    </CardLink>
  );
};

import { Genres } from 'components/Genres/Genres';
import { Loader } from 'components/Loader/Loader';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Title, Image, Video, Div } from './MoviesDetailsList.styled';
import PropTypes from 'prop-types';

export const MovieDetailsList = ({ movieInfo }) => {
  const location = useLocation();
  const {
    release_date,
    genres,
    videos,
    title,
    poster_path,
    vote_average,
    overview,
    tagline,
    id,
  } = movieInfo;

  const normalizeVotes = data => Math.round(data * 10) + '%';

  //   const normalizeYear = data => data.slice(0, 4);
  const year = new Date(release_date).getFullYear();

  const getVideo = () => {
    const arrVideos = videos.results;
    return arrVideos.find(video => video.type === 'Trailer')
      ? arrVideos.find(video => video.type === 'Trailer').key
      : arrVideos[0].key;
  };
  return (
    release_date && (
      <>
        <Title>
          {title}
          <span>(</span>

          {/* <span>{normalizeYear(release_date)}</span> */}
          <span>{year}</span>

          <span>)</span>
        </Title>
        <Image
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://louisville.edu/history/images/noimage.jpg/image'
          }
          alt={title}
          width="300"
        ></Image>
        <Genres genreArray={genres} />
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Tagline</h3>
        <p>{tagline}</p>
        <p>User score: {normalizeVotes(vote_average)}</p>
        {videos && videos.results.length !== 0 && (
          <Div>
            trailer:
            <Video
              src={`https://www.youtube.com/embed/${getVideo()}`}
              frameBorder="0"
              allowFullScreen
            ></Video>
          </Div>
        )}
        <h4>Additional information</h4>
        <Link to={`/movies/${id}/cast`} state={location.state}>
          Cast
        </Link>
        <Link to={`/movies/${id}/reviews`} state={location.state}>
          Reviews
        </Link>
        <Outlet />
      </>
    )
  );
};
MovieDetailsList.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
    release_date: PropTypes.string,
  }),
};

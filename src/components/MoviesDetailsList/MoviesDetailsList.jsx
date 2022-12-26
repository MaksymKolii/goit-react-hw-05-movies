import { Suspense } from 'react';
import { Genres } from 'components/Genres/Genres';
import { Loader } from 'components/Loader/Loader';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Title,
  Image,
  Video,
  Div,
  TitleH3,
  TitleH4,
  Span,
  AddInfoLink,
  DivWrap,
  Wrapper,
  ContextWrap,
} from './MoviesDetailsList.styled';
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
    // tagline,
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
        <Wrapper>
          {title && (
            <Image
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + poster_path
                  : 'https://louisville.edu/history/images/noimage.jpg/image'
              }
              alt={title}
              width="300"
            ></Image>
          )}

          <ContextWrap>
            <Genres genreArray={genres} />
            <TitleH3>
              Overview: <Span>{overview}</Span>
            </TitleH3>

            {/* <TitleH3>Tagline: </TitleH3> */}
            {/* <TextP>{tagline}</TextP> */}
            <TitleH3>
              User score: <Span>{normalizeVotes(vote_average)}</Span>
            </TitleH3>
            {videos && videos.results.length !== 0 && (
              <Div>
                Trailer:
                <Video
                  src={`https://www.youtube.com/embed/${getVideo()}`}
                  frameBorder="0"
                  allowFullScreen
                ></Video>
              </Div>
            )}
          </ContextWrap>
        </Wrapper>

        <TitleH4>Additional information</TitleH4>
        <DivWrap>
          <AddInfoLink to={`/movies/${id}/cast`} state={location.state}>
            Cast
          </AddInfoLink>
          <AddInfoLink to={`/movies/${id}/reviews`} state={location.state}>
            Reviews
          </AddInfoLink>
        </DivWrap>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
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

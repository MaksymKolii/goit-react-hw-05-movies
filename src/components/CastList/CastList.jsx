import PropTypes from 'prop-types';
import {
  CastListUL,
  CastListImg,
  CastListLI,
  CastListP,
  CastListSpan,
} from 'components/CastList/CastList.styled';

export const CastList = ({ cast }) => {
  const genderSwitcher = data => {
    if (data === 2) {
      return 'Actor';
    }
    if (data === 1) {
      return 'Actress';
    }
    if (data === 0) {
      return 'Individual';
    }
  };
  return (
    <CastListUL>
      {cast &&
        cast.map(({ cast_id, name, gender, profile_path }) => (
          <CastListLI key={cast_id}>
            <CastListImg
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : 'https://louisville.edu/history/images/noimage.jpg/image'
              }
              alt={name}
              width="150"
              height="100%"
            ></CastListImg>
            <CastListP>{genderSwitcher(gender)}</CastListP>
            <CastListSpan>{name}</CastListSpan>
          </CastListLI>
        ))}
    </CastListUL>
  );
};

CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

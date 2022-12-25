import { useNavigate, useLocation } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti';
import { IconContext } from 'react-icons';

export const ButtonGoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      <IconContext.Provider value={{ size: 35, color: '#5CE4CF' }}>
        <TiArrowLeftThick />
      </IconContext.Provider>
      Go back
    </button>
  );
};

import { useNavigate, useLocation } from 'react-router-dom';
import { TiArrowLeftThick } from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { GoBackButton } from './ButtonGoBack.styled';

export const ButtonGoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <GoBackButton
      onClick={() => {
        navigate(location?.state?.from ?? '/');
      }}
    >
      <IconContext.Provider value={{ size: 35, color: '#3f61b5' }}>
        <TiArrowLeftThick />
      </IconContext.Provider>
      Go back
    </GoBackButton>
  );
};

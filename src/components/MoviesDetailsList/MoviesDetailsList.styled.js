import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

export const Title = styled.h2`
  text-align: center;
  margin: 35px 0 25px 0;
  font-size: 28px;
  font-weight: 500;
  /* color: #c9d1c8; */
  color: #5b7075;
  @media (min-width: 768px) {
    margin: 25px 0 55px 0;
  }
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 250px;
  margin: 0 auto;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    align-self: flex-start;
    width: 350px;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
    margin-bottom: 23px;
  }
`;

export const ContextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #4cb5f5;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const TitleH4 = styled.h4`
  text-align: center;
  margin: 15px 0 15px 0;
  font-size: 20px;
  font-weight: 500;
  /* color: #c9d1c8; */
  color: #5b7075;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #4cb5f5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;
export const TitleH3 = styled.h3`
  text-align: start;
  margin-bottom: 10px;
  font-size: 20px;
  color: #5b7075;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
  }
`;

export const DivWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
`;

export const AddInfoLink = styled(Link)`
  font-size: 20px;
  text-transform: lowercase;
  color: tomato;
  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Video = styled.iframe`
  width: 280px;
  height: 157px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 448px;
    height: 252px;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: 504px;
    height: 284px;
  }
`;

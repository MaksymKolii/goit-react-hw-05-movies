import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

export const Title = styled.h2`
  text-align: center;
  margin: 35px 0 25px 0;
  font-size: 28px;
  font-weight: 500;
  color: #99a9ff;
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

export const Wrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
    margin-bottom: 30px;
  }
`;

export const SmallWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #99a9ff;
  /* @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  } */
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #99a9ff;
  /* @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  } */
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.45;
  overflow: hidden;
  text-overflow: ellipsis;
  /* @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
  } */
`;

export const AdditionalTitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #99a9ff;
  /* @media (min-width: 768px) {
    font-size: 26px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  } */
  &::before {
    content: '';
    display: block;
    margin: 25px auto;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(128, 147, 255, 0.25) 15%,
      rgba(125, 155, 250, 1) 40%,
      rgba(96, 219, 212, 0.8) 65%,
      rgba(92, 228, 207, 0.15)
    );
    /* @media (min-width: 768px) {
      width: 750px;
      margin: 0 auto 25px auto;
    } */
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
`;

export const AdditionalLink = styled(Link)`
  font-size: 20px;
  text-transform: lowercase;
  color: #5ce4cf;
  /* @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
  } */
`;

// export const StyledContainer = styled(ToastContainer)`
//   .Toastify__toast {
//     background-color: #232526;
//     color: #5ce4cf;
//     border: 1px solid #99a9ff;
//   }
//   .Toastify__close-button {
//     color: #5ce4cf;
//   }
//   .Toastify__progress-bar {
//     background: linear-gradient(
//       to right,
//       rgba(128, 147, 255, 0.25),
//       rgba(125, 155, 250, 1),
//       rgba(96, 219, 212, 0.8),
//       rgba(92, 228, 207, 0.15)
//     );
//   }
// `;

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

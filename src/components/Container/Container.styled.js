import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1200px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

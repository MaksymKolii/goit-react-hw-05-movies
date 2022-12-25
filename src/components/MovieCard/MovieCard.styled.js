import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  border-radius: 5px 5px 0 0;
  width: 200px;
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  transition: box-shadow 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const CardBottom = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardTitle = styled.h2`
  font-size: 22px;
  line-height: 1.33;
  text-align: center;
`;

export const Rating = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

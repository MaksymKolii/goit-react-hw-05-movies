import styled from 'styled-components';

export const CastListUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin: -5px;
`;

export const CastListLI = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  max-width: 150px;
  margin: 5px;
  flex-grow: 1;
`;

export const CastListImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  margin-bottom: 3px;
`;

export const CastListP = styled.p`
  display: block;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
  color: black;
`;

export const CastListSpan = styled.span`
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
  color: black;
`;

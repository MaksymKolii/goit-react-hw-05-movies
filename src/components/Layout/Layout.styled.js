import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;

  h1,
  h2,
  h3,
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul,
  ol {
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  /* > nav {
    display: flex;
  } */
`;

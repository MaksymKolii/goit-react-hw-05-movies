import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}
h1,
h2,
h3 {
  font-weight: 500;
}
ul {
    margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
    text-decoration: none;
    color: inherit;
}
button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}
body {
  
    background-color:  #04202c;
    color: #f4f4f4;
    font-family: 'Rubik', sans-serif;
}
#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

`;

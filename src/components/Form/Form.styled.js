import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 50px;
`;
export const Input = styled.input`
  @media (max-width: 479px) {
    width: 170px;
  }
  width: 357px;
  text-align: center;
  padding-left: 35px;
  font-size: 18px;
  outline: none;
  background-color: inherit;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #304040;

  border-image-slice: 1;
  color: #c9d1c8;

  &::placeholder {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  background-color: inherit;
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

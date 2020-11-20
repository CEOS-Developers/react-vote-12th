import styled from "styled-components";

export const Form = styled.form`
  width: 200px;
  height: 300px;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 180px;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
  margin: 20px;
`;
export const Button = styled.button`
  width: 70px;
  height: 50px;
  border-radius: 10px;
  background-color: pink;
  margin-left: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

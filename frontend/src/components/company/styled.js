import styled from "styled-components";

export const Footer = styled.div`
  position: relative;
  top: 81px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 28px;
  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 250px;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }
  button {
    background-color: #FF4820;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #ff7253;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
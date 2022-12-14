import styled, { css } from "styled-components";

const buttonStyle = css`
  color: white;
  background-color: black;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  color: black;
  background-color: white;
  border: 1px solid black;
  &:hover {
    background: black;
    color: white;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyle;
  } else {
    return props.inverted ? invertedButtonStyle : buttonStyle;
  }
};

const googleSignInButtonStyle = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const StyleButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;

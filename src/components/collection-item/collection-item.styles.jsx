import styled from "styled-components";
import Button from "../button/button.component";

export const StyleColletionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const StyleImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const StyleCollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyleName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const StylePrice = styled.span`
  width: 10%;
`;

export const StyleButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

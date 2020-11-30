import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 18vw;
  min-height: 92vh;
`;

export const Card = styled.div`
  width: 180px;
  height: 210px;
  border: 2px solid black;
  border-radius: 5%;
  padding: 10px;
  margin: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;

  img {
    border: 1px solid black;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      margin-right: 500px;
      margin-top: 500px;
    }
    100% {
      opacity: 1;
      margin-right: 0px;
      margin-top: 0px;
    }
  }
`;

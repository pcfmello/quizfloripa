import styled from "styled-components";
import db from "../../../db.json";

interface QuizBackgroundProps {
  backgroundImage: string;
}

const QuizBackground = styled.div<QuizBackgroundProps>`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${db.theme.colors.mainBg};
  flex: 1;
  transition: background 0.5s ease;
  @media screen and (max-width: 500px) {
    background-image: none;
    overflow: hidden;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(transparent, ${db.theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;

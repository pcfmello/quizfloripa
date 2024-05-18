import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GithubCorner from "../src/components/GithubCorner";
import QuizBackground from "../src/components/QuizBackground";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Florianópolis</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Ilha da Magia (Ilha de SC)</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz sobre a cidade</h1>
            <p>
              Teste seus conhecimentos culturais sobre essa belíssima cidade!
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/pcfmello" />
    </QuizBackground>
  );
}

import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import db from "../db.json";
import Footer from "../src/components/Footer";
import GithubCorner from "../src/components/GithubCorner";
import QuizBackground from "../src/components/QuizBackground";
import { Widget, WidgetContent, WidgetHeader } from "../src/components/Widget";
import { useState } from "react";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

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
  const router = useRouter();

  const [name, setname] = useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>FloripaQuiz - Home</title>
      </Head>
      <QuizContainer>
        <Widget>
          <WidgetHeader>
            <h1>Florianópolis - Ilha da Magia (Ilha de SC)</h1>
          </WidgetHeader>
          <WidgetContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Diga teu nome aí moquiridu"
              />
              <button type="submit" disabled={!name}>
                Jogar{name.length > 0 ? `, ${name}` : ""}
              </button>
            </form>
          </WidgetContent>
        </Widget>
        <Widget>
          <WidgetContent>
            <h1>Quiz sobre a cidade</h1>
            <p>
              Teste seus conhecimentos culturais sobre essa belíssima cidade!
            </p>
          </WidgetContent>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/pcfmello" />
    </QuizBackground>
  );
}

import styled from "styled-components";
import db from "../../../db.json";

const Widget = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${db.theme.colors.mainBg};
  border-radius: ${db.theme.borderRadius};
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

// eslint-disable-next-line
const WidgetHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

// eslint-disable-next-line
const WidgetContent = styled.div`
  padding: 1.5rem 2rem 2rem;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export { Widget, WidgetHeader, WidgetContent };

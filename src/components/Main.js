import React from "react";
import styled from "styled-components";
import { MainHeading } from "../styles/headings";
import Card from "./Card/Card";

function Main({ children }) {
  return (
    <StyledMain>
      <MainHeading>
        Birdraft<span>Rank and organize your Twitter drafts</span>
      </MainHeading>
      <Card />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  grid-column: span 4;
  background: #eee;
  padding: 1.5rem;
`;

export default Main;

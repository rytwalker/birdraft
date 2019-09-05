import React from "react";
import styled from "styled-components";
import { MainHeading } from "../styles/headings";
import CardForm from "./Card/CardForm";
import CardListItem from "./Card/CardListItem";

function Main({ children }) {
  return (
    <StyledMain>
      <MainHeading>
        Birdraft<span>Rank and organize your Twitter drafts</span>
      </MainHeading>
      <CardForm form />
      <CardListItem style={{ marginBottom: "1.5rem" }} />
      <CardListItem />
      <CardListItem />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  grid-column: span 4;
  background: #eee;
  padding: 1.5rem;
`;

export default Main;

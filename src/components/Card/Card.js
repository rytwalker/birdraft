import React from "react";
import styled from "styled-components";
import CardForm from "./CardForm";

function Card() {
  return (
    <StyledCard>
      <CardForm />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
`;

export default Card;

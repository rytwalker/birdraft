import React from "react";
import styled from "styled-components";

function Card({ children, form }) {
  return <StyledCard form={form}>{children}</StyledCard>;
}

const StyledCard = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: ${({ form }) => (form ? "3rem" : "1.5rem")};
`;

export default Card;

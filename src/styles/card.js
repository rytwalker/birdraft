import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: ${({ isForm }) => (isForm ? "3rem" : "1.5rem")};
`;

import React from "react";
import styled from "styled-components";
import "./layout.css";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  max-width: 1196px;
  margin: 0 auto;
`;

export default Layout;

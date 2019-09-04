import React from "react";
import styled from "styled-components";

function Sidebar({ children }) {
  return <StyledSidebar>{children}</StyledSidebar>;
}

const StyledSidebar = styled.div`
  grid-column: span 4;
  /* background: #eee; */
  min-height: 100vh;
`;

export default Sidebar;

import React from "react";
import styled from "styled-components";

export default function NaviBar() {
  return (
    <NavContainer>
      <LogoTitle>R.I.P</LogoTitle>

      <GNBListBox>
        <li>TEST 1</li>
        <li>TEST 2</li>
        <li>TEST 3</li>
      </GNBListBox>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid #fff6d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const LogoTitle = styled.span`
  padding: 5px 0;
  font-size: 25px;
`;

const GNBListBox = styled.ul`
  width: 30%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  & li {
    display: inline-block;
    cursor: pointer;
  }

  & li:hover {
    font-weight: bold;
  }
`;

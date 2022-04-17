import React, { ReactNode } from "react";
import styled from "styled-components";
import NaviBar from "./NaviBar";
import Sidebar from "./Sidebar";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <Container>
      <NaviBar />

      <MainContainer>
        <Sidebar />

        {children}
      </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContainer = styled.main`
  margin: 2rem auto;
  width: 75%;
  display: flex;
`;

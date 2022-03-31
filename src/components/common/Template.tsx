import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import NaviBar from "./NaviBar";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <Container>
      <NaviBar />

      {children}

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

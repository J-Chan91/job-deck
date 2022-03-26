import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'KyoboHandwriting2020A';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/KyoboHandwriting2020A.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  font-family: 'KyoboHandwriting2020A';
}

::-webkit-scrollbar {
  display: none;
}

`;

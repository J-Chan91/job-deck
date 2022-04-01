import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LandingPage from "./pages/LandingPage";
import MakeObituaryPage from "./pages/MakeObituaryPage";
import SigninPage from "./pages/SigninPage";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/make/obituary" element={<MakeObituaryPage />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
${reset}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');

body {
  font-family: 'Noto Sans KR', sans-serif;
}

::-webkit-scrollbar {
  display: none;
}

`;

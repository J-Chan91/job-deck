import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AddJobScrapPage from "./pages/AddJobScrapPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddJobScrapPage />} />
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family: 'LeferiPoint-WhiteObliqueA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
   font-family: 'LeferiPoint-WhiteObliqueA';
}

::-webkit-scrollbar {
  display: none;
}

`;

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

::-webkit-scrollbar {
  display: none;
}
`;

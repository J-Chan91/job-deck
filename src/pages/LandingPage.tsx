import React from "react";
import styled from "styled-components";
import Template from "../components/common/Template";

import backgroundImage from "../styles/images/background.jpg";

export default function LandingPage() {
  return (
    <Template>
      <LandingPageContainer backgroundImage={backgroundImage}>
        <FirstSection>
          <h1>메인 페이지</h1>
        </FirstSection>

        <SecondSection></SecondSection>

        <SecondSection></SecondSection>

        <SecondSection></SecondSection>
      </LandingPageContainer>
    </Template>
  );
}

const LandingPageContainer = styled.main<{ backgroundImage: string }>`
  width: 100vw;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const FirstSection = styled.section`
  width: 100vw;
  height: 500px;
  background-color: #fff;
  border-radius: 0 0 1.5rem 1.5rem;
  margin-bottom: 200px;
`;

const SecondSection = styled.section`
  width: 100vw;
  height: 500px;
  border-radius: 1rem;
  background-color: #fff;
  margin-bottom: 100px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.55);
`;

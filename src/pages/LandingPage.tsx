import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Template from "../components/common/Template";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

import backgroundImage from "../styles/images/background.jpg";
import flower from "../styles/images/flower.jpg";

export default function LandingPage() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Template>
      <LandingPageContainer backgroundImage={backgroundImage}>
        <FirstSection>
          <h1>메인 페이지</h1>
        </FirstSection>

        <SecondSection {...useScrollFadeIn({ delay: 0.3, duration: 1 })}>
          <div {...useScrollFadeIn({ delay: 0.3, duration: 1 })}>
            <Link to="/make/obituary">
              <img
                src={flower}
                alt="부고장 만들기"
                onMouseOver={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
              />
              {isMouseOver && <TestContent>부고장 작성하기</TestContent>}
            </Link>
          </div>
        </SecondSection>

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
  position: relative;
  width: 100vw;
  height: 500px;
  border-radius: 1rem;
  background-color: #fff;
  margin-bottom: 100px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;

  a {
    display: inline-block;

    font-size: 1.5rem;

    margin: 1rem;
    color: #000;

    img {
      border-radius: 0.5rem;
      height: 450px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.55);

      transition: 1s;

      &:hover {
        transition: 1s;
        transform: translate(0, -2px);
        filter: opacity(60%);
      }
    }
  }
`;

const TestContent = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  position: absolute;
  bottom: 3rem;
  left: 2rem;

  animation: hoverFadein 3s;

  @keyframes hoverFadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

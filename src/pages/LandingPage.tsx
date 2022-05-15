import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/common/Card";
import Template from "../components/common/Template";
import AddJobScrapPage from "./AddJobScrapPage";

const dummyList = Array(17).fill("Hello");

export default function LandingPage() {
  return (
    <Template>
      <Container>
        {dummyList.length === 0 ? (
          <EmptyScrapAlertBox>
            <span>스크랩 시작 🛫</span>
          </EmptyScrapAlertBox>
        ) : (
          <>
            {dummyList.map((item, idx) => (
              <Card key={idx} />
            ))}
          </>
        )}
      </Container>
    </Template>
  );
}

const Container = styled.main`
  margin-left: 1.7rem;
  width: 75vw;
  display: flex;
  flex-wrap: wrap;
`;

const EmptyScrapAlertBox = styled.section`
  width: 100%;
  font-size: 2rem;
  border-radius: 1rem;
  // border: 3px solid #eee;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 1s;

  & > span {
    transition: 1s;
  }

  &:hover {
    transition: 1s;
    box-shadow: 0 0 8px rgba(0, 0, 0, 1);

    span {
      transform: translate(0, -2rem);
    }
  }

  @media (max-width: 1348px) {
    width: 100%;
    min-width: 350px;
    height: 250px;
    margin: 1rem auto;
  }
`;

const TestItem = styled.section`
  width: 250px;
  height: 250px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 0.7rem;
  cursor: pointer;

  @media (max-width: 1444px) {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    width: 350px;
    height: 250px;
  }

  @media (max-width: 1348px) {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    min-width: 350px;
    height: 250px;
    margin: 1rem auto;
  }
`;

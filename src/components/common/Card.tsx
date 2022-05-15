import { ReactNode, useState } from "react";
import styled from "styled-components";

import { CheckboxListInterface } from "../../types/AddJobScrap";

interface ItemStyleProps {
  fontColor: string;
  backColor: string;
}

export default function Card() {
  const [platformList, setPlatformList] = useState<CheckboxListInterface[]>([
    {
      title: "원티드",
      backColor: "#ffbb6e",
      fontColor: "#fff",
      selectColor: "#d1995a",
    },
    {
      title: "프로그래머스",
      backColor: "#202b3d",
      fontColor: "#fff",
      selectColor: "#3c68b0",
    },
    {
      title: "랠릿",
      backColor: "#3de0aa",
      fontColor: "#fff",
      selectColor: "#1c6b51",
    },
    {
      title: "로켓펀치",
      backColor: "#4e61ff",
      fontColor: "#fff",
      selectColor: "#0b156b",
    },
    {
      title: "회사",
      backColor: "#fc60c0",
      fontColor: "#fff",
      selectColor: "#bf4992",
    },
  ]);

  const [positionList, setPositionList] = useState<CheckboxListInterface[]>([
    {
      title: "FullStack",
      backColor: "#07553B",
      fontColor: "#fff",
      selectColor: "#CED46A",
    },
    {
      title: "BackEnd",
      backColor: "#F9EBDE",
      fontColor: "#000",
      selectColor: "#815854",
    },
    {
      title: "FrontEnd",
      backColor: "#F5D042",
      fontColor: "#fff",
      selectColor: "#0A174E",
    },
    {
      title: "DevOps",
      backColor: "#4e61ff",
      fontColor: "#fff",
      selectColor: "#0b156b",
    },
  ]);

  const [processList, setProcessList] = useState<CheckboxListInterface[]>([
    {
      title: "📬 지원",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "🖥 코딩테스트/과제",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "💬 면접",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "🎉 합격",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "😥 불합격",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
  ]);

  const handlePrintBadge = (article: string, keyword: string): ReactNode => {
    switch (article) {
      case "platform":
        const platformIdx = platformList.findIndex(
          (item) => item.title === keyword
        );

        return (
          <Platform
            fontColor={platformList[platformIdx].fontColor}
            backColor={platformList[platformIdx].backColor}
          >
            {platformList[platformIdx].title}
          </Platform>
        );
      case "position":
        const positionIdx = positionList.findIndex(
          (item) => item.title === keyword
        );

        return (
          <Position
            fontColor={positionList[positionIdx].fontColor}
            backColor={positionList[positionIdx].backColor}
          >
            {positionList[positionIdx].title}
          </Position>
        );
      default:
        const processIdx = processList.findIndex(
          (item) => item.title === keyword
        );

        return (
          <Process
            fontColor={processList[processIdx].fontColor}
            backColor={processList[processIdx].backColor}
          >
            {processList[processIdx].title}
          </Process>
        );
    }
  };

  return (
    <Container>
      <Company>테스트 회사</Company>

      <hr />

      <WrapperBadge>
        {handlePrintBadge("platform", "원티드")}

        {handlePrintBadge("position", "FrontEnd")}
      </WrapperBadge>

      {handlePrintBadge("process", "📬 지원")}
    </Container>
  );
}

const Container = styled.section`
  width: 250px;
  height: 250px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 0.7rem;
  cursor: pointer;
  position: relative;

  & > hr {
    width: 90%;
  }

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

const Company = styled.div`
  font-size: 1.5rem;
  padding: 0.6rem;
`;

const WrapperBadge = styled.div`
  display: flex;
`;

const Platform = styled.div<ItemStyleProps>`
  width: 100%;
  padding: 0.4rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.backColor};
  border-radius: 0.5rem;
  margin: 0.2rem;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backColor};
`;

const Position = styled.div<ItemStyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.backColor};
  border-radius: 0.5rem;
  margin: 0.2rem;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backColor};
`;

const Process = styled.div<ItemStyleProps>`
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.backColor};
  border-radius: 0.5rem;
  margin: 0.2rem;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backColor};
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

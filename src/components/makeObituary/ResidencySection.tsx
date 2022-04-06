import styled from "styled-components";
import ArticleTitle from "../common/ArticleTitle";
import { IoMdClose } from "react-icons/io";

import downArrow from "../../styles/images/down-arrow.png";
import upArrow from "../../styles/images/up-arrow.png";
import { memo, useState } from "react";
import { ResidencyInterface } from "../../types/MakeObituary";

const deceasedRelationshipList = [
  "배우자",
  "딸",
  "아들",
  "며느리",
  "사위",
  "손녀",
  "손자",
  "외손녀",
  "외손자",
  "손서",
  "손부",
];

interface ResidencySectionInterface {
  residencyList: ResidencyInterface[];
  handleAddRegidency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function ResidencySection({
  residencyList,
  handleAddRegidency,
}: ResidencySectionInterface) {
  console.log("상주 입력 섹션");

  const handleDeleteRegidency = () => {};

  return (
    <ResidencyArticle>
      <ArticleTitle>상주 정보</ArticleTitle>

      <ResidencySelectBox
        downArrow={downArrow}
        onChange={handleAddRegidency}
        value=""
      >
        <option hidden>상주 추가</option>

        {deceasedRelationshipList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </ResidencySelectBox>

      <ResidencyListWrapper>
        {residencyList.map(({ regidencyType, regidencyName }, idx) => (
          <ResidencyInfoWrapper key={idx}>
            <span>{regidencyType}</span>
            <input type="text" value={regidencyName} readOnly />
            <button>
              <IoMdClose onClick={handleDeleteRegidency} />
            </button>
          </ResidencyInfoWrapper>
        ))}
      </ResidencyListWrapper>
    </ResidencyArticle>
  );
}

export const MemoizedResidencySection = memo(ResidencySection);

const ResidencyArticle = styled.article`
  padding: 1rem;
`;

const ResidencySelectBox = styled.select<{
  downArrow: string;
}>`
  -webkit-appearance: none;

  background: url(${(props) => props.downArrow}) no-repeat 90% 50%;

  width: 200px;
  padding: 0.8rem 0.5rem;
`;

const ResidencyListWrapper = styled.div`
  margin: 1rem auto;
  padding-top: 1rem;
  border-top: 1px solid black;
`;

const ResidencyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    width: 3rem;
  }

  & > input {
    width: 150px;
  }

  & > button {
    outline: none;
    text-align: right;
    vertical-align: middle;
  }
`;

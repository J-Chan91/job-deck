import styled from "styled-components";
import ArticleTitle from "../common/ArticleTitle";
import { IoMdClose } from "react-icons/io";

import downArrow from "../../styles/images/down-arrow.png";
import upArrow from "../../styles/images/up-arrow.png";
import { useState } from "react";

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

export default function ResidencySection() {
  const [isClickSelectBox, setIsClickSelectBox] = useState<boolean>(false);

  return (
    <ResidencyArticle>
      <ArticleTitle>상주 정보</ArticleTitle>

      <ResidencySelectBox
        isClickSelectBox={isClickSelectBox}
        downArrow={downArrow}
        upArrow={upArrow}
        onClick={() => setIsClickSelectBox(!isClickSelectBox)}
      >
        <option hidden>상주 추가</option>
        {deceasedRelationshipList.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </ResidencySelectBox>

      <div>
        <span>손서</span> <span>홍길동</span>
        <button>
          <IoMdClose />
        </button>
      </div>
    </ResidencyArticle>
  );
}

const ResidencyArticle = styled.article`
  padding: 1rem;
`;

const ResidencySelectBox = styled.select<{
  isClickSelectBox: boolean;
  downArrow: string;
  upArrow: string;
}>`
  -webkit-appearance: none;
  background: url(${(props) => (props.isClickSelectBox ? upArrow : downArrow)})
    no-repeat 90% 50%;

  width: 200px;
  padding: 0.8rem 0.5rem;
`;

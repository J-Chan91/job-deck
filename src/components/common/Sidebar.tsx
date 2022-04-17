import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DeveloperBox from "./DeveloperBox";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isPrintSearchBox, setIsPrintSearchBox] = useState<boolean>(true);

  useEffect(() => {
    if (location.pathname === "/add") {
      setIsPrintSearchBox(false);
    }
  }, []);

  return (
    <>
      {isPrintSearchBox && (
        <SidebarContainer>
          <AuthBox>로그인</AuthBox>

          <AddScrapBtn onClick={() => navigate("/add")}>
            스크랩 추가
          </AddScrapBtn>

          <SearchBox />

          <GNBContainer>
            <article>📑 전체</article>
            <article>🛫 진행중</article>
            <article>😆 합격</article>
            <article>😥 탈락</article>
          </GNBContainer>

          <DeveloperBox />
        </SidebarContainer>
      )}
    </>
  );
}

const SidebarContainer = styled.aside`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  position: sticky;
  width: 15rem;
  height: 75vh;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AuthBox = styled.div`
  background-color: #2bae66;
  color: #fff;
  padding: 1.3rem;
  margin: 0.3rem;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    background-color: #1a6e40;
  }
`;

const AddScrapBtn = styled.button`
  background-color: #f5d042;
  color: #fff;
  font-size: 2rem;
  padding: 1rem;
  margin: 0.3rem;
  border-radius: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #cfaf38;
  }
`;

const SearchBox = styled.input.attrs({
  type: "text",
  placeholder: "검색",
})`
  margin: 1rem 0.5rem;
  font-size: 1.7rem;
  outline: none;
  border: 1px solid #2bae66;
  border-radius: 0.3rem;
`;

const GNBContainer = styled.div`
  height: 70vh;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & article {
    cursor: pointer;
    font-size: 2rem;

    &:hover {
      color: #2bae66;
    }
  }
`;

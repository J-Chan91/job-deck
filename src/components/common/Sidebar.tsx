import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";

import DeveloperBox from "./DeveloperBox";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isPrintSearchBox, setIsPrintSearchBox] = useState<boolean>(true);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

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

          <SearchWrapper>
            <BsSearch size="20" />

            <SearchBox
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />

            {!searchKeyword ? null : (
              <div>
                <MdClose size="20" />
              </div>
            )}
          </SearchWrapper>

          <GNBContainer>
            <article>📑 전체</article>
            <article>🛫 진행중</article>
            <article>😆 합격</article>
            <article>😥 불합격</article>
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
  top: 5rem;
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
  font-size: 1.7rem;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    background-color: #1a6e40;
  }
`;

const AddScrapBtn = styled.button`
  background-color: #f5d042;
  color: #fff;
  font-size: 1.7rem;
  padding: 1rem;
  margin: 0.3rem;
  border-radius: 1rem;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #cfaf38;
  }
`;

const SearchWrapper = styled.div`
  // width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
  position: relative;

  & > svg {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    cursor: pointer;
  }

  & > div {
    position: absolute;
    top: 0.4rem;
    left: 12.5rem;
    cursor: pointer;
  }
`;

const SearchBox = styled.input.attrs({
  type: "text",
  placeholder: "검색",
})`
  width: 10rem;
  padding: 5px 35px;
  font-size: 1.3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;

  &:focus {
    border-bottom: 1px solid #2bae66;
    outline: none;
  }
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

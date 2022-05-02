import { useState } from "react";
import styled from "styled-components";
import { JobSearchURLInterface } from "../../types/AddJobScrap";

interface SiteItemProps {
  selectColor: string;
  fontColor: string;
  isSelect: boolean;
}

export default function IptJobSearchURL() {
  const [selectURLItem, setSelectURLItem] = useState<string>("");
  const [urlList, setUrlList] = useState<JobSearchURLInterface[]>([
    {
      title: "원티드",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#bdbdbd",
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
  ]);

  return (
    <>
      <label>지원한 사이트 </label>

      <SiteWrapper>
        {urlList.map((item) => (
          <SiteItem
            key={item.title}
            isSelect={selectURLItem === item.title ? true : false}
            selectColor={
              selectURLItem === item.title ? item.selectColor : item.backColor
            }
            fontColor={item.fontColor}
            onClick={() => setSelectURLItem(item.title)}
          >
            {item.title}
          </SiteItem>
        ))}
      </SiteWrapper>
    </>
  );
}

const SiteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SiteItem = styled.div<SiteItemProps>`
  font-family: monospace;
  padding: 0.4rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.selectColor};
  border-radius: 0.5rem;
  margin: 0.2rem;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.selectColor};
  box-shadow:  ${(props) =>
    props.isSelect ? "0 0 8px rgba(0, 0, 0, 0.5)" : null};
}`;

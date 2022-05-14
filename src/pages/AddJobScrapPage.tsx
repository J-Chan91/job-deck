import { useState } from "react";
import styled from "styled-components";

import { ScrapInterface } from "../types/AddJobScrap";

import IptCompany from "../components/addJobScrap/IptCompany";
import IptJobSearchPlatform from "../components/addJobScrap/IptJobSearchPlatform";
import IptPosition from "../components/addJobScrap/IptPosition";
import IptPreferential from "../components/addJobScrap/IptPreferential";
import IptRequirements from "../components/addJobScrap/IptRequirements";
import IptURL from "../components/addJobScrap/IptURL";
import Template from "../components/common/Template";
import IptNote from "../components/addJobScrap/IptNote";
import IptProcess from "../components/addJobScrap/IptProcess";

export default function AddJobScrapPage() {
  const [scrap, setScrap] = useState<ScrapInterface>({
    selectJobSearchPlatform: "",
    selectPosition: "",
    selectProcess: "",
    detailUrl: "",
    company: "",
    requirements: "",
    preferential: "",
    note: "",
  });

  return (
    <Template>
      <AddJobScrapPageContainer>
        <AddJobScrapPageInner>
          <TitleBox>
            <h1>스크랩 등록</h1>
            <button>저장하기</button>
          </TitleBox>

          {/* 지원한 사이트 플랫폼 */}
          <ArticleWrapper>
            <IptJobSearchPlatform scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 지원 현황 */}
          <ArticleWrapper>
            <IptProcess scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 상세 정보 URL */}
          <ArticleWrapper>
            <IptURL scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 회사명 */}
          <ArticleWrapper>
            <IptCompany scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 포지션 */}
          <ArticleWrapper>
            <IptPosition scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 지원 자격 */}
          <ArticleWrapper>
            <IptRequirements scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 우대 사항 */}
          <ArticleWrapper>
            <IptPreferential scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>

          {/* 메모 */}
          <ArticleWrapper>
            <IptNote scrap={scrap} setScrap={setScrap} />
          </ArticleWrapper>
        </AddJobScrapPageInner>
      </AddJobScrapPageContainer>
    </Template>
  );
}

const AddJobScrapPageContainer = styled.div`
  margin: 0 auto;
`;

const AddJobScrapPageInner = styled.main`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  background-color: #fff;
  width: 50vw;
  padding: 1rem;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  & > h1 {
    font-size: 2rem;
  }

  & > button {
    background-color: #2bae66;
    color: #fff;
    font-size: 2rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
  }
`;

const ArticleWrapper = styled.div`
  margin-bottom: 2rem;
`;

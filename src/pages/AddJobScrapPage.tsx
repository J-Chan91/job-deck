import styled from "styled-components";
import IptJobSearchURL from "../components/addJobScrap/IptJobSearchURL";
import Template from "../components/common/Template";

export default function AddJobScrapPage() {
  return (
    <Template>
      <AddJobScrapPageContainer>
        <AddJobScrapPageInner>
          <TitleBox>
            <h1>스크랩 등록</h1>

            <button>스크랩하기</button>
          </TitleBox>

          {/* 지원한 사이트 */}
          <IptJobSearchURL />
          <label htmlFor="url-ipt">URL</label>
          <input id="url-ipt" type="text" />
          <label>포지션명</label>
          <input id="url-ipt" />
          <label>회사명</label>
          <label>자격요건</label>
          <label>주요업무</label>
          <label>우대사항</label>
          <label>회사위치</label>
          <textarea></textarea>
          <label>구직상태</label>
        </AddJobScrapPageInner>
      </AddJobScrapPageContainer>
    </Template>
  );
}

const AddJobScrapPageContainer = styled.div`
  margin: 0 auto;
`;

const AddJobScrapPageInner = styled.main`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 50vw;
  height: 90vh;
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

const SiteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SiteItem = styled.div`
  font-family: monospace;
  width: 5rem;
  padding: 0.2rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0.2rem;
`;

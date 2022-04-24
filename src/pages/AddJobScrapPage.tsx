import styled from "styled-components";
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

          <label>지원한 사이트</label>

          <label>URL</label>

          <label>포지션명</label>

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

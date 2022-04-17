import styled from "styled-components";
import Template from "../components/common/Template";

export default function AddJobScrapPage() {
  return (
    <Template>
      <AddJobScrapPageContainer>
        <AddJobScrapPageInner>
          <h1>스크랩 등록 페이지</h1>
        </AddJobScrapPageInner>
      </AddJobScrapPageContainer>
    </Template>
  );
}

const AddJobScrapPageContainer = styled.div``;

const AddJobScrapPageInner = styled.main`
  background-color: #fff;
  width: 50vw;
  height: 90vh;
`;

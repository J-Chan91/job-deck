import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Template from "../components/common/Template";
import { MemoizedDeceasedSection } from "../components/makeObituary/DeceasedSection";
import { MemoizedResidencySection } from "../components/makeObituary/ResidencySection";
import {
  MakeObituaryInterface,
  ResidencyInterface,
} from "../types/MakeObituary";

export default function MakeObituaryPage() {
  const [deceaseInfo, setDeceaseInfo] = useState<MakeObituaryInterface>({
    deceasedName: "",
    deceasedAge: "",
    deceasedGender: "",
  });
  const [residencyList, setResidencyList] = useState<ResidencyInterface[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Template>
      <PageTitle>부고장 작성</PageTitle>

      <MakeObituaryContainer>
        <IptSection>
          <MemoizedDeceasedSection
            deceaseInfo={deceaseInfo}
            setDeceaseInfo={setDeceaseInfo}
          />
        </IptSection>

        <IptSection>
          <MemoizedResidencySection
            residencyList={residencyList}
            setResidencyList={setResidencyList}
          />
        </IptSection>
      </MakeObituaryContainer>
    </Template>
  );
}

const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem auto;
`;

const MakeObituaryContainer = styled.main`
  background-color: #fff;
  height: 100vh;
  // padding: 1rem;
  margin: 0 auto;
`;

const IptSection = styled.section`
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  width: 500px;
  margin: 1rem auto;

  & input[type="radio"] {
    display: none;
  }
`;

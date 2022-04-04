import { useEffect, useState } from "react";
import styled from "styled-components";
import Template from "../components/common/Template";
import DeceasedSection from "../components/makeObituary/DeceasedSection";
import ResidencySection from "../components/makeObituary/ResidencySection";
import { MakeObituaryInterface } from "../types/MakeObituary";

export default function MakeObituaryPage() {
  const [deceaseInfo, setDeceaseInfo] = useState<MakeObituaryInterface>({
    deceasedName: "",
    deceasedAge: "",
    deceasedGender: "",
  });
  const [residencyInfo, setResidencyInfo] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Template>
      <PageTitle>부고장 작성</PageTitle>

      <MakeObituaryContainer>
        <IptSection>
          <DeceasedSection
            deceaseInfo={deceaseInfo}
            setDeceaseInfo={setDeceaseInfo}
          />
        </IptSection>

        <IptSection>
          <ResidencySection />
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
  padding: 1rem;
`;

const IptSection = styled.section`
  background-color: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  width: 75vw;
  margin: 1rem auto;

  & input[type="radio"] {
    display: none;
  }
`;

import { useEffect, useState } from "react";
import styled from "styled-components";
import Template from "../components/common/Template";
import DeceasedSection from "../components/makeObituary/DeceasedSection";

export default function MakeObituaryPage() {
  const [clickGender, setClickGender] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Template>
      <MakeObituaryContainer>
        <IptSection>
          <h1>부고장 작성하기</h1>

          <DeceasedSection
            clickGender={clickGender}
            setClickGender={setClickGender}
          />
        </IptSection>
      </MakeObituaryContainer>
    </Template>
  );
}

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
  margin: 0 auto;

  & h1 {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
  }

  & input[type="radio"] {
    display: none;
  }
`;

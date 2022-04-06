import { memo } from "react";
import styled from "styled-components";
import { MakeObituaryInterface } from "../../types/MakeObituary";

interface DeceasedSectionProps {
  deceaseInfo: MakeObituaryInterface;
  handleChangeDeceaseInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DeceasedSection({
  deceaseInfo,
  handleChangeDeceaseInfo,
}: DeceasedSectionProps) {
  console.log("고인 입력 섹션");
  return (
    <DeceasedArticle>
      <h3>고인 정보</h3>

      <IptWrapper>
        <div>성함</div>
        <input
          id="deceased-name"
          name="deceasedName"
          type="text"
          onChange={handleChangeDeceaseInfo}
        />
      </IptWrapper>

      <IptWrapper>
        <span>나이</span>
        <input
          id="deceased-age"
          name="deceasedAge"
          type="text"
          onChange={handleChangeDeceaseInfo}
        />
      </IptWrapper>

      <IptWrapper>
        <span>성별</span>

        <GenderLabel
          htmlFor="gender-man"
          style={{
            backgroundColor:
              deceaseInfo.deceasedGender === "man" ? "#999" : "#fff",
          }}
        >
          남자
        </GenderLabel>
        <input
          type="radio"
          name="gender-select"
          id="gender-man"
          // onClick={() =>
          //   setDeceaseInfo({ ...deceaseInfo, deceasedGender: "man" })
          // }
        />
        <GenderLabel
          htmlFor="gender-women"
          style={{
            backgroundColor:
              deceaseInfo.deceasedGender === "women" ? "#999" : "#fff",
          }}
        >
          여자
        </GenderLabel>
        <input
          type="radio"
          name="gender-select"
          id="gender-women"
          // onClick={() =>
          //   setDeceaseInfo({ ...deceaseInfo, deceasedGender: "women" })
          // }
        />
      </IptWrapper>
    </DeceasedArticle>
  );
}

export const MemoizedDeceasedSection = memo(DeceasedSection);

const DeceasedArticle = styled.article`
  padding: 1rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

const IptWrapper = styled.div`
  display: flex;
  align-items: center;

  & input {
    margin-left: 1rem;
    width: 35%;
    height: 1.5rem;
    font-size: 1rem;
  }

  & label {
    margin-left: 1rem;
  }

  margin-bottom: 1rem;
`;

const GenderLabel = styled.label`
  display: inline-block;
  padding: 0.7rem 2rem;
  margin: 0.5rem;
  cursor: pointer;
  color: #2e3e3e;
  border: 1px solid #eee;
  border-radius: 0.25em;
`;

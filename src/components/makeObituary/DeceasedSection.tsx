import styled from "styled-components";

interface DeceasedSectionProps {
  clickGender: string;
  setClickGender: React.Dispatch<React.SetStateAction<string>>;
}

export default function DeceasedSection({
  clickGender,
  setClickGender,
}: DeceasedSectionProps) {
  return (
    <DeceasedArticle>
      <h3>고인 정보</h3>

      <IptWrapper>
        <div>성함</div>
        <input id="deceased-name" type="text" />
      </IptWrapper>

      <IptWrapper>
        <span>나이</span>
        <input id="deceased-age" type="text" />
      </IptWrapper>

      <IptWrapper>
        <span>성별</span>

        <GenderLabel
          htmlFor="gender-man"
          style={{ backgroundColor: clickGender === "man" ? "#999" : "#fff" }}
        >
          남자
        </GenderLabel>
        <input
          type="radio"
          name="gender-select"
          id="gender-man"
          onClick={() => setClickGender("man")}
        />
        <GenderLabel
          htmlFor="gender-women"
          style={{
            backgroundColor: clickGender === "women" ? "#999" : "#fff",
          }}
        >
          여자
        </GenderLabel>
        <input
          type="radio"
          name="gender-select"
          id="gender-women"
          onClick={() => setClickGender("women")}
        />
      </IptWrapper>
    </DeceasedArticle>
  );
}

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

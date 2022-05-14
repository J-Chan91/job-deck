import styled from "styled-components";

interface LongIptProps {
  isRequired: boolean;
  iptHtmlFor: string;
  iptTitle: string;
  iptValue: string;
  handleChangeIpt: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LongIpt({
  isRequired,
  iptHtmlFor,
  iptTitle,
  iptValue,
  handleChangeIpt,
}: LongIptProps) {
  return (
    <>
      <LongIptLabel htmlFor={iptHtmlFor}>
        {iptTitle} {isRequired ? <Required>*</Required> : null}
      </LongIptLabel>
      <LongInput
        id={iptHtmlFor}
        type="text"
        value={iptValue}
        onChange={handleChangeIpt}
      />
    </>
  );
}

const LongIptLabel = styled.label`
  display: block;
`;

const Required = styled.span`
  color: #ff051e;
`;

const LongInput = styled.input`
  width: 90%;
  font-size: 1rem;
  padding: 0.3rem;
  border: none;
  border-bottom: 1px solid #000;

  &:focus {
    border-bottom: 1px solid #2bae66;
    outline: none;
  }
`;

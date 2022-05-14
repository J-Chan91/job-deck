import styled from "styled-components";

interface ShortIptProps {
  isRequired: boolean;
  iptHtmlFor: string;
  iptTitle: string;
  iptValue: string;
  handleChangeIpt: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ShortIpt({
  isRequired,
  iptHtmlFor,
  iptTitle,
  iptValue,
  handleChangeIpt,
}: ShortIptProps) {
  return (
    <>
      <ShortIptLabel htmlFor={iptHtmlFor}>
        {iptTitle} {isRequired ? <Required>*</Required> : null}
      </ShortIptLabel>
      <ShortInput
        id={iptHtmlFor}
        type="text"
        value={iptValue}
        onChange={handleChangeIpt}
      />
    </>
  );
}

const ShortIptLabel = styled.label`
  display: block;
`;

const Required = styled.span`
  color: #ff051e;
`;

const ShortInput = styled.input`
  width: 30%;
  font-size: 1rem;
  padding: 0.3rem;
  border: none;
  border-bottom: 1px solid #000;

  &:focus {
    border-bottom: 1px solid #2bae66;
    outline: none;
  }
`;

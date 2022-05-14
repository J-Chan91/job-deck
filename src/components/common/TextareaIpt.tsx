import styled from "styled-components";

interface TextareaIptProps {
  isRequired: boolean;
  iptHtmlFor: string;
  iptTitle: string;
  iptValue: string;
  handleChangeIpt: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaIpt({
  isRequired,
  iptHtmlFor,
  iptTitle,
  iptValue,
  handleChangeIpt,
}: TextareaIptProps) {
  return (
    <>
      <TextareaIptLabel htmlFor={iptHtmlFor}>
        {iptTitle} {isRequired ? <Required>*</Required> : null}
      </TextareaIptLabel>
      <TextareaInput
        id={iptHtmlFor}
        value={iptValue}
        onChange={handleChangeIpt}
      />
    </>
  );
}

const TextareaIptLabel = styled.label`
  display: block;
  margin-bottom: 0.3rem;
`;

const Required = styled.span`
  color: #ff051e;
`;

const TextareaInput = styled.textarea`
  width: 90%;
  height: 10rem;
  font-size: 1rem;
  padding: 0.3rem;
  resize: vertical;

  &:focus {
    border: 1px solid #2bae66;
    outline: none;
  }
`;

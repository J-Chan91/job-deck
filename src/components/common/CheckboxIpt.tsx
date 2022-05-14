import styled from "styled-components";

import { CheckboxListInterface } from "../../types/AddJobScrap";

interface ItemStyleProps {
  selectColor: string;
  fontColor: string;
  isSelect: boolean;
}

interface CheckboxIptProps {
  isRequired: boolean;
  iptTitle: string;
  selectedItem: string;
  checkboxList: CheckboxListInterface[];
  handleSelectItem: (selectItem: string) => void;
}

export default function CheckboxIpt({
  isRequired,
  iptTitle,
  selectedItem,
  checkboxList,
  handleSelectItem,
}: CheckboxIptProps) {
  return (
    <>
      <CheckboxIptTitle>
        {iptTitle} {isRequired ? <Required>*</Required> : null}
      </CheckboxIptTitle>

      <Wrapper>
        {checkboxList.map((item) => (
          <Item
            key={item.title}
            isSelect={selectedItem === item.title ? true : false}
            selectColor={
              selectedItem === item.title ? item.selectColor : item.backColor
            }
            fontColor={item.fontColor}
            onClick={() => handleSelectItem(item.title)}
          >
            {item.title}
          </Item>
        ))}
      </Wrapper>
    </>
  );
}

const CheckboxIptTitle = styled.div`
  margin-bottom: 0.3rem;
`;

const Required = styled.span`
  color: #ff051e;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div<ItemStyleProps>`
 font-family: monospace;
  padding: 0.4rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${(props) => props.selectColor};
  border-radius: 0.5rem;
  margin: 0.2rem;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.selectColor};
  box-shadow:  ${(props) =>
    props.isSelect ? "0 0 8px rgba(0, 0, 0, 0.5)" : null};
}`;

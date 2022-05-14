import { useState } from "react";

import { CheckboxListInterface, ScrapInterface } from "../../types/AddJobScrap";

import CheckboxIpt from "../common/CheckboxIpt";

interface IptJobSearchURLProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptPosition({ scrap, setScrap }: IptJobSearchURLProps) {
  const [positionList, setPositionList] = useState<CheckboxListInterface[]>([
    {
      title: "FullStack",
      backColor: "#07553B",
      fontColor: "#fff",
      selectColor: "#CED46A",
    },
    {
      title: "BackEnd",
      backColor: "#F9EBDE",
      fontColor: "#000",
      selectColor: "#815854",
    },
    {
      title: "FrontEnd",
      backColor: "#F5D042",
      fontColor: "#fff",
      selectColor: "#0A174E",
    },
    {
      title: "DevOps",
      backColor: "#4e61ff",
      fontColor: "#fff",
      selectColor: "#0b156b",
    },
  ]);

  const handleSelectItem = (selectItem: string) => {
    setScrap({ ...scrap, selectProcess: selectItem });
  };

  return (
    <>
      <CheckboxIpt
        isRequired={true}
        iptTitle="포지션"
        selectedItem={scrap.selectProcess}
        checkboxList={positionList}
        handleSelectItem={handleSelectItem}
      />
    </>
  );
}

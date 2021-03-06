import { useState } from "react";

import { CheckboxListInterface, ScrapInterface } from "../../types/AddJobScrap";

import CheckboxIpt from "../common/CheckboxIpt";

interface IptProcessProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptProcess({ scrap, setScrap }: IptProcessProps) {
  const [processList, setProcessList] = useState<CheckboxListInterface[]>([
    {
      title: "π¬ μ§μ",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "π₯ μ½λ©νμ€νΈ/κ³Όμ ",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "π¬ λ©΄μ ",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "π ν©κ²©",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "π₯ λΆν©κ²©",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
  ]);

  const handleSelectItem = (selectItem: string) => {
    setScrap({ ...scrap, selectPosition: selectItem });
  };

  return (
    <>
      <CheckboxIpt
        isRequired={true}
        iptTitle="μ§μ νν©"
        selectedItem={scrap.selectPosition}
        checkboxList={processList}
        handleSelectItem={handleSelectItem}
      />
    </>
  );
}

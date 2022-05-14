import { useState } from "react";

import { CheckboxListInterface, ScrapInterface } from "../../types/AddJobScrap";

import CheckboxIpt from "../common/CheckboxIpt";

interface IptProcessProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptProcess({ scrap, setScrap }: IptProcessProps) {
  const [positionList, setPositionList] = useState<CheckboxListInterface[]>([
    {
      title: "📬 지원",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "🖥 코딩테스트/과제",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "💬 면접",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "🎉 합격",
      backColor: "#fff",
      fontColor: "#000",
      selectColor: "#c9c9c9",
    },
    {
      title: "😥 불합격",
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
        iptTitle="지원 현황"
        selectedItem={scrap.selectPosition}
        checkboxList={positionList}
        handleSelectItem={handleSelectItem}
      />
    </>
  );
}

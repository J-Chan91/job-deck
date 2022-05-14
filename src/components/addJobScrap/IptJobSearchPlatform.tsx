import { useState } from "react";
import { CheckboxListInterface, ScrapInterface } from "../../types/AddJobScrap";
import CheckboxIpt from "../common/CheckboxIpt";

interface IptJobSearchURLProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptJobSearchPlatform({
  scrap,
  setScrap,
}: IptJobSearchURLProps) {
  const [platformList, setPlatformList] = useState<CheckboxListInterface[]>([
    {
      title: "원티드",
      backColor: "#ffbb6e",
      fontColor: "#fff",
      selectColor: "#d1995a",
    },
    {
      title: "프로그래머스",
      backColor: "#202b3d",
      fontColor: "#fff",
      selectColor: "#3c68b0",
    },
    {
      title: "랠릿",
      backColor: "#3de0aa",
      fontColor: "#fff",
      selectColor: "#1c6b51",
    },
    {
      title: "로켓펀치",
      backColor: "#4e61ff",
      fontColor: "#fff",
      selectColor: "#0b156b",
    },
    {
      title: "회사",
      backColor: "#fc60c0",
      fontColor: "#fff",
      selectColor: "#bf4992",
    },
  ]);

  const handleSelectItem = (selectItem: string) => {
    setScrap({ ...scrap, selectJobSearchPlatform: selectItem });
  };

  return (
    <>
      <CheckboxIpt
        isRequired={true}
        iptTitle="지원한 플랫폼"
        selectedItem={scrap.selectJobSearchPlatform}
        handleSelectItem={handleSelectItem}
        checkboxList={platformList}
      />
    </>
  );
}

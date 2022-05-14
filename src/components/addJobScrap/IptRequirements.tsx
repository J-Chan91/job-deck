import TextareaIpt from "../common/TextareaIpt";

import { ScrapInterface } from "../../types/AddJobScrap";

interface IptRequirementsProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptRequirements({
  scrap,
  setScrap,
}: IptRequirementsProps) {
  const handleChangeIpt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScrap({ ...scrap, requirements: e.target.value });
  };

  return (
    <>
      <TextareaIpt
        isRequired={true}
        iptHtmlFor="ipt-position"
        iptTitle="지원 자격"
        iptValue={scrap.requirements}
        handleChangeIpt={handleChangeIpt}
      />
    </>
  );
}

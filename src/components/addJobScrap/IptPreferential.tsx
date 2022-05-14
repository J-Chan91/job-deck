import TextareaIpt from "../common/TextareaIpt";

import { ScrapInterface } from "../../types/AddJobScrap";

interface IptPreferentialProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptPreferential({
  scrap,
  setScrap,
}: IptPreferentialProps) {
  const handleChangeIpt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScrap({ ...scrap, preferential: e.target.value });
  };

  return (
    <>
      <TextareaIpt
        isRequired={false}
        iptHtmlFor="ipt-position"
        iptTitle="우대사항"
        iptValue={scrap.preferential}
        handleChangeIpt={handleChangeIpt}
      />
    </>
  );
}

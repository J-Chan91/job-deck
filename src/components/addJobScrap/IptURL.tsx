import { ScrapInterface } from "../../types/AddJobScrap";

import LongIpt from "../common/LongIpt";

interface IptJobSearchURLProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptURL({ scrap, setScrap }: IptJobSearchURLProps) {
  const handleChangeIpt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScrap({ ...scrap, detailUrl: e.target.value });
  };

  return (
    <>
      <LongIpt
        isRequired={true}
        iptHtmlFor="ipt-url"
        iptTitle="URL"
        iptValue={scrap.detailUrl}
        handleChangeIpt={handleChangeIpt}
      />
    </>
  );
}

import ShortIpt from "../common/ShortIpt";

import { ScrapInterface } from "../../types/AddJobScrap";

interface IptCompanyProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptCompany({ scrap, setScrap }: IptCompanyProps) {
  const handleChangeIpt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScrap({ ...scrap, company: e.target.value });
  };

  return (
    <>
      <ShortIpt
        isRequired={true}
        iptHtmlFor="ipt-position"
        iptTitle="회사명"
        iptValue={scrap.company}
        handleChangeIpt={handleChangeIpt}
      />
    </>
  );
}

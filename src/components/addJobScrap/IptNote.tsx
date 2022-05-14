import TextareaIpt from "../common/TextareaIpt";

import { ScrapInterface } from "../../types/AddJobScrap";

interface IptNoteProps {
  scrap: ScrapInterface;
  setScrap: React.Dispatch<React.SetStateAction<ScrapInterface>>;
}

export default function IptNote({ scrap, setScrap }: IptNoteProps) {
  const handleChangeIpt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScrap({ ...scrap, note: e.target.value });
  };

  return (
    <>
      <TextareaIpt
        isRequired={false}
        iptHtmlFor="ipt-position"
        iptTitle="메모"
        iptValue={scrap.note}
        handleChangeIpt={handleChangeIpt}
      />
    </>
  );
}

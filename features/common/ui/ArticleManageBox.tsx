import Button from "@/components/Button";
import LogicButton from "./LogicButton";

const ArticleManageBox = () => {
  const buttonLogic = () => {};
  return (
    <div className="w-30  rounded-[5px] bg-[#D9D9D9] absolute -right-25 -bottom-12 z-10 text-center">
      <Button buttoName="記事を編集" buttonColor="py-1" as="a" />
      <LogicButton buttonname="記事を削除" buttonLogic={buttonLogic} />
    </div>
  );
};

export default ArticleManageBox;

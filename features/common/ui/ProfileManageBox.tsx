import Button from "@/components/Button";
import LogicButton from "./LogicButton";
import { COMMON_STYLES } from "@/constants/StyleCss";
import { useCurrentUser } from "@/app/providers";

const ProfileManageBox = ({
  logout,
}: {
  logout: () => void;
}) => {
  const {currentUser} = useCurrentUser();
  return (
    <div className="w-50 rounded-[5px] bg-[#E1E1E1] absolute -bottom-35 right-0 px-5 text-center">
      <p className="w-full border-b text-center pt-1">{currentUser?.name}</p>
      <Button
        buttoName="下書き保存してる投稿"
        buttonColor="py-1"
        as="a"
        link="/articles/new"
      />
      <Button
        buttoName="プロフィールへ"
        buttonColor="py-1 "
        as="a"
        link="/profile"
      />
      <LogicButton
        buttonname="ログアウト"
        buttonLogic={logout}
        buttonClassname={COMMON_STYLES.logic_button_style}
      />
    </div>
  );
};

export default ProfileManageBox;

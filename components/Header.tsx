"use client";

import Logo from "./Logo";
import Button from "./Button";
import IconBox from "@/features/common/articles/IconBox";
import { useState } from "react";
import ProfileManageBox from "@/features/common/ui/ProfileManageBox";
import SearchBox from "@/features/common/ui/SearchBox";
import { useRouter } from "next/navigation";
import { COMMON_STYLES } from "@/constants/StyleCss";
import { INPUT_BOX_STYLES } from "@/constants/InputBox";
import { useCurrentUser } from "@/app/providers";
import { userLogout } from "@/features/routes/forms/server/userLogout";

const Header = ({ auth }: { auth: boolean }) => {
  const { currentUser } = useCurrentUser();
  const [isProfileMangeBox, setProfileMangeBox] = useState<boolean>(false);
  const handleToggleManageBox = () => {
    setProfileMangeBox((prev: boolean) => !prev);
  };
  const router = useRouter();
  const logout = async () => {
    await userLogout();
    router.refresh();
    router.push("login");
    handleToggleManageBox();
  };
  return (
    <header className="w-full h-17.5 border-[#D1CFCF]  content-center bg-[#FEFEFE] sticky top-0 z-20">
      <div className="w-290 flex mx-auto justify-between ">
        <Logo />
        {!auth ? (
          <div className="flex w-77.5 justify-between">
            <Button
              buttoName="新規登録"
              buttonColor={`${COMMON_STYLES.bg_change_style} ${INPUT_BOX_STYLES.small}`}
              link="/register"
              as="a"
            />
            <Button
              buttoName="ログイン"
              buttonColor="bg-[#FFD1A3] rounded-[5px] w-37.5 h-12.5 text-black text-center "
              link="/login"
              as="a"
            />
          </div>
        ) : (
          <div className="flex relative w-140 justify-between">
            <SearchBox />
            <IconBox
              src={currentUser?.profile_image || "/human.svg"}
              alt="プロフィール画像"
              srcclassname="w-12.5 h-12.5 bg-red-300 rounded-[90px] cursor-pointer overflow-hidden"
              asType="default"
              onClicklogic={handleToggleManageBox}
            />
            {isProfileMangeBox && (
              <ProfileManageBox  logout={logout} />
            )}
            <Button
              buttoName="投稿する"
              buttonColor="bg-[#FFD1A3] h-12.5 w-31.25 text-center rounded-[5px] "
              as="a"
              link="/articles/new"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

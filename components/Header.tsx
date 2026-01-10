"use client";

import Logo from "./Logo";
import Button from "./Button";
import IconBox from "@/features/common/articles/IconBox";
import { useState } from "react";
import ProfileManageBox from "@/features/common/ui/ProfileManageBox";
import SearchBox from "@/features/common/ui/SearchBox";

const Header = () => {
  const auth = true;
  const [isProfileMangeBox, setProfileMangeBox] = useState<boolean>(false);
  const handleToggleManageBox = () => {
    setProfileMangeBox((prev: boolean) => !prev);
  };
  return (
    <header className="w-full h-17.5 border-[#D1CFCF]  content-center bg-[#FEFEFE] sticky top-0 z-20">
      <div className="w-290 flex mx-auto justify-between ">
        <Logo />
        {!auth ? (
          <div className="flex w-77.5 justify-between">
            <Button
              buttoName="新規登録"
              buttonColor=" bg-[#FEFEFE] border-[#FFD1A3] border-1 rounded-[5px] w-37.5 h-12.5 text-[#FFD1A3] text-center "
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
              src=""
              alt="プロフィール画像"
              srcclassname="w-12.5 h-12.5 bg-red-300 rounded-[90px] cursor-pointer"
              asType="default"
              onClicklogic={handleToggleManageBox}
            />
            {isProfileMangeBox && <ProfileManageBox name="吉嶺勇斗" />}
            <Button
              buttoName="投稿する"
              buttonColor="bg-[#FFD1A3] h-12.5 w-31.25 text-center rounded-[5px] "
              as="a"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

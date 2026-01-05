"use client";

import Logo from "./Logo";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isButtonFlag =
    pathname === "/register" ||
    pathname === "/login" ||
    pathname === "/forgot_password";

  return (
    <header className="w-full h-17.5 border-[#D1CFCF]  content-center bg-[#FEFEFE] sticky top-0">
      <div className="w-287.5 flex mx-auto justify-between ">
        <Logo />
        {!isButtonFlag && (
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
        )}
      </div>
    </header>
  );
};

export default Header;

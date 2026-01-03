import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full h-17.5 border-[#D1CFCF]  content-center bg-[#FEFEFE]">
      <div className="w-287.5 flex mx-auto justify-between ">
        <Logo />
        <div className="flex w-77.5 justify-between">
          <Button
            buttoName="新規登録"
            buttonColor=" bg-[#FEFEFE] border-[#FFD1A3] border-1 rounded-[5px] w-37.5 h-12.5 text-[#FFD1A3] text-center "
            link="/register"
          />
          <Button
            buttoName="ログイン"
            buttonColor="bg-[#FFD1A3] rounded-[5px] w-37.5 h-12.5 text-black text-center "
            link="/login"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

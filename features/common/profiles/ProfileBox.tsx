import IconBox from "../articles/IconBox";

const ProfileBox = () => {
  return (
    <div className="h-75 w-95 rounded-[5px] border py-7 px-7 text-center flex flex-col  justify-between bg-white">
      <div className="border-b flex items-center pb-3">
        <IconBox
          alt=""
          src=""
          srcclassname="bg-grey-400 border rounded-full w-20 h-20"
        />
        <p className="pl-5 ">吉嶺勇斗</p>
      </div>
      <textarea name="" id=""></textarea>
    </div>
  );
};

export default ProfileBox;

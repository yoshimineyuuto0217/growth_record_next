import ProfileBox from "@/features/common/profiles/ProfileBox";
import YearArticles from "@/features/common/profiles/YearArticles";

const page = () => {
  return (
    <div className="justify-between  w-200 mx-auto content-center">
      <div className="flex flex-col justify-between h-140 ">
        <div className="flex justify-between content-center">
          <ProfileBox />
          <YearArticles />
        </div>
        <div className="w-200 h-50 border rounded-[5px] bg-white"></div>
      </div>
    </div>
  );
};

export default page;

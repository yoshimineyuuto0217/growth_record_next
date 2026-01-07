import ProfileBox from "@/features/common/profiles/ProfileBox";
import ListSectionName from "@/features/common/ui/ListSectionName";

const page = () => {
  const years = ["2023年度", "2024年度", "2025年度", "2026年度", "2027年度"];

  return (
    <div className="justify-between  w-200 mx-auto content-center">
      <div className="flex flex-col justify-between h-140 ">
        <div className="flex justify-between content-center">
          <ProfileBox />
          <ListSectionName sectionList={years} sectionname="年度別投稿記事" />
        </div>
        <div className="w-200 h-50 border rounded-[5px] bg-white"></div>
      </div>
    </div>
  );
};

export default page;

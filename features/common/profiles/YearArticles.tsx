const years = ["2023年度", "2024年度", "2025年度", "2026年度", "2027年度"];

const YearArticles = () => {
  return (
    <div className="h-75 w-95 rounded-[5px] border py-7 px-7 text-center flex flex-col  justify-between bg-white">
      <p className="inline-block border-b ">年度別投稿記事</p>
      {years.map((year, index) => (
        <p key={index} className="cursor-pointer hover:bg-amber-200 ">
          {year}
        </p>
      ))}
    </div>
  );
};

export default YearArticles;

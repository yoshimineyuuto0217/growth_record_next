const ListSectionName = ({
  sectionname,
  sectionList,
}: {
  sectionname: string;
  sectionList: string[];
}) => {
  return (
    <div className="h-75 w-100 rounded-[5px] border py-7 px-7 text-center flex flex-col  justify-between bg-white">
      <h3 className="inline-block border-b ">{sectionname}</h3>
      {sectionList.map((section, index) => (
        <p key={index} className="cursor-pointer hover:bg-amber-200 ">
          {section}
        </p>
      ))}
    </div>
  );
};

export default ListSectionName;

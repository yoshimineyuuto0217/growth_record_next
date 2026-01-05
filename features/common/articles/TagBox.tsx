const TagBox = ({
  tagName,
  tagclassname,
}: {
  tagName: string;
  tagclassname: string;
}) => {
  return (
    <div
      className={`${tagclassname}  text-center flex flex-col justify-center `}
    >
      {tagName}
    </div>
  );
};

export default TagBox;

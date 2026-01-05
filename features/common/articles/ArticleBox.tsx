import { HEADING_STYLES } from "@/constants/FontConstant";
import IconBox from "./IconBox";
import TagBox from "./TagBox";

const ArticleBox = ({
  name,
  date,
  title,
  tagname,
}: {
  name: string;
  date: string;
  title: string;
  //tagnameはstringの配列で受け取るようにする
  tagname: string[];
}) => {
  return (
    <div className="w-200 h-37.5 border rounded-[5px] flex px-5  py-3 bg-white mb-5">
      <IconBox
        src=""
        alt=""
        srcclassname="bg-grey-400 border rounded-full w-12.5 h-12.5"
      />
      <div className="pl-3">
        <p className="mb-1">{name}</p>
        <p className="mb-1">{date}</p>
        <p className={`mb-1 ${HEADING_STYLES.small}`}>{title}</p>
        {/* ここのTAG_BOXでmap使用することになる */}
        <div className="flex gap-x-3 ">
          {tagname.map((tag, index) => (
            <TagBox
              key={index}
              tagclassname="h-5 w-37.5 border rounded-[5px] "
              tagName={tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;

import { HEADING_STYLES } from "@/constants/FontConstant";
import IconBox from "@/features/common/articles/IconBox";
import TagBox from "@/features/common/articles/TagBox";
import ListSectionName from "@/features/common/ui/ListSectionName";

const tags = ["jest", "CI/CD", "E2E", "React", "Docker"];
const heading = [
  "環境構築",
  "Hello world出力",
  "CRUD操作とは",
  "登録の機能の作成",
  "CSRFの機能",
];

// 記事詳細ページ
const page = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="flex items-end ml-25 mt-10 mb-2 w-162.5 justify-between ">
          <div className="flex items-end ">
            <IconBox
              src=""
              alt=""
              srcclassname="w-12.5 h-12.5 border rounded-[90px]"
              asType="a"
            />
            {/* {detailtitle} */}
            <h2 className={`${HEADING_STYLES.small} pl-2 `}>
              Laravelの仕組みについて
            </h2>
          </div>
          {/* {date} */}
          <p className="flex items-end">2025年1月25日</p>
        </div>
        <div className="w-300  flex mx-auto justify-between  ">
          <div className="w-300 h-550 flex justify-between">
            {/* ここのdivタグは将来拡張するのでこのままでいい */}
            <div className="w-12.5 h-20"></div>
            <div className="border rounded-[5px] w-162.5 bg-white"></div>
            <div className="sticky top-20 -z-10 h-140 flex flex-col justify-between">
              <div className="w-100 h-50 border rounded p-3  bg-white ">
                <div className="flex flex-wrap flex-start ">
                  <div className="flex justify-between w-full flex-wrap ">
                    {tags.map((tag, index) => (
                      <TagBox
                        tagName={tag}
                        key={index}
                        tagclassname="w-40 h-5 border rounded-[5px] text-center mb-3"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <ListSectionName sectionname="題目" sectionList={heading} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

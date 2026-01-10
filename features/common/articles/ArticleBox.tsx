"use client"

import { HEADING_STYLES } from "@/constants/FontConstant";
import IconBox from "./IconBox";
import TagBox from "./TagBox";
import ArticleManageBox from "../ui/ArticleManageBox";
import { useState } from "react";

const ArticleBox = ({
  name,
  date,
  title,
  tagname,
  articleManage,
}: {
  name: string;
  date: string;
  title: string;
  articleManage?: boolean;
  //tagnameはstringの配列で受け取るようにする
  tagname: string[];
}) => {
  const [isArticleManageBox, setIsArticleManageBox] = useState<boolean>(false);
  const handleToggleManageBox = () => {
    setIsArticleManageBox((prev: boolean) => !prev);
  };

  return (
    <div className="w-200 h-37.5 border rounded-[5px] flex px-5  py-3 bg-white mb-5 relative">
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
      {articleManage && (
        <>
          <IconBox
            src="/setting.svg"
            alt="設定ボタン"
            srcclassname="w-5 h-5  cursor-pointer  absolute right-5 bottom-2 "
            asType="button"
            onClicklogic={handleToggleManageBox}
          />
          {isArticleManageBox && <ArticleManageBox />}
        </>
      )}
    </div>
  );
};

export default ArticleBox;

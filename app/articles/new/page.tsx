"use client";

import Button from "@/components/Button";
import IconBox from "@/features/common/articles/IconBox";
import { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  return (
    <div className="w-200 rounded-[5px] mx-auto content-center">
      <form action="" className="h-160 flex flex-col justify-between">
        <input
          type="text"
          value={title}
          className="border rounded-[5px] h-10 w-full p-3 bg-white"
          placeholder="タイトルを入力してください"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border rounded-[5px] h-10 w-full p-3 bg-white"
          placeholder="タグをカンマ区切りで入力してください"
          value={tags}
        />
        <div className="relative">
          <textarea
            name=""
            id=""
            className="border rounded-[5px] p-3 w-full h-125 bg-white resize-none py-10"
          />
          <div className="border-b w-full absolute top-0 py-2 pl-3">
            <IconBox
              src="/picture.svg"
              alt=""
              srcclassname="w-5 h-5"
              asType="button"
            />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <Button
            buttoName="下書き保存"
            buttonColor="border border-[#FFCD7C] text-[#FFCD7C] rounded-[5px] h-10 w-95 bg-white "
            as="button"
          />
          <Button
            buttoName="公開"
            buttonColor="rounded-[5px] h-10 w-95 bg-[#FFCD7C]  "
            as="button"
          />
        </div>
      </form>
    </div>
  );
};

export default Post;

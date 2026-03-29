"use client";

import Button from "@/components/Button";
import IconBox from "@/features/common/articles/IconBox";
import { uploadImageToS3 } from "@/api/imageApi";
import { ChangeEvent, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const Post = () => {
  // テスト実行のためのコメント追加二回目
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string>("");
  const [markdown, setMarkdown] = useState<string>("");
  const [markDownFlag, setMarkDownFlag] = useState(false);
  const isMarkDown = () => {
    setMarkDownFlag(!markDownFlag);
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleImageInsert = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const upload = async () => {
      try {
        // フロントからファイルを送信 → バックエンドがS3にアップロード（CORS回避）
        const imageUrl = await uploadImageToS3(file);

        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const newMarkdown =
          markdown.substring(0, start) +
          `\n\n![image](${imageUrl})\n\n` +
          markdown.substring(end);

        setMarkdown(newMarkdown);
      } catch (error) {
        console.error("画像アップロード中にエラーが発生しました", error);
      }
    };

    // void で投げて、ハンドラの戻り値を void に保つ
    void upload();
  };

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
          onChange={(e) => setTags(e.target.value)}
        />
        <div className="relative">
          <div className="border w-full flex justify-between absolute top-0 pt-1 pl-2 pr-2 bg-white rounded-t-[5px]">
            <IconBox
              src="/picture.svg"
              alt=""
              srcclassname="w-5 h-5"
              asType="button"
              onProfileChange={handleImageInsert}
            />
            <p className="cursor-pointer" onClick={isMarkDown}>
              表示切り替え
            </p>
          </div>
          {markDownFlag ? (
            <div
              className={`prose max-w-none border rounded-[5px] pt-8 pl-3 pr-4 w-full h-125 bg-white overflow-auto ${
                markDownFlag ? "block" : "hidden"
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
                urlTransform={(url) => url}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          ) : (
            <textarea
              ref={textareaRef}
              name=""
              id=""
              className="border rounded-[5px] p-3 w-full h-125 bg-white resize-none py-10"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
            />
          )}
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

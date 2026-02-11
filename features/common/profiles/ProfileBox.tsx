"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import IconBox from "../articles/IconBox";
import { useCurrentUser } from "@/app/providers";
import { updateMyProfile } from "@/features/routes/profiles/server/updateMyProfile";
import { postMyImage } from "@/features/routes/profiles/server/postMyImage";

const ProfileBox = () => {
  const { currentUser } = useCurrentUser();
  const [name, setName] = useState(() => currentUser?.name ?? "");
  const [self_introduction, setSelf_introduction] = useState(
    () => currentUser?.self_introduction ?? "",
  );
  const [profilePreview, setProfilePreview] = useState<string>(
    () => currentUser?.profile_image ?? "/human.svg",
  );

  const changeProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setProfilePreview(URL.createObjectURL(file));
    const result = await postMyImage(file);
    setProfilePreview(`${result.profile_image}?t=${Date.now()}`);
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!name && !self_introduction) return;

    // 前のタイマーを止める
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      updateMyProfile({
        name: name,
        self_introduction: self_introduction,
      });
    }, 2000);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [name, self_introduction]);

  return (
    <div className="h-75 w-95 rounded-[5px] border py-7 px-7 text-center flex flex-col  justify-between bg-white">
      <div className="border-b flex items-center pb-3 ">
        <div className="relative w-20 h-full rounded-full overflow-hidden">
        <IconBox
          alt={"プロフィール画像"}
          src={profilePreview || "/human.svg"}
          asType="button"
          srcclassname="bg-grey-400 border rounded-full w-20 h-20 overflow-hidden"
          onProfileChange={(e: ChangeEvent<HTMLInputElement>) => {
            changeProfile(e);
          }}
        />
        <div className="absolute bottom-0 bg-black opacity-30 w-full h-[30%] "></div>
        </div>
        <input
          className="pl-5"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <textarea
        className="h-full p-1 resize-none"
        name="self_introduction"
        value={self_introduction}
        onChange={(e) => {
          setSelf_introduction(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default ProfileBox;

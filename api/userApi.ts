"use server";

import { LOCAL_ENDPOINT } from "@/constants/Config";
import { getToken } from "@/lib/auth/cookies";
import { revalidatePath } from "next/cache";

// 自分のユーザー情報を取得する
export const getCurrentUser = async () => {
  const token = await getToken();
  const res = await fetch(`${LOCAL_ENDPOINT}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw await res.json();
  }

  return res.json();
};

// 自分のユーザー情報を更新する
export const patchCurrentUser = async ({
  name,
  profile_image,
  self_introduction,
}: {
  name?: string;
  profile_image?: File | null;
  self_introduction?: string;
}) => {
  const token = await getToken();
  const formData = new FormData();
  if (name) formData.append("name", name ?? "");
  if (self_introduction) {
    formData.append("self_introduction", self_introduction ?? "");
  }
  if (profile_image) {
    formData.append("profile_image", profile_image);
  }
  const res = await fetch(`${LOCAL_ENDPOINT}/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("プロフィール更新に失敗しました");
  }
  //ProfileManageBox.tsxで呼び出してるユーザー情報を更新する為のもの
  revalidatePath("/", "layout");
};

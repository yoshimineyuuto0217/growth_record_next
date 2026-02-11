"use server";

import { LOCAL_ENDPOINT } from "@/constants/Config";
import { getToken } from "@/lib/auth/cookies";
import { revalidatePath } from "next/cache";

// 自分の情報を取得
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

// 自分の情報を更新
export const patchCurrentUser = async ({
  name,
  self_introduction,
}: {
  name?: string;
  self_introduction?: string;
}) => {
  const token = await getToken();
  const body = {
    ...(name !== undefined && { name }),
    ...(self_introduction !== undefined && { self_introduction }),
  };

  const res = await fetch(`${LOCAL_ENDPOINT}/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("プロフィール更新に失敗しました");
  }
  revalidatePath("/", "layout");
};

// 自分の画像を更新
export const createProfileCurrentUser = async (profileImage: File) => {
  const token = await getToken();
  const formData = new FormData();
  formData.append("profileImage", profileImage);

  const res = await fetch(`${LOCAL_ENDPOINT}/profile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("プロフィール画像の更新に失敗しました");
  }

  const data = await res.json();

  revalidatePath("/", "layout");

  return data;
};

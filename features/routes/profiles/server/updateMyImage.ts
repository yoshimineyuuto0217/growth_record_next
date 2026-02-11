"use server"

import { createProfileCurrentUser } from "@/api/userApi";

// 自分のプロフィール画像を更新
export const updateMyImage = async (profileImage: File) => {
  try {
    const result = await createProfileCurrentUser(profileImage);
    return result;
  } catch (error) {
    console.error("画像アップロード失敗:", error);
    throw error;
  }
};

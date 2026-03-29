"use server";

import { LOCAL_ENDPOINT } from "@/constants/Config";
import { getToken } from "@/lib/auth/cookies";

export const getPresignedUploadUrl = async (
  fileName: string,
  contentType: string
) => {
  const token = await getToken();
  const res = await fetch(`${LOCAL_ENDPOINT}/article_images/presigned`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      fileName,
      contentType,
    }),
  });

  if (!res.ok) {
    throw new Error(
      `署名付きURLの取得に失敗しました: ${await res.text()}`
    );
  }

  const { url } = (await res.json()) as { url: string };
  return url;
};

export const uploadImageToS3 = async (file: File) => {
  const token = await getToken();
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${LOCAL_ENDPOINT}/article_images/s3`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`S3アップロードに失敗しました: ${await res.text()}`);
  }

  const { url } = (await res.json()) as { url: string };
  return url;
};

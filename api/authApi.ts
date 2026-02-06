"use server";

import { LOCAL_ENDPOINT } from "@/constants/Config";
import { cookies } from "next/headers";

// 新規登録
export const createRegisterInfo = async ({
  password,
  email,
  name,
}: {
  password: string;
  email: string;
  name: string;
}) => {
  const res = await fetch(`${LOCAL_ENDPOINT}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  });

  const data = await res.json();
  (await cookies()).set("token", data.token, {
    httpOnly: true, // console.logでtokenを見せないようにしてる
    secure: process.env.NODE_ENV === "production", // envファイルにNODE_ENV描かなくても有効になるのはreact立ち上げ時のコマンドによって作成されてるから
    sameSite: "lax", //CSRF対策
    path: "/", //JWTの有効範囲指定 全ページで見れる指定
  });

  if (!res.ok) {
    throw data;
  }

  return data;
};

// ログイン
export const readLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${LOCAL_ENDPOINT}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true, // console.logでtokenを見せないようにしてる
    secure: process.env.NODE_ENV === "production", // envファイルにNODE_ENV描かなくても有効になるのはreact立ち上げ時のコマンドによって作成されてるから
    sameSite: "lax", //CSRF対策
    path: "/", //JWTの有効範囲指定 全ページで見れる指定
  });

  if (!res.ok) {
    throw data;
  }

  return data;
};

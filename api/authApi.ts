"use server";

import { LOCAL_ENDPOINT } from "@/constants/Config";
import { setAuthCookie } from "@/lib/auth/cookies";

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
  await setAuthCookie(data.token);


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
  await setAuthCookie(data.token);

  if (!res.ok) {
    throw data;
  }

  return data;
};

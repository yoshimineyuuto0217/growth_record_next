"use server"

import { LOCAL_ENDPOINT } from "@/constants/Config";

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

  if (!res.ok) {
    throw data;
  }

  return data;
};

"use server";

import { LOCAL_ENDPOINT } from "@/constants/Config";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

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

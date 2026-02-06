import { cookies } from "next/headers";

// ログイン・新規登録の時に使用するtoken
export const setAuthCookie = async (token: string) => {
  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
};

// Headerの表示切り分けで使用するtoken
export const getIsAuth = async () => {
  return (await cookies()).has("token");
};

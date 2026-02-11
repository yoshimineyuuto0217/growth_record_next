import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // 未ログイン
  if (!token && (
    pathname.startsWith("/profile")
  )) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ログイン済みの時はログインと新規登録へ遷移しないように
  if (token && (
    pathname === "/login" ||
    pathname === "/register"
  )) {
    return NextResponse.redirect(new URL("/articles", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/articles/:path*",
    "/profile",
    "/login",
    "/register",
  ],
};
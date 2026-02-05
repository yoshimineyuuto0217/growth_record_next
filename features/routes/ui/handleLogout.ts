"use server";

import { cookies } from "next/headers";

export const handleLogout = async () => {
    (await cookies()).set("token", "", { maxAge: 0, path: "/" });
};

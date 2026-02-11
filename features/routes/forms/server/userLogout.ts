"use server";

import { cookies } from "next/headers";

export const userLogout = async () => {
    (await cookies()).set("token", "", { maxAge: 0, path: "/" });
};

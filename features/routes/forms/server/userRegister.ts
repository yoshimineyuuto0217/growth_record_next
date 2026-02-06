"use server";

import { createRegisterInfo } from "@/api/authApi";
import { errorsMessage, registerType } from "@/types/fromType";

export const userRegister = async ({
  password,
  email,
  name,
}: {
  password: string;
  email: string;
  name: string;
}): Promise<registerType> => {
  try {
    await createRegisterInfo({ password, email, name });
    return { success: true };
  } catch (e: unknown) {
    const err = e as { errors?: errorsMessage };
    return {
      success: false,
      errors: err.errors ?? {
        name: "",
        email: "登録に失敗しました",
        password: "",
      },
    };
  }
};

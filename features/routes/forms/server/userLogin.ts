"use server";

import { readLogin } from "@/api/authApi";
import { errorsMessage, registerType } from "@/types/fromType";

export const userLogin = async ({
  password,
  email,
}: {
  password: string;
  email: string;
}): Promise<registerType> => {
  try {
    await readLogin({ password, email });
    return { success: true };
  } catch (e: unknown) {
    const err = e as { errors?: errorsMessage };
    return {
      success: false,
      errors: err.errors ?? {
        email: "",
        password: "",
      },
    };
  }
};

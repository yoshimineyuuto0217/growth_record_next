"use server"

import { patchCurrentUser } from "@/api/userApi";

export const updateMyProfile = async ({
  name,
  self_introduction,
}: {
  name?: string;
  self_introduction?: string;
}) => {
  try {
    const result = await patchCurrentUser({
      name,
      self_introduction,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

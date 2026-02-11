import { patchCurrentUser } from "@/api/userApi";

export const updateMyProfile = async ({
  name,
  profile_image,
  self_introduction,
}: {
  name?: string;
  profile_image?: File | null;
  self_introduction?: string;
}) => {
  try {
    const result = await patchCurrentUser({
      name,
      profile_image,
      self_introduction,
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

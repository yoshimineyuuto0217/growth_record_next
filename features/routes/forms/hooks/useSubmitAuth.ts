//ページによって処理を切り分ける

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { userRegister } from "../server/userRegister";
import { errorsMessage, FormState } from "@/types/fromType";


export const useSubmitAuth = (
  form: FormState,
  setForm: React.Dispatch<React.SetStateAction<FormState>>,
) => {
  const router = useRouter();
  const pathname = usePathname();

  const [errorMessage, setErrorMessage] = useState<errorsMessage>({
    name: "",
    email: "",
    password: "",
  });
  const submitAuth = async () => {
    if (pathname === "/register") {
      const result = await userRegister({
        password: form.password.trim(),
        email: form.email.trim(),
        name: form.name.trim(),
      });
      if (result.success) {
        setForm({
          name: "",
          email: "",
          password: "",
        });
        router.push("/articles");
      } else {
        setErrorMessage((prev) => ({
          ...prev,
          name: result.errors?.name,
        }));
        setErrorMessage((prev) => ({
          ...prev,
          email: result.errors?.email,
        }));
        setErrorMessage((prev) => ({
          ...prev,
          password: result.errors?.password,
        }));
      }
    }
    if (pathname === "/login") {
      alert("ログイン");
    }
    if (pathname === "/forgoa_password") {
    }
  };
  return { submitAuth, errorMessage };
};

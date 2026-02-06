//ページによって処理を切り分ける

import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { userRegister } from "../server/userRegister";
import { errorsMessage, FormState } from "@/types/fromType";
import { userLogin } from "../server/userLogin";

export const useSubmitAuth = (
  form: FormState,
  setForm: React.Dispatch<React.SetStateAction<FormState>>,
) => {
  const router = useRouter();
  const pathname = usePathname();
  const doubleTapRef = useRef(false);

  const [errorMessage, setErrorMessage] = useState<errorsMessage>({
    name: "",
    email: "",
    password: "",
  });
  const submitAuth = async () => {
    if (doubleTapRef.current) return;
    doubleTapRef.current = true;
    try {
    //新規登録
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
    // ログイン
    if (pathname === "/login") {
      const result = await userLogin({
        password: form.password.trim(),
        email: form.email.trim(),
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
          email: result.errors?.email,
        }));
        setErrorMessage((prev) => ({
          ...prev,
          password: result.errors?.password,
        }));
      }
    }
    // パスワード再設定
    if (pathname === "/forgoa_password") {
      }
    } catch (e) {
      console.error(e);
    } finally {
      doubleTapRef.current = false;
    }
  };
  return { submitAuth, errorMessage };
};

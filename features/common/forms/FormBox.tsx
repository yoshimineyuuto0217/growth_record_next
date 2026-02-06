"use client";

import { useState } from "react";
import Input from "./Input";
import { INPUT_BOX_STYLES } from "@/constants/InputBox";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import ErrorMessageBox from "../ui/ErrorMessageBox";
import { useSubmitAuth } from "@/features/routes/forms/hooks/useSubmitAuth";
import Link from "next/link";
import { COMMON_STYLES } from "@/constants/StyleCss";

const FormBox = ({
  outsideclassname,
  buttonname,
  formclassname,
}: {
  outsideclassname: string;
  buttonname: string;
  formclassname: string;
}) => {
  const pathname = usePathname();
  const [preview, setPreview] = useState<"text" | "password">("password");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { submitAuth, errorMessage } = useSubmitAuth(form, setForm);

  const switchPreview = () => {
    if (preview === "password") {
      setPreview("text");
    } else {
      setPreview("password");
    }
  };

  return (
    <div className={outsideclassname}>
      <form
        action={submitAuth}
        className={`flex flex-col justify-between  ${formclassname}`}
      >
        {pathname === "/register" && (
          <Input
            outsideclassname={INPUT_BOX_STYLES.middle}
            placeholder="ユーザー名"
            value={form.name}
            onChange={(value: string) =>
              setForm((prev) => ({
                ...prev,
                name: value,
              }))
            }
          />
        )}
        {errorMessage.name && (
          <ErrorMessageBox errormessage={errorMessage.name} />
        )}
        <Input
          outsideclassname={INPUT_BOX_STYLES.middle}
          placeholder="メールアドレス"
          value={form.email}
          onChange={(value: string) =>
            setForm((prev) => ({
              ...prev,
              email: value,
            }))
          }
        />
        {errorMessage.email && (
          <ErrorMessageBox errormessage={errorMessage.email} />
        )}
        {(pathname === "/register" || pathname === "/login") && (
          <Input
            outsideclassname={INPUT_BOX_STYLES.middle}
            placeholder="パスワード"
            isPasswordOpenFlag={true}
            asType={preview}
            value={form.password}
            isswitchPreview={switchPreview}
            onChange={(value: string) => {
              setForm((prev) => ({
                ...prev,
                password: value,
              }));
            }}
          />
        )}
        {pathname === "/login" && (
          <Link href={"/forgot_password"}>
            {" "}
            <span className={COMMON_STYLES.form_span_color}>
              パスワード忘れた場合
            </span>
          </Link>
        )}
        {errorMessage.password && (
          <ErrorMessageBox errormessage={errorMessage.password} />
        )}
        <Button
          as="button"
          buttoName={buttonname}
          buttonColor={`${COMMON_STYLES.bg_change_style} ${INPUT_BOX_STYLES.middle}`}
        />
        {pathname === "/login" && (
          <Link href={"/register"}>
            {" "}
            <span className={COMMON_STYLES.form_span_color}>
              アカウントを持ってない場合は新規登録
            </span>
          </Link>
        )}
      </form>
    </div>
  );
};

export default FormBox;

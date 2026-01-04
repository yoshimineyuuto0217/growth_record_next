"use client";

import { useState } from "react";
import Input from "./Input";
import { INPUTBOX_STYLES } from "@/constants/InputBox";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

// ここでURLみてinputの切り分けを行う

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
  const switchPreview = () => {
    if (preview === "password") {
      setPreview("text");
    } else {
      setPreview("password");
    }
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className={outsideclassname}>
      <form
        action=""
        className={`flex flex-col justify-between  ${formclassname}`}
      >
        {pathname === "/register" && (
          <Input
            outsideclassname={INPUTBOX_STYLES.middle}
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
        <Input
          outsideclassname={INPUTBOX_STYLES.middle}
          placeholder="メールアドレス"
          value={form.email}
          onChange={(value: string) =>
            setForm((prev) => ({
              ...prev,
              email: value,
            }))
          }
        />
        {(pathname === "/register" || pathname === "/login") && (
          <Input
            outsideclassname={INPUTBOX_STYLES.middle}
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
        <Button
          as="button"
          buttoName={buttonname}
          buttonColor={` bg-[#FEFEFE] border-[#FFD1A3] text-[#FFD1A3] text-center content-center ${INPUTBOX_STYLES.middle}`}
        />
      </form>
    </div>
  );
};

export default FormBox;
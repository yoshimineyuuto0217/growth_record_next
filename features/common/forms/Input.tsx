"use client";

import SwitchEye from "./SwitchEye";

const Input = ({
  value,
  onChange,
  placeholder,
  outsideclassname,
  asType = "text",
  isPasswordOpenFlag,
  isswitchPreview,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  outsideclassname: string;
  asType?: "text" | "password";
  isPasswordOpenFlag?: boolean;
  isswitchPreview?: () => void;
}) => {
  return (
    <div className="relative">
      <input
        type={asType === "password" ? "password" : "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={outsideclassname}
      />
      <SwitchEye
        isPasswordOpenFlag={isPasswordOpenFlag}
        isswitchPreview={isswitchPreview}
        asType={asType}
      />
    </div>
  );
};

export default Input;

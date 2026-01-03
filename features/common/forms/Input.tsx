"use client";

const Input = ({
  value,
  onChange,
  placeholder,
  outsideclassname,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  outsideclassname: string;
}) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={outsideclassname}
    />
  );
};

export default Input;

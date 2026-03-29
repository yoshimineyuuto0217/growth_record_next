"use client"

import Image from "next/image";
import { ChangeEvent, useRef } from "react";

const IconBox = ({
  src,
  alt,
  srcclassname,
  asType = "a",
  onClicklogic,
  onProfileChange,
}: {
  src: string;
  alt: string;
  srcclassname: string;
  asType?: "a" | "button" | "default";
  onClicklogic?: () => void;
  onProfileChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  return (
    <div className={srcclassname}>
      {asType === "a" && (
        <a href="/profile">
          <Image src={src} alt={alt} width={100} height={100} />
        </a>
      )}
      {asType === "button" && (
        <>
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="80"
            />
            <Image
              className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer z-40"
              alt="画像の交換"
              src={"./camera.svg"}
              width={25}
              height={25}
              onClick={() => {
                inputRef.current?.click();
              }}
            />
            <input
              type="file"
              onChange={onProfileChange}
              className="hidden"
              accept="image/png, image/jpeg"
              ref={inputRef}
            />
          </div>
        </>
      )}
      {asType === "default" && (
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          onClick={onClicklogic}
          className="w-full h-full "
        />
      )}
    </div>
  );
};

export default IconBox;

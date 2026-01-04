import Image from "next/image";

const SwitchEye = ({
  isPasswordOpenFlag,
  isswitchPreview,
  asType = "text",
}: {
  isPasswordOpenFlag?: boolean;
  isswitchPreview?: () => void;
  asType?: "text" | "password";
}) => {
  return (
    <>
      {isPasswordOpenFlag && (
        <div
          className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
          onClick={isswitchPreview}
        >
          {asType === "password" ? (
            <Image src="/close.svg" alt="非表示" width={100} height={100} />
          ) : (
            <Image src="/open.svg" alt="表示" width={100} height={100} />
          )}
        </div>
      )}
    </>
  );
};

export default SwitchEye;



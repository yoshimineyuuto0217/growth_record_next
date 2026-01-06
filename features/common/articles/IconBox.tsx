import Image from "next/image";

const IconBox = ({
  src,
  alt,
  srcclassname,
  asType = "a",
}: {
  src: string;
  alt: string;
  srcclassname: string;
  asType?: "a" | "button";
}) => {
  return (
    <div className={srcclassname}>
      {asType === "a" && (
        <a href="/profile">
          <Image src={src} alt={alt} width={100} height={100} />
        </a>
      )}
      {asType === "button" && (
          <Image src={src} alt={alt} width={100} height={100} />
      )}
    </div>
  );
};

export default IconBox;

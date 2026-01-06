import Image from "next/image";

const IconBox = ({
  src,
  alt,
  srcclassname,
}: {
  src: string;
  alt: string;
  srcclassname: string;
}) => {
  return (
    <div className={srcclassname}>
      <a href="/profile">
        <Image src={src} alt={alt} width={100} height={100} />
      </a>
    </div>
  );
};

export default IconBox;

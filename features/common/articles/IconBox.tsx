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
      <Image src={src} alt={alt} width={0} height={0} />
    </div>
  );
};

export default IconBox;

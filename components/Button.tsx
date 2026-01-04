import Image from "next/image";

const Button = ({
  buttoName,
  buttonColor,
  link,
  as,
  isImageFlag,
  src,
  alt,
}: {
  buttoName: string;
  buttonColor: string;
  link?: string;
  as?: "a" | "button";
  isImageFlag?: true;
  src?: string;
  alt?: string;
}) => {
  return (
    <div className={`${buttonColor}`}>
      {isImageFlag && (
        <div className="w-7.5 h-7.5 absolute left-23">
          <Image src={src ?? ""} alt={alt ?? ""} height={100} width={100} />
        </div>
      )}
      {as === "a" && (
        <a href={`${link}`} className="w-full h-full block content-center ">
          {buttoName}
        </a>
      )}
      {as === "button" && (
        <button type="submit" className="w-full h-full block content-center ">
          {buttoName}
        </button>
      )}
    </div>
  );
};

export default Button;

const Button = ({
  buttoName,
  buttonColor,
  link,
  as,
}: {
  buttoName: string;
  buttonColor: string;
  link?: string;
  as?: "a" | "button";
}) => {
  return (
    <div className={`${buttonColor}`}>
      {as === "a" && (
        <a href={`${link}`} className="w-full h-full block content-center">
          {buttoName}
        </a>
      )}
      {as === "button" && (
        <button type="submit" className="w-full h-full block content-center">
          {buttoName}
        </button>
      )}
    </div>
  );
};

export default Button;

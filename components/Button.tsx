const Button = ({
  buttoName,
  buttonColor,
  link,
}: {
  buttoName: string;
  buttonColor: string;
  link: string;
}) => {
  return (
    <div className={`${buttonColor}`}>
      <a href={`${link}`} className="w-full h-full block content-center">
      {buttoName}
      </a>
    </div>
  );
};

export default Button;

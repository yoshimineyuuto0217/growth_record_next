const HeadingText = ({
  text,
  textClassname,
}: {
  text: string;
  textClassname: string;
}) => {
  return <h1 className={`${textClassname}`}>{text}</h1>;
};

export default HeadingText;

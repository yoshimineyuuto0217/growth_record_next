const LogicButton = ({
  buttonname,
  buttonLogic,
  buttonClassname,
}: {
  buttonname: string;
  buttonLogic: () => void;
  buttonClassname: string;
}) => {
  return (
    <button onClick={buttonLogic} type="button" className={buttonClassname}>
      {buttonname}
    </button>
  );
};

export default LogicButton;

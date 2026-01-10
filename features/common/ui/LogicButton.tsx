const LogicButton = ({
  buttonname,
  buttonLogic,
}: {
  buttonname: string;
  buttonLogic: () => void;
}) => {
  return (
    <button onClick={buttonLogic} type="button" className="py-1">
      {buttonname}
    </button>
  );
};

export default LogicButton;

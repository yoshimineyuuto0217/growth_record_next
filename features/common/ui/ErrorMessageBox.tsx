const ErrorMessageBox = ({ errormessage }: { errormessage: string }) => {
  return <p className="text-red-500 text-xs">{errormessage}</p>;
};

export default ErrorMessageBox;

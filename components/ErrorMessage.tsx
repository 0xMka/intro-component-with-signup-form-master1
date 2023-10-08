const ErrorMessage = (text: string | undefined) => {
  return (
    <p className="mt-1.5 text-xs text-right text-primaryColor italic">{text}</p>
  );
};

export default ErrorMessage;

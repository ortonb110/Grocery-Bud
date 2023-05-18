import { useEffect } from "react";

const Alert = ({ alert, removeAlert }) => {
  const { type, msg } = alert;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div
      className={`text-center mb-[2rem] bg-${type}-300 rounded-md text-${type}-700 py-[0.3rem] text-[1.2rem]`}
    >
      <p className="capitalize">{msg}</p>
    </div>
  );
};

export default Alert;

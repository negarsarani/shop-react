import { Buttontype } from "../types/type";

const Button = ({ children, onClick, style  , type}: Buttontype) => {
  return (
    <button
      type={type}
      className={` text-center flex items-center justify-center  ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
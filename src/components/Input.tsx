import { InputType } from '../types/type';

const Input = ({ type, style , name}: InputType) => {
  return <input type={type} className={`${style}`} name={name} />;
};

export default Input;

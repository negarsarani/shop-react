export type Buttontype = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  type?: string;
};
export interface InputType {
  type: string;
  style?: string;
  name?:string
  // children: string | React.ReactNode;
}

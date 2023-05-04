export type Buttontype = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  type?: string;
};
export interface InputType {
  type: string;
  style?: string;
  name?: string;
  // children: string | React.ReactNode;
}

export type Idata = {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: number;
  ratings: number;
  fastDelivery: boolean;
};
export type CartContext = {
  state: Idata[];
  dispatch: any;
};
export type action = {
  type: 'add';
  payload: Idata;
};

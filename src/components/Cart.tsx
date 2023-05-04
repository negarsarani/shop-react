import FixedRating from './FixedRating/FixedRating';
import { useState } from 'react';

const Cart = ({ item }: any) => {
  const { image, name, price, fastDelivery, ratings } = item;
  const [add, setAdd] = useState(false);
  return (
    <>
      <div className="max-w-[220px] border rounded-md">
        <img className="rounded-t-md" src={image} alt="cat" />
        <div className="p-5 flex flex-col gap-2">
          <div className="text-xl font-bold">
            <p>{name}</p>
          </div>
          <div className="flex flex-col font-bold">
            <span>${price}</span>
            <span>{fastDelivery ? 'fastDelivery' : '4 days delivery'}</span>
          </div>
          <div>
            <FixedRating rating={ratings} />
          </div>
          <div>
            <button
              className={`rounded-md bg-[#007BFF] text-white px-3 py-2 ${
                add ? ' bg-red-400' : ' bg-blue-600'
              }`}
              onClick={() => {
                if (add) {
                  setAdd(false);
                } else {
                  setAdd(true);
                }
              }}
            >
              {add ? 'Remove from cart' : ' Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

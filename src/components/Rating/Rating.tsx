import { useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

const Rating = () => {
  const [rate, setRating] = useState(-1);
  const array = [0, 1, 2, 3, 4];
  return (
    <div className="flex ">
      {array.map((item) => {
        if (item <= rate) {
          return (
            <AiFillStar
              key={item}
              onClick={() => {
                
                setRating(item);
              }}
            />
          );
        } else {
          return (
            <AiOutlineStar
              key={item}
              onClick={() => {
                setRating(item);
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;

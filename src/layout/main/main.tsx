import Cart from '../../components/Cart';
import { Idata } from '../../types/type';

type Maintype = {
  data: [Idata];
};
function Main({ data }: Maintype) {
  return (
    <div className="grid grid-cols-1 flex-1 items-center justify-center px-10 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
      {data.map((item: Idata) => {
        return <Cart item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Main;

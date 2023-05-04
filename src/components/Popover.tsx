import { Popover } from '@headlessui/react';
import { FaShoppingCart } from 'react-icons/fa';
function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>
        <div className="flex items-center justify-center gap-1">
          <FaShoppingCart /> {1}
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 g-white shadow-md bg-violet-300">
        <div className="w-20">hi</div>
        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}
export default MyPopover;

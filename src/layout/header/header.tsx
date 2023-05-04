import MyPopover from '../../components/Popover';
import Search from '../../components/search';

function Header(props) {
  return (
    <div className="w-full flex justify-evenly md:justify-between items-center bg-gray-200 p-5 md:px-10">
      <div>shopping Cart</div>
      <div className="">
        <Search />
      </div>
      <div>
        <MyPopover />
      </div>
    </div>
  );
}

export default Header;

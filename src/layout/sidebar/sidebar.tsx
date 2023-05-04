import Button from '../../components/Button';
import Input from '../../components/Input';
import Rating from '../../components/Rating/Rating';

function Sidebar(props) {
  return (
    <div className=" bg-violet-200 w-fit py-10 px-10 h-screen">
      <h1>Filter Products</h1>
      <div>
        <div>
          <Input type="radio" name="filter" />
          <span>Ascending</span>
        </div>
        <div>
          <Input type="radio" name="filter" />
          <span>Descending</span>
        </div>
        <div>
          <Input type="checkbox" />
          <span>Include Out of Stock</span>
        </div>
        <div>
          <Input type="checkbox" />
          <span>Fast Delivery Only</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Rating: </span>
          <Rating />
        </div>
      </div>
      <Button style="bg-white text-black rounded-md">Clear Filters</Button>
    </div>
  );
}

export default Sidebar;

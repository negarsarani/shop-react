import { useState, useEffect } from 'react';
import Header from './header/header';
import Main from './main/main';
import Sidebar from './sidebar/sidebar';
import getData from '../API/GET';

function Landing() {
  const [data, Setdata] = useState<any>([]);
  useEffect(() => {
    getData('products').then((res) => {
      Setdata([...res.data]);
    });
  }, []);
  return (
    <div>
      <Header />
      <div className='flex '>
        <Sidebar />
        <Main data={data} />
      </div>
    </div>
  );
}

export default Landing;

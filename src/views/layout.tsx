import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Slider from '@/components/Slider';

const Layout = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="h-100vh overflow-hidden flex bg-#f5f5f5">
      <Slider expanded={expanded}></Slider>
      <div className="flex-1 w-0 flex flex-col">
        <Header
          expanded={expanded}
          setExpanded={(e: boolean) => setExpanded(e)}
        ></Header>
        <div className="p-10px m-10px flex-1 h-0 overflow-auto bg-#fff">
          <Outlet />
        </div>

        <div className="bg-#f5f5f5 h-40px flex items-center justify-center">
          ©2023 广志 study React
        </div>
      </div>
    </div>
  );
};

export default Layout;

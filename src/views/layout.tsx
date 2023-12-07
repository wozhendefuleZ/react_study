import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import items from '@/components/Items';
import Header from '@/components/Header';
import './layout.css';

const LayOut = () => {
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  const { Sider } = Layout;
  return (
    <div className="h-100vh overflow-hidden flex bg-#f5f5f5">
      <Sider trigger={null} collapsible collapsed={expanded} className="p-0">
        <div className="h-60px my-10px"></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          selectedKeys={[pathname]}
          items={items}
        />
      </Sider>

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

export default LayOut;

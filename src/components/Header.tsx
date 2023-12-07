import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Popconfirm } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
const Header = (porps: any) => {
  const navigate = useNavigate();
  // 退出
  const onConfirm = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="h-64px bg-#fff flex items-center pl-15px pr-25px">
      {React.createElement(
        porps.expanded ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'text-20px',
          onClick: () => porps.setExpanded(!porps.expanded),
        }
      )}

      <div className="ml-auto text-18px">
        <Popconfirm
          onConfirm={onConfirm}
          title="是否确认退出？"
          okText="退出"
          cancelText="取消"
        >
          <LogoutOutlined /> 退出
        </Popconfirm>
      </div>
    </div>
  );
};

export default Header;

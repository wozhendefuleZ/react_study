import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
function getItem(
  label: any,
  key: string,
  icon: any,
  children?: any,
  type?: any
) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    <Link to="/layout/home">首页</Link>,
    '/layout/home',
    <HomeOutlined />
  ),
];

export default items;

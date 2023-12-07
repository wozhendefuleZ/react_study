import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
// import AuthComponent from '@/components/authComponent';
import Layout from '@/views/layout';
const Home = lazy(() => import('@/views/home'));
const routes = [
  { path: '', element: <Navigate to="/layout/home" /> },
  {
    path: '/layout',
    element: <Layout />,
    children: [{ path: '/layout/home', element: <Home /> }],
  },
];
export default routes;

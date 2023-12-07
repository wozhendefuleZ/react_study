import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
// import AuthComponent from '@/components/authComponent';
import Layout from '@/views/Layout';
const Home = lazy(() => import('@/views/Home'));
const routes = [
  { path: '', element: <Navigate to="/layout/home" /> },
  {
    path: '/layout',
    element: <Layout />,
    children: [{ path: '/layout/home', element: <Home /> }],
  },
];
export default routes;

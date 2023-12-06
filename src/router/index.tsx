import { Navigate } from 'react-router-dom';
import Home from '@/views/home';
const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  { path: '/home', element: <Home /> },
];
export default routes;
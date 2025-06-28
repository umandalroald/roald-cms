import { useRoutes } from 'react-router-dom';
import Login from '../users/Login';

const authRoutes: useRoutes[] = [
  {
    path: '/login',
    element: <Login />
  }
];

export default authRoutes;

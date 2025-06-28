import { useRoutes } from 'react-router-dom';
import authRoutes from '../features/auth/routes';

const allRoutes = [
  ...authRoutes,
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
];

export default function AppRoutes() {
  return useRoutes(allRoutes);
}

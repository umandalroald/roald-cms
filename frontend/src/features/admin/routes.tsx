// import { lazy } from 'react';
// import { Navigate } from 'react-router-dom';
// import AdminLayout from '@/layouts/AdminLayout';
//
// const Dashboard = lazy(() => import('@/features/admin/pages/Dashboard'));
// const UserList = lazy(() => import('@/features/admin/pages/UserList'));
// const PostList = lazy(() => import('@/features/admin/pages/PostList'));
// const Settings = lazy(() => import('@/features/admin/pages/Settings'));
//
// const adminRoutes = {
//   path: '/admin',
//   element: <AdminLayout />,
//   children: [
//     { index: true, element: <Dashboard /> },
//     { path: 'users', element: <UserList /> },
//     { path: 'posts', element: <PostList /> },
//     { path: 'settings', element: <Settings /> },
//     { path: '*', element: <Navigate to="/admin" /> },
//   ],
// };
//
// export default adminRoutes;

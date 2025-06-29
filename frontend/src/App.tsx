import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './features/auth/Login';

// Lazy load admin pages
const Dashboard = lazy(() => import('./features/admin/pages/Dashboard'));
const Users = lazy(() => import('./features/admin/pages/UserList'));
const Posts = lazy(() => import('./features/admin/pages/PostList'));
const Settings = lazy(() => import('./features/admin/pages/Settings'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* 🔓 Public route */}
          <Route path="/login" element={<Login />} />

          {/* 🌐 Main public layout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          {/* 🔐 Admin layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/admin" />} />
          </Route>

          {/* ❌ Fallback route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

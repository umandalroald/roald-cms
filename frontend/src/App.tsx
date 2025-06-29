import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
// import AuthLayout from './layouts/AuthLayout';
// import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './features/auth/Login';
// import Register from './features/auth/Register';
// import Dashboard from './features/admin/Dashboard';
// import Users from './features/admin/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔓 Public route with no layout */}
        <Route path="/login" element={<Login />} />

        {/* 🌐 Main site pages with layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // ✅ Required for default import

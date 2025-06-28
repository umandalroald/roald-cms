import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './layouts/DrawerAppBar';
import Home from './pages/Home';
import Login from './features/users/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DrawerAppBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // ✅ Required for default import

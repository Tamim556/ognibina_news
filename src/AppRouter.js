// src/AppRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PostDetail from './components/PostDetail';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default AppRouter;

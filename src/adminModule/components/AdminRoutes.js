// AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from '../Admin';

const AdminRoutes = () => (
  <Routes>
    <Route path="/admin" element={<Admin />} />
    
   
  </Routes>
);

export default AdminRoutes;

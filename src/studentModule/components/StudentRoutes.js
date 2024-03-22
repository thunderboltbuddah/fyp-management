// AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';


import StudentTab from '../StudentTab';

const StudentRoutes = () => (
  <Routes>
    <Route path="/student" element={<StudentTab />} />
    
   
  </Routes>
);

export default StudentRoutes;

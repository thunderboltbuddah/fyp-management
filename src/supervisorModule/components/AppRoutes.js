// AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Supervisor from '../Supervisor';
import GroupTab from './groupModule/GroupTab';
import SupervisorQueryWall from './groupModule/StudentQueryWall';
import EvaluationForm from './groupModule/EvaluationForm';
import EvaluationDetail from './groupModule/EvaluationDetail';
import LoginForm from '../Login';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Supervisor />} />
    <Route path="/group/:groupId" element={<GroupTab />}/>

 
      <Route path="/group/:groupId/student/:studentRollNo" element={<EvaluationDetail />}/>
   <Route path='/login' element={<LoginForm/>} />
  </Routes>
);

export default AppRoutes;

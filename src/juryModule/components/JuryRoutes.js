// AppRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Jury from '../Jury';
import GroupTab from './groupModule/GroupTab';
import SupervisorQueryWall from './groupModule/SupervisorQueryWall';
import EvaluationForm from './groupModule/EvaluationForm';
import EvaluationDetail from './groupModule/EvaluationDetail';
import LoginForm from '../Login';

const JuryRoutes = () => (
  <Routes>
    <Route path="/jury" element={<Jury />} />
    <Route path="/jury/group/:groupId" element={<GroupTab />}/>

 
      <Route path="/jury/group/:groupId/student/:studentRollNo" element={<EvaluationDetail />}/>
   <Route path='/login' element={<LoginForm/>} />
  </Routes>
);

export default JuryRoutes;

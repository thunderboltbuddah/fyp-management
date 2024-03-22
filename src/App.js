import logo from './logo.svg';
import React from 'react';
import Supervisor from './supervisorModule/Supervisor';
import './App.css';
import AppRoutes from './supervisorModule/components/AppRoutes';
import AdminRoutes from './adminModule/components/AdminRoutes';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from './adminModule/Admin';
import LoginForm from './supervisorModule/Login';
import StudentRoutes from './studentModule/components/StudentRoutes';
import StudentTab from './studentModule/StudentTab';
import JuryRoutes from './juryModule/components/JuryRoutes';
import Jury from './juryModule/Jury';

function App() {
  return (
<div>
  
<Router>
  <StudentRoutes>

    <StudentTab/>
  </StudentRoutes>
    <AppRoutes>
    <Supervisor>
    

      </Supervisor>
      </AppRoutes>  
      <JuryRoutes>
        <Jury/>
      </JuryRoutes>
<AdminRoutes>
  <Admin/>
  <LoginForm/>
</AdminRoutes>


    </Router>
 
</div>


 

  
  
   

        


    

   
  );
}

export default App;

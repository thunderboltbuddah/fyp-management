import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SupervisorProfile from './components/Supervisorprofile.js';
import GroupData from './components/GroupData.js';
import Forms from './components/Forms.js';
import {Link, Router} from 'react-router-dom';
import AppRoutes from './components/AppRoutes.js';
import styles from './css/my.css';
import MeetingComponent from './components/Meetings.js';
import MyNavbar from './MyNavbar.js';

function Supervisor () {
  const [key, setKey] = useState ('profile');
  function handleOnClick (e) {}

  return (
<>
<MyNavbar/>

<div className="main container  mt-4  ">

        <div className="container  main2   mb-4 p-3">
          <h1 className='' >
        
         <i class="link-success fas fa-chalkboard-teacher" style={{ color: '#2596be' }}></i>  Supervisor Panel
          </h1>
        </div>
        <Tabs
        justify
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey (k)}
          className="  container-fluid  rounded "
        >
          <Tab className="main2 mt-4 "eventKey="profile"  title={[<i class=" fas fa-id-card" style={{ color: '#2596be' }}></i>,<br/>,"Profile Details "]}>
            <SupervisorProfile />
          </Tab>
          <Tab className="main2 mt-4" eventKey="groupData"  title={[<i class=" fas fa-users" style={{ color: '#2596be' }}></i>,<br/>,"Projects"]}>
            
            <GroupData   />
           
          </Tab>
          <Tab  className="main2 mt-4" eventKey="form"  title={[<i class="fas fa-paper-plane" style={{ color: '#2596be' }}></i>,<br/>,"Form Upload "]}>
            <Forms />
          </Tab>
          <Tab  className="main2 mt-4" eventKey="meeting"  title={[<i class="fas fa-handshake" style={{ color: '#2596be' }}></i>,<br/>,"Setup Meetings "]}>
            <MeetingComponent />
          </Tab>
        </Tabs>
        

      </div>

</>
      
    
  );
}

export default Supervisor;

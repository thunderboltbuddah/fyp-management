import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Forms from './components/Forms';
import {Link, Router} from 'react-router-dom';
import Groups from './components/Groups';
import StudentProfiles from './components/StudentProfiles';
import Supervisor from '../supervisorModule/Supervisor';
import SupervisorProfiles from './components/SupervisorProfiles';
import JuryProfiles from './components/JuryProfiles';
import Repositories from './components/Repositories';
import MyNavbar from '../supervisorModule/MyNavbar';
function Admin () {
  const [key, setKey] = useState ('profile');
  function handleOnClick (e) {}

  return (
<>

<MyNavbar/>
<div className="container main mt-4">

<div className="container  main2   mb-4 p-3">

          <h1 className='' >
        
         <i class="link-success fas fa-laptop" style={{ color: '#2596be' }}></i>  Coordinator Panel
          </h1>
       
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey (k)}
          className=" container-fluid "
        >
          <Tab className='main2 mt-4' eventKey="profile" title={[<i class=" fas fa-id-card" style={{ color: '#2596be' }}></i>,<br/>,"All Profiles "]}>
            <Tabs >
            <Tab eventKey="profile" title="Student Profiles">
            <StudentProfiles/>
            </Tab> 
           
            <Tab eventKey="supervisor" title="Supervisor Profiles">
            <SupervisorProfiles/>
            </Tab>
            <Tab eventKey="Jury" title="Jury Profiles">
            <JuryProfiles/>
            </Tab>
          
            </Tabs>
         
          </Tab>
          <Tab eventKey="resgistration" className="mt-4 main2" title={[<i class=" fas fa-pen" style={{ color: '#2596be' }}></i>,<br/>,"Registration "]}>
           <Groups/>
           
          </Tab>
          <Tab eventKey="form" title={[<i class=" fas fa-paper-plane" style={{ color: '#2596be' }}></i>,<br/>,"Forms "]} className='mb-4'>
       <Forms/>
          </Tab>
        
        </Tabs>
        

      </div>


</>

    
  );
}

export default Admin;

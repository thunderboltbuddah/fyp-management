

import React from 'react';
import {groups} from '../groupDummyData';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GroupInfo from './GroupInfo';
import EvaluationForm from './EvaluationForm';
import AnnouncementTab from './AnouncementTab';
import StudentQueryWall from './StudentQueryWall';
import AppRoutes from '../AppRoutes';
import Milestones from './Milestones';
import MyNavbar from '../../MyNavbar';
import SupervisorView from '../../githubApi/SupervisorView';
import JuryQueryWall from './JuryQueryWall';
import TimelineComponent from './TimelineComponent';

const GroupTab= () => {
  const {groupId} = useParams ();
  const group = groups.find (group => group.grpId === groupId);
  const [key, setKey] = useState ('profile');

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div>
      <MyNavbar/>

      <div className="main container mb-4 mt-4 p-3">

        <div className="container main2    mb-4 border p-3">
         <h1>
         {[<i class="link-success fas fa-users" style={{ color: '#2596be' }}></i>," Project Details "]}
       
         </h1>
        </div>
        <Tabs
        justify
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey (k)}
          className=" container-fluid  "
        >
          <Tab className='main2 mt-4' eventKey="profile" title={[<i class=" fas fa-users" style={{ color: '#2596be' }}></i>,<br/>,"Project Details "]}>
          <GroupInfo group={group} key={group.grpId} />
          </Tab>
          <Tab className='main2 mt-4' eventKey="groupData"  title={[<i class="fas fa-book" style={{ color: '#2596be' }}  > </i>,<br/>,"   Evaluation "]}>
            
<EvaluationForm group={group} key={group.grpId}/>
          </Tab>
          <Tab className='main2 mt-4' eventKey="annoucements"title={[<i class="fas fa-bullhorn" style={{ color: '#2596be' }}  ></i>,<br/>,"   Annoucements "]}>
           <AnnouncementTab/>
          </Tab>
          <Tab className='main2 mt-4' eventKey="Milestone" title={[<i class="fas fa-bullseye" style={{ color: '#2596be' }}  ></i>,<br/>,"   Milestones "]}>
         <Milestones/>
          </Tab>
          <Tab className='main2 mt-4' eventKey="Query" title={[<i class="fas fa-question-circle" style={{ color: '#2596be' }}  ></i>,<br/>,"   Query Wall "]}>
           
           <Tabs>
            <Tab className='main2 mt-4' eventKey="Student Query" title={[<i class="fas fa-person" style={{ color: '#2596be' }}  ></i>,<br/>,"   Student Queries "]}>
            <StudentQueryWall />
            </Tab>
            <Tab className='main2 mt-4' eventKey="Jury Query" title={[<i class="fas fa-gavel" style={{ color: '#2596be' }}  ></i>,<br/>,"   Jury Queries "]}>
            <JuryQueryWall />
            </Tab>
           </Tabs>
         
                      </Tab>

                      <Tab className='main2 mt-4' eventKey="Repository" title={[<i class="fab fa-github" style={{ color: '#2596be' }}  ></i>,<br/>,"   Repository "]}>
           <SupervisorView />
                      </Tab>
                      
                      <Tab className='main2 mt-4' eventKey="Timeline" title={[<i class="fab fa-github" style={{ color: '#2596be' }}  ></i>,<br/>,"   Timeline"]}>
           <TimelineComponent/>
                      </Tab>
           
        </Tabs>

      </div>
    </div>
  );
};
export default GroupTab;

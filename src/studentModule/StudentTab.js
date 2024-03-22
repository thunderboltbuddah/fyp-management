

import React from 'react';
import { groups } from '../supervisorModule/components/groupDummyData';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import GroupInfo from './components/groupModule/GroupInfo';
import AppRoutes from '../supervisorModule/components/AppRoutes';
import Milestones from './components/groupModule/milestoneModule/Milestones';
import MyNavbar from '../supervisorModule/MyNavbar';
import { students } from './components/studentDummyData';
import StudentInfo from './components/groupModule/StudentInfo';
import StudentEvaluation from './components/groupModule/StudentEvaluation';
import { fakeEvaluationEntries } from './components/groupModule/fakeEvaluationEntries';
import { fakeAnnouncements } from './components/groupModule/fakeAnnouncmentDummyData';
import StudentAnnouncementView from './components/groupModule/announcementTab/SupervisorAnnouncementView';
import QueryTab from './components/groupModule/queryModule/QueryTab';
import StudentView from './githubApi/StudentView';
import Recomendation from './recomendationApi/Recomendation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnnouncementBanner from './components/announcementBanner/AnnouncementBanner';
import AnnoucementTab from './components/groupModule/announcementTab/AnnoucementTab';
import Gemini from './components/gemini/src/Gemini';

const StudentTab= () => {
  const group = groups[1];
  const [key, setKey] = useState ('Studentprofile');

  // if (!group) {
  //   return <div>Group not found</div>;
  // }
  const logo= <i class="fas fa-user-graduate" style={{ color: '#2596be' }} ></i> 



  return (
    <div>
      <MyNavbar/>

      <AnnouncementBanner message="Visit my office by 11 AM" />

      
      <div className="main container mt-4 p-3 mb-4">

        <div className="container main2    mb-4  p-3">
         <h1>
         <i class="link-success fas fa-user-graduate" style={{ color: '#2596be' }} ></i> 
          Student Panel
         </h1>
        </div>
        <Tabs
        justify
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey (k)}
          className=" container-fluid  "
        >
          <Tab className=' main2 mt-4 '  eventKey="Studentprofile" title={[logo,<br/>,"   Student Details" ]}>
          <StudentInfo student={students[1]} key={group.grpId} />
          </Tab>
          <Tab className='main2 mt-4' eventKey="Groupprofile" title={[<i class=" fas fa-users" style={{ color: '#2596be' }}></i>,<br/>,"Group Details "]}>
          <GroupInfo group={group} key={group.grpId} />
          </Tab>
         
          <Tab className='main2 mt-4' eventKey="groupData" title={[<i class="fas fa-book" style={{ color: '#2596be' }}  > </i>,<br/>,"   Evaluation "]}>
            
<StudentEvaluation evaluationEntries={fakeEvaluationEntries} key={group.grpId}/>
          </Tab>
          <Tab className='main2 mt-4' eventKey="annoucements" title={[<i class="fas fa-bullhorn" style={{ color: '#2596be' }}  ></i>,<br/>,"   Annoucements "]}>
         
         
         
          <AnnoucementTab/>
          </Tab>
          <Tab className='main2 mt-4' eventKey="Milestone" title={[<i class="fas fa-bullseye" style={{ color: '#2596be' }}  ></i>,<br/>,"   Milestones "]}>
       <Milestones/>
          </Tab>
          <Tab className='main2 mt-4' eventKey="Query" title={[<i class="fas fa-question-circle" style={{ color: '#2596be' }}  ></i>,<br/>,"   Query Wall "]}>
         <QueryTab/>
                      </Tab>
                      <Tab className='main2 mt-4' eventKey="Github" title={[<i class="fab fa-github" style={{ color: '#2596be' }}  ></i>,<br/>,"   Github "]}>
         <StudentView/>
                      </Tab>
                      {/* <Tab className='main2 mt-4' eventKey="Recomendation" title={[<i class="fas fa-robot" style={{ color: '#2596be' }}  ></i>,<br/>,"   AI Assistant "]}>
         <Recomendation/>
                      </Tab> */}
                      <Tab className='mt-4' eventKey="Recomendation" title={[<i class="fas fa-robot" style={{ color: '#2596be' }}  ></i>,<br/>,"   AI Assistant "]}>
        <Gemini/>
                      </Tab>
                 
           
        </Tabs>

      </div>
    </div>
  );
};
export default StudentTab;

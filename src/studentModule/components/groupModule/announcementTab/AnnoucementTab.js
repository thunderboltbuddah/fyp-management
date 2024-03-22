import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import SupervisorAnnouncementView from './SupervisorAnnouncementView';
import { fakeAnnouncements } from '../fakeAnnouncmentDummyData';
const AnnoucementTab = () => {
  const [key, setKey] = useState('jury');

  return (
    
   
          <Tabs
            
            id="controlled-sub-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="container-fluid"
          >
            <Tab eventKey="jury" title="Jury Announcements">
               
              <SupervisorAnnouncementView announcements={fakeAnnouncements} />
            </Tab>
            <Tab eventKey="supervisor" title="Supervisor Announcements">
              <SupervisorAnnouncementView announcements={fakeAnnouncements} />
            </Tab>
          </Tabs>
       
  );
};

export default AnnoucementTab;

import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import NewQuery from './NewQuery';
import ViewQuery from './ViewQuery';

const QueryTab = () => {
  // State to manage the array of queries
  const [queries, setQueries] = useState([
    { 
        id: 1, 
        title: 'Sample Query 1', 
        content: 'Query content 1', 
        datetime: '2024-02-24 10:00 AM', 
        attachments:[],
        reply: { repliername: 'Supervisor 1', replyingmessage: 'Reply message 1', datetime: '2024-02-24 11:00 AM' }
      },
      { 
        id: 2, 
        title: 'Sample Query 2', 
        content: 'Query content 2', 
        datetime: '2024-02-24 11:00 AM', 
        attachments:[],
        reply: { repliername: 'Supervisor 2', replyingmessage: 'Reply message 2', datetime: '2024-02-24 12:00 PM' }
      },
      { 
        id: 3, 
        title: 'Sample Query 3', 
        content: 'Query content 3', 
        datetime: '2024-02-24 12:00 PM', 
        attachments:[],
        reply: { repliername: 'Supervisor 3', replyingmessage: 'Reply message 3', datetime: '2024-02-24 1:00 PM' }
      },
    
  ]);

  return (
    <Tabs defaultActiveKey="newQuery" id="query-tab" className='mb-4 m-0 p-0'>
      <Tab eventKey="newQuery" title="New Query">
        <NewQuery queries={queries} setQueries={setQueries} />
      </Tab>
      <Tab eventKey="viewQuery" title="View Queries">
      <ViewQuery queries={queries} setQueries={setQueries} />
      </Tab>
    </Tabs>
  );
};

export default QueryTab;

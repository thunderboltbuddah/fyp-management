import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { groups } from './groupDummyData';
import { Link } from 'react-router-dom';
const GroupData = () => {


  const [searchInput, setSearchInput] = useState ('');
  const [filteredGroups, setFilteredGroups] = useState (groups); // Replace 'groups' with your array of groups

  const handleSearch = e => {
    const input = e.target.value;
    setSearchInput(input);
  
    // Filter groups based on the search input
    const filtered = groups.filter(group => {
      const lowerCaseInput = input.toLowerCase();
      const name = group.name ? group.name.toLowerCase() : '';
      const studentRollNo = group.studentRollNo ? group.studentRollNo.toLowerCase() : '';
      const fypId = group.fypId ? group.fypId.toLowerCase() : '';
      const grpId = group.grpId ? group.grpId.toLowerCase() : '';
  
      return (
        name.includes(lowerCaseInput) ||
        studentRollNo.includes(lowerCaseInput) ||
        fypId.includes(lowerCaseInput) ||
        grpId.includes(lowerCaseInput)
      );
    });
  
    setFilteredGroups(filtered);
  };
  
  // Replace 'groups' with your array of groups or use 'filteredGroups' if you want to render filtered results
  const renderGroups = filteredGroups.map (filteredGroups => (
    <div className="card p-3 mt-3 mb-3" key={filteredGroups.id} >

      <div class="mt-2 ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#2dc799"
            className="bi bi-clipboard-data"
            viewBox="0 0 16 16"
          >
            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>
        </div>
        <br />
        <h3 className="heading ">
        <Link className='text-center' to={`/jury/group/${filteredGroups.grpId}`} key={filteredGroups.id} >
          
        {filteredGroups.grpId
        }
  
    </Link>
   
       
        <br /> <br /></h3>

      </div>

    </div>
  ));

  return (
    <div className="container p-0  m-0">
      <div className="mt-3  d-flex justify-content-end">
        <Form.Control
          type="text"
          placeholder="Search by name, roll number, or FYP ID"
          value={searchInput}
          onChange={handleSearch}
          className="w-50"
        />

      </div>

      <div className="mt-2 mb-4 ">
        <div className="">

          <div className=" mb-4">
            {renderGroups}
          </div>

        </div>
      </div>

    </div>
  );
};

export default GroupData;

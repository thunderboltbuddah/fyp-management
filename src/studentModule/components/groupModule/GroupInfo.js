import React from 'react'
import { group } from '../../../supervisorModule/components/groupDummyData';
function GroupInfo(prop) {

 
  return (
    <div className=' '>
      <h3>Group Details</h3>
    <table className="container  mt-4 mb-4">
      <tbody>
       
        <tr>
          <th scope="row">Student 1 Roll No:</th>
          <td>{prop.group.student1RollNo}</td>
        </tr>
        <tr>
          <th scope="row">Student 2 Roll No:</th>
          <td>{prop.group.student2RollNo}</td>
        </tr>
        <tr>
          <th scope="row">Student 3 Roll No:</th>
          <td>{prop.group.student3RollNo}</td>
        </tr>
        <tr>
          <th scope="row">FYP ID:</th>
          <td>{prop.group.fypId}</td>
        </tr>
        <tr>
          <th scope="row">Group ID:</th>
          <td>{prop.group.grpId}</td>
        </tr>
        <tr>
          <th scope="row">Project Title:</th>
          <td>{prop.group.projectTitle}</td>
        </tr>
        <tr>
          <th scope="row">Member 1:</th>
          <td>{prop.group.member1}</td>
        </tr>
        <tr>
          <th scope="row">Contact No 1:</th>
          <td>{prop.group.contactNo1}</td>
        </tr>
        <tr>
          <th scope="row">Email 1:</th>
          <td>{prop.group.email1}</td>
        </tr>
        <tr>
          <th scope="row">Enrollment 1:</th>
          <td>{prop.group.enrollment1}</td>
        </tr>
        <tr>
          <th scope="row">Member 2:</th>
          <td>{prop.group.member2}</td>
        </tr>
        <tr>
          <th scope="row">Contact No 2:</th>
          <td>{prop.group.contactNo2}</td>
        </tr>
        <tr>
          <th scope="row">Email 2:</th>
          <td>{prop.group.email2}</td>
        </tr>
        <tr>
          <th scope="row">Enrollment 2:</th>
          <td>{prop.group.enrollment2}</td>
        </tr>
        <tr>
          <th scope="row">Member 3:</th>
          <td>{prop.group.member3}</td>
        </tr>
        <tr>
          <th scope="row">Contact No 3:</th>
          <td>{prop.group.contactNo3}</td>
        </tr>
        <tr>
          <th scope="row">Email 3:</th>
          <td>{prop.group.email3}</td>
        </tr>
        <tr>
          <th scope="row">Enrollment 3:</th>
          <td>{prop.group.enrollment3}</td>
        </tr>
        {/* Add more rows for additional attributes if needed */}
      </tbody>
    </table>
  </div>
  )
}

export default GroupInfo;
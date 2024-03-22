import React from 'react'
import { supervisor } from './profilesDummyData';
function SupervisorProfile() {

  const supervisorData = supervisor[0]
  return (
    <div className=' '>
 <table className=" container ">
      <tbody>
        <tr>
          <th scope="row">Email:</th>
          <td>{supervisorData.email}</td>
        </tr>
        <tr>
          <th scope="row">Name:</th>
          <td>{supervisorData.name}</td>
        </tr>
        <tr>
          <th scope="row">Contact No:</th>
          <td>{supervisorData.contact_no}</td>
        </tr>
        <tr>
          <th scope="row">Domain:</th>
          <td>{supervisorData.domain}</td>
        </tr>
        <tr>
          <th scope="row">Post:</th>
          <td>{supervisorData.post}</td>
        </tr>
        <tr>
          <th scope="row">No of Groups:</th>
          <td>{supervisorData.no_of_groups}</td>
        </tr>
      </tbody>
    </table>
    
    </div>
  )
}

export default SupervisorProfile;
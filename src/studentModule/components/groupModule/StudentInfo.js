import React from 'react';

function StudentInfo(props) {
  return (
    <div className=''>
        <h3>Student Details</h3>
      <table className="container mt-4 mb-4">
        <tbody>
          <tr>
            <th scope="row">Roll No:</th>
            <td>{props.student.rollNo}</td>
          </tr>
          <tr>
            <th scope="row">Name:</th>
            <td>{props.student.name}</td>
          </tr>
          <tr>
            <th scope="row">FYP ID:</th>
            <td>{props.student.fypId}</td>
          </tr>
          <tr>
            <th scope="row">GR ID:</th>
            <td>{props.student.grId}</td>
          </tr>
          <tr>
            <th scope="row">Email:</th>
            <td>{props.student.email}</td>
          </tr>
          <tr>
            <th scope="row">Password:</th>
            <td>{props.student.password}</td>
          </tr>
          <tr>
            <th scope="row">Enrollment ID:</th>
            <td>{props.student.enrollmentId}</td>
          </tr>
          <tr>
            <th scope="row">Mobile No:</th>
            <td>{props.student.mobileNo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentInfo;

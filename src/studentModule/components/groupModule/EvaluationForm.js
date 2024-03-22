import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function EvaluationForm(prop) {
  const {groupId} = useParams ();
const students=[
  {
    studentRollNo: prop.group.student1RollNo ,
    memberName: prop.group.member1,
  }
  ,{
    studentRollNo: prop.group.student2RollNo ,
    memberName: prop.group.member2,
  }
  ,{
    studentRollNo: prop.group.student3RollNo ,
    memberName: prop.group.member3,
  }
  
    
      
]
  const renderGroups = students.map (student => (
    <div className="card p-3 mt-3 mb-3" key={prop.group.grpId} >

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
       
        <Link className='text-center' to={`/group/${groupId}/student/${  student.studentRollNo}`} key={  student.studentRollNo} >
          
        {
          student.memberName
        }
  </Link>
 
       
        <br />
        {
          student.studentRollNo
        } <br /></h3>

      </div>

    </div>
  ));

  return (
    <div className="container p-0  m-0">
  
      <div className="mt-2 mb-4 ">
        <div className="">

          <div className=" mb-4">
            {renderGroups}
          </div>

        </div>
      </div>
      </div>)


}

export default EvaluationForm
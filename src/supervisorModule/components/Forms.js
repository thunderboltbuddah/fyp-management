import {React,useState}from 'react'
import Tabs from 'react-bootstrap/esm/Tabs';
import Tab from 'react-bootstrap/esm/Tab';
import FormDetails from './FormDetails';

function Forms() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
//modal  


    const [key, setKey] = useState('profile');
    
    const [pendingForms, setPendingForms] = useState([
        { id: 1, formName: 'Form 1', formDestination: 'Coordinator' },
        { id: 2, formName: 'Form 2', formDestination: 'Coordinator' },
        { id: 3, formName: 'Form 3', formDestination: 'Coordinator' },
        // Add more forms as needed
      ]);
      const [sentForms, setSentForms] = useState([]);

      const sendForm = (formId) => {
        const sentForm = pendingForms.find((form) => form.id === formId);
        setSentForms([...sentForms, sentForm]);
    
     
      };
    
      const dismissForm = (formId) => {
        const updatedForms = pendingForms.filter((form) => form.id !== formId);
        setPendingForms(updatedForms);
      };

      const visiblePendingForms = pendingForms.filter((form) => !sentForms.some((sentForm) => sentForm.id === form.id));

    return (
      
  <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className=" container-fluid   "
      >
        <Tab eventKey="profile" title="Send Forms">
        
        <table className="container  mt-4 mb-4">
      <thead>
        
        <tr>
          <th scope="col">Form Name</th>
          <th scope="col">Form Destination</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <hr/>
      <tbody>
      
      
      {pendingForms.map((form) => (
        
          <tr  key={form.id}>
            
            <td>{form.formName}</td>
            
            <td>Send to {form.formDestination}</td>
            <td>
              
            <button
                className={`btn ${sentForms.some((sentForm) => sentForm.id === form.id) ? 'btn-success' : 'btn-primary'}`}
                onClick={() => sendForm(form.id)}
                disabled={sentForms.some((sentForm) => sentForm.id === form.id)}
              >
                {sentForms.some((sentForm) => sentForm.id === form.id) ? 'Sent' : 'Send'}
              </button>
            
            </td>
            
          </tr>
        ))}
      </tbody>
      <hr/>
    </table>


        </Tab>
        <Tab eventKey="groupData" title="View Pending Forms" >
    
       
        <table className="container  mt-4 mb-4">
      <thead>
        <tr>
          <th scope="col">Form Name</th>
          <th scope="col">Form Destination</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <hr/>
      <tbody>
        {visiblePendingForms.map((form) => (
          <tr key={form.id}>
            <td>{form.formName}</td>
            <td>{form.formDestination}</td>
            <td>
            <button className="btn btn-primary" onClick={handleShow}>
        View Form
      </button>
      <FormDetails show={show} onHide={handleClose} />
              <button className="btn btn-success m-1" onClick={() => alert()}>
                Update
              </button>
              
              <button className="btn btn-danger m-1" onClick={() => dismissForm(form.id)}>
                Dismiss
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <hr/>
    </table>
     </Tab>
        
      </Tabs>
    
  )
}

export default Forms
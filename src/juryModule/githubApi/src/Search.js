import React, { useState } from 'react';
import { FormLabel } from 'react-bootstrap';

const Search = ({ handleSearch }) => {
  const [formData, setFormData] = useState({ username: 'thunderboltbuddah', repoName: 'little-lemon' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch(formData.username, formData.repoName);
  };

  return (
    <form onSubmit={handleSubmit}>
   
  
      

      <div className="row mb-3">
        <div className="col">
        <div class="p-2"><FormLabel>
       Student Github Username :
     
      </FormLabel>
</div>
          <input
          disabled
          readOnly
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            placeholder="Enter Your Username, e.g. aun"
            onChange={handleChange}
          />
        </div>
        <div className="col">
        <div class="p-2"><FormLabel>
      Github Repo Name :
     
      </FormLabel>
</div>
          <input
          disabled
          readOnly
            type="text"
            className="form-control"
            name="repoName"
            value={formData.repoName}
            placeholder="Enter Repository Name"
            onChange={handleChange}
          />
        </div>
        <div className="col-auto align-self-end">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </div>
     
    </form>
  );
};

export default Search;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Staff from './Staff.js';

const EmployeeList = () => {
  // Dummy data for employees
  const employees = [
    { id: 1, name: 'John Doe', contact: '1234567890', designation: 'Manager' },
    { id: 2, name: 'Jane Smith', contact: '9876543210', designation: 'Developer' },
    { id: 3, name: 'Michael Johnson', contact: '4567891230', designation: 'Designer' },
    { id: 4, name: 'Emily Brown', contact: '7891234560', designation: 'Engineer' },
    { id: 5, name: 'William Davis', contact: '3216549870', designation: 'Team Lead' },
    { id: 6, name: 'Sophia Wilson', contact: '6549873210', designation: 'Analyst' },
    { id: 7, name: 'Matthew Martinez', contact: '9873216540', designation: 'Consultant' },
    { id: 8, name: 'Olivia Anderson', contact: '1593572460', designation: 'Supervisor' },
    { id: 9, name: 'James Taylor', contact: '7539514860', designation: 'Coordinator' },
    { id: 10, name: 'Emma Clark', contact: '8523697410', designation: 'Administrator' },
    // Add more employees as needed
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.contact.includes(searchTerm)
  );

  const columnHeaderStyle = {
    backgroundColor: 'blue',
    color: 'white', // Optional: Change text color to white
  };

  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete employee with ID: ${id}`);
  };

  return (
    <div>
<Staff/>
      <div className="container mt-5">
        <div className="card border-primary">
          <div className="card-header bg-primary">
            <h5 className="mb-0">Employee List</h5>
            <li>
              <Link to="/StaffAdd" className="btn btn-success" style={{ float: 'right', marginTop: '-5px', width: '70px' }} >
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </li>
          </div>
          <div className="card-body">
            <div className="row mb-3 justify-content-between">
              <div className="col-sm-auto">
                <select className="form-select" value={entriesPerPage} onChange={handleEntriesChange}>
                  <option value="5">5 entries</option>
                  <option value="10">10 entries</option>
                  <option value="20">20 entries</option>
                </select>
              </div>
              <div className="col-sm-auto">
                <input type="text" className="form-control search-input" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={columnHeaderStyle}>ID</th>
                    <th style={columnHeaderStyle}>Name</th>
                    <th style={columnHeaderStyle}>Contact No</th>
                    <th style={columnHeaderStyle}>Designation</th>
                    <th style={columnHeaderStyle}>Edit</th>
                    <th style={columnHeaderStyle}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.slice(0, entriesPerPage).map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.contact}</td>
                      <td>{employee.designation}</td>
                      <td>
                        <button onClick={() => handleEdit(employee.id)} className="btn btn-primary btn-sm">Edit</button>
                      </td>
                      <td>
                        <button onClick={() => handleDelete(employee.id)} className="btn btn-danger btn-sm">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;

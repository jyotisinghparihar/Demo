import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Salary = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Amit Kumar', contact: '9876543210', designation: 'Teacher', salaryfrom: '01/04/2024', salaryto: '30/04/2024', salary: '', isGenerated: false },
    { id: 2, name: 'Bhavna Singh', contact: '9876543211', designation: 'Teacher', salaryfrom: '01/04/2024', salaryto: '30/04/2024', salary: '', isGenerated: false },
    { id: 3, name: 'Chetan Bhagat', contact: '9876543212', designation: 'Teacher', salaryfrom: '01/04/2024', salaryto: '30/04/2024', salary: '', isGenerated: false },
    { id: 4, name: 'Divya Sharma', contact: '9876543213', designation: 'Teacher', salaryfrom: '01/04/2024', salaryto: '30/04/2024', salary: '', isGenerated: false },
  ]);

  const generateRandomSalary = (id) => {
    // You can add any necessary logic here, such as updating state or sending data to the new page
  };

  const handleDetailClick = (employee) => {
    console.log("Details: ", employee);
    // Logic for displaying details
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    margin: '2rem 0',
    backgroundColor: 'white',
    color: 'white',
  };

  const thStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    backgroundColor: 'blue',
    color: 'black',
  };

  const tdStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    backgroundColor: 'white',
    color: 'black',
  };

  return (
    <div>
      <h2 style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>Employee Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Employee Name</th>
            <th style={thStyle}>Contact No</th>
            <th style={thStyle}>Designation</th>
            <th style={thStyle}>Salary From</th>
            <th style={thStyle}>Salary To</th>
            <th style={thStyle}>Salary Amount</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{employee.name}</td>
              <td style={tdStyle}>{employee.contact}</td>
              <td style={tdStyle}>{employee.designation}</td>
              <td style={tdStyle}>{employee.salaryfrom}</td>
              <td style={tdStyle}>{employee.salaryto}</td>
              <td style={tdStyle}>
                {employee.isGenerated ? employee.salary : 
                  <Link to="/GenerateSalary">
                    <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => generateRandomSalary(employee.id)}>Generate Salary</button>
                  </Link>
                }
              </td>
              <td style={tdStyle}>
                <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleDetailClick(employee)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Salary;
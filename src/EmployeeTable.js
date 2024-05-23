import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import FeeStructure from './FeeStructure.js';

const EmployeeTable = () => {

  const [employees, setEmployees] = useState([
    { id: 1, name: 'Amit Kumar', contact: '9876543210', designation: 'Teacher', salary: '', details: 'Some details about Amit Kumar' },
    { id: 2, name: 'Bhavna Singh', contact: '9876543211', designation: 'Teacher', salary: '', details: 'Some details about Bhavna Singh' },
    { id: 3, name: 'Chetan Bhagat', contact: '9876543212', designation: 'Teacher', salary: '', details: 'Some details about Chetan Bhagat' },
    { id: 4, name: 'Divya Sharma', contact: '9876543213', designation: 'Teacher', salary: '', details: 'Some details about Divya Sharma' },
  ]);

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    margin: '2rem 0',
    backgroundColor: 'grey',
    color: 'white',
  };

  const thStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    backgroundColor: 'blue',
    color: 'white',
  };

  const tdStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    backgroundColor: 'white',
    color: 'black',
  };

  const generateRandomSalary = (id) => {
    const updatedEmployees = employees.map(employee => {
      if (employee.id === id) {
        const randomSalary = Math.floor(Math.random() * 50000) + 50000; // Generating random salary between 50000 and 100000
        return { ...employee, salary: randomSalary.toString() };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <FeeStructure/>
      <h2 style={{ backgroundColor: '#5DADE2', color: 'white', padding: '10px' }}>Employee Table</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Employee Name</th>
            <th style={thStyle}>Contact No</th>
            <th style={thStyle}>Designation</th>
            <th style={thStyle}>Salary</th>
            <th style={thStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{employee.name}</td>
              <td style={tdStyle}>{employee.contact}</td>
              <td style={tdStyle}>{employee.designation}</td>
              <td style={tdStyle}>
                {employee.salary ? employee.salary : (
                  <button onClick={() => generateRandomSalary(employee.id)}>Generate Salary</button>
                )}
              </td>
              <td style={tdStyle}>
  {/* Use Link component to navigate */}
  <Link to="/EmployeeTable2" style={{ fontFamily: "Arial, sans-serif", fontSize: "1.0rem", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textDecoration: 'none', color: 'inherit' }}>Details</Link>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

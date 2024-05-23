import React, { useState, useEffect } from 'react';
import FeeStructure from './FeeStructure.js';

const dummyData = [
  { month: 'january', admissionFee: 1500, tuitionFees: 1000, examinationFees: 1500, AnnualFee: 200, TransportationFees: 500, LibreryFees: 200, Total: 3000, status: 'Paid' },
 
  // Add more student data as needed
];
 
const Fessschool = () => {
  const [students, setStudents] = useState([]);
  const [loggedInStudent, setLoggedInStudent] = useState({ name: 'Ram Sharma', registrationID: '123456' });
 
  useEffect(() => {
    // Set all students as filtered students
    setStudents(dummyData);
  }, []);
 
  return (
    <div style={{}}>
      <FeeStructure/>
      <div style={{ backgroundColor: '#5DADE2', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
        <h1 style={{ color: 'white' }}>Fees Structure</h1>
      </div>
      {loggedInStudent && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2>{loggedInStudent.name}</h2>
          <p><strong>Registration ID:</strong> {loggedInStudent.registrationID}</p>
        </div>
      )}
      <div style={{ overflowX: 'auto', margin: '20px' }}>
        <table style={{ borderCollapse: 'collapse', width: '90%', margin: 'auto' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Month</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Admission Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Tuition Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Examination Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Annual Fee</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Transportation Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Library Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Total</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Status</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Print</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.month}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.admissionFee}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.tuitionFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.examinationFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.AnnualFee}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.TransportationFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.LibreryFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.Total}</td>
                <td style={{ border: '1px solid black', padding: '10px', backgroundColor: student.status === 'Paid' ? 'green' : 'red', color: 'white', textAlign: 'center' }}>{student.status}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.Print}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 

export default Fessschool;
 
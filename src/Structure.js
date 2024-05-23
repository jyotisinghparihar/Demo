
import React, { useState, useEffect } from 'react';
import FeeStructure from './FeeStructure.js';

const dummyData = [
  { id: 101, class: 'class1', month: 'january', name: 'Richa', admissionFees: 1000, tuitionFees: 1000, examinationFees: 500, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 4000, status: 'Paid' },
  { id: 102, class: 'class1', month: 'february', name: 'Payal', admissionFees: 1000, tuitionFees:'' , examinationFees: 500, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 4000, status: 'Unpaid' },
  { id: 201, class: 'class2', month: 'february', name: 'Ram', admissionFees: 1500, tuitionFees: 1500, examinationFees: 500, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 5000, status: 'Paid' },
  { id: 202, class: 'class2', month: 'january', name: 'Aditi', admissionFees: 1500, tuitionFees: '', examinationFees: 500, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 5000, status: 'Unpaid' },
  { id: 301, class: 'class3', month: 'march', name: 'Khushi', admissionFees: 2000, tuitionFees: 2000, examinationFees: 1000, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 65000, status: 'Paid' },       
  { id: 302, class: 'class3', month: 'April', name: 'Yash', admissionFees: 2000, tuitionFees: 2000, examinationFees: 1000, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 65000, status: 'Paid' },
  { id: 401, class: 'class4', month: 'July', name: 'Rohan', admissionFees: 2200, tuitionFees: '', examinationFees: 1000, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 6900, status: 'unpaid' },
  { id: 402, class: 'class4', month: 'August', name: 'Riya', admissionFees: 2200, tuitionFees: 2200, examinationFees: 1000, annualFees: 500, transportationFees: 500, libraryFees: 500, total: 6900, status: 'Paid' },
  // Add more student data as needed
];
 
const Structure = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [students, setStudents] = useState([]);
 
 
  useEffect(() => {
    // Filter students based on selected class and month
    const filteredStudents = dummyData.filter(student => {
      if (selectedClass && selectedMonth) {
        return student.class === selectedClass && student.month === selectedMonth;
      } else if (selectedClass) {
        return student.class === selectedClass;
      } else if (selectedMonth) {
        return student.month === selectedMonth;
      }
      return true; // If neither class nor month is selected, show all students
    });
    setStudents(filteredStudents);
  }, [selectedClass, selectedMonth]);
 
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
 
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };
 
  return (
    <div>
      <FeeStructure/>
      <div style={{ backgroundColor: '#5DADE2', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
        <h1 style={{ color: 'white' }}>Fees Details</h1>
      </div>
     
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
       
        </div>
     
      <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <label htmlFor="classSelect" style={{ fontWeight: 'bold', marginRight: '10px' }}>Class:</label>
          <select id="classSelect" value={selectedClass} onChange={handleClassChange} style={{ fontWeight: 'bold', marginRight: '20px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">All</option>
            <option value="class1">1</option>
            <option value="class2">2</option>
            <option value="class3">3</option>
            <option value="class4">4</option>
            <option value="class5">5</option>
            <option value="class6">6</option>
            <option value="class7">7</option>
            <option value="class8">8</option>
            <option value="class9">9</option>
            <option value="class10">10</option>
            <option value="class11">11</option>
            <option value="class12">12</option>
          </select>
        </div>
        <div>
          <label htmlFor="monthSelect" style={{ fontWeight: 'bold', marginRight: '10px' }}>Select Month:</label>
          <select id="monthSelect" value={selectedMonth} onChange={handleMonthChange} style={{ fontWeight: 'bold', marginRight: '20px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="">All</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
      </div>
      <div style={{ overflowX: 'auto', margin: '20px' }}>
        <table style={{ borderCollapse: 'collapse', width: '90%', margin: 'auto' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>StudentID</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Admission Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Tuition Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Examination Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Annual Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Transportation Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Library Fees</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Total</th>
              <th style={{ border: '1px solid black', padding: '10px', backgroundColor: '#f2f2f2' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.id}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.name}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.admissionFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.tuitionFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.examinationFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.annualFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.transportationFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.libraryFees}</td>
                <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{student.total}</td>
                <td style={{ border: '1px solid black', padding: '10px', backgroundColor: student.status === 'Paid' ? 'green' : 'red', color: 'white', textAlign: 'center' }}>{student.status}</td>        
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default Structure;
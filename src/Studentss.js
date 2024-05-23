
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Attendance from './Attendance.js';

// MatrixTable component to display attendance data in a table
const MatrixTable = ({ filteredData }) => {
  // Calculate total days, present, absent, leave, and attendance percentage
  const presentCount = filteredData.filter((record) => record.present === 'Yes').length;
  const absentCount = filteredData.filter((record) => record.absent === 'Yes').length;
  const leaveCount = filteredData.filter((record) => record.leave === 'Yes').length;
  const totalDays = presentCount + absentCount + leaveCount;
  const attendancePercentage = ((presentCount / totalDays) * 100).toFixed(2);

  return (
    <div style={{ width: '100%', marginLeft: 'auto' }}>
      <table border="1" style={{ width: '100%' }}>
        {/* Table header */}
        <thead>
          <tr>
            <th style={{ fontWeight: 'bold' }}>Class</th>
            <th style={{ fontWeight: 'bold' }}>Section</th>
            <th style={{ fontWeight: 'bold' }}>Month</th>
            <th style={{ fontWeight: 'bold' }}>Present Days</th>
            <th style={{ fontWeight: 'bold' }}>Absent Days</th>
            <th style={{ fontWeight: 'bold' }}>Leave Days</th>
            <th style={{ fontWeight: 'bold' }}>Total Days</th>
            <th style={{ fontWeight: 'bold' }}>Attendance %</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {/* Mapping through attendance data to display rows */}
          {filteredData.map((record, idx) => (
            <tr key={idx}>
              <td>{record.class}</td>
              <td>{record.section}</td>
              <td>{record.month}</td>
              <td>{record.present === 'Yes' ? 1 : 0}</td>
              <td>{record.absent === 'Yes' ? 1 : 0}</td>
              <td>{record.leave === 'Yes' ? 1 : 0}</td>
              <td>{totalDays}</td>
              <td>{attendancePercentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Navbar component
const Studentss = () => {
  // Sample attendance data
  const attendanceData = [
    { class: '9', section: 'A', month: 'March', present: 'Yes', absent: 'No', leave: 'No' },
    { class: '9', section: 'B', month: 'April', present: 'Yes', absent: 'No', leave: 'No' },
    { class: '10', section: 'A', month: 'March', present: 'Yes', absent: 'No', leave: 'No' },
    { class: '10', section: 'B', month: 'April', present: 'Yes', absent: 'No', leave: 'No' }
  ];

  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the attendance data based on selected filters
  const filteredData = attendanceData.filter((record) =>
    record.class.includes(selectedClass) &&
    record.section.includes(selectedSection) &&
    record.month.includes(selectedMonth)
  );

  return (
    <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white' }}>
                  <Attendance/>

      {/* Navbar header */}
      <div style={{ color: 'black', textAlign: 'left', backgroundColor: '#5DADE2', height: '10vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0 }}>Student</h1>
        </div>
        <div>
          <a className="nav-link" href="">
            <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginTop: '1px' }} />
          </a>
        </div>
      </div>
      {/* Sub navigation links */}
      {/* Home and Attendance links removed */}
      <hr style={{ width: '100%', height: '2px', backgroundColor: 'black', margin: '10px 0' }} />

      {/* Filters */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ marginRight: '10px' }}>
          <label style={{ fontWeight: '600' }}>Class:</label>
          <select value={selectedClass} onChange={handleClassChange} className="form-control">
            <option value="">All</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label style={{ fontWeight: '600' }}>Section:</label>
          <select value={selectedSection} onChange={handleSectionChange} className="form-control">
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>
        <div style={{ marginRight: '10px' }}>
          <label style={{ fontWeight: '600' }}>Month:</label>
          <select value={selectedMonth} onChange={handleMonthChange} className="form-control">
            <option value="">All</option>
            <option value="March">March</option>
            <option value="April">April</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="form-control"
          style={{ width: '100px' }}
        />
      </div>

      {/* Attendance table */}
      <MatrixTable filteredData={filteredData} />
    </div>
  );
};

export default Studentss;

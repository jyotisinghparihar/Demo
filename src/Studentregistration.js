import React, { useState, useEffect } from 'react';

const Studentregistration = ({ title }) => {
  const [mediumOptions] = useState(['English', 'Hindi']);
  const [sessionOptions] = useState(['2024', '2025']);
  const [typingOptions] = useState(['English', 'Hindi']);
  const [classList] = useState(['All', 1, 2, 3, 4, 5,6, 7, 8,9, 10, 11,12]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedMedium, setSelectedMedium] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedTyping, setSelectedTyping] = useState('');

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #6b7e99;
        padding: 10px;
      }

      input[type="text"], .header-input, .student-data, button {
        background-color: #009CE0;
      }

      input[type="text"]::placeholder, .header-input, .student-data, button {
        color: white;
      }

      .header-input {
        border: 2px solid #ccc;
        padding: 5px;
        background-color: #f9f9f9;
        border-radius: 3px;
        box-shadow: inset 0 1px 2px rgba(234, 218, 218, 0.1);
        width: calc(120% - 25px);
        text-align: center;
        margin-right: 15px;
      }

      @media (max-width: 768px) {
        .Data-Exploration {
          width: 90%;
        }
      }

      .student-management-link {
        background-color: transparent;
      }

      .bold-text {
        font-weight: bold;
      }

      .search-navbar {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      .student-management-links {
        display: flex;
      }

      .student-management-link {
        margin-left: 10px;
      }

      .student-management-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #6b7e99;
        padding: 10px;
      }

      .right-navbar {
        margin-left: auto;
      }

      .filter-options {
        display: flex;
      }

      .filter-dropdown {
        margin-right: 10px;
      }
      .student-management-links {
        display: flex;
      }
      
      .student-management-link {
        margin-left: 10px; /* Add spacing between links */
      }
      
.student-management-links {
  display: flex;
}

.student-management-link {
  margin-left: 10px; /* Add spacing between links */
}

.bold-text {
  font-weight: bold;
}

  /* Add any additional styling as needed */
  /* Add your existing CSS styles */
  .student-management-navbar {
    display: flex;
    justify-content: space-between; /* Align items to the left and right */
    align-items: center; /* Align items vertically */
  }
     
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const dummyStudents = [
    { id: 1, name: "Rajesh Kumar", fathersName: "Ramesh Kumar", class: 10, contactNo: "1234567890", registrationDate: "2024-05-14", remark: "Good", makeAdmission: false, print: false },
    { id: 2, name: "Amit Singh", fathersName: "Suraj Singh", class: 8, contactNo: "9876543210", registrationDate: "2024-05-15", remark: "Excellent", makeAdmission: true, print: true },
    { id: 3, name: "Sita Sharma", fathersName: "Mohan Sharma", class: 9, contactNo: "5555555555", registrationDate: "2024-05-16", remark: "Very good", makeAdmission: true, print: false },
    { id: 4, name: "Rahul Verma", fathersName: "Anil Verma", class: 11, contactNo: "9999999999", registrationDate: "2024-05-17", remark: "Satisfactory", makeAdmission: true, print: true },
    { id: 5, name: "Priya Singh", fathersName: "Vikram Singh", class: 7, contactNo: "1111111111", registrationDate: "2024-05-18", remark: "Average", makeAdmission: false, print: true },
    { id: 6, name: "Anjali Gupta", fathersName: "Rajesh Gupta", class: 12, contactNo: "2222222222", registrationDate: "2024-05-19", remark: "Excellent", makeAdmission: true, print: false },
    { id: 7, name: "Vikash Yadav", fathersName: "Satish Yadav", class: 10, contactNo: "3333333333", registrationDate: "2024-05-20", remark: "Good", makeAdmission: false, print: true },
    { id: 8, name: "Sneha Patel", fathersName: "Manoj Patel", class: 9, contactNo: "4444444444", registrationDate: "2024-05-21", remark: "Excellent", makeAdmission: true, print: false },
    { id: 9, name: "Arjun Thakur", fathersName: "Ravi Thakur", class: 8, contactNo: "6666666666", registrationDate: "2024-05-22", remark: "Good", makeAdmission: false, print: true },
    { id: 10, name: "Meera Desai", fathersName: "Prakash Desai", class: 11, contactNo: "7777777777", registrationDate: "2024-05-23", remark: "Excellent", makeAdmission: true, print: true },
    { id: 11, name: "Deepak Choudhary", fathersName: "Lalit Choudhary", class: 9, contactNo: "8888888888", registrationDate: "2024-05-24", remark: "Average", makeAdmission: false, print: false },
    { id: 12, name: "Neha Agarwal", fathersName: "Ashok Agarwal", class: 12, contactNo: "1010101010", registrationDate: "2024-05-25", remark: "Good", makeAdmission: true, print: true },
    { id: 13, name: "Kiran Joshi", fathersName: "Suresh Joshi", class: 8, contactNo: "1212121212", registrationDate: "2024-05-26", remark: "Excellent", makeAdmission: true, print: false },
    { id: 14, name: "Ravi Pandey", fathersName: "Vijay Pandey", class: 10, contactNo: "1313131313", registrationDate: "2024-05-27", remark: "Very good", makeAdmission: false, print: true },
    { id: 15, name: "Rohit Mehta", fathersName: "Sanjay Mehta", class: 11, contactNo: "1414141414", registrationDate: "2024-05-28", remark: "Excellent", makeAdmission: true, print: true }
  ];

  const handleDelete = (id) => {
    console.log(`Delete student with ID ${id}`);
  };

  const handleMakeAdmission = (id) => {
    console.log(`Navigate to admission page for student with ID ${id}`);
  };

  const handlePrint = (id) => {
    console.log(`Print details of student with ID ${id}`);
  };

  return (
    <div>
      <div className="header-container">
        <nav className="right-navbar">
          <div className="filter-options">
            <div className="filter-dropdown">
              <label htmlFor="medium">Medium:</label>
              <select
                id="medium"
                value={selectedMedium}
                onChange={(e) => setSelectedMedium(e.target.value)}
                className="filter-select"
              >
                {mediumOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="filter-dropdown">
              <label htmlFor="session">Session:</label>
              <select
                id="session"
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value)}
                className="filter-select"
              >
                {sessionOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="filter-dropdown">
              <label htmlFor="typing">Typing:</label>
              <select
                id="typing"
                value={selectedTyping}
                onChange={(e) => setSelectedTyping(e.target.value)}
                className="filter-select"
              >
                {typingOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </div>
      {/* <hr style={{ width: '100%', height: '2px', backgroundColor: 'white', margin: '10px 0' }} /> */}
       <nav className="student-management-navbar">
         {/* <div className="student-management-title">Student Management</div> */}
         <div className="student-management-links">
          {/* <div className="student-management-link">
            🏠 Home &gt;
          </div> */}
          {/* <div className="student-management-link">
            🎓 Student &gt;
          </div> */}
          <div className="student-management-link">Registration List
          </div>
        </div>
      </nav>
      <hr style={{ width: '100%', height: '2px', backgroundColor: '#3498DB', margin: '10px 0' }} />
      <nav className="Registration-List-navbar">
        <div className="Registration-List-box">
          {/* <div className="Registration-List-title">Registration List</div> */}
          {/* <hr style={{ width: '100%', height: '0px', backgroundColor: 'black', margin: '10px 0' }} /> */}
          <div className="class-dropdown">
            <label htmlFor="class" className="bold-text">Class:</label>
            <select
              id="class"
              className="filter-select"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {classList.map((classNumber, index) => (
                <option key={index} value={classNumber}>{classNumber}</option>
              ))}
            </select>
          </div>
        </div>
      </nav>
      <hr style={{ width: '100%', height: '1px', backgroundColor: '#BFC9CA', margin: '10px 0' }} />
      <nav className="search-navbar">
        <input
          type="text"
          placeholder="Search..."
          className="filter-input"
        />
      </nav>
      <hr style={{ width: '100%', height: '1px', backgroundColor: 'black', margin: '10px 0' }} />
      <div className="student-list-header" style={{ display: 'flex', gap: '10px', fontWeight: 'bold' }}>
        <div style={{ width: '8%' }}>
          <input type="text" value="Student ID" readOnly className="header-input" />
        </div>
        <div style={{ width: '15%' }}>
          <input type="text" value="Student Name" readOnly className="header-input" />
        </div>
        <div style={{ width: '15%' }}>
          <input type="text" value="Father's Name" readOnly className="header-input" />
        </div>
        <div style={{ width: '8%' }}>
          <input type="text" value="Class" readOnly className="header-input" />
        </div>
        <div style={{ width: '10%' }}>
          <input type="text" value="Contact No" readOnly className="header-input" />
        </div>
        <div style={{ width: '12%' }}>
          <input type="text" value="Registration Date" readOnly className="header-input" />
        </div>
        <div style={{ width: '10%' }}>
          <input type="text" value="Remark" readOnly className="header-input" />
        </div>
        <div style={{ width: '8%' }}>
          <input type="text" value="Make Admission" readOnly className="header-input" />
        </div>
        <div style={{ width: '7%' }}>
          <input type="text" value="Print" readOnly className="header-input" />
        </div>
        <div style={{ width: '7%' }}>
          <input type="text" value="Delete" readOnly className="header-input" />
        </div>
      </div>
      {dummyStudents.map((student) => (
        <div key={student.id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ width: '8%' }}>{student.id}</div>
          <div style={{ width: '15%' }}>{student.name}</div>
          <div style={{ width: '15%' }}>{student.fathersName}</div>
          <div style={{ width: '8%' }}>{student.class}</div>
          <div style={{ width: '10%' }}>{student.contactNo}</div>
          <div style={{ width: '12%' }}>{student.registrationDate}</div>
          <div style={{ width: '10%' }}>{student.remark}</div>
          <div style={{ width: '8%' }}>
            <button onClick={() => handleMakeAdmission(student.id)}>Make Admission</button>
          </div>
          <div style={{ width: '7%' }}>
            <button onClick={() => handlePrint(student.id)}>Print</button>
          </div>
          <div style={{ width: '7%' }}>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        </div>
      ))}
      <hr style={{ width: '100%', height: '1px', backgroundColor: 'black', margin: '10px 0' }} />
    </div>
  );
};


export default Studentregistration;
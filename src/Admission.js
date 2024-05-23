import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Admission = ({ title }) => { // Rename the declared component
  const [attendance, setAttendance] = useState({
    RegistrationList: '',
    AdmissionList: '',
    ProfileUpdate: '',
    PhotoUpdate: '',
    StudentIDGenerate: '',
    RollNoGenerate: '',
    MappingDataUpdate: '',
  });
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAttendanceChange = (e) => {
    const { name, value } = e.target;
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [name]: value,
    }));
  };
  
  const [mediumOptions, setMediumOptions] = useState(['English', 'Hindi']);
  const [sessionOptions, setSessionOptions] = useState(['2024', '2025']);
  const [typingOptions, setTypingOptions] = useState(['English', 'Hindi']);
  const [classList, setClassList] = useState(['All', 1, 2, 3]); // Adding 'All' as the first item in the array
  const [selectedClass, setSelectedClass] = useState('');
  const [religionOptions, setReligionOptions] = useState(['Hindu', 'Muslim', 'Christian', 'Sikh', 'Other']); // Options for religion dropdown
  const [categoryOptions, setCategoryOptions] = useState(['General', 'OBC', 'SC', 'ST', 'Other']); // Options for category dropdown

  return (
    <div>
 
      <div className="header-container">
        <nav className="left-navbar">
          <AiOutlineArrowLeft onClick={() => window.history.back()} />
        </nav>
        <nav className="right-navbar">
          <div className="filter-options">
            {/* your existing filter options */}
          </div>
        </nav>
      </div>
      <div className="admission-title">{title}</div>
      <div className="header-container">
        <nav className="right-navbar">
          <div className="filter-options">
            <div className="filter-dropdown">
              <label htmlFor="medium">Medium:</label>
              <select
                id="medium"
                value={mediumOptions}
                onChange={(e) => setMediumOptions(e.target.value)}
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
                value={sessionOptions}
                onChange={(e) => setSessionOptions(e.target.value)}
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
                value={typingOptions}
                onChange={(e) => setTypingOptions(e.target.value)}
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
      <nav className="student-management-navbar">
        <div className="student-management-title">Student Management</div>
        <div className="student-management-links">
          <div className="student-management-link">🏠 Home &gt;</div>
          <div className="student-management-link">🎓 Student &gt;</div>
          <div className="student-management-link">🎓 Student Admission List &gt;</div>
          <div className="student-management-link"> Student Admission</div>          
        </div>
      </nav>
      <hr style={{ width: '100%', height: '1px', backgroundColor: 'darkblue', margin: '10px 0' }} />
      <div>
      <div>
      <nav style={{ fontWeight: 'bold', color: 'red' }}>Personal Details:</nav>
<div className="horizontal-inputs">
  <div className="input-row">
    <div className="box">
      <label htmlFor="Software ID">Software ID</label>
      <input type="text" id="Software ID" />
    </div>
    <div className="box">
      <label htmlFor="dob">Student Name</label>
      <input type="text" id="dob" />
    </div>
    <div className="box">
      <label htmlFor="fatherName">Mother's Name</label>
      <input type="text" id="fatherName" />
    </div>
    <div className="box">
      <label htmlFor="motherName">Father's Name</label>
      <input type="text" id="motherName" />
    </div>
    <div className="box">
      <label htmlFor="gender">Gender</label>
      <div className="gender-radio">
        <input type="radio" id="male" name="gender" value="male" onChange={(e) => handleAttendanceChange(e)} />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" onChange={(e) => handleAttendanceChange(e)} />
        <label htmlFor="female">Female</label>
      </div>
    </div>
    
  </div>
  <div className="input-row">
    <div className="box">
      <label htmlFor="religion">Religion</label>
      <select
        id="religion"
        onChange={(e) => handleAttendanceChange(e)}
        className="filter-select"
      >
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="box">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        onChange={(e) => handleAttendanceChange(e)}
        className="filter-select"
      >
        <option value="General">General</option>
        <option value="OBC">OBC</option>
        <option value="SC">SC</option>
        <option value="ST">ST</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="box">
      <label htmlFor="dob">Add Rf ID Number</label>
      <input type="text" id="dob" />
    </div>
    <div className="box">
      <label htmlFor="dob">Date Of Birth</label>
      <input type="text" id="dob" />
      
    </div>
    <div className="box">
      <label htmlFor="dobWord">Date Of Birth (word)</label>
      <input type="text" id="dobWord" />
    </div>
  </div>
  <div className="input-row" style={{ display: 'flex', justifyContent: 'center' }}>
  <button onClick={() => console.log("Save clicked")} style={{ color: 'white' }}>Save $ Changes </button>
  </div>
</div>
</div>
</div>
<nav style={{ fontWeight: 'bold', color: 'red' }}>Document Details:</nav>
<div className="horizontal-inputs">
  <div className="input-row">
    <div className="box">
      <label htmlFor="studentAadhar"> Aadhar Card(Student)</label>
      <input type="text" id="studentAadhar" />
    </div>
    <div className="box">
      <label htmlFor="fatherAadhar"> Aadhar Card(Father)</label>
      <input type="text" id="fatherAadhar" />
    </div>
    <div className="box">
      <label htmlFor="familyID">Family ID</label>
      <input type="text" id="familyID" />
    </div>
    <div className="box">
      <label htmlFor="familyID">SSSM ID NO</label>
      <input type="text" id="familyID" />
    </div>
  </div>
  <div className="input-row">
    <div className="box">
      <label htmlFor="studentEnrollment">Child ID</label>
      <input type="text" id="studentEnrollment" />
    </div>
    <div className="box">
      <label htmlFor="fatherAadhar">Registration No</label>
      <input type="text" id="fatherAadhar" />
    </div>
    <div className="box">
      <label htmlFor="familyID">Enrollment No</label>
      <input type="text" id="familyID" />
    </div>
    <div className="box">
      <label htmlFor="bankName">Bank Name (Father)</label>
      <input type="text" id="bankName" />
    </div>
  </div>
  <div className="input-row">
    <div className="box">
      <label htmlFor="accountNo">Account No (Father)</label>
      <input type="text" id="accountNo" />
    </div>
    <div className="box">
      <label htmlFor="ifscCode">Bank IFSC Code (Father)</label>
      <input type="text" id="ifscCode" />
    </div>
    <div className="box">
      <label htmlFor="bankName">Bank Name (Student)</label>
      <input type="text" id="bankName" />
    </div>
    <div className="box">
      <label htmlFor="accountNo">Account No (Student)</label>
      <input type="text" id="accountNo" />
    </div>
  </div>
  <div className="input-row">
    <div className="box">
      <label htmlFor="ifscCode">Bank IFSC Code (Student)</label>
      <input type="text" id="ifscCode" />
    </div>
  </div>
  <div className="input-row" style={{ display: 'flex', justifyContent: 'center' }}>
  <button onClick={() => console.log("Save clicked")} style={{ color: 'white' }}>Save $ Changes </button>
  </div>
</div>
<div>
  <nav style={{ fontWeight: 'bold', color: 'red' }}>Admission Details:</nav>
  <div className="horizontal-inputs">
    <div className="input-row">
      <div className="box">
        <label htmlFor="admissionType">Admission Type</label>
        <select id="admissionType" className="filter-select">
          <option value="Type1">Type 1</option>
          <option value="Type2">Type 2</option>
          <option value="Type3">Type 3</option>
        </select>
      </div>
      <div className="box">
        <label htmlFor="admissionScheme">Admission Scheme</label>
        <select id="admissionScheme" className="filter-select">
          <option value="Scheme1">Scheme 1</option>
          <option value="Scheme2">Scheme 2</option>
          <option value="Scheme3">Scheme 3</option>
        </select>
      </div>
      <div className="box">
        <label htmlFor="studentStatus">Student old or new</label>
        <select id="studentStatus" className="filter-select">
          <option value="old">Old</option>
          <option value="new">New</option>
        </select>
      </div>
      <div className="box">
        <label htmlFor="medium">Medium</label>
        <select id="medium" className="filter-select">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
    <div className="input-row">
      <label htmlFor="studentEnrollment">Date Of Admission</label>
      <input type="text" id="studentEnrollment" />
      <label htmlFor="fatherAadhar">Admission No</label>
      <input type="text" id="fatherAadhar" />
      <label htmlFor="familyID">Scholar No</label>
      <input type="text" id="familyID" />
      <label htmlFor="bankName">Previous Class</label>
      <select id="previousClass" className="filter-select">
        <option value="Class1">Class 1</option>
        <option value="Class2">Class 2</option>
        <option value="Class3">Class 3</option>
      </select>
    </div>
    <div className="input-row">
      <label htmlFor="accountNo">Previous School Name</label>
      <input type="text" id="accountNo" />
      <label htmlFor="ifscCode">Class</label>
      <select id="currentClass" className="filter-select">
        <option value="Class1">Class 1</option>
        <option value="Class2">Class 2</option>
        <option value="Class3">Class 3</option>
      </select>
      <label htmlFor="bankName">Bank Name (Student)</label>
      <input type="text" id="bankName" />
      <label htmlFor="accountNo">Section</label>
      <select id="section" className="filter-select">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
    <div className="input-row">
      <label htmlFor="ifscCode">Fee category</label>
      <select id="feeCategory" className="filter-select">
        <option value="Category1">Category 1</option>
        <option value="Category2">Category 2</option>
        <option value="Category3">Category 3</option>
      </select>
      <label htmlFor="bankName">Bus</label>
      <select id="bus" className="filter-select">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label htmlFor="accountNo">Hostel</label>
      <select id="hostel" className="filter-select">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label htmlFor="accountNo">Library</label>
      <select id="library" className="filter-select">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
    <div className="input-row" style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => console.log("Save clicked")} style={{ color: 'white', backgroundColor: 'white' }}>Save & Changes</button>
    </div>
  </div>

  <nav style={{ fontWeight: 'bold', color: 'red' }}>Family Contacts:</nav>
  <div className="horizontal-inputs">
    <div className="input-row">
      <label htmlFor="studentAadhar"> Father Contact No </label>
      <input type="text" id="studentAadhar" />
      <label htmlFor="fatherAadhar"> Father Email Id</label>
      <input type="text" id="fatherAadhar" />
      <label htmlFor="familyID">Mother Contact No</label>
      <input type="text" id="familyID" />
    </div>
    <div className="input-row">
      <label htmlFor="familyID">Mother Email Id</label>
      <input type="text" id="familyID" />
      <label htmlFor="studentEnrollment">Father Occupation</label>
      <input type="text" id="studentEnrollment" />
      <label htmlFor="fatherAadhar">Mother Occupation</label>
      <input type="text" id="fatherAadhar" />
    </div>
    <div className="input-row">
      <label htmlFor="familyID">Student Contact No</label>
      <input type="text" id="familyID" />
      <label htmlFor="bankName">Sms Facility </label>
      <input type="text" id="bankName" />
      <label htmlFor="accountNo">Student Conveyance</label>
      <input type="text" id="accountNo" />
    </div>
    <div className="input-row" style={{ display: 'flex', justifyContent: 'center' }}>
    <button onClick={() => console.log("Save clicked")} style={{ color: 'white' }}>Save $ Changes </button>
    </div>
  </div>
</div>
<div>
  <nav style={{ fontWeight: 'bold', color: 'red' }}>Address Details:</nav>
  <div className="horizontal-inputs">
    <div className="input-row">
      <div>
        <label htmlFor="studentAadhar">Student Address</label>
        <input type="text" id="studentAadhar" />
      </div>
      <div>
        <label htmlFor="fatherAadhar">Village/City</label>
        <input type="text" id="fatherAadhar" />
      </div>
      <div>
        <label htmlFor="familyID">Block</label>
        <input type="text" id="familyID" />
      </div>
      <div>
        <label htmlFor="familyID">District</label>
        <input type="text" id="familyID" />
      </div>
      <div>
        <label htmlFor="studentEnrollment">State</label>
        <input type="text" id="studentEnrollment" />
      </div>
    </div>
    <div className="input-row">
      <div>
        <label htmlFor="fatherAadhar">Pincode</label>
        <input type="text" id="fatherAadhar" />
      </div>
      <div>
        <label htmlFor="familyID">Landmark</label>
        <input type="text" id="familyID" />
      </div>
      <div>
        <label htmlFor="bankName">Student Address Permanent</label>
        <input type="text" id="bankName" />
      </div>
      <div>
        <label htmlFor="accountNo">Student Conveyance</label>
        <input type="text" id="accountNo" />
      </div>
    </div>
    <div className="input-row" style={{ display: 'flex', justifyContent: 'center' }}>
    <button onClick={() => console.log("Save clicked")} style={{ color: 'white' }}>Save $ Changes </button>
</div>
  </div>
</div>
    </div>   
  );
};

export default Admission;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Staff from './Staff.js';

// MatrixTable component definition
const MatrixTable = ({ classData }) => {
  return (
    <div className="table-responsive" style={{ alignItems: 'center', backgroundColor: 'white'}}>
 
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            {classData[0].paymentParticulars.map((particular, index) => (
              <th key={index}>{particular.name}</th>
            ))}
            <th>Photo</th> {/* New column for photos */}
            <th>Experience Letter</th>
            <th>Qualification Proof</th>
            <th>Id Proof</th>
            <th>Other Document1</th>
            <th>Other Document2</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, idx) => (
            <tr key={idx}>
              <td>{classItem.Id}</td>
              {classItem.paymentParticulars.map((particular, index) => (
                <td key={index}>{particular.amount}</td>
              ))}
              <td><img src={classItem.photo} alt="Employee" style={{ width: '100px', height: 'auto' }} /></td> {/* Display photo */}
              <td><img src={classItem.experienceLetter} alt="Experience Letter" style={{ width: '100px', height: 'auto' }} /></td> {/* Display experience letter */}
              <td><img src={classItem.qualificationProof} alt="Qualification Proof" style={{ width: '100px', height: 'auto' }} /></td> {/* Display qualification proof */}
              <td><img src={classItem.idProof} alt="ID Proof" style={{ width: '100px', height: 'auto' }} /></td> {/* Display ID proof */}
              <td><img src={classItem.otherDocument1} alt="Other Document1" style={{ width: '100px', height: 'auto' }} /></td> {/* Display other document 1 */}
              <td><img src={classItem.otherDocument2} alt="Other Document2" style={{ width: '100px', height: 'auto' }} /></td> {/* Display other document 2 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
const StaffAdd = () => {
  const [classData, setClassData] = useState([
    {
      Id: '',
      paymentParticulars: [
        { name: 'Employee Name' },
        { name: 'Gender' },
        { name: 'Date of Birth' },
        { name: 'Husband/Father Name' },
        { name: 'Email Address' },
        { name: 'Mobile Number' },
        { name: 'Address' },
        { name: 'Employee Qualification' }
      ]
    }
  ]);
 
  const [newStaff, setNewStaff] = useState({ EmployeeName: '', Gender: '', DateOfBirth: '', HusbandFatherName: '', EmailAddress: '', MobileNumber: '', Address: '', EmployeeQualification: '', photo: '', experienceLetter: '', qualificationProof: '', idProof: '', otherDocument1: '', otherDocument2: '' });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };
 
  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setNewStaff({ ...newStaff, [field]: event.target.result });
    };
    reader.readAsDataURL(file);
  };
 
  const handleAddStaff = (e) => {
    e.preventDefault();
    if (!newStaff.EmployeeName || !newStaff.Gender || !newStaff.DateOfBirth || !newStaff.HusbandFatherName || !newStaff.EmailAddress || !newStaff.MobileNumber || !newStaff.Address || !newStaff.EmployeeQualification || !newStaff.photo || !newStaff.experienceLetter || !newStaff.qualificationProof || !newStaff.idProof || !newStaff.otherDocument1 || !newStaff.otherDocument2) return;
 
    const newClassData = [...classData];
    const newClassItem = {
      Id: '1',
      paymentParticulars: [
        { name: 'Employee Name', amount: newStaff.EmployeeName },
        { name: 'Gender', amount: newStaff.Gender },
        { name: 'Date of Birth', amount: newStaff.DateOfBirth },
        { name: 'Husband/Father Name', amount: newStaff.HusbandFatherName },
        { name: 'Email Address', amount: newStaff.EmailAddress },
        { name: 'Mobile Number', amount: newStaff.MobileNumber },
        { name: 'Address', amount: newStaff.Address },
        { name: 'Employee Qualification', amount: newStaff.EmployeeQualification }
      ],
      photo: newStaff.photo,
      experienceLetter: newStaff.experienceLetter,
      qualificationProof: newStaff.qualificationProof,
      idProof: newStaff.idProof,
      otherDocument1: newStaff.otherDocument1,
      otherDocument2: newStaff.otherDocument2
    };
    newClassData.push(newClassItem);
    setClassData(newClassData);
 
    setNewStaff({ EmployeeName: '', Gender: '', DateOfBirth: '', HusbandFatherName: '', EmailAddress: '', MobileNumber: '', Address: '', EmployeeQualification: '', photo: '', experienceLetter: '', qualificationProof: '', idProof: '', otherDocument1: '', otherDocument2: '' });
  };
 
  return (
    <div className='container' style={{ alignItems: 'center', backgroundColor: 'white' }}>
      <Staff/>
      <div className="bg-primary text-white p-3">
        <h1 className="mb-0">Employee Management</h1>
        <a className="nav-link" href="/" style={{ position: 'absolute', left: 0, top: 0 }}>
          <FontAwesomeIcon icon={faHome} style={{ background: 'none', height: '26px', marginTop: '35px', marginLeft: '1450px' }} />
        </a>
      </div>
 
      {/* Staff Management Form */}
      <form onSubmit={handleAddStaff} className="row mt-4 g-3">
        <div className="col-12">
          <h3>Personal Detail:</h3>
        </div>
        <div className="col-md-3">
          <label htmlFor="EmployeeName">Employee Name:</label>
          <input
            type="text"
            id="EmployeeName"
            name="EmployeeName"
            className="form-control"
            placeholder="Employee Name"
            value={newStaff.EmployeeName}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Gender">Gender:</label>
          <select
            id="Gender"
            name="Gender"
            className="form-select"
            value={newStaff.Gender}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="DateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="DateOfBirth"
            name="DateOfBirth"
            className="form-control"
            placeholder="Date Of Birth"
            value={newStaff.DateOfBirth}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="HusbandFatherName">Husband/Father Name:</label>
          <input
            type="text"
            id="HusbandFatherName"
            name="HusbandFatherName"
            className="form-control"
            placeholder="Husband/Father Name"
            value={newStaff.HusbandFatherName}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="EmailAddress">Email Address:</label>
          <input
            type="email"
            id="EmailAddress"
            name="EmailAddress"
            className="form-control"
            placeholder="Email Address"
            value={newStaff.EmailAddress}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="MobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="MobileNumber"
            name="MobileNumber"
            className="form-control"
            placeholder="Mobile Number"
            value={newStaff.MobileNumber}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            name="Address"
            className="form-control"
            placeholder="Address"
            value={newStaff.Address}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="EmployeeQualification">Employee Qualification:</label>
          <input
            type="text"
            id="EmployeeQualification"
            name="EmployeeQualification"
            className="form-control"
            placeholder="Employee Qualification"
            value={newStaff.EmployeeQualification}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
 
        {/* Add Bootstrap classes to the remaining form inputs */}
 
        <div className="col-12">
          <h3>Document Upload:</h3>
        </div>
        <div className="col-md-3">
          <label htmlFor="Photo">Employee Photo:</label>
          <input
            type="file"
            id="Photo"
            accept="image/*" // Accept only image files
            className="form-control"
            onChange={(e) => handleImageUpload(e, 'photo')}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="ExperienceLetter">Experience Letter:</label>
          <input
            type="file"
            id="ExperienceLetter"
            accept="image/*" // Accept only image files
            className="form-control"
            onChange={(e) => handleImageUpload(e, 'experienceLetter')}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="QualificationProof">Qualification Proof:</label>
          <input
            type="file"
            id="QualificationProof"
            accept="image/*" // Accept only image files
            className="form-control"
            onChange={(e) => handleImageUpload(e, 'qualificationProof')}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="IdProof">ID Proof:</label>
          <input
            type="file"
            id="IdProof"
            accept="image/*" // Accept only image files
            className="form-control"
            onChange={(e) => handleImageUpload(e, 'idProof')}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="OtherDocument1">Other Document 1:</label>
          <input
            type="file"
            id="OtherDocument1"
            accept="image/*" // Accept only image files
            className="form-control"
            onChange={(e) => handleImageUpload(e, 'otherDocument1')}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="OtherDocument2">Other Document 2:</label>
          <input
            type="file"
            id="OtherDocument2"
            accept="image/*" // Accept only image files
            className="form-control"
            onChange={(e) => handleImageUpload(e, 'otherDocument2')}
          />
        </div>
        <div className="col-12">
          <h3>Document Detail:</h3>
        </div>
        <div className="col-md-3">
          <label htmlFor="Date Of Joining">Date Of Joining:</label>
          <input
            type="date"
            id="Date Of Joining"
            name="Date Of Joining"
            className="form-control"
            placeholder="Date Of Joining"
            value={newStaff.DateOfJoining}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Rofid No">Rofid No:</label>
          <input
            type="tel"
            id="Rofid No"
            name="Rofid No"
            className="form-control"
            placeholder="Rofid No"
            value={newStaff.RofidNo}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="categories">Categories:</label>
          <select
            id="categories"
            name="categories"
            className="form-select"
            value={newStaff.categories}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          >
            <option value="">Select Category</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Human Resources">Human Resources</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="Teaching class preferred">Teaching class preferred:</label>
          <input
            type="text"
            id="Teaching class preferred"
            name="Teaching class preferred"
            className="form-control"
            placeholder="Teaching class preferred"
            value={newStaff.Teachingclasspreferred}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Teaching Subject preferred">Teaching Subject preferred:</label>
          <input
            type="text"
            id="Teaching Subject preferred"
            name="Teaching Subject preferred"
            className="form-control"
            placeholder="Teaching Subject preferred"
            value={newStaff.TeachingSubjectpreferred}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Designation">Designation:</label>
          <input
            type="email"
            id="Designation"
            name="Designation"
            className="form-control"
            placeholder="Designation"
            value={newStaff.Designation}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-12">
          <h3>Salary Detail:</h3>
        </div>
        <div className="col-md-3">
          <label htmlFor="Pan Card No">Pan Card No:</label>
          <input
            type="tel"
            id="Pan card No"
            name="pan card No"
            className="form-control"
            placeholder="Pan Card No"
            value={newStaff.panCardNo}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Aadhar No">Aadhar No:</label>
          <input
            type="tel"
            id="Aadhar No"
            name="Aadhar No"
            className="form-control"
            placeholder="Aadhar No"
            value={newStaff.AadharNo}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Bank Name">Bank Name:</label>
          <input
            type="text"
            id="Bank Name"
            name="Bank Name"
            className="form-control"
            placeholder="Bank Name"
            value={newStaff.BankName}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Bank Account No">Bank Account No:</label>
          <input
            type="text"
            id="Bank Account No"
            name="Bank Account No"
            className="form-control"
            placeholder="Bank Account No"
            value={newStaff.BankAccountno}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Bank IFSC Code">Bank IFSC Code :</label>
          <input
            type="email"
            id="Bank IFSC Code"
            name="Bank IFSC Code"
            className="form-control"
            placeholder="Bank IFSC Code"
            value={newStaff.BankIFSCCode}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="Salary">Salary :</label>
          <input
            type="email"
            id="Salary"
            name="Salary"                                                        
            className="form-control"
            placeholder="Salary"
            value={newStaff.Salary}
            onChange={handleInputChange}
            style={{ color: '#bbb' }} // Lighten the text color
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Staff</button>
        </div>
      </form>
 
      {/* Matrix Table */}
      <MatrixTable classData={classData} />
    </div>
  );
};
 


export default StaffAdd;

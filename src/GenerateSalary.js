import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GenerateSalary = ({ onClose }) => {
  const [salaryDetails, setSalaryDetails] = useState({
    employeeName: '',
    employeeId: '',
    department: '',
    designation: '',
    salaryFromDate: new Date(),
    salaryToDate: new Date(),
    basicSalary: '',
    hra: '',
    ta: '',
    da: '',
    deductions: '',
    totalEarnings: '',
    netSalary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalaryDetails({ ...salaryDetails, [name]: value });
  };

  const handleFromDateChange = (date) => {
    setSalaryDetails({ ...salaryDetails, salaryFromDate: date });
  };

  const handleToDateChange = (date) => {
    setSalaryDetails({ ...salaryDetails, salaryToDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate total earnings
    const totalEarnings = parseFloat(salaryDetails.basicSalary) + parseFloat(salaryDetails.hra) + parseFloat(salaryDetails.ta) + parseFloat(salaryDetails.da);
    
    // Calculate net salary
    const netSalary = totalEarnings - parseFloat(salaryDetails.deductions);
    
    setSalaryDetails({ ...salaryDetails, totalEarnings: totalEarnings, netSalary: netSalary });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', margin: '20px 0', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Generate Salary Slip</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>Employee Name:</label>
            <input type="text" name="employeeName" value={salaryDetails.employeeName} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <label>Employee ID:</label>
            <input type="text" name="employeeId" value={salaryDetails.employeeId} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>Department:</label>
            <input type="text" name="department" value={salaryDetails.department} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <label>Designation:</label>
            <input type="text" name="designation" value={salaryDetails.designation} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>Salary From Date:</label>
            <DatePicker name="salaryFromDate" selected={salaryDetails.salaryFromDate} onChange={handleFromDateChange} dateFormat="yyyy-MM-dd" style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <label>Salary To Date:</label>
            <DatePicker name="salaryToDate" selected={salaryDetails.salaryToDate} onChange={handleToDateChange} dateFormat="yyyy-MM-dd" style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>Basic Salary:</label>
            <input type="text" name="basicSalary" value={salaryDetails.basicSalary} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <label>HRA:</label>
            <input type="text" name="hra" value={salaryDetails.hra} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>TA:</label>
            <input type="text" name="ta" value={salaryDetails.ta} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <label>DA:</label>
            <input type="text" name="da" value={salaryDetails.da} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>Deductions:</label>
            <input type="text" name="deductions" value={salaryDetails.deductions} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ flex: '1', marginLeft: '10px' }}>
            <label>Total Earnings:</label>
            <input type="text" name="totalEarnings" value={salaryDetails.totalEarnings} readOnly style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ flex: '1', marginRight: '10px' }}>
            <label>Net Salary:</label>
            <input type="text" name="netSalary" value={salaryDetails.netSalary} readOnly style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none', marginRight: '10px' }}>Generate Salary Slip</button>
          <button type="button" onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none' }}>Close</button>
        </div>
      </form>

      {/* Display generated salary slip */}
      {salaryDetails.totalEarnings !== '' && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Salary Slip</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Employee Name: {salaryDetails.employeeName}</td>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Employee ID: {salaryDetails.employeeId}</td>
              </tr>
              <tr>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Department: {salaryDetails.department}</td>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Designation: {salaryDetails.designation}</td>
              </tr>
              <tr>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Salary From Date: {salaryDetails.salaryFromDate.toString()}</td>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Salary To Date: {salaryDetails.salaryToDate.toString()}</td>
              </tr>
              <tr>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Basic Salary: {salaryDetails.basicSalary}</td>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>HRA: {salaryDetails.hra}</td>
              </tr>
              <tr>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>TA: {salaryDetails.ta}</td>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>DA: {salaryDetails.da}</td>
              </tr>
              <tr>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Deductions: {salaryDetails.deductions}</td>
                <td style={{ width: '50%', border: '1px solid #ccc', padding: '8px' }}>Total Earnings: {salaryDetails.totalEarnings}</td>
              </tr>
              <tr>
                <td colSpan="2" style={{ border: '1px solid #ccc', padding: '8px' }}>Net Salary: {salaryDetails.netSalary}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={handlePrint} style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none' }}>Print</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateSalary;

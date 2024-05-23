import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router if you're using it

const EmployeeTable2 = () => {
  const employeeStyle = {
    margin: '2rem 0',
    padding: '0 1rem',
    border: '1px solid #dddddd',
    borderRadius: '5px',
    backgroundColor: 'white',
  };
 
  const [basicSalary, setBasicSalary] = useState('');
  const [allowance, setAllowance] = useState('');  // Corrected variable name
  const [deductions, setDeductions] = useState('');
  const [da, setDa] = useState('');
  const [hra, setHra] = useState('');
  const [totalIncentive, setTotalIncentive] = useState('');
  const [advance, setAdvance] = useState('');
  const [pfDeduction, setPfDeduction] = useState('');
  const [tdsDeduction, setTdsDeduction] = useState('');
  const [esicDeduction, setEsicDeduction] = useState('');
  const [professionalTax, setProfessionalTax] = useState('');
  const [otherDeduction, setOtherDeduction] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [salaryFromDate, setSalaryFromDate] = useState('');
  const [salaryToDate, setSalaryToDate] = useState('');
  const [totalDays, setTotalDays] = useState('');
  const [holiday, setHoliday] = useState('');
  const [sunday, setSunday] = useState('');
  const [working, setWorking] = useState('');
  const [present, setPresent] = useState('');
  const [absent, setAbsent] = useState('');
  const [leave, setLeave] = useState('');
  const [salaryDays, setSalaryDays] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with values:', basicSalary, allowance, deductions, da, hra, totalIncentive, advance, pfDeduction, tdsDeduction, esicDeduction, professionalTax, otherDeduction, paymentMode, salaryFromDate, salaryToDate, totalDays, holiday, sunday, working, present, absent, leave, salaryDays);
  };
 
  return (
    <div>
      <h2 style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Employee Details</h2>
      <div style={employeeStyle}>
        {/* Employee details removed */}
      </div>
 
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem 0' }}>
        <div style={{ flex: '1', border: '1px solid #dddddd', borderRadius: '5px', padding: '1rem', backgroundColor: 'white', marginRight: '20px' }}>
          <h3 style={{ backgroundColor: 'white', color: 'Black', padding: '10px' }}>Salary Panel</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="basicSalary">Basic Salary:</label>
                <input type="text" id="basicSalary" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} style={{ display: 'block' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="salaryFromDate">Salary From:</label>
                <input
                  type="date"
                  id="salaryFromDate"
                  value={salaryFromDate}
                  onChange={(e) => setSalaryFromDate(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="salaryToDate">Salary To:</label>
                <input
                  type="date"
                  id="salaryToDate"
                  value={salaryToDate}
                  onChange={(e) => setSalaryToDate(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="deductions">Deductions:</label>
                <input type="text" id="deductions" value={deductions} onChange={(e) => setDeductions(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="hra">HRA:</label>
                <input type="text" id="hra" value={hra} onChange={(e) => setHra(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="da">DA:</label>
                <input type="text" id="da" value={da} onChange={(e) => setDa(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="totalIncentive">Total Incentive:</label>
                <input type="text" id="totalIncentive" value={totalIncentive} onChange={(e) => setTotalIncentive(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="allowance">Allowance:</label>
                <input type="text" id="allowance" value={allowance} onChange={(e) => setAllowance(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="advance">Advance:</label>
                <input type="text" id="advance" value={advance} onChange={(e) => setAdvance(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="pfDeduction">PF Deduction:</label>
                <input type="text" id="pfDeduction" value={pfDeduction} onChange={(e) => setPfDeduction(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="tdsDeduction">TDS Deduction:</label>
                <input type="text" id="tdsDeduction" value={tdsDeduction} onChange={(e) => setTdsDeduction(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="esicDeduction">ESIC Deduction:</label>
                <input type="text" id="esicDeduction" value={esicDeduction} onChange={(e) => setEsicDeduction(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="paymentMode">Payment Mode:</label>
                <input type="text" id="paymentMode" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} />
              </div>
            </div>
          </form>
        </div>
 
        <div style={{ flex: '1', border: '1px solid #dddddd', borderRadius: '5px', padding: '1rem', backgroundColor: 'white' }}>
          <h3 style={{ backgroundColor: 'white', color: 'Black', padding: '10px' }}>Attendance Information</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="totalDays">Total Days:</label>
              <input type="text" id="totalDays" value={totalDays} onChange={(e) => setTotalDays(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="holiday">Holiday:</label>
              <input type="text" id="holiday" value={holiday} onChange={(e) => setHoliday(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="sunday">Sunday:</label>
              <input type="text" id="sunday" value={sunday} onChange={(e) => setSunday(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="working">Working:</label>
              <input type="text" id="working" value={working} onChange={(e) => setWorking(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="present">Present:</label>
              <input type="text" id="present" value={present} onChange={(e) => setPresent(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="absent">Absent:</label>
              <input type="text" id="absent" value={absent} onChange={(e) => setAbsent(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="leave">Leave:</label>
              <input type="text" id="leave" value={leave} onChange={(e) => setLeave(e.target.value)} style={{ display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="salaryDays">Salary Days:</label>
              <input type="text" id="salaryDays" value={salaryDays} onChange={(e) => setSalaryDays(e.target.value)} style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Link to="EmployeeTable3">
  <button type="button" style={{ padding: '5px 10px', fontSize: '12px' }}>Submit</button>
</Link>
</div>
    </div>
  );
};
 
export default EmployeeTable2;
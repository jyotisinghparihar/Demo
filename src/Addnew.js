import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fess from './Fess'; // Import the Fess navbar component

const SearchBox = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };
 
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
      className="form-control mb-3"
    />
  );
};
 
const Addnew = () => {
  const [formData, setFormData] = useState({
    accountType: '',
    bankName: '',
    branchName: '',
    accountHolderName: '',
    accountNumber: '',
    bankIFSCCode: '',
    merchantKey: '',
    bankAddress: ''
  });
 
  const [bankAccounts, setBankAccounts] = useState([]);
  const [filteredBankAccounts, setFilteredBankAccounts] = useState([]);
 
  useEffect(() => {
    setFilteredBankAccounts(bankAccounts);
  }, [bankAccounts]);
 
  const handleChange = (e, rowIndex, columnName) => {
    const { value } = e.target;
    const updatedBankAccounts = bankAccounts.map((account, index) => {
      if (index === rowIndex) {
        return {
          ...account,
          [columnName]: value
        };
      }
      return account;
    });
    setBankAccounts(updatedBankAccounts);
    setFilteredBankAccounts(updatedBankAccounts);
  };
 
  const handleAddRow = () => {
    setBankAccounts([...bankAccounts, formData]);
    setFormData({
      accountType: '',
      bankName: '',
      branchName: '',
      accountHolderName: '',
      accountNumber: '',
      bankIFSCCode: '',
      merchantKey: '',
      bankAddress: ''
    });
  };
 
  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    const filteredAccounts = bankAccounts.filter(account => {
      return Object.values(account).some(value =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    console.log("Filtered accounts:", filteredAccounts);
    setFilteredBankAccounts(filteredAccounts);
  };
 
  return (
    <div>
      <Fess />
      
      <div className="container-fluid" style={{ marginTop: '0px' }}>
        <div className="row bg-color text-white py-2" style={{ backgroundColor: 'black', fontSize: '1rem',  }}>
          <div className="col">
            <h1 style={{ fontSize: '1.5rem', marginBottom: '0', }}>Account Management</h1>
          </div>
          <div className="col-auto d-flex align-items-center">
            <label htmlFor="languageSelect" className="mr-2 mb-0" style={{ fontWeight: 'bold', fontSize: '1rem', }}>Language: </label>
            <select id="languageSelect" className="form-select form-select-sm" style={{ width: '120px', fontSize: '0.875rem' ,}}>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>





        <div className="row">
          <div className="col">
            <h2>Bank Account Add</h2>
            <hr className="my-3" />
            <form className="row g-3">
            <div className="col-md-3">
            <label htmlFor="accountType" className="form-label" style={{ fontWeight: 'bold' }}>Account Type :</label>
 
              <input type="text" id="accountType" className="form-control" value={formData.accountType} onChange={(e) => setFormData({ ...formData, accountType: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="bankName" className="form-label"style={{ fontWeight: 'bold' }}>Bank Name :</label>
              <input type="text" id="bankName" className="form-control" value={formData.bankName} onChange={(e) => setFormData({ ...formData, bankName: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="branchName" className="form-label"style={{ fontWeight: 'bold' }}>Branch Name :</label>
              <input type="text" id="branchName" className="form-control" value={formData.branchName} onChange={(e) => setFormData({ ...formData, branchName: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="accountHolderName" className="form-label"style={{ fontWeight: 'bold' }}>Account Holder Name :</label>
              <input type="text" id="accountHolderName" className="form-control" value={formData.accountHolderName} onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="accountNumber" className="form-label"style={{ fontWeight: 'bold' }}>Account Number :</label>
              <input type="text" id="accountNumber" className="form-control" value={formData.accountNumber} onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="bankIFSCCode" className="form-label"style={{ fontWeight: 'bold' }}>Bank IFSC Code :</label>
              <input type="text" id="bankIFSCCode" className="form-control" value={formData.bankIFSCCode} onChange={(e) => setFormData({ ...formData, bankIFSCCode: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="merchantKey" className="form-label"style={{ fontWeight: 'bold' }}>Merchant Key :</label>
              <input type="text" id="merchantKey" className="form-control" value={formData.merchantKey} onChange={(e) => setFormData({ ...formData, merchantKey: e.target.value })} />
            </div>
            <div className="col-md-3">
              <label htmlFor="bankAddress" className="form-label"style={{ fontWeight: 'bold' }}>Bank Address :</label>
              <input type="text" id="bankAddress" className="form-control" value={formData.bankAddress} onChange={(e) => setFormData({ ...formData, bankAddress: e.target.value })} />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
            <button className="btn btn-outline-success" type="button" onClick={handleAddRow} style={{ fontWeight: 'bold' }}>Submit</button>
 
            </div>
          </form>
        </div>
      </div>
 
      <div className="row bg-primary text-white p-3">
        <div className="col">
          <h2>Bank Account List</h2>
        </div>
        <div className="col-auto ms-auto">
          {/* Render the SearchBox component here */}
          <SearchBox handleSearch={handleSearch} />
        </div>
      </div>
 
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Bank Name</th>
                <th>Branch Name</th>
                <th>Account Holder Name</th>
                <th>Account Number</th>
                <th>Bank IFSC Code</th>
                <th>Merchant Key</th>
                <th>Bank Address</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through filteredBankAccounts and render each row */}
              {filteredBankAccounts?.map((account, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.entries(account).map(([columnName, value], colIndex) => (
                    <td key={colIndex}>
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e, rowIndex, columnName)}
                        className="form-control"
                      />
                    </td>
                  ))}
                </tr>
              ))}
             </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Addnew;
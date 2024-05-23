import React, { useState } from 'react';

const IDGenerate = () => {
  // Dummy data for employees
  const employees = [
    { id: 1, name: 'John Doe', contact: '1234567890', designation: 'Manager', category: 'Teaching' },
    { id: 2, name: 'Jane Smith', contact: '9876543210', designation: 'Developer', category: 'Non-Teaching' },
    { id: 3, name: 'Michael Johnson', contact: '4567891230', designation: 'Designer', category: 'Teaching' },
    { id: 4, name: 'Emily Brown', contact: '7891234560', designation: 'Engineer', category: 'Non-Teaching' },
    // Add more employees as needed
  ];

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [generatedIDCards, setGeneratedIDCards] = useState([]);

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleEmployeeSelect = (employeeId) => {
    if (selectedEmployees.includes(employeeId)) {
      setSelectedEmployees(selectedEmployees.filter(id => id !== employeeId));
    } else {
      setSelectedEmployees([...selectedEmployees, employeeId]);
    }
  };

  const generateIDCard = (employee) => {
    // Inline CSS styles
    const idCardStyle = {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      backgroundImage: 'linear-gradient(to bottom right, #ff00ff, #00ffff)', // Gradient background color
      color: '#fff', // Text color
      display: 'inline-block',
    };

    // Logo style
    const logoStyle = {
      width: '100px',
      height: 'auto',
      marginBottom: '10px',
    };

    // Here you can generate an ID card for the employee
    return (
      <div key={employee.id} style={idCardStyle} className="id-card">
        <img src="eduction.webp" alt="Logo" style={logoStyle} />
        <div className="id-card-content">
          <h2>{employee.name}</h2>
          <p>ID: {employee.id}</p>
          <p>Contact: {employee.contact}</p>
          <p>Designation: {employee.designation}</p>
        </div>
      </div>
    );
  };

  const handlePrintIDCards = () => {
    // Prepare ID cards for selected employees
    const selectedEmployeesData = employees.filter(employee => selectedEmployees.includes(employee.id));
    
    // Generate ID cards
    const idCards = selectedEmployeesData.map(employee => generateIDCard(employee));
    setGeneratedIDCards(idCards);
  };

  const filteredEmployees = employees.filter(employee =>
    (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.contact.includes(searchTerm)) &&
    (selectedCategory === '' || employee.category === selectedCategory)
  );

  const columnHeaderStyle = {
    backgroundColor: 'blue',
    color: 'white', // Optional: Change text color to white
  };

  return (
    <div className="container mt-5">
      <div className="card border-primary">
        <div className="card-header bg-primary">
          <h5 className="mb-0">Categories</h5>
          <div className="form-group mb-0" style={{ width: '150px' }}>
            <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
              <option value=""> All</option> 
              <option value="Teaching">Teaching</option>
              <option value="Non-Teaching">Non-Teaching</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <div className="row mb-3 justify-content-between">
            <div className="col-sm-auto">
              <select className="form-select" value={entriesPerPage} onChange={handleEntriesChange}>
                <option value="5">5 entries</option>
                <option value="10">10 entries</option>
                <option value="20">20 entries</option>
              </select>
            </div>
            <div className="col-sm-auto">
              <input type="text" className="form-control search-input" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={columnHeaderStyle}>S.No.</th>
                  <th style={columnHeaderStyle}>Employee ID No</th>
                  <th style={columnHeaderStyle}>Employee Name</th>
                  <th style={columnHeaderStyle}>Contact No</th>
                  <th style={columnHeaderStyle}>Designation</th>
                  <th style={columnHeaderStyle}>Select Employee</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.slice(0, entriesPerPage).map((employee, index) => (
                  <tr key={employee.id}>
                    <td>{index + 1}</td>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.designation}</td>
                    <td>
                      <input type="checkbox" checked={selectedEmployees.includes(employee.id)} onChange={() => handleEmployeeSelect(employee.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <button className="btn btn-primary" onClick={handlePrintIDCards}>Print ID Cards</button>
          </div>
          <div className="generated-id-cards">
            {generatedIDCards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDGenerate;

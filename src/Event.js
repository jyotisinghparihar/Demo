import React, { useState } from 'react';
import Acadmic from './Acadmic'; // Import the Academic navbar component

const Event = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    section: '',
    rollNumber: '',
    fatherName: ''
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Search state and handler
  const [searchQuery, setSearchQuery] = useState('');

  const handleBoxClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false); // Hide the options when an option is selected

    // Clear form data when option changes
    setFormData({
      name: '',
      class: '',
      section: '',
      rollNumber: '',
      fatherName: ''
    });
    setEditIndex(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (
      formData.name &&
      formData.class &&
      formData.section &&
      formData.rollNumber &&
      formData.fatherName &&
      selectedOption // Make sure an option is selected
    ) {
      const currentDate = new Date().toLocaleDateString(); // Get current date
      const newData = { ...formData, type: selectedOption, date: currentDate }; // Include current date in the submitted data
      if (editIndex !== null) {
        // If editing an existing entry, replace it in the array
        const updatedData = [...submittedData];
        updatedData[editIndex] = newData;
        setSubmittedData(updatedData);
        setEditIndex(null);
      } else {
        // Otherwise, add new data to the array
        setSubmittedData([...submittedData, newData]);
      }
      setFormData({
        name: '',
        class: '',
        section: '',
        rollNumber: '',
        fatherName: ''
      });
      setSuccessMessage('Submitted successfully!');
    } else {
      setSuccessMessage('');
      alert('Please fill out all fields and select an option.');
    }
  };

  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };

  const handleEdit = (index) => {
    const dataToEdit = submittedData[index];
    setFormData(dataToEdit);
    setSelectedOption(dataToEdit.type);
    setEditIndex(index);
  };

  // Search input change handler
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter submitted data based on the search query
  const filteredData = submittedData.filter((data) => {
    // Perform case-insensitive search on name, class, section, rollNumber, fatherName, and type
    const searchData = `${data.name} ${data.class} ${data.section} ${data.rollNumber} ${data.fatherName} ${data.type}`.toLowerCase();
    return searchData.includes(searchQuery.toLowerCase());
  });

  const renderButtons = () => {
    if (
      formData.name &&
      formData.class &&
      formData.section &&
      formData.rollNumber &&
      formData.fatherName &&
      selectedOption
    ) {
      return (
        <div>
          <button onClick={() => handleSubmit()}>{editIndex !== null ? 'Update' : (selectedOption === "CC Form" ? "Create CC" : "Create TC")}</button>
          <button onClick={() => setEditIndex(null)}>Cancel</button>
        </div>
      );
    } else {
      return null;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Acadmic /> {/* Include the Academic navbar here */}
      <div className='containerStyle' style={{ alignItems: 'center', backgroundColor: 'white', paddingTop: '50px' }}> {/* Adjust paddingTop to accommodate the fixed navbar */}
        <div style={{ backgroundColor: '#ABD0EB', display: 'flex', height: '10vh', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
          <div style={{ color: 'black', fontSize: 'calc(12px + 2vmin)', marginRight: '700px', textAlign: 'center' }}>
            <div className="icon larger-icon" style={{ fontSize: '36px' }}>🏆  <h>Certificate Portal</h></div>
          </div>
        </div>


        <div style={{ marginTop: '110px', padding: '10px', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          {/* Box */}
          <div
            className='Data-Exploration'
            style={{
              color: 'black',
              textDecoration: 'none',
              height: 'auto',
              width: '40vmin',
              padding: '5px',
              fontSize: '20px',
              borderBottom: '1px solid #02133805',
              boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              background: 'linear-gradient(to right, #F4D03F, #E6E6FA)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background-color 0.3s ease',
              marginLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={handleBoxClick}
          >
            <div className="icon larger-icon" style={{ fontSize: '46px' }}>📝</div>
            <h3>{selectedOption || 'TC/CC'}</h3>
          </div>

          {/* Display options */}
          {showOptions && (
            <div style={{ marginTop: '20px' }}>
              <select
                value={selectedOption}
                onChange={(e) => handleOptionSelect(e.target.value)}
                style={{
                  width: '200px',
                  height: '30px',
                  fontSize: '16px',
                  padding: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ccc'
                }}
              >
                <option value="">Select Option</option>
                <option value="CC Form">CC Form</option>
                <option value="TC Form">TC Form</option>
              </select>

              {/* Render form for CC */}
              {selectedOption === "CC Form" && (
                <div>
                  <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" name="class" placeholder="Class" value={formData.class} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" name="section" placeholder="Section" value={formData.section} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleInputChange} required style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    {renderButtons()}
                  </div>
                  {successMessage && <p>{successMessage}</p>}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{ marginTop: '20px', marginBottom: '10px', padding: '5px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }}
        />

        {/* Render filtered data */}
        {filteredData.length > 0 ? (
          <div style={{ marginTop: '20px' }}>
            <h2>Submitted Data</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr style={{ backgroundColor: '#f2f2f2' }}>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Name</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Class</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Section</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Roll Number</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Father's Name</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Type</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Date</th>
                  <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={index} style={{ border: '1px solid #dddddd' }}>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.name}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.class}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.section}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.rollNumber}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.fatherName}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.type}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{data.date}</td>
                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No data found.</p>
        )}

        {/* Print button */}
        <button onClick={handlePrint}>Print</button>

        {/* Existing JSX code */}
      </div>
    </div>
  );
};

export default Event;

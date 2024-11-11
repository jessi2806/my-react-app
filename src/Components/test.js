
import React, { useState } from 'react';


// Define the options
const test = [
  { label: 'Student' },
  { label: 'Salaried' },
  { label: 'Business' },
];

function Test() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedTypeOption,setselectedTypeOption] = useState('');
  const [selectedDate,setselectedDate] = useState('');
  const [selectedMaxDate,setselectedMaxDate] = useState('');
  const [records, setRecords] = useState([]);
  const [fieldDisplayName, setFieldDisplayName] = useState("");
  const [fieldDatatype, setFieldDatatype] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [mandatory, setMandatory] = useState("");
  const [fieldData, setFieldData] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);


const handleReset =() => {
  setRecords([]);
}

  // Handle the dropdown selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

//Handle select type change
const handleSelectType = (event) =>{
  setselectedTypeOption(event.target.value);
};

  // Handle input value change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //Handle Min Date Change
const handleMinDate = (event) =>{
  setselectedDate(event.target.value);
}

 //Handle Min Date Change
 const handleMaxDate = (event) =>{
  setselectedMaxDate(event.target.value);
}

//Handle Confirm button
const handleSubmit = () => {
  // Collect the current input data
  const newRecord = {
    fieldDisplayName,
    fieldDatatype,
    selectedTypeOption,
    maxLength,
    mandatory,
    fieldData,
    selectedDate,
    selectedMaxDate
  };

  // Add it to the records array
  setRecords([...records, newRecord]);
console.log(records);
  // Clear the form fields
  setselectedTypeOption("");
  setFieldDisplayName("");
  setFieldDatatype("");
  setMaxLength("");
  setMandatory("");
  setFieldData("");
  setselectedDate("");
  setselectedMaxDate("");
};


const toggleDropdown = () => {
  setIsDropdownVisible((prev) => !prev);
};



  
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">

      <label className="form-label"> Dynamic Data Collection : </label>
      <select className="form-control" onChange={handleSelectChange} value={selectedOption}>
        <option value="">Select</option>
        {test.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      </div>
      <div className="col">
       
      <button className="btn btn-primary custom-margin" onClick={toggleDropdown}>Add Field</button>
      </div>
      </div>
      

      </div>

<br>
</br>

{isDropdownVisible && (<div className="container">
        <div className="row">
          {/* Field Type */}
          <div className="col-lg-5">
            <label>Field Type:</label>
            <select className="form-control" onChange={handleSelectType} value={selectedTypeOption}>
              <option value="">Select Type</option>
              <option value="textbox">Textbox</option>
              <option value="dropdown">Dropdown</option>
              <option value="date">Date</option>
            </select>
          </div>

        </div>
      </div>)}

      <br></br>

{selectedTypeOption !== '' && (
<div className="container">
 <div className="row">


{selectedTypeOption === 'textbox' && (
 <div className="row">
    <div className="col">
        <label>Field Display Name:</label>
        <input type="text" className="form-control"  value={fieldDisplayName}
           onChange={(e) => setFieldDisplayName(e.target.value)} placeholder="Mobile Number" />
</div>
<div className="col">
      <label>Field Datatype:</label>
      <select className="form-control"  value={fieldDatatype} onChange={(e) => setFieldDatatype(e.target.value)}>
      <option value="">Select</option>
        <option value="number">Number</option>
        <option value="string">String</option>
        <option value="boolean">Boolean</option>
      </select>
 </div>
 <div className="col">
      <label>Max Length Allowed:</label>
      <input type="text" value={maxLength}
            onChange={(e) => setMaxLength(e.target.value)} className="form-control" placeholder="10" />
     </div>
</div>

)}

{selectedTypeOption === 'date' && (
  <div className="row">
    <div className="col">
        <label>Field Display Name:</label>
        <input type="text" className="form-control"  value={fieldDisplayName}
           onChange={(e) => setFieldDisplayName(e.target.value)} placeholder="Date of Birth" />
</div>
<div className="col">
      <label>Field Datatype:</label>
      <select className="form-control"  value={fieldDatatype} onChange={(e) => setFieldDatatype(e.target.value)}>
      <option value="">Select Date</option>
        <option value="date">Date</option>
       </select>
 </div>
  
        <div className="col">
        <label>Min Date :</label>
        <input type="Date" className="form-control" value={selectedDate} onChange={handleMinDate} />
          </div>
        
   <div className="col">
   <label>Max Date :</label>
   <input type="Date" className="form-control" value={selectedMaxDate} onChange={handleMaxDate} />
    </div>
        
    </div>
)}
{selectedTypeOption === 'dropdown' && (

<div className="row">
<div className="col">
        <label>Field Display Name:</label>
        <input type="text" className="form-control"  value={fieldDisplayName}
           onChange={(e) => setFieldDisplayName(e.target.value)} placeholder=" Field Name" />
</div>
<div className="col">
      <label>Field Datatype:</label>
      <select className="form-control"  value={fieldDatatype} onChange={(e) => setFieldDatatype(e.target.value)}>
      <option value="">Select</option>
        <option value="dropdown">DropDown</option>
        <option value="date">Date</option>
        <option value="textbox">TextBox</option>
       </select>
 </div>
  </div>

)}

<div className="col">
      <label>Mandatory:</label>
      <select className="form-control"  value={mandatory}
            onChange={(e) => setMandatory(e.target.value)}>
                <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
     </div>
     
     <div className="col">
      <label>Field Data:</label>
      <input type="text" className="form-control"  value={fieldData}
            onChange={(e) => setFieldData(e.target.value)} placeholder="" />
     </div>
       
     <div className="col align-self-end">
            <button className="btn btn-warning w-100 text-white" onClick={handleSubmit}>
              Confirm
            </button>
          </div>
</div>
   </div>
)}
 
     
 <div className="mt-4">
       
          <table className="table-margin table">
            <thead>
              <tr ><th colSpan="7">List of Added fileds</th></tr>
              {records.length > 0 && (
              
              <tr>
                <th>SNo</th>
                <th>Field Type</th>
                <th>Field Display Name</th>
                <th>Field Datatype</th>
                <th>Field Validation</th>
                <th>Mandatory</th>
                <th>Field Data</th>
              </tr>
               )}
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{record.selectedTypeOption}</td>
                  <td>{record.fieldDisplayName}</td>
                  <td>{record.fieldDatatype}</td>
                  <td>
                
{record.selectedTypeOption === 'date' ? (
          'Between ' + record.selectedDate + ' To ' + record.selectedMaxDate
        ) : record.selectedTypeOption === 'textbox' ?
         
        (
          'Max ' + record.maxLength + ' Digits'
        )
            
        : (
          'Nil'
        )}
  
                    </td>
                  <td>{record.mandatory}</td>
                  <td> {record.selectedTypeOption === 'dropdown' 
    ? record.fieldData.split(",").map((item, index) => (
        <div key={index}>{item.trim()}</div>
      ))
    : record.fieldData}</td>

                </tr>
              ))}
            </tbody>
          </table>
          {records.length > 0 && (
          <div className="row custom-center">
              
<button className="btn btn-success m-3"> Create </button>
<button className="btn btn-primary m-3" onClick={handleReset}> Reset </button>
                
          </div>
          )}
      </div>
    </div>

  );
}

export default Test;

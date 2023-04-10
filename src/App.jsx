import React , { useState } from 'react'
import './App.css'

function App() {
  const [tableData, setTableData] = useState([
    { fieldTitle : "Onboarding Call" , field1: '', field2: '' },
    { fieldTitle : "Google Search Console Access" , field1: '', field2: '' },
    { fieldTitle : "Google Analytics Access" , field1: '', field2: '' },
    { fieldTitle : "Website Access" , field1: '', field2: '' },
    { fieldTitle : "Technical Audit" , field1: '', field2: '' },
    { fieldTitle : "Anchor Text", field1: '', field2: '' },
    { fieldTitle : "Competitor Analysis" , field1: '', field2: '' },
    { fieldTitle : "Content Creation" , field1: '', field2: '' },
    { fieldTitle : "Content Publishing" , field1: '', field2: '' },
    { fieldTitle : "Index Links" , field1: '', field2: '' },
  ]);

   
  const handleEdit = (event, rowIndex, field) => {
    const newData = [...tableData];
    newData[rowIndex][field] = event.target.textContent;
    setTableData(newData);
  };


  const handleSubmit = () => {
    alert("check the data in console")
    console.log(tableData)
    setTableData([
    { fieldTitle : "Onboarding Call" , field1: '', field2: '' },
    { fieldTitle : "Google Search Console Access" , field1: '', field2: '' },
    { fieldTitle : "Google Analytics Access" , field1: '', field2: '' },
    { fieldTitle : "Website Access" , field1: '', field2: '' },
    { fieldTitle : "Technical Audit" , field1: '', field2: '' },
    { fieldTitle : "Anchor Text", field1: '', field2: '' },
    { fieldTitle : "Competitor Analysis" , field1: '', field2: '' },
    { fieldTitle : "Content Creation" , field1: '', field2: '' },
    { fieldTitle : "Content Publishing" , field1: '', field2: '' },
    { fieldTitle : "Index Links" , field1: '', field2: '' },
  ])
  };

  return (
    <div>
      <table>
        <thead className='title-field'>
          <tr>
            <th>Month1</th>
          </tr>
        </thead>
        <tbody id='t-body'>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className='title-field'
                contentEditable={false}
              >
                {row.fieldTitle}
              </td>
              <td
                contentEditable
                onBlur={(event) => handleEdit(event, rowIndex, 'field1')}
              >
                {row.field1}
              </td>
              <td
                contentEditable
                onBlur={(event) => handleEdit(event, rowIndex, 'field2')}
              >
                {row.field2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App

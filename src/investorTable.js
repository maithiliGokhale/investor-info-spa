// InvestorTable.js
import React from 'react';
import { Link } from 'react-router-dom';

const InvestorTable = ({ investors }) => {
  // Check if investors is undefined or null
  if (!investors) {
    return <p>Loading...</p>;
  }
  //console.log('Investors:', investors); 
  console.log("creating table....");
  console.log(JSON.stringify(investors, null, 2));
  //investors = investors[0];
  return (
    <div>
      <h2>Investor Table</h2>
      <table>
        <thead>
          <tr>
            <th>FirmId</th>
            <th>FirmName</th>
            <th>Type</th>
            <th>DateAdded</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {investors.map((investorObject, index) => (
            <React.Fragment key={index}>
              {investorObject.data.map((investor) => (
                <tr key={investor.firmID}>
                  <td>{investor.firmID}</td>
                  <td>{investor.firmName}</td>
                  <td>{investor.firmType}</td>
                  <td>{investor.dateAdded || 'N/A'}</td>
                  <td>{investor.address}</td>
                  <td>
                    <Link to={`/investors/${investor.firmID}`}>View Details</Link>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default InvestorTable;
// src/InvestorTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestorTable = () => {
    const [investors, setInvestors] = useState([]);

    useEffect(() => {
    

    const fetchInvestors = async () => {
        try {
          const apiKey = '8f0bc69bc2a643f8bb8034a15081962e';
          const userName = 'dummydatafeeds@preqin.com';
      
          // Step 1: Get Bearer Token
          const tokenResponse = await axios.post('https://api.preqin.com/connect/token', 
            `username=${encodeURIComponent(userName)}&apikey=${encodeURIComponent(apiKey)}`, 
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }
          );
      
          // Extract the access token
          const accessToken = tokenResponse.data.access_token;
          const firmIds = [2670, 2792, 332, 3611];
          
          // Step 2: Use Bearer Token to Call GET Investor endpoint
          
          

          const investorsData = await Promise.all(
            firmIds.map(async (firmId) => {
              const response = await axios.get('https://api.preqin.com/api/investor', {
                params: {
                  firmId: "2670, 2792, 332, 3611",
                },
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                },
              });
      
              return response.data;
            })
          );
          
         
          setInvestors(investorsData.data);
        } catch (error) {
          console.log("CATCH ERROR :(")
          console.log(error.response.data)
          console.error('Error fetching data:', error);
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error setting up the request:', error.message);
          }

        
        }


        
      };  // fetchInvestiors
      
    
    
    
    fetchInvestors();
  }, []);

  
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
            <th>Maithili</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor) => (
            <tr key={investor.firmId}>
              <td>{investor.firmId}</td>
              <td>{investor.firmName}</td>
              <td>{investor.type}</td>
              <td>{investor.dateAdded}</td>
              <td>{investor.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestorTable;

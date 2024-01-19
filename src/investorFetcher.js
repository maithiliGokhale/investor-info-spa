// InvestorFetcher.js
import React, { useState, useEffect } from 'react';
import { fetchInvestors } from './api';
import InvestorTable from './investorTable';

const InvestorFetcher = () => {
  const [investors, setInvestors] = useState([]); // Set initial state to null
  //let investors2;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInvestors();
        console.log('Fetched data:', data);
        setInvestors(data);
        console.log('Updated investors state:', investors);
        //console.log(JSON.stringify(data, null, 2));
        //console.log(investors2)
        //investors = data
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
      }
    };

    fetchData();
  }, []);

  //console.log("investor table....")
  //console.log(investors)
  console.log("investor table string....")
  //console.log(JSON.stringify(investors, null, 2));
  return (
    <div>
      <InvestorTable investors={investors} />
    </div>
  );
};

export default InvestorFetcher;

import React from 'react';
import { useParams } from 'react-router-dom';

const InvestorDetails = () => {
  const { firmID } = useParams();


  return (
    <div>
      <h2>Investor Details for {firmID}</h2>
      {/* Display other details here */}
    </div>
  );
};

export default InvestorDetails;

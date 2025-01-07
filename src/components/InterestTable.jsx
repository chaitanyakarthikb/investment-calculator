import React from "react";
import './InterestTable.css';
const InterestTable = ({initialInvestment,duration,annualInvestment,expectedReturn,calculate}) => {
  


    function calculateInvestmentBreakdown(initialInvestment, annualInvestment, expectedReturn, duration) {
        // Array to store the investment data for each year
        let investmentData = [];
      
        // Initial values
        let previousInvestmentValue = initialInvestment;
        let totalInterest = 0;
      
        // Loop through each year and calculate the values
        for (let t = 1; t <= duration; t++) {
          // Calculate the investment value at the end of year t
          let investmentValue = initialInvestment * Math.pow(1 + expectedReturn / 100, t) 
                                + (annualInvestment * (Math.pow(1 + expectedReturn / 100, t) - 1) / (expectedReturn / 100));
      
          // Calculate the interest for the current year
          let interest = investmentValue - previousInvestmentValue;
          totalInterest += interest;
      
          // Calculate the invested capital for the current year
          let investedCapital = initialInvestment + annualInvestment * t;
      
          // Store the calculated values in the investmentData array
          investmentData.push({
            year: t,
            investmentValue: investmentValue,
            interest: interest,
            totalInterest: totalInterest,
            investedCapital: investedCapital,
          });
      
          // Update the previous investment value for the next iteration
          previousInvestmentValue = investmentValue;
        }
      
        // Return the investment data array
        return investmentData;
      }

      let investmentData;

      
      if(calculate){

         investmentData = calculateInvestmentBreakdown(initialInvestment,annualInvestment,expectedReturn,duration)

      }


     



  return (
    <div className="investment-table">
      <h2 className="heading">Investment Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentData?.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.investmentValue}</td>
              <td>{data.interest}</td>
              <td>{data.totalInterest}</td>
              <td>{data.investedCapital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterestTable;

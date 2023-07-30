import React, { useState } from "react";
import Header from "./Components/Header/Header";
import InvestmentForm from "./Components/Form/InvestmentForm";
import Table from "./Components/Table/Table";

function App() {
  const [results, setResults] = useState(null);
  const [otpInvestment, setOtpInvestment] = useState("");

  const initialSavings = (currentSavings) => {
    setOtpInvestment(currentSavings);
  };

  const CalculationHandler = (userInput) => {
    const yearlyData = []; // per-year results

    if (userInput) {
      let currentSavings = +userInput["savings"];
      const yearlyContribution = +userInput["yearlyContribution"];
      const expectedReturn = +userInput["interest"] / 100;
      const duration = +userInput["duration"];

      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
    }

    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm
        onSaveInvestment={CalculationHandler}
        onInitialSavings={initialSavings}
      />
      {!results && <p style={{ textAlign: "center" }}>No User Input Yet.</p>}
      {results && (
        <Table
          data={results}
          onInitialSavings={initialSavings}
          initialInvestment={otpInvestment}
        />
      )}
    </div>
  );
}

export default App;

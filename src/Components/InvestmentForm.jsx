import React, { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (Event) => {
    setCurrentSavings(Event.target.value);
  };

  const yearlySavingsHandler = (Event) => {
    setYearlySavings(Event.target.value);
  };

  const expectedInterestHandler = (Event) => {
    setExpectedInterest(Event.target.value);
  };

  const investmentDurationHandler = (Event) => {
    setInvestmentDuration(Event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userInput = {
      savings: currentSavings,
      yearlyContribution: yearlySavings,
      interest: expectedInterest,
      duration: investmentDuration,
    };
    props.onSaveInvestment(userInput);
    props.onInitialSavings(userInput["savings"]);

    setCurrentSavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
    setYearlySavings("");
  };

  const resetHandler = () => {
    setCurrentSavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
    setYearlySavings("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
            value={yearlySavings}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedInterestHandler}
            value={expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={investmentDurationHandler}
            value={investmentDuration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;

import InputGroup from "./components/InputGroup";
import CalculatedResult from "./components/CalculatedResult";
import { calculateInvestmentResults, formatter } from "./util/investment.js";
import { useState } from "react";

function App() {
  const [result, setResult] = useState([]);
  function calculateInvestmentResult(inputValues) {
    setResult(
      calculateInvestmentResults(
        inputValues[0].value,
        inputValues[1].value,
        inputValues[2].value,
        inputValues[3].value
      )
    );
  }

  return (
    <>
      <InputGroup setResult={calculateInvestmentResult} />
      <CalculatedResult result={result} formatter={formatter} />
    </>
  );
}

export default App;

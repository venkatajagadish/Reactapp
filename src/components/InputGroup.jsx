import appImg from "./../assets/investment-calculator-logo.png";
import Input from "./Input.jsx";
import { useState } from "react";

export default function InputGroup({ setResult }) {
  const [inputState, setInputState] = useState([
    { inputType: "initial", value: 15000, inputLabel: "Initial Investment" },
    { inputType: "annual", value: 900, inputLabel: "Annual Investment" },
    { inputType: "expected", value: 5.56, inputLabel: "Expected Return" },
    { inputType: "duration", value: 10, inputLabel: "Duration(Years)" },
  ]);
  function InputStateHandler(inputType, inputValue) {
    setInputState((prevState) => {
      var stateCopy = [
        ...prevState.map((item) => {
          return { ...item };
        }),
      ];
      return stateCopy.map((input) => {
        if (input.inputType === inputType) {
          input.value = inputValue;
        }
        return input;
      });
    });
  }
  return (
    <div id="header">
      <h1>Investment Calculator</h1>
      <img src={appImg} alt="moneyLogo" />
      <div className="input-group">
        {inputState.map((input) => {
          return (
            <Input
              key={input.inputType}
              inputType={input.inputType}
              inputValue={input.value}
              inputStateHandler={InputStateHandler}
            >
              {input.inputLabel}
            </Input>
          );
        })}
      </div>
      <button onClick={() => setResult(inputState)}>Calculate</button>
    </div>
  );
}

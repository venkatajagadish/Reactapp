import appImg from "./../assets/investment-calculator-logo.png";
import Input from "./Input.jsx";
import { useState } from "react";

export default function InputGroup() {
  const [inputState, setInputState] = useState([
    { inputField: "initial", value: 15000, inputLabel: "Initial Investment" },
    { inputField: "annual", value: 900, inputLabel: "Annual Investment" },
    { inputField: "expected", value: 5.56, inputLabel: "Expected Return" },
    { inputField: "duration", value: 10, inputLabel: "Duration(Years)" },
  ]);
  function InputStateHandler(inputType, inputValue) {
    setInputState((prevState) => {
      var stateCopy = [
        ...prevState.map((item) => {
          return { ...item };
        }),
      ];
      return stateCopy.map((input) => {
        if (input.inputField === inputType) {
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
        <Input
          inputType={inputState[0].inputField}
          inputValue={inputState[0].value}
          inputStateHandler={InputStateHandler}
        >
          {inputState[0].inputLabel}
        </Input>
        <Input
          inputType={inputState[1].inputField}
          inputValue={inputState[1].value}
          inputStateHandler={InputStateHandler}
        >
          {inputState[1].inputLabel}
        </Input>
        <Input
          inputType={inputState[2].inputField}
          inputValue={inputState[2].value}
          inputStateHandler={InputStateHandler}
        >
          {inputState[2].inputLabel}
        </Input>
        <Input
          inputType={inputState[3].inputField}
          inputValue={inputState[3].value}
          inputStateHandler={InputStateHandler}
        >
          {inputState[3].inputLabel}
        </Input>
      </div>
      <button>Calculate</button>
    </div>
  );
}

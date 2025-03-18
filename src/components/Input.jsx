import { useState } from "react";
export default function Input({ children, inputValue, inputType }) {
  const [currentValue, setCurrentValue] = useState(inputValue);
  function inputChangeHandler(event) {
    setCurrentValue(event.target.value);
  }
  return (
    <span id="user-input">
      <label htmlFor="investment-input">{children}</label>
      <input
        id="investment-input"
        type="number"
        value={currentValue}
        onChange={inputChangeHandler}
      />
    </span>
  );
}

import { useState } from "react";
export default function Input({
  children,
  inputValue,
  inputType,
  inputStateHandler,
}) {
  const [currentValue, setCurrentValue] = useState(inputValue);
  function inputChangeHandler(event) {
    var currentValue = isNaN(parseFloat(event.target.value))
      ? 0
      : parseFloat(event.target.value);
    setCurrentValue(currentValue);
    inputStateHandler(inputType, currentValue);
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

export default function Input({ children, inputValue }) {
  return (
    <span id="user-input">
      <label htmlFor="investment-input">{children}</label>
      <input id="investment-input" type="number" value={inputValue} />
    </span>
  );
}

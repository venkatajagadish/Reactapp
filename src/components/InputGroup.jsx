import appImg from "./../assets/investment-calculator-logo.png";
import Input from "./Input.jsx";

export default function InputGroup() {
  return (
    <div id="header">
      <h1>Investment Calculator</h1>
      <img src={appImg} alt="moneyLogo" />
      <div className="input-group">
        <Input inputValue={15000}>Initial Investment</Input>
        <Input inputValue={900}>Annual Investment</Input>
        <Input inputValue={5.56}>Expected Return</Input>
        <Input inputValue={10}>Duration</Input>
      </div>
    </div>
  );
}

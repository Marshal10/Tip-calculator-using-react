export default function App() {
  return (
    <div className="App">
      <BillInput>How much was the bill?</BillInput>
      <TipPercentage>How did you like the service?</TipPercentage>
      <TipPercentage>How did your friend like the service?</TipPercentage>
      <Output />
    </div>
  );
}

function BillInput({ children }) {
  return (
    <div className="bill">
      <span>{children}</span>
      <input type="number"></input>
    </div>
  );
}

function TipPercentage({ children }) {
  return (
    <div className="tip">
      <span>{children}</span>
      <select>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return (
    <div className="output">
      <strong>You pay $105 ($100 + $5 tip)</strong>
    </div>
  );
}

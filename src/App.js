import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  return (
    <div className="app">
      <BillInput bill={bill} setBill={setBill}>
        How much was the bill?
      </BillInput>
      <TipPercentage>How did you like the service?</TipPercentage>
      <TipPercentage>How did your friend like the service?</TipPercentage>
      <Output bill={bill} />
      <ResetButton />
    </div>
  );
}

function BillInput({ bill, setBill, children }) {
  return (
    <div className="bill">
      <span>{children}</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill((b) => (b = e.target.value))}
      ></input>
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

function Output({ bill }) {
  return (
    <div className="output">
      <strong>You pay ${bill} ($0 + $0 tip)</strong>
    </div>
  );
}

function ResetButton() {
  return <button>Reset</button>;
}

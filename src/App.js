import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);

  const averageTipPercentage = (tip + tip2) / 2;
  const calculatedTip = (averageTipPercentage / 100) * bill;
  const totalBill = bill + calculatedTip;

  function handleReset() {
    setBill(0);
    setTip(0);
    setTip2(0);
  }

  return (
    <div className="app">
      <BillInput bill={bill} setBill={setBill}>
        How much was the bill?
      </BillInput>
      <TipPercentage tip={tip} setTip={setTip}>
        How did you like the service?
      </TipPercentage>
      <TipPercentage tip={tip2} setTip={setTip2}>
        How did your friend like the service?
      </TipPercentage>
      <Output bill={bill} calculatedTip={calculatedTip} totalBill={totalBill} />
      <ResetButton handleReset={handleReset} />
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
        onChange={(e) => setBill((b) => (b = +e.target.value))}
      ></input>
    </div>
  );
}

function TipPercentage({ tip, setTip, children }) {
  return (
    <div className="tip">
      <span>{children}</span>
      <select
        value={tip}
        onChange={(e) => setTip((t) => (t = +e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, calculatedTip, totalBill }) {
  return (
    <div className="output">
      <strong>
        You pay ${totalBill} (${bill} + ${calculatedTip} tip)
      </strong>
    </div>
  );
}

function ResetButton({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

import { useState } from "react";
import BillInput from "./BillInput";
import TipPercentage from "./TipPercentage";
import Output from "./Output";
import ResetButton from "./ResetButton";

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
      {bill > 0 && (
        <>
          <Output
            bill={bill}
            calculatedTip={calculatedTip}
            totalBill={totalBill}
          />
          <ResetButton handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

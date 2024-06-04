export default function Output({ bill, calculatedTip, totalBill }) {
  return (
    <div className="output">
      <strong>
        You pay ${totalBill} (${bill} + ${calculatedTip} tip)
      </strong>
    </div>
  );
}

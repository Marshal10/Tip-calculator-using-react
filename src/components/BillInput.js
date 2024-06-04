export default function BillInput({ bill, setBill, children }) {
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

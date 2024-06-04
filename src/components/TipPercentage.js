export default function TipPercentage({ tip, setTip, children }) {
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

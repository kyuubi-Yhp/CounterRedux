

export function CounterWidget({
  counter,
  onIncrement,
  onDecrement,
  onObnal
}) {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onObnal}>обнал</button>
    </div>
  )
}
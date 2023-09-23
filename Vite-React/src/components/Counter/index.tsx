import React from 'react'

function Counter() {
  const [count, setCount] = React.useState<number>(0)

  function handleCounter(isIncrement = false) {
    setCount((previousCount) => previousCount + (isIncrement ? +1 : -1))
  }

  return (
    <div>
      <button onClick={handleCounter.bind(null, true)}>Increment</button>
      <p>{count}</p>
      <button onClick={handleCounter.bind(null, false)}>Decrement</button>
    </div>
  )
}

export default Counter

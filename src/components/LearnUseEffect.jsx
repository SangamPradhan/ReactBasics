import React, { useState } from 'react'

const LearnUseEffect = () => {
  const [count, setCount] = React.useState(0)
  const handleCount = () =>{
    setCount(count + 1)
  }

  const [randomNumber, setRandomNumber] = useState(null);
  const generateRandomNumber = () =>{
    const randomNumber = Math.floor(Math.random() * 100);
    setRandomNumber(randomNumber);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increase Count</button>
      <hr />
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}

export default LearnUseEffect

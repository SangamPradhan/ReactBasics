import React from 'react';

const LearnEvent = () => {
    const handleClick1 = (e) =>{
        e.preventDefault()
        console.log("Button Clicked");
    }

    const handleClick2 = (myid) =>{
        console.log("Button Clicked 2", myid);
    }

  return (
    <>
      <button onClick={handleClick1}>Click</button>
      <button onClick={(e) => handleClick2("Again")}>Click 2</button>
    </>
  )
}

export default LearnEvent

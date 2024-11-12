import React, { memo } from 'react';

const GenerateRandomNumber = memo(({ randomNumber,
    generateRandomNumber }) => {

    console.log("Generate Random Number Component Rendered");
    return (
        <>
            <h1>Random Number: {randomNumber}</h1>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </>
    )
})

export default GenerateRandomNumber

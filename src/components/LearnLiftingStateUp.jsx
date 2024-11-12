import React from 'react';

const LearnLiftingStateUp = (props) => {
    const handleClick = (e) =>{
        e.preventDefault();
        let data = "I am Child"
        props.myClick(data)
    }
    return (
    <>
        <button onClick={handleClick}>Click1</button>
    </>
    )
}

export default LearnLiftingStateUp

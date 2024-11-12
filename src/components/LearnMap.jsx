import React from 'react';

const LearnMap = () => {
    const items = ['Apple','Mango','Banana','Orange'];
  return (
    <>
        <ul>
            <li>
                {
                    items.map((items, i) =>
                        <li key={i}>  {items}</li>  
                    )
                }
            </li>
        </ul>
    </>
  )
}

export default LearnMap

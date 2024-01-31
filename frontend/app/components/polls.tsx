'use client'


import { useState } from 'react';

const Poll = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Yes ', count: 0 },
    { id: 2, text: 'No ', count: 0 },
  ]);

  const handleVote = (id:any) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, count: option.count + 1 } : option
      )
    );
  };

  return (
    <div>
      <h2>Vote for your favorite option:</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.text} - {option.count} votes <br/>
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Poll;

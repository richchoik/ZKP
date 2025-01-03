import React from 'react';

const Candidate = ({ candidate, votes, onVote }) => {
  return (
    <div>
      <img src={candidate.image} alt={candidate.name} />
      <h3>{candidate.name}</h3>
      <p>Votes: {votes}</p>
      <button onClick={() => onVote(candidate.id)}>Vote</button>
    </div>
  );
};

export default Candidate;

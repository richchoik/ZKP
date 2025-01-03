import React, { useState } from 'react';
import './App.css';
import CandidateList from './components/CandidateList';
import VoteForm from './components/VoteForm';

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleVote = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleVoteSuccess = () => {
    setSelectedCandidate(null);
  };

  return (
    <div className="App">
      {selectedCandidate ? (
        <VoteForm candidateId={selectedCandidate} onVoteSuccess={handleVoteSuccess} />
      ) : (
        <CandidateList onVote={handleVote} />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Candidate from './Candidate';

const CandidateList = ({ onVote }) => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: 'Huy Béo', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Huy Bùi', image: 'https://via.placeholder.com/150' },
    // Thêm 8 ứng cử viên nữa
  ]);

  const [votes, setVotes] = useState({});

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/votes');
        setVotes(response.data);
      } catch (error) {
        console.error('Error fetching votes:', error);
      }
    };

    fetchVotes();
  }, []);

  return (
    <div>
      {candidates.map(candidate => (
        <Candidate
          key={candidate.id}
          candidate={candidate}
          votes={votes[candidate.id] || 0}
          onVote={onVote}
        />
      ))}
    </div>
  );
};

export default CandidateList;

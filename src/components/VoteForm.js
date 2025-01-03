import React, { useState } from 'react';
import axios from 'axios';

const VoteForm = ({ candidateId, onVoteSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/vote', { candidateId, phoneNumber });
      if (response.status === 200 && response.data.success) {
        setMessage('Vote thành công');
        setTimeout(() => {
          setMessage('');
          onVoteSuccess();
        }, 3000); // 10 giây
      } else {
        setMessage('Bạn đã vote rồi');
        setTimeout(() => {
          setMessage('');
          onVoteSuccess();
        }, 3000); // 10 giây
      }
    } catch (error) {
      console.error('Error voting:', error);
      setMessage('Error voting');
      setTimeout(() => {
        setMessage('');
        onVoteSuccess();
      }, 3000); // 10 giây
    }
  };

  return (
    <div>
      {message ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default VoteForm;

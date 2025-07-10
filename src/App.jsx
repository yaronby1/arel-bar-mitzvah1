import React, { useState } from 'react';
import './App.css';
import inviteImage from './invite.jpg';

function App() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <img src="/invite.jpg" alt="הזמנה" className="invite-image" />

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="כתבו כאן ברכה לאראל :)"
            value={message}
            onChange={handleChange}
          />
          <button type="submit" className="submit">שלח</button>
        </form>
      ) : (
        <p className="thank-you">תודה על הברכה! 🎉</p>
      )}
    </div>
  );
}

export default App;

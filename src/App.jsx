import './App.css';
import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (status) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <img
        src="/invite.jpg"
        alt="הזמנה לבר מצווה של אראל"
        className="invite-image"
      />

      {!submitted ? (
        <>
          <h3>נא אשרו את הגעתכם:</h3>
          <div className="buttons">
            <button onClick={() => setStatus("מגיע")}>מגיע</button>
            <button onClick={() => setStatus("לא מגיע")}>לא מגיע</button>
            <button onClick={() => setStatus("אולי")}>אולי</button>
          </div>
          <textarea
            placeholder="הערות נוספות (מספר משתתפים, מגבלות תזונה וכו')"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <br />
          <button className="submit" onClick={handleSubmit}>שליחה</button>
        </>
      ) : (
        <h3>תודה! סטטוס ההגעה: {status}</h3>
      )}
    </div>
  );
}

export default App;

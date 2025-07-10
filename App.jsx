import { useState } from "react";
import "./App.css";

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
          <button className="submit" onClick={handleSubmit}>שליחה</button>
        </>
      ) : (
        <p className="thank-you">תודה! ההזמנה התקבלה.</p>
      )}
    </div>
  );
}

export default App;


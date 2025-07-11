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
      {/* כפתורים עליונים */}
      <div className="top-buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSetOdblPGs4B4DVz20TAmqbw_eaCvZ97BxHnN0aNEaeCMNrMA/viewform?usp=dialog" target="_blank" rel="noreferrer">
          <button className="submit">אישור הגעה</button>
        </a>
        <a href="https://waze.com/ul?ll=31.790225,35.090860&navigate=yes" target="_blank" rel="noreferrer">
          <button className="submit">הוראות הגעה בוויז</button>
        </a>
      </div>

      {/* תמונה */}
      <img src="/invite.jpg" alt="הזמנה" className="invite-image" />

      {/* כפתורים תחתונים */}
      <div className="bottom-buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSetOdblPGs4B4DVz20TAmqbw_eaCvZ97BxHnN0aNEaeCMNrMA/viewform?usp=dialog" target="_blank" rel="noreferrer">
          <button className="submit">אישור הגעה</button>
        </a>
        <a href="https://waze.com/ul?ll=31.790225,35.090860&navigate=yes" target="_blank" rel="noreferrer">
          <button className="submit">הוראות הגעה בוויז</button>
        </a>
      </div>

      {/* אפשרות לשמור סטטוס אם תרצה בעתיד */}
      {!submitted ? (
        <>
          <div className="buttons" style={{ display: "none" }}>
            <button onClick={() => setStatus("מגיע")}>מגיע</button>
            <button onClick={() => setStatus("לא מגיע")}>לא מגיע</button>
            <button onClick={() => setStatus("אולי")}>אולי</button>
          </div>
          <textarea
            style={{ display: "none" }}
            placeholder="הערות נוספות"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button
            className="submit"
            onClick={handleSubmit}
            style={{ display: "none" }}
          >
            שליחה
          </button>
        </>
      ) : (
        <p className="thank-you">תודה! ההזמנה התקבלה.</p>
      )}
    </div>
  );
}

export default App;

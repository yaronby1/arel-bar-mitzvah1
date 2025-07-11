import { useState } from "react";
import "./App.css";

function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container">
      {/* תמונה מתוך תיקיית public */}
      <img src="/invite.jpg" alt="הזמנה" className="invite-image" />

      {/* כפתורים עליונים */}
      <div className="top-buttons">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSetOdblPGs4B4DVz20TAmqbw_eaCvZ97BxHnN0aNEaeCMNrMA/viewform?usp=dialog"
          target="_blank"
          rel="noreferrer"
        >
          <button className="submit">לטופס אישור הגעה</button>
        </a>
        <a
          href="https://waze.com/ul?ll=31.794639,35.088424&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="submit">הוראות הגעה בוויז</button>
        </a>
      </div>

      {/* תודה לאחר שליחה */}
      {submitted && <p className="thank-you">תודה! ההזמנה התקבלה.</p>}

      {/* כפתורים תחתונים */}
      <div className="bottom-buttons">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSetOdblPGs4B4DVz20TAmqbw_eaCvZ97BxHnN0aNEaeCMNrMA/viewform?usp=dialog"
          target="_blank"
          rel="noreferrer"
        >
          <button className="submit">לטופס אישור הגעה</button>
        </a>
        <a
          href="https://waze.com/ul?ll=31.794639,35.088424&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="submit">הוראות הגעה בוויז</button>
        </a>
      </div>
    </div>
  );
}

export default App;

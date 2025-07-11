import "./App.css";

function App() {
  return (
    <div className="container">
      {/* כפתורים עליונים */}
      <div className="top-buttons">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSetOdblPGs4B4DVz20TAmqbw_eaCvZ97BxHnN0aNEaeCMNrMA/viewform?usp=dialog"
          target="_blank"
          rel="noreferrer"
        >
          <button className="action-button">לטופס אישור הגעה</button>
        </a>
        <a
          href="https://waze.com/ul?ll=31.7977,35.1042&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="action-button">הוראות הגעה בוויז</button>
        </a>
      </div>

      {/* הזמנה */}
      <img src="/invite.jpg" alt="הזמנה" className="invite-image" />

      {/* כפתורים תחתונים */}
      <div className="bottom-buttons">
        <a
          href="https://forms.gle/xxxxxxxxxxxx"
          target="_blank"
          rel="noreferrer"
        >
          <button className="action-button">לטופס אישור הגעה</button>
        </a>
        <a
          href="https://waze.com/ul?ll=31.7977,35.1042&navigate=yes"
          target="_blank"
          rel="noreferrer"
        >
          <button className="action-button">הוראות הגעה בוויז</button>
        </a>
      </div>
    </div>
  );
}

export default App;
